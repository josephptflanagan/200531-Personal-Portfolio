const router = require('express').Router();
const projectRoutes = require('./projectRoutes');

//provides a route from this router file to the noteRoutes file
router.use(projectRoutes);

//exports the functionality of the noteRoutes
module.exports = router;