export const getAll = async (req, res, next) => {
  try {
    return res.send("student : hit /all");
  } catch (err) {
    next(err);
  }
};
export const getById = async (req, res, next) => {
  try {
    return res.send("student : hit /getbyid");
  } catch (err) {
    next(err);
  }
};
export const create = async (req, res, next) => {
  try {
    return res.send("student : hit /create");
  } catch (err) {
    next(err);
  }
};
export const update = async (req, res, next) => {
  try {
    return res.send("student : hit /update");
  } catch (err) {
    next(err);
  }
};
export const remove = async (req, res, next) => {
  try {
    return res.send("student : hit /remove");
  } catch (err) {
    next(err);
  }
};
