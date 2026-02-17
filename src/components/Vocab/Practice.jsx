import React from 'react'

const Practice = () => {
  return (
      <div className="">

      <h2 className="text-2xl font-semibold mb-4">
        Practice Vocabulary
      </h2>

      
      <div className="mb-4 font-medium">
        Score: 
      </div>

      
      <div className="border rounded-lg p-6 shadow-md bg-white max-w-md">

        <h3 className="text-xl font-bold mb-4">
          What is the Hindi meaning of:
        </h3>

    

        <input
          type="text"
          placeholder="Type your answer..."
          
          
          className="border p-2 rounded w-full mb-4"
        />

        <div className="flex gap-3">

          <button
            
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Check
          </button>

          <button
            
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            
          </button>

          <button
            
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Next
          </button>

        </div>

        
          <div className="mt-4 text-lg text-gray-700">
            Correct Answer:
          </div>
        

      </div>

    </div>
  )
}

export default Practice