import React from 'react'

const MessageBox = ({message , bar}) => {
  return (
<>
    {message && (    <div className="absolute left-1/2 -translate-x-1/2 top-[10%]
                    shadow-2xl px-4 py-2 rounded-md
                    border bg-white overflow-hidden">
    
      <p className="text-sm font-medium">{message}</p>
    
      <div className="w-full h-[2px] bg-gray-200 mt-2 rounded-sm overflow-hidden">
        {bar &&
        <span className="block h-full bg-blue-500 animate-progress"></span>
        }
      </div>
    
    </div>)}
</>
  )
}

export default MessageBox