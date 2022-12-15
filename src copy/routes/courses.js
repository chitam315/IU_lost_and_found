const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

//Parse body when use POST method
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const coursesController = require('../app/controllers/CoursesController')

router.post('/store', urlencodedParser , coursesController.store)

router.get('/create',coursesController.create)

router.put('/:id' , urlencodedParser , coursesController.update)

router.delete('/:id' , coursesController.delete)

router.get('/:id/edit',coursesController.courseEdit)

router.get('/:slug',coursesController.show)

router.get('/',coursesController.index)

module.exports = router;
