import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MothersDay from "./MothersDay";
import PersonPage from "./PersonPage";

export default function App() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    const audio = audioRef.current;
    audio.volume = 0.5;
    audio.play();
    setStarted(true);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/square---beautiful-onyinye-official-video-ft-rick-ross.mp3"
        loop
      />

      {!started && (
        <div
          onClick={handleStart}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(255, 182, 193, 0.92)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
          }}
        >
          <div style={{ fontSize: "60px", marginBottom: "20px" }}>🌸</div>
          <h2
            style={{
              fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
              fontSize: "48px",
              color: "#c2185b",
              margin: "0 0 12px 0",
            }}
          >
            Happy Mothers' Day
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#7a3b2a",
              fontFamily: "Georgia, serif",
            }}
          >
            Click anywhere to enter ✨
          </p>
        </div>
      )}

      <Routes>
        <Route path="/" element={<MothersDay />} />
        <Route path="/person/:id" element={<PersonPage />} />
      </Routes>
    </>
  );
}
