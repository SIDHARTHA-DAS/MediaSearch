import { useEffect } from "react"
import {fetchPhotos , fetchVideos, fetchGif} from "../api/mediaApi"
import { setLoading, setError, setResults} from "../features/searchSlice"
import {useDispatch, useSelector} from "react-redux"
import ResultCard from "./ResultCard"

const ResultGrid = () => {

  const dispatch =  useDispatch()
 const {query, activeTab, results, loading, error} = useSelector((store)=>store.search)



useEffect(() => {
  const getData = async() =>{
    if(!query) return
  try {
    dispatch(setLoading())
    let data = []
  if(activeTab == "photos"){
   let res = await fetchPhotos(query)
   data = res.results.map((item)=>({
    id:item.id,
    type:"photo",
    title:item.alt_description,
    thumbnail:item.urls.small,
    src:item.urls.full
   }))
  }if(activeTab == "videos"){
    let res=  await fetchVideos(query)
    data =  res.videos.map((item)=>({
    id:item.id,
    type:"video",
    title:item.user.name || "video",
    thumbnail:item.image,
    src:item.video_files[0].link
   }))
  }if (activeTab === "gif") {
  const res = await fetchGif(query);

  data = res.results.map((item) => ({
    id: item.id,
    type: "gif",
    title: item.title || "GIF",
    thumbnail: item.media_formats?.tinygif?.url,
    src: item.media_formats?.gif?.url,
  }));
}
  dispatch(setResults(data))
  } catch (error) {
    dispatch(setError(error.message))
  }
 }
 getData()
}, [query, activeTab,dispatch])

if(error) return <h1>error</h1>
if(loading) return <h1>Loading.....</h1>

  return (
    <div className="flex justify-between  w-full  flex-wrap gap-2 overflow-auto px-10 ">
      {results.map((item, idx)=>{
        return <ResultCard key={idx} item={item}/>
      })}
    </div>
  )
}

export default ResultGrid
