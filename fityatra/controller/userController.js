import userModel from "../models/user.js";

class userController {
  static home = (req, res) => {
    res.render("loginindex");
  };
  static registration = (req, res) => {
    res.render("registration");
  };
  static createUserDoc = async (req, res) => {
    try {
      const doc = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      await doc.save();
      res.redirect("/signin/login");
    } catch (err) {
      console.log(err);
    }
  };

  static login = (req, res) => {
    res.render("login");
  };
  static verification = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email });
      // console.log(result);
      if (result != null) {
        if (result.email == email && result.password == password) {
          res.send(`<h1>your dashboard is loading.....</h1>`);
        } else {
          res.redirect("/signin/registration");
        }
      } else {
        res.redirect("/signin/registration");
      }
    } catch (err) {
      console.log(err);
    }
  };
}
export default userController;
