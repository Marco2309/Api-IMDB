import { Users, UserRoles } from "../models/";
import withoutPassword from "../middlewares/withoutPass";

// Obtener todos los usuarios de la base de datos (protegida)
export const users = async (req, res) => {
  try {
    const users = await Users.findAll();
    const userObj = users.map((user) => {
      return withoutPassword(user);
    });
    res.status(200).json(userObj);
  } catch (error) {
    console.log("[Error] ==> en users: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};

// Obtener usuario por id
export const user = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findByPk(id);
    res.status(200).json(withoutPassword(user));
  } catch (error) {
    console.log("[Error] ==> en user: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};

// Agregar usuario
export const addUser = async (req, res) => {
  res.send("Server Run users");
};

// Agregar un rol para un usuario
export const roleForUser = async (req, res) => {
  try {
    const { userID, rolesID } = req.params;
    const userRole = await UserRoles.create({
      userId: userID,
      roleId: rolesID,
    });
    res.status(200).json(userRole);
  } catch (error) {
    console.log("[Error] ==> en roleForUser: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};

// actualizar usuario
export const updateUser = async (req, res) => {
  try {
    const iD = req.params.id;
    const queryId = { where: { id: iD } };
    const updateUser = await Users.update(req.body, queryId);
    res.status(200).json(updateUser);
  } catch (error) {
    console.log("[Error] ==> en updateUser: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const userDelete = await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(userDelete);
  } catch (error) {
    console.log("[Error] ==> en deleteUser: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};
