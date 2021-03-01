import { generateJWT, validateJWT } from "../middlewares/jwt";
import bcryptjs from "bcrypt";
import { Users } from "../models/";

export const defaultt = async (req, res) => {
  res.send("Server Run successfully");
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    const valid = bcryptjs.compareSync(password, user.password);
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
    let thereIsUser = false;
    const { email, password} = req.body;
    const user = await Users.findOne({ where: { email: email } });
    user ? (thereIsUser = false) : (thereIsUser = true);
    if (thereIsUser) {
      const hash = await bcryptjs.hashSync(password, 10);
      req.body.password = hash;
      const userCreated = await Users.create(req.body);
      userCreated.password = '****'
      res.status(201).json(userCreated);
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
  res.send("Server Run resetPassword");
};

// Actualizar un usuario basado en el token UUID
export const updatePassword = async (req, res) => {
  res.send("Server Run updatePassword");
};
