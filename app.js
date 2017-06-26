const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');


const app = express();

// view engine setup
// tells Express that our view files are in the "views/" folder
//                                                 |
//                                       -----------
//                                       |
app.set('views', path.join(__dirname, 'views'));
// ⇑⇑⇑ (if your folder is called "views/" then this line is optional)

        // imports the "ejs" package and allows us to use EJS view files
app.set('view engine', 'ejs');



// DEFAULT VALUES FOR VIEW VARIABLES ☟☟☟ -------------------------------------

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// -----------------------------------------------------------------------------



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Morgan middleware -> console.logs information about the connection
app.use(logger('dev'));

// POST BODY PARSER RELATED STUFF ↧↧↧ -----------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// STUFF RELATED TO POST BODY PARSING ↥↥↥ -------------------------------------

app.use(cookieParser());

// tells Express that our static files are inside the "public/" folder
app.use(express.static(path.join(__dirname, 'public')));


// LAYOUT RELATED STUFF ⇣⇣⇣ ----------------------------------------------------
// tells Express that we want to use the EJS layouts package in our app
app.use(layouts);
// STUFF RELATED TO LAYOUTS ⇡⇡⇡ ------------------------------------------------



// ROUTES GO HERE ☟☟☟ --------------------------------------------------------

                       // import routes/index.js
const myIndexRoutes = require('./routes/index');
         // |
         // -------   this variable is an object containing all
         //       |   the routes in the routes/index.js file
app.use('/', myIndexRoutes);


                       // import routes/admin-routes.js
const myAdminRoutes = require('./routes/admin-routes.js');
         // |
         // --------   this variable is an object containing all
         //        |   the routes in the routes/admin-routes.js file
app.use('/', myAdminRoutes);

// HERE GO ROUTES ☝︎☝︎☝︎ --------------------------------------------------------



// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
