const Courses = require('../model/Course')
const mongooseHandler = require('../../util/mongoose')

class CoursesController{
    //[GET] /course/:slug
    show(req,res,next){
        Courses.findOne({slug : req.params.slug})
            .then((course) => {
                res.render('courses/show',{
                    course: mongooseHandler.mongooseToObject(course)
                })
            })
    }

    //[GET] /courses
    index(req,res,next){
        Courses.find({})
            .then(courses => {
                res.render('courses',{
                    courses: mongooseHandler.multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    //[GET] course/create
    create(req,res,next){
         res.render('courses/create')
    }

    //[POST] courses/store
    store(req,res,next){
        var formBody = req.body
        formBody.image = `https://i.ytimg.com/vi/${req.body.videoID}/hq720.jpg`
        const course = new Courses(formBody);
        course.save((err) => {
            if(err) {console.log('LỖI R')}
            else{
                res.redirect('/courses')
            }
        });
    }

    //[GET] courses/:id/edit
    courseEdit(req,res,next){
        Courses.findById(req.params.id)
            .then(course => {
                res.render('courses/edit',{
                    course: mongooseHandler.mongooseToObject(course)
                })
            })
            .catch(next)
    }
}

module.exports = new CoursesController