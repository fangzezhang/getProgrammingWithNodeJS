module.exports = {
  respondWithName(req, res) {
    const name = req.params.myName;
    res.render('index', { name });
  }
};
