import React, { useState } from "react";

const MoodSongs = ({ songs }) => {
  // console.log(songs);
  const [isplaying, setIsplaying] = useState(null);

  const handlePlayPause = (index) => {
    if (isplaying == index) {
      setIsplaying(null);
    } else {
      setIsplaying(index);
    }
  };

  return (
    <div className="flex flex-col w-full  gap-5 rounded font-black px-20">
      <h2 className="text-3xl text-white font-bold ">Recommended Tracks</h2>
      {songs.map((song, index) => (
        <div
          key={index}
          className="flex justify-between bg-gray-700 px-4 py-4 rounded "
        >
          <div className="flex flex-col ">
            <h3 className="text-lg text-white font-medium">{song.title}</h3>
            <p className="text-sm text-white font-light">{song.artist}</p>
          </div>
          <div className="flex gap-3">
            {isplaying == index && (
              <audio 
                src={song.audio}
                controls
                style={{ display: "none" }}
                autoPlay
              ></audio>
            )}
            <button onClick = {() => handlePlayPause(index)}>
              {isplaying == index ? (
                <i className="ri-pause-circle-line text-white text-3xl mt-2"></i>
              ) : (
                <i className="ri-play-circle-line text-white text-3xl mt-2"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
