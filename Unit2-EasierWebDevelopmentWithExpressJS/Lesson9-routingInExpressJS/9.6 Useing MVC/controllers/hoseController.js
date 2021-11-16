/*
* controller 用来处理和 models 连接的 data, 执行代码逻辑, 调用服务器响应中渲染的页面。
* */
exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};
