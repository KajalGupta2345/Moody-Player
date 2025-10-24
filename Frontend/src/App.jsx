import { useState } from "react";
import FacialExpression from "./Components/FacialExpression"
import MoodSongs from "./Components/MoodSongs"

const App = () => {
  const [songs, setSongs] = useState([]);
  return (
    <div className="bg-gray-800 w-screen min-h-screen gap-12 flex flex-col items-start py-6 px-15">
      <div className="flex gap-3">
        <i class="ri-stack-fill text-xl text-white"></i>
      <span className="text-white text-xl">Moody Player</span>
      </div>
    <FacialExpression setSongs={setSongs}/>
    <MoodSongs songs={songs}/>
    </div>
  )
}

export default App
