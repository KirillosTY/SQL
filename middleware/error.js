

const errorHandler = (error, status)=> {
    const err = new Error(error)
    err.status = status
    throw err;
    

}

const error = ((err, req, res, next) => {
  console.error(err.stack);
  if(!err.status){
    err.status = 500
  }
  res.status(err.status).json({ message: err.message });
});


module.exports = {
    errorHandler,
    error
}