import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection } from '../features/collectionSlice' // ✅ correct import

const ResultCard = ({ item }) => {
  const dispatch = useDispatch()

  const handleAddToCollection = () => {
    dispatch(addCollection(item)) // ✅ redux action
  }

  return (
    <div className='w-[18vw] relative h-80 bg-white rounded'> 
      <div className='h-[70%]'>
        {item.type === "photo" && (
          <img
            className='h-full w-full object-cover object-center'
            src={item.src}
            alt=""
          />
        )}

        {item.type === "video" && (
          <video
            className='h-full w-full object-cover object-center'
            autoPlay
            loop
            muted
            src={item.src}
          />
        )}
      </div>

      <div className='flex justify-between items-center gap-3 w-full px-6 py-6 absolute bottom-0 text-white'> 
        <h2 className='text-xl font-semibold capitalize h-14 overflow-hidden'>
          {item.title}
        </h2>

        <button
          onClick={handleAddToCollection} // ✅ function reference
          className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 font-medium cursor-pointer'
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ResultCard
