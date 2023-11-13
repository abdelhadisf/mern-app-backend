const express = require('express');
const router = express.Router(); 
const requireAuth = require('../middleware/requireAuth')

const {getWorkouts,postWorkout,getWorkout,deleteWorkout,updatePost} = require('../controllers/workoutController')



// require auth for all workout routes
router.use(requireAuth)
//Gets all workouts 
router.get('/',getWorkouts)

//Gets a single workout 
router.get('/:id',getWorkout)

//create new workout

router.post('/', postWorkout)

//delete single workout
 
router.delete('/:id', deleteWorkout)

//update a single workout

router.patch('/:id',updatePost)



module.exports = router ;