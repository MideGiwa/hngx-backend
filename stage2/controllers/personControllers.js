const Person = require('../models/person');


const isString = (str) => {
    if (typeof str !== 'string') return false;
    else return true;
}

const getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find();

        if (!persons) {
            return res.status(200).json({ message: 'There are no persons in the database.' });
        }

        return res.status(201).json(persons);

    } catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const createPerson = async (req, res) => {
    try {
        const personName = req.body.name;


        // Check is param is a string...  
        if (!personName || !isString(personName)) return res.status(400).json({ message: 'Provided input should not be empty and must be a string! Example: Mide Giwa.' });

        const existingUser = await Person.findOne({ personName });
        if (existingUser) return res.status(409).json({ message: "User already exists. Please use another name." });

        const person = await Person.create({ name: personName });

        return res.status(200).json(person);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
}
// Get Person Profile
const getPerson = async (req, res) => {
    try {
        const personId = req.params.user_id;

        // Find the Person by name..
        const person = await Person.findById(personId);

        if (!person) {
            return res.status(404).json({ message: "Person not found." });

        }

        return res.status(200).json(person);
    } catch (err) {
        if (err.name === 'CastError') return res.json({ message: "Invalid user id!" });
        return res.status(500).send("Internal Server Error");
    }
};

// Update Person Profile
const updatePerson = async (req, res) => {
    try {
        const personId = req.params.user_id;
        const updatedProfile = req.body;

        // Update the Person profile in the database
        const person = await Person.findByIdAndUpdate(personId, { ...updatedProfile }, { new: true });
        if (!person) {
            return res.status(404).json({ message: "Person not found." });
        }

        return res.status(200).json(person);
    } catch (err) {
        if (err.name === 'CastError') return res.json({ message: "Invalid user id!" });
        return res.status(500).send("Internal Server Error");
    }
};

// Delete Person Profile
const deletePerson = async (req, res,) => {
    try {
        const personId = req.params.user_id;
        // Delete the Person from the database
        const deletedPerson = await Person.findByIdAndDelete(personId);

        if (!deletedPerson) {
            return res.status(404).json({ message: "Person not found." });
        }

        return res.status(200).json({ message: `${deletedPerson.name} with id ${deletedPerson._id} has been deleted.` });
    } catch (err) {
        if (err.name === 'CastError') return res.json({ message: "Invalid user id!" });
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getAllPersons,
    createPerson,
    getPerson,
    updatePerson,
    deletePerson,
};
