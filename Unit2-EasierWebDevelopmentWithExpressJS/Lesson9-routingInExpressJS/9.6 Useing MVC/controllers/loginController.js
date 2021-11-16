exports.login = function (req, res) {
  const name = req.body.name;
  console.info(req.body.name);
  console.info(req.body.password);
  res.send(`UserName: ${name}`);
};
