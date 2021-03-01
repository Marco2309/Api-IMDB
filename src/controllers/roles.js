import { Roles } from "../models/";
// Obtener Roles
export const getRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.status(200).json({ roles });
  } catch (error) {
    console.log("[Error] ==> en getRoles: ", error);
    res.status(500).json({ message: "Internal error" });
  }
};

// Obtener Roles por ID
export const getRolesId = async (req, res) => {
  try {
    const id = req.params.id;
    const Role = await Roles.findByPk(id);
    res.status(200).json(Role);
  } catch (error) {
    console.log("[Error] ==> en getRolesId: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};

// Agregar un nuevo rol
export const addRoles = async (req, res) => {
  try {
    const roleCreate = await Roles.create(req.body);
    res.status(201).json({ roleCreate });
  } catch (error) {
    console.log("[Error] ==> en addRoles: ", error);
    res.status(500).json({ message: "Internal error" });
  }
};

// Actualizar Role
export const upDateRoles = async (req, res) => {
  try {
    const iD = req.params.id;
    const queryId = { where: { id: iD } };
    const roles = await Roles.update(req.body, queryId);
    res.status(201).json(roles);
  } catch (error) {
    console.log("[Error] ==> en upDateRoles: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};

// Eliminar Role
export const deleteRoles = async (req, res) => {
  try {
    const userDelete = await Roles.destroy({ where: { id: req.params.id } });
    res.status(201).json(userDelete);
  } catch (error) {
    console.log("[Error] ==> en deleteUser: ", error);
    res.status(400).json({ message: "Internal error" });
  }
};
