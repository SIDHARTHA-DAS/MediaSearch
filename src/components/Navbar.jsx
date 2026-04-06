import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <div className='text-center p-5 bg-blue-900 text-2xl'><Link to="/">Media Search</Link></div>
      <div className='gap-10 flex justify-center text-xl'>  
      <Link className='text-xl bg-green-600 m-4 p-2 rounded active:scale-95 font-medium' to={"/"}>Search</Link>
      <Link className='text-xl bg-green-600 m-4 p-2 rounded active:scale-95 font-medium' to={"/collection"}>Collection</Link>
      </div>
    </>
  )
}

export default Navbar
