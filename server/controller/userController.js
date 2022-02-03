import User from "../module/userScema.js";

const uploadImage = (file) => {
  // filename generage
  const fileName = Date.now() + "." + file.name.split(".")[1];
  // move the file with new file name
  file.mv("./upload/" + fileName);
  return fileName;
};

//Request get All Users
export const getUser = async (req, res) => {
  try {
    let user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Request get Add User
export const addUser = async (req, res) => {
  let fileNew = "";
  if (req.files) {
    fileNew = uploadImage(req.files.image);
  }
  const user = { ...req.body, image: fileNew };
  // console.log(user);
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  let id = req.params.id;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Request get Ediit User
export const editUser = async (req, res) => {
  let fileNew = "";
  if (req.files) {
    fileNew = uploadImage(req.files.image);
  }
  // let id = req.params.id;

  const user = { ...req.body, image: fileNew };
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(200).json(editUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Request get Delete User
export const deleteUser = async (req, res) => {
  // let id = req.params.id;

  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json("user Deleted Successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
