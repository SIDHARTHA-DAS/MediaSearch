import { useDispatch, useSelector } from "react-redux"
import { setActiveTabs } from "../features/searchSlice"


const Tabs = () => {
  const tabs = ['photos','videos']

 const dispatch =  useDispatch()
 const activeTab = useSelector((state)=> state.search.activeTab)
  return (
    <div className="flex gap-5 p-10 px-14">
      {
        tabs.map((elem,idx)=>{
          return <button className={`${(activeTab==elem? "bg-green-800" : "bg-gray-500")} bg-gray-600 px-5 py-2 rounded text-uppercase cursor-pointer active:scale-95`} key={idx} onClick={()=>{
            dispatch(setActiveTabs(elem))
          }}>{elem}</button>
        })
      }
    </div>
  )
}

export default Tabs
