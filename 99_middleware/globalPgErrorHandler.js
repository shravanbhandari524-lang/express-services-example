const handlePgError = (err, req, res, next) => {
  console.log(err.stack);
  var msg = "";
  switch (err.code) {
    case "23505":
      msg = "duplicate fields found";
      break;
    case "23503":
      msg = "field in child table doesnt exist in parent table";
      break;
    case "23502":
      msg = "missing fields";
      break;
    case "23514":
      msg = "voilated column check rule";
      break;
    case "22P02":
      msg = "type voilation";
      break;
    case "22001":
      msg = "string value too long";
      break;
    case "22003":
      msg = "numerical value too long";
      break;
    case "42601":
      msg = "syntax error";
      break;
    case "42P01":
      msg = "table doesnt exist";
      break;
    case "42703":
      msg = "column doesnt exist";
      break;
    case "42501":
      msg = "permision denied for this user";
      break;
    case "08006":
      msg = "db down";
      break;
    case "08001":
      msg = "db down";
      break;
  }
  return res.status(500).json({ sucess: false, data: null, msg: msg });
};
export default handlePgError;
