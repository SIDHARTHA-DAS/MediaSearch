import  { useState } from 'react'
import {useDispatch} from "react-redux"
import { setQuery } from '../features/searchSlice'

const SearchBar = () => {

  const [text, setText] = useState("")

  const dispatch  = useDispatch()

  const submitHandler = (e) =>{
    e.preventDefault()
    dispatch(setQuery(text))
    setText("")
  }

  const handelinput = (e) =>{
    setText(e.target.value)
  }

  
  return (
    <div>
      <form onSubmit={submitHandler} className='flex py-10 px-14 gap-5 bg-gray-900'>
        <input className='border-2 px-4 py-2 text-2xl rounded outline-none ' required value={text} onChange={handelinput} type="text" placeholder='Search anything.....'/>
        <button className='border-2 px-4 py-2 text-2xl rounded outline-none cursor-pointer active:scale-95' >Search</button>
      </form>
    </div>
  )
}

export default SearchBar
