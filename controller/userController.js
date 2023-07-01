const user = {
  name: "Arjun",
  age: 30,
  city: "Mumbai",
};

// POST
async function userLogin(req, res) {
  try {
    res.status(200).json("User Login Successfully");
  } catch (error) {
    res.status(400).json(error);
  }
}

// GET
async function userDetails(req, res) {
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}

export { userLogin, userDetails };
