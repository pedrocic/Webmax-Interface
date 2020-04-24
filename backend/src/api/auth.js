const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");

module.exports = (app) => {
  const login = async (req, res) => {
    if (!req.body.userName || !req.body.password) {
      return res.status(400).json({ error: "Informe usuário e senha!" });
    }

    const user = await app
      .db("users")
      .where({ userName: req.body.userName })
      .whereNull("deletedAt")
      .first();

    if (!user)
      return res.status(400).json({ error: "Usuário não encontrado!" });

    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Usuário ou Senha inválidos!" });

    const now = Math.floor(Date.now() / 1000);

    const payload = {
      id: user.id,
      name: user.name,
      userName: user.userName,
      email: user.email,
      type: user.type,
      iat: now,
      exp: now + 60 * 60 * 24 * 3,
    };

    return res.json({
      ...payload,
      token: jwt.encode(payload, process.env.AUTH_SECRET),
    });
  };

  const validateToken = async (req, res) => {
    const userData = req.body || null;
    try {
      if (userData) {
        const token = jwt.decode(userData.token, process.env.AUTH_SECRET);
        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true);
        }
      }
    } catch (e) {
      // problema com o token
    }

    res.send(false);
  };

  return { login, validateToken };
};
