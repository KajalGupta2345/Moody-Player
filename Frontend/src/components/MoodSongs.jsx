import { useState } from "react";

const MoodSongs = ({ songs }) => {
  const [isPlaying, setIsplaying] = useState(null);

  const handlePlayPause = (index) => {
    if (isPlaying == index) setIsplaying(null);
    else setIsplaying(index);
  };
  return (
    <div className="flex flex-col w-full  gap-5 rounded font-black px-20">
      <h2 className="md:text-3xl text-2xl text-white font-bold ">Recommended Tracks</h2>
      {songs.map((song, index) => (
        <div
          key={index}
          className="flex justify-between bg-gray-700 px-4 py-4 rounded "
        >
          <div className="flex flex-col ">
            <h3 className="md:text-lg text-base text-white font-bold">{song.title}</h3>
            <p className="md:text-sm text-xs text-white font-medium">{song.artist}</p>
          </div>
          <div className="flex ">
            {isPlaying == index && (
            <audio src={song.audio} className="hidden" autoPlay controls></audio>
             )}
            <button onClick={() => handlePlayPause(index)}>
              {isPlaying == index ? (
                <i className="ri-pause-circle-line text-white md:text-3xl text-xl mt-2"></i>
              ) : (
                <i className="ri-play-circle-line text-white md:text-3xl text-xl mt-2"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
