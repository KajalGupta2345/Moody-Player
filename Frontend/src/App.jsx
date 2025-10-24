import { useState } from "react";
import FacialExpression from "./Components/FacialExpression"
import MoodSongs from "./Components/MoodSongs"

const App = () => {
  const [songs, setSongs] = useState([]);
  // console.log(songs);
  
  return (
    <div className="bg-gray-900 w-screen min-h-screen gap-12 flex flex-col items-start py-6 px-15">
      <div className="flex gap-3">
        <i className="ri-stack-fill text-lg md:text-xl text-white"></i>
      <span className="text-white text-lg md:text-xl">Moody Player</span>
      </div>
    <FacialExpression setSongs={setSongs}/>
    <MoodSongs songs={songs}/>
    </div>
  )
}

export default App
