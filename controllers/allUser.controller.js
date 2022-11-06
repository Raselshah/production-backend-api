const data = require("../data.json");

// users get random user data api sending response
module.exports.getAllUser = (req, res) => {
  let randomNumber = Math.random() * 10;
  const convertRandomNumber = Math.round(randomNumber);
  const randomData = data.filter((d) => d.id == convertRandomNumber);
  res.send(randomData);
};

// users get all user data api sending response
module.exports.getAllUsers = (req, res) => {
  res.send(data);
};

// users post a new user data api sending response
module.exports.saveNewUser = (req, res) => {
  data.push(req.body);
  res.send(data);
};

// users id delete
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const updateData = data.filter((d) => d.id !== Number(id));
  res.send(updateData);
};
