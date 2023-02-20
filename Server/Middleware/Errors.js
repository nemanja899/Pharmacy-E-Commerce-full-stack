const notFound = (err, req, res, next) => {
  if (res.statusCode === 404) {
    const error = new Error(`${err.message}- ${req.originalUrl}`);
    next(error);
  }

  next(err);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statuscode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
