const lessonsController = {};

const Lesson = require('../models/Lesson');
const User = require('../models/User');
//const LessonSubscription = require('../models/LessonSubscription');

/**
 * 
 */
lessonsController.getLessonsById = async (req, res) => {
    const lessons = await Lesson.findById(req.params.id).populate('user');
    res.json(lessons);
}

/** 
 * Devuelve todas las clases, las cuales estoy suscrito para continuar
 * estudiando
 * @param req.params.id --> userId, el id del usuario para consultar sus clases suscritas
 * @returns todas las clases suscritas pertenecientes al userId
 */
lessonsController.getMyLessons = async (req, res) => {

    const myLessons = await User.findById(owner).populate('lessons', ['name']);
    res.json(myLessons);
}

/**
 * Crear una nueva clase 
 * @route POST /api/lessons
 * @param name nombre de la clase
 * @param owner usuario creador de la clase
 * @param categorie categoria a la cual pertenece esta clase
 */
lessonsController.createMyLesson = async (req, res) => {

    const { name, owner } = req.body;
    const newLesson = new Lesson({
        name,
        owner        
    });

    newLesson.users.push(owner);    
    await newLesson.save();

    // Add lesson to User lessons
    const userFinded = await User.findById(owner);
    userFinded.lessons.push(newLesson._id);
    await userFinded.save();

    res.json(newLesson);   


}

lessonsController.getLesson = async (req, res) =>{ 
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json(note);
};

lessonsController.getLessons = async (req, res) => {
   const lessons = await Lesson.find();  
   res.json(lessons);
};

lessonsController.updateLesson = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id},{
        title,
        content,
        author
    });
    res.json({message: "Lesson updated"});
}

lessonsController.deleteLesson = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json("Lesson Deleted");
}

module.exports = lessonsController;