export const getAll = async (req, res, next) => {
  try {
    return res.send("teacher : hit /all");
  } catch (err) {
    next(err);
  }
};
export const getById = async (req, res, next) => {
  try {
    return res.send("teacher : hit /getbyid");
  } catch (err) {
    next(err);
  }
};
export const create = async (req, res, next) => {
  try {
    return res.send("teacher : hit /create");
  } catch (err) {
    next(err);
  }
};
export const update = async (req, res, next) => {
  try {
    return res.send("teacher : hit /update");
  } catch (err) {
    next(err);
  }
};
export const remove = async (req, res, next) => {
  try {
    return res.send("teacher : hit /remove");
  } catch (err) {
    next(err);
  }
};
