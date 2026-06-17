# Moody Player 🎵

A full-stack, mood-based music web application that detects a user's facial expression in real time through their webcam and recommends music matching their detected mood.

## Overview

Moody Player uses computer vision to analyze a user's facial expression live in the browser, classifies the dominant emotion, and dynamically fetches a curated playlist that matches that mood — no manual input required.

## Features

- **Real-time facial expression detection** using the device webcam, with no images stored or uploaded
- **Live emotion classification** across 7 expressions: happy, sad, angry, neutral, fearful, disgusted, and surprised
- **Mood-to-emoji feedback** that instantly shows the user their detected expression
- **Dynamic music recommendations** fetched from the backend based on the detected mood
- **Responsive UI** with play/pause controls for recommended tracks

## Tech Stack

**Frontend:** React.js, Tailwind CSS, face-api.js, Axios
**Backend:** Node.js, Express.js, MongoDB
**Computer Vision:** face-api.js (built on TensorFlow.js) — TinyFaceDetector, FaceLandmark68Net, and FaceExpressionNet models
**Architecture:** MVC (DB config, models, REST routes, service layer)

## How It Works

1. The app requests webcam access using the browser's MediaDevices API
2. face-api.js loads three pretrained models directly in the browser: a face detector, a facial landmark detector, and an expression classifier
3. On each detection cycle, the app calculates a probability score for each of the 7 supported emotions and selects the one with the highest confidence
4. The detected mood is sent to the backend, which queries MongoDB for songs tagged with that mood
5. The frontend renders the recommended tracks with playback controls

## Project Structure

```
Moody-Player/
├── Backend/
│   └── src/
│       ├── db/          # Database configuration
│       ├── models/      # Data models
│       ├── routes/       # REST API routes
│       ├── service/      # Service layer
│       └── app.js
└── Frontend/
    ├── public/
    └── src/
        ├── components/
        │   ├── FacialExpression.jsx   # Webcam + face-api.js detection logic
        │   └── MoodSongs.jsx          # Music player UI
        └── ...
```

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance (local or hosted)

### Installation

```bash
# Clone the repository
git clone https://github.com/KajalGupta2345/Moody-Player.git

# Install backend dependencies
cd Moody-Player/Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```

### Running the App

```bash
# Start the backend server
cd Backend
npm start

# In a separate terminal, start the frontend
cd Frontend
npm run dev
```

The frontend will request webcam permissions on load — allow access to use mood detection.

## Author

**Kajal Kumari**
[GitHub](https://github.com/KajalGupta2345) · [LinkedIn](https://www.linkedin.com/in/kajal-kumari-357b85253/)
