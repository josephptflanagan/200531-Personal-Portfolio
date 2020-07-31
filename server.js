  
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');

//creates the server port reservation variable
const PORT = process.env.PORT || 3001;

//creates the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// server uses /api to access apiroutes
app.use('/api', apiRoutes);

// server uses / to access htmlroutes
app.use('/', htmlRoutes);

// server allows for use of files stored in public without explicit routes
app.use(express.static('public'));

//server listens on dynamic port, 3001 locally, or 80 on Heroku
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});