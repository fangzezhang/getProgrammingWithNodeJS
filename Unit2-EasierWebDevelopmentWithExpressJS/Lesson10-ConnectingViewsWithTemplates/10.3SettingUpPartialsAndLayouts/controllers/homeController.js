module.exports = {
  respondWithName(req, res) {
    const name = req.params.paramName;
    res.render('index', { name });
  }
};
