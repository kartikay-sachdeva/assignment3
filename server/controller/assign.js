var express = require('express');
const Assign = require('../models/assign'); 
var router = express.Router();

// CRUD --> Create, Read, Update, Delete

module.exports.displayassignList = async (req, res, next) => {
    try {
        const assignList = await Assign.find();
        res.render('assign/list', {
            title: 'Public',
            assignList: assignList
        });
    } catch (error) {
        console.error(error);
        res.render('assign/list', {
            error: 'Server Error'
        });
    }
}

module.exports.displayAddPage = (req, res, next) => {
    try {
        res.render('assign/add', {
            title: 'Add Assignment'
        });
    } catch (error) {
        console.error(error);
        res.render('assign/list', {
            error: 'Server Error'
        });
    }
}

module.exports.processAddPage = async (req, res, next) => {
    try {
        let newAssign = new Assign({
            "Assignment": req.body.Assignment,
            "Description": req.body.Description,
            "DueDate": req.body.DueDate,
            "Status": req.body.Status,
        });

        await newAssign.save();

        res.redirect('/assignlist'); // Redirect to the assignlist page after adding a assignout
    } catch (error) {
        console.error(error);
        res.render('assign/list', {
            error: 'Server Error'
        });
    }
}

module.exports.displayEditPage = async (req, res, next) => {
    try {
        const assign = await Assign.findById(req.params.id);
        res.render('assign/edit', {
            title: 'Edit Assignment',
            assign: assign
        });
    } catch (error) {
        console.error(error);
        res.render('assign/list', {
            error: 'Server Error'
        });
    }
}

module.exports.processEditPage = async (req, res, next) => {
    try {
        await Assign.findByIdAndUpdate(req.params.id, {
            "Assignment": req.body.Assignment,
            "Description": req.body.Description,
            "DueDate": req.body.DueDate,
            "Status": req.body.Status,
        });

        res.redirect('/assignlist');
    } catch (error) {
        console.error(error);
        res.render('assign/list', {
            error: 'Server Error'
        });
    }
}

module.exports.performDelete = async (req, res, next) => {
    try {
        await Assign.findByIdAndDelete(req.params.id);
        res.redirect('/assignlist');
    } catch (error) {
        console.error(error);
        res.render('assign/list', {
            error: 'Server Error'
        });
    }
}