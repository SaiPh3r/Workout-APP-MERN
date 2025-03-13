import React from 'react'
import { useState, useEffect } from 'react'
import WorkoutDetails from './workoutDetails'
import WorkoutForm from './WorkoutForm'

const Home = () => {
    const handleDeleteWorkout = (id) => {
        setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout._id !== id));
      };
    const [workouts, setWorkouts] = useState(null)
    useEffect(() => {
        const fetchWorkouts = async() => {
            const response = await fetch('/api/workouts')
            const data = await response.json()
            if(response.ok) {
                setWorkouts(data)
            }
        }
        fetchWorkouts()
    }, [workouts])

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-10">
            <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">My Workouts</h1>
                
                {!workouts && (
                    <div className="flex justify-center items-center py-12">
                        <div className="w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                        <p className="text-gray-600">Loading workouts...</p>
                    </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workouts && workouts.map((workout) => {
                        return <WorkoutDetails key={workout._id} workout={workout} onDelete={handleDeleteWorkout} />
                    })}
                </div>
                
                {workouts && workouts.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        <p>No workouts found. Add your first workout to get started!</p>
                    </div>
                )}
            </div>
            <WorkoutForm/> 
            
        </div>
    )
}

export default Home
