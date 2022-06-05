const Courses = require('../model/Course')
const mongooseHandler = require('../../util/mongoose')

class MeController{

    //[GET] /me/stored/courses
    storeCourses(req,res,next){
        Courses.find({})
            .then(courses => {
                res.render('me/stored-courses',{
                    courses: mongooseHandler.multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
}

module.exports = new MeController