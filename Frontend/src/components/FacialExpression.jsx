import * as faceapi from "face-api.js";
import { useEffect, useRef } from "react";
import axios from "axios";

const FacialExpression = ({setSongs}) => {
  console.log(faceapi);
  const videoRef = useRef();
  // const canvasRef = useRef();
  const href = useRef();

  useEffect(() => {
    // console.log(videoRef.current);
    const loadModels = async () => {
      const model_url = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(model_url);
      await faceapi.nets.faceLandmark68Net.loadFromUri(model_url);
      await faceapi.nets.faceExpressionNet.loadFromUri(model_url);
      console.log("models load successfully");
      startVideo();
    };
    loadModels();
  }, []);

  const startVideo = async () => {
    // console.log(navigator);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    // console.log(stream);
    videoRef.current.srcObject = stream;
  };

  const handleVideoPlay = async() => {
    // console.log(faceapi.detectAllFaces().withFaceLandmarks());
    const displaySize = {
      width: videoRef.current.width,
      height: videoRef.current.height,
    };
    // setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();
      console.log(detections);

      let mostProbableExpression = 0;
      let _expression = "";

      if(detections.length > 0){
        for(let expression in detections[0].expressions){
          let value = detections[0].expressions[expression];
        if(value > mostProbableExpression){
          mostProbableExpression = value;
          _expression = expression;
        }
      }
       const emojiMap = {
        neutral: "😐",
        happy: "😃",
        sad: "😢",
        angry: "😠",
        fearful: "😨",
        disgusted: "🤢",
        surprised: "😲",
      };

      const emoji = emojiMap[_expression] || "😊";
      console.log(`Most probable expression : ${_expression}`);
      href.current.innerHTML = `${_expression} ${emoji}`;
      }else{
        console.log("No face detected ");
        
      }
      axios.get(`http://localhost:3000/songs?mood=${_expression}`) 
      .then((response)=>{
        console.log(response.data);
        setSongs(response.data.song);
      });
      
    //   const canvas = faceapi.createCanvasFromMedia(videoRef.current);
    //   canvasRef.current.innerHTML = "";
    //   canvasRef.current.append(canvas);

    //   faceapi.matchDimensions(canvas, displaySize);

    //   const resizedDetections = faceapi.resizeResults(detections, displaySize);

    //   const ctx = canvas.getContext("2d");
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);

    //   faceapi.draw.drawDetections(canvas,resizedDetections);
    //   faceapi.draw.drawFaceExpressions(canvas,resizedDetections);
    // // }, 2000);
  };

  return (
    <div className="flex relative gap-5 items-center px-20">
    <div className="flex flex-col gap-5 ">
       <h1 className="text-4xl text-white">Live Mood Detection</h1>
      <video
        autoPlay
        muted
        height="300"
        width="400"
        className="rounded shadow-lg object-cover"
        ref={videoRef}
        // onPlay={handleVideoPlay}
      />
    </div>
      {/* <div className="absolute z-10" ref={canvasRef}></div> */}
      <h1 className="text-2xl absolute top-17 left-22 text-gray-700" ref={href}></h1>
      <div className="flex flex-col justify-center font-black font-medium items-start">
        <h1 className="text-2xl text-white mb-3 ">Live Mood Detection</h1>
        <p className="text-base text-white w-80">Your current mood is being analyzed in real-time. Enjoy music tailored to your feelings.</p>
      <button className="text-sm text-white  bg-purple-600 rounded-2xl px-6 py-2 mt-10" onClick={handleVideoPlay}>Start Listening</button>
      </div>
    </div>
  );
};

export default FacialExpression;
