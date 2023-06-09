const Character = require('../models/Character');

// Create a new character
const createCharacter = async (req, res) => {
    try {
        const characterData = req.body;
        const character = await Character.create(characterData);
        res.status(201).json(character);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create character' });
    }
};

// Get all characters
const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve characters' });
    }
};

// Get a character by ID
const getCharacterById = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findById(id);
        if (!character) {
            return res.status(404).json({ error: 'Character not found' });
        }
        res.json(character);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve character' });
    }
};

// Update a character
const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const characterData = req.body;
        const character = await Character.findByIdAndUpdate(id, characterData, {
            new: true
        });
        if (!character) {
            return res.status(404).json({ error: 'Character not found' });
        }
        res.json(character);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update character' });
    }
};

// Delete a character
const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findByIdAndDelete(id);
        if (!character) {
            return res.status(404).json({ error: 'Character not found' });
        }
        res.json({ message: 'Character deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete character' });
    }
};

module.exports = {
    createCharacter,
    getAllCharacters,
    getCharacterById,
    updateCharacter,
    deleteCharacter
};
