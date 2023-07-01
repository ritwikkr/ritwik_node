async function validation(req, res, next) {
  try {
    // Checking if authorization is present
    const header = req.headers.authorization;
    if (!header) return res.status(400).json("User not authorized");

    // Checking if token is present or not
    const auth = header.split(" ")[1];
    if (!auth) return res.status(400).json("Token Missing");

    // Checking if token is correct
    if (auth !== "123456") return res.status(400).json("Wrong Token Error");

    // Successfully validated
    next();
  } catch (error) {
    res.status(400).json(`Validation Error:${error}`);
  }
}

export default validation;
