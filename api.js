const express = require ('express');
const router = express.Router();

const Todo = require('../Models/todo')

router.get('/todos',(req,res,next) => {
    Todo.find({},'newtodo').then(data => res.json(data)).catch(next)
});

router.post('/todos',(req,res,next) => {
    if(req.body.newtodo){
        Todo.create(req.body).then(data => res.json(data)).catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
})

router.delete('/todos/:id',(req,res,next) => {

})

module.exports = router;