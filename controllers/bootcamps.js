//rout api/v1/bootcamps
//get
exports.getbootcamps = (req, res, next) => {
  res.status(200).json({ seccess: true, data: 'showing the bootcamps' });
};
//post
//rout api/v1/bootcamps
exports.createbootcamp = (req, res, next) => {
  res.status(200).json({ seccess: true, data: 'adding new bootcamp' });
};
//get
//rout api/v1/bootcamps/:id
exports.getbootcamp = (req, res, next) => {
  res.status(200).json({
    seccess: true,
    data: `getting the bootcamp : ${req.params.id}`
  });
};
//put
//rout api/v1/bootcamps/:id
exports.editbootcamp = (req, res, next) => {
  res.status(200).json({
    seccess: true,
    data: `editing a bootcamp : ${req.params.id}`
  });
};
//delete
//rout api/v1/bootcamps/:id
exports.deletebootcamp = (req, res, next) => {
  res.status(200).json({
    seccess: true,
    data: `deleting a bootcamp : ${req.params.id}`
  });
};
