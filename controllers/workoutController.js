const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')


//Get all  workouts 

const getWorkouts = async(req,res) => {
    try{
        const user_id = req.user._id 
        const workout = await Workout.find({user_id}).sort({createdAt: -1})
        res.status(200).json(workout)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}


//create new workout

const postWorkout = async(req,res) => {
    const {title ,reps , load }  = req.body
    const user_id = req.user._id 
    try{
        
        const workout = await Workout.create({title ,reps , load,user_id})

        let emptyField = [] ; 

        if(!title) { emptyField.push('title');}
        
        
        if(!reps) { emptyField.push('reps');}


        if(!load) { emptyField.push('load');}

if(emptyField.length > 0) {
    return res.status(400).json({error:'Please fill in all the fields',emptyField})
}


        res.status(200).json(workout)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
// Get a single workout 

const getWorkout = async (req,res) => {
    const { id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error:'no such workout'
        })
    }

    const workout = await Workout.findById(id) ;

    if(!workout) {
        return res.status(404).json({
            error:'no such workout'
        })

} 
res.status(200).json(workout);
    }


const deleteWorkout = async(req,res) => {
    const { id } = req.params ; 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error:'no such workout'
        })
    }
    
    const workout = await Workout.findByIdAndDelete(id);

    if(!workout) {
        return res.status(404).json({
            error:'no such workout'})
    }
    res.status(200).json(workout);

}

const updatePost = async(req,res) => {
    const { id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error:'no such workout'
        })
    }

    const workout = await Workout.findByIdAndUpdate(id,{...req.body});

    if(!workout) {
        return res.status(404).json({
            error:'no such workout'})
    }
    res.status(200).json(workout);

}



module.exports = {getWorkouts,postWorkout,getWorkout,deleteWorkout,updatePost}