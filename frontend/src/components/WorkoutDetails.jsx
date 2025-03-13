import React from 'react'



const WorkoutDetails = ({workout,onDelete}) => {
  const handleClick = async ()=>{
    const response = await fetch(`/api/workouts/${workout._id}`,{
      method:"DELETE"
    });
    if(response.ok){
      onDelete(workout._id)
      
    }


  }


  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-800 mb-3">{workout.title}</h4>
      
      <div className="space-y-2 text-gray-700">
        <p className="flex items-center">
          <strong className="inline-block w-24">Load (kg):</strong>
          <span className="font-medium text-gray-900">{workout.load}</span>
        </p>
        
        <p className="flex items-center">
          <strong className="inline-block w-24">Reps:</strong>
          <span className="font-medium text-gray-900">{workout.reps}</span>
        </p>

        <p className="flex items-center">
          <strong className="inline-block w-24">ID:</strong>
          <span className="font-medium text-gray-900">{workout._id}</span>
        </p>
        
        <p className="flex items-center">
          <strong className="inline-block w-24">Created:</strong>
          <span className="text-gray-600">{workout.createdAt}</span>
        </p>
      </div>
      <button
       onClick={handleClick}
        className="mt-4 w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
        Delete
      </button>
      
    </div>
  )
}

export default WorkoutDetails