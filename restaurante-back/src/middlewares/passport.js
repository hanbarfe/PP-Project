const ppJwt = require("passport-jwt");
const Strategy = ppJwt.Strategy;
const ExtractJwt = ppJwt.ExtractJwt;
const config = require("../../config/config");
const User = require("../models/user.model");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET,
};

module.exports = (passport) => {
  passport.use(
    new Strategy(opts, (payload, done) => {
      User.findById(payload.id)
        .then((user) => {
          if (user) {
            return done(null, {
              id: user.id,
              isAdmin: user.isAdmin,
            });
          }
          return done(null, false);
        })
        .catch((err) => console.error(err));
    })
  );
};
