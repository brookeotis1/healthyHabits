const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../../config/database");
const { User } = require("../../models");

genToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    config.jwt_secret
  );
};

router.post("/register", async function (req, res, next) {
  try {
    if (!req.body.username || !req.body.password) {
      res.json({ success: false, msg: "Please pass username and password." });
    } else {
      var newUser = new User({
        username: req.body.username,
        password: req.body.password,
      });

      newUser.save(function (err) {
        if (err) {
          return res.json({ success: false, msg: "Username already exists." });
        }
        var token = genToken(newUser.toJSON());

        res.json({ success: true, token: token });
      });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/login", async function (req, res, next) {
  try {
    User.findOne(
      {
        username: req.body.username,
      },
      function (err, user) {
        if (err) throw err;

        if (!user) {
          res.status(401).send({
            success: false,
            msg: "Unable to authenticate.",
          });
        } else {
          user.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch && !err) {
              var token = genToken(user.toJSON());

              res.json({ success: true, token: token });
            } else {
              res.status(401).send({
                success: false,
                msg: "Unable to authenticate.",
              });
            }
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get(
  "/secret",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json("Secret Data");
  }
);

module.exports = router;