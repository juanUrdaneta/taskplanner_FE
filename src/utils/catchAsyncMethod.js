const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      return { res: "fail", err: err };
    });
  };
};

export default catchAsync;
