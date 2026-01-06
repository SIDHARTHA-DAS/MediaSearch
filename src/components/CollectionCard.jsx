import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../features/collectionSlice'

const CollectionCard = ({item}) => {

  const dispatch = useDispatch()
  const removefromCollection = (item)=>{
    dispatch(removeCollection(item.id))
  }
  return (
    <div className='w-[18vw] relative h-80 bg-white rounded'> 
    <div className='h-[70%]'>
      {item.type == "photo" ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" />:""}
    {item.type == "video" ? <video className='h-full w-full object-cover object-center'autoPlay loop muted src={item.src} alt="" />:""}
    </div>
     <div id='bottom' className='flex justify-between items-center gap-3 w-full px-6 py-6 absolute bottom-0 text-white'> 
      <h2 className='text-xl font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
      <button onClick={()=>removefromCollection(item)} className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'>Remove</button>
     </div>
    </div>
  )
}

export default CollectionCard
