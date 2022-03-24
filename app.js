'use strict';
import express  from 'express';
import catRoute from './routes/catRoute'
import userRoute from './routes/userRoute'
import authRoute from './routes/authRoute'
//import session from 'express-session'
import db from './utils/db';
import passport from './utils/pass';
import cors from 'cors'
const app = express();
const port = 3000;

/*
app.use(session({
  secret: 'zrferogevé(à)',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
*/
/*
const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(403).json({message: 'Please log in'});
  }
};
*/

app.use(passport.initialize());
//app.use(passport.session());

app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
app.use('/', (req, res) => {
  res.send("Hello world!")
})
app.use('/cat'/*, passport.authenticate('jwt', {session: false})*/, catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute)
app.use('/auth', authRoute)

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

db.on('connected', () => {
  app.listen(port, () => { console.log(`app listen on port ${port}`); });
});
