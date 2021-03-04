import { generateJWT } from "../utils/jwt";
import bcryptjs from "bcrypt";
import { Users, ResetTokens } from "../models/";
import withoutPassword from "../middlewares/withoutPass";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import sendEmail from "../utils/nodemailer";
import { Op } from "sequelize";

export const defaultt = async (req, res) => {
  res.send("Server Run successfully");
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await Users.findOne({ where: { email: email } });
    const valid = bcryptjs.compareSync(password, user.password);
    user = withoutPassword(user);
    if (user && valid) {
      const token = generateJWT(user);
      return res.status(200).json({
        message: "Has iniciado sesión correctamente",
        token,
        userDetails: {
          user,
        },
      });
    }
    console.log("[Error] ==> Credenciales Incorrectas");
    return res.status(401).json({
      message: "Las credenciales son incorrectas",
    });
  } catch (e) {
    console.log("[Error] ==> en Login: ", e);
    res.status(401).json({
      message: "Internal error",
    });
  }
};

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await bcryptjs.hashSync(password, 10);
    req.body.password = hash;
    const user = await Users.findOrCreate({
      defaults: req.body,
      where: { email },
    });
    if (user[1]) {
      res.status(201).json(withoutPassword(user[0]));
    } else {
      console.log("[Error] ==> Usuario ya existe");
      res.status(400).json({ message: "Este email ya esta registrado" });
    }
  } catch (error) {
    console.log("[Error] ==> en SignUp: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};

// Creará un nuevo “token” UUID en la tabla ResetTokens
export const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const msg =
      "Se te enviará un correo electronico para restablecer la contraseña";
    const user = await Users.findOne({ where: { email } });
    if (user) {
      const userID = user.id;
      const tokenUUID = uuidv4();
      const resetTokenObj = {
        token: tokenUUID,
        expirationDate: moment().add(1, "d"),
        userId: userID,
        active: true,
      };
      await ResetTokens.create(resetTokenObj);
      sendEmail(user.email, tokenUUID, userID);
      res.status(200).json({ message: msg });
    } else {
      return res.status(200).json({ message: msg });
    }
  } catch (error) {
    console.log("[Error] ==> en resetPassword: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};

// Actualizar un usuario basado en el token UUID
export const updatePassword = async (req, res) => {
  try {
    const { token, userId, password } = req.body;
    const tokenObj = await ResetTokens.findOne({
      where: {
        token,
        [Op.and]: {
          userId,
        },
      },
    });
    if (tokenObj) {
      const validToken = moment().isBefore(tokenObj.expirationDate);
      if (tokenObj.active && validToken) {
        const hashPassword = bcryptjs.hashSync(password, 10);
        await Users.update(
          { password: hashPassword },
          { where: { id: tokenObj.userId } }
        );
        //Cambiar el estatus del token a false
        await ResetTokens.update(
          { active: false },
          { where: { id: tokenObj.id } }
        );
        res.status(200).json({
          message: "Se ha restablecido tu contraseña",
        });
      } else {
        res.status(403).json({
          message: "El token es invalido o ya expiro",
        });
      }
    } else {
      res.status(403).json({
        message: "El token es invalido o ya expiro",
      });
    }
  } catch (error) {
    console.log("[Error] ==> en updatePassword: ", error);
    res.status(500).json({ message: "Internal error" });
  }
};
