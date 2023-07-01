function errorHandler(err, req, res) {
  try {
    res.status(200).json(`No such route exist: ${err}`);
  } catch (error) {
    res.status(400).json(error);
  }
}

export default errorHandler;
