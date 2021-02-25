import jwt from "jsonwebtoken";

//generar un token JWT en base al usuario que ha iniciado sesion
export const generateJWT = (user) => {
  const userObj = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
  const token = jwt.sign(userObj, process.env.SECRET_KEY, {
    algorithm: "HS384",
    expiresIn: "1h",
  });
  return token;
};

//Validar el token
export const validateJWT = (req, res) => {
  const bearerToken = req.headers["authorization"];
  if (!bearerToken) {
    console.log("[Error] ==> No token provided");
    res.status(403).json({
      message: "No token provided",
    });
  }
  const token = bearerToken.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, decodif) => {
    if (err) {
      console.log("[Error] ==> Error in JWT");
      res.status(401).json({
        message: "Internal Error",
      });
      return false;
    }
    return decodif;
  });
  return decoded;
};
