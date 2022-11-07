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
  const { limit, page } = req.query;
  res.send(data.slice(0, limit));
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

// user id with user information update

module.exports.updateAUser = (req, res) => {
  let randomNumber = Math.random() * 10;
  const convertRandomNumber = Math.round(randomNumber);
  const randomData = data.filter((d) => d.id === convertRandomNumber);
  const { name, gender, contact, address, photoUrl } = req.body;

  updateDoc = {
    id: convertRandomNumber,
    name: name,
    gender: gender,
    contact: contact,
    address: address,
    photoUrl: photoUrl,
  };
  randomData[0] = updateDoc;
  // console.log((randomData[0] = updateDoc));
  res.send(randomData);
};
