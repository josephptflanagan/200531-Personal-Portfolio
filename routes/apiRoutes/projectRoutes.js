const router = require('express').Router();
const { projects } = require('../../data/projects.json');
const { createNewProject, deleteProject, findIndexById } = require('../../lib/Project');

//gets the database and returns it
router.get('/projects', (req, res) => {

    let results = projects;
    res.json(results);

});

//takes user input, passes it to the Note.js file which creates a new project object, this then passes that new object on the database
router.post('/projects', (req, res)=>{

    //makes sure the id for each project is unique
    let highestID = projects[projects.length-1].id;

    //gives the user provided data its unique id
    req.body.id = (parseInt(highestID) + 1).toString();

    //creates the new project
    const project = createNewProject(req.body, projects);

    //passes the new project to the database
    res.json(project);

});

//takes the delete button input, finds the index of the item that is to be deleted within the data base based on it's id and deletes that item
router.delete('/projects/:id', (req, res) => {

    let results = projects;

    //finds the index of the item to be deleted by id
    const index = findIndexById(req.params.id, projects);

    //console.log('delete called on index: ',index);

    //checks if there is indeed an item in question
    if (index || index == '0'){
        //deletes the item based on it's index within the database
        deleteProject(index,projects);
        //sends the updated database to the deleter to update the HTML page
        res.json(results);
    } else {
        res.sendStatus(404);
    }

});

//exports these functions to the api router index function
module.exports = router;