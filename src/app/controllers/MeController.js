class MeController{

    //[GET] /me/stored/courses
    storeCourses(req,res,next){
        res.render('me/stored-courses')
    }
}

module.exports = new MeController