// Id kontrollimise vahevara
const checkIfIdIsNumber = (req, res, next) => {
  const id = Number(req.params.id);
  // console.log(res.locals);
  res.locals.message = 'Id is checked';
  // console.log('ID middleware');
  if (Number.isNaN(id)) {
    return res.status(400).json({
      succes: false,
      message: 'Id must be a number',
    });
  }
  return next();
};

module.exports = checkIfIdIsNumber;
