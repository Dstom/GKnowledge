const lessonsController = {};

const Lesson = require('../models/Lesson');
const User = require('../models/User');
const Deck = require('../models/Deck');
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
/**
 * Obtener clase por id
 * @route GET /api/lessons/:id
 * @param id lesson._id de la clase
 */
lessonsController.getMyLesson = async (req, res) =>{ 
    const lesson = await Lesson.findById(req.params.id).populate('owner', ['name', 'lastname']);
    console.log("my Lesson: ", lesson);
    res.json(lesson);
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
/**
 * @route POST /api/lessons/:id/decks
 * @param _id relacion de deck con una clase
 * @param name nombre de la deck
 * @param objective objetivo de la deck
 */

lessonsController.addDeck = async (req, res) => {

    const { name, objective } = req.body;

    const newDeck = new Deck({
        name,
        objective
    });

    newDeck.save();

    // agregamos la deck a la clase indicada
    const lessonFinded = await Lesson.findById(req.params.id);
    lessonFinded.decks.push(newDeck._id);
    await lessonFinded.save();

    res.json(newDeck);

}

module.exports = lessonsController;