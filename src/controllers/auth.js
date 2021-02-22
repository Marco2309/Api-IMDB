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
    return error(
      req,
      res,
      "Credenciales incorrectas",
      401,
      "Las credenciales son incorrectas"
    );
  } catch (e) {
    error(req, res, e, 400);
  }
};

export const signup = async (req, res) => {
  res.send("Server Run signup");
};

export const resetPassword = async (req, res) => {
  res.send("Server Run resetPassword");
};

export const updatePassword = async (req, res) => {
  res.send("Server Run updatePassword");
};

export const users = async (req, res) => {
  res.send("Server Run users");
};

export const roles = async (req, res) => {
  res.send("Server Run roles");
};

export const roleId = async (req, res) => {
  res.send("Server Run roleId");
};
