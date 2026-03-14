import { useState } from "react";
import { useNavigate } from "react-router-dom";

const buttons = [
  {
    id: 1,
    label: "1",
    emoji: "🌸",
    text: "With Love",
    color: "#F48FB1",
    hover: "#F06292",
  },
  {
    id: 2,
    label: "2",
    emoji: "💐",
    text: "You're Amazing",
    color: "#FFB74D",
    hover: "#FFA726",
  },
  {
    id: 3,
    label: "3",
    emoji: "🌷",
    text: "So Grateful",
    color: "#F8A5C2",
    hover: "#F48FB1",
  },
  {
    id: 4,
    label: "4",
    emoji: "✨",
    text: "Best Mom",
    color: "#FF8A65",
    hover: "#FF7043",
  },
];

export default function MothersDay() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "url('/photos/Untitled%20design.png') center/cover no-repeat",
        fontFamily: "'Georgia', serif",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "50px 40px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ position: "relative", marginBottom: "50px" }}>
          <div
            style={{
              position: "absolute",
              inset: "-22px -50px",
              background: "white",
              borderRadius: "12px 28px 16px 24px / 20px 14px 26px 18px",
              boxShadow:
                "0 6px 30px rgba(244,143,177,0.3), 0 2px 10px rgba(0,0,0,0.08)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-14px -38px",
              background: "transparent",
              borderRadius: "10px 22px 12px 20px / 16px 10px 22px 14px",
              border: "2px solid rgba(244,143,177,0.35)",
              zIndex: 0,
            }}
          />
          <h1
            style={{
              fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
              fontSize: "76px",
              color: "#c2185b",
              margin: 0,
              letterSpacing: "2px",
              textShadow: "2px 3px 10px rgba(200,100,100,0.2)",
              fontWeight: 700,
              position: "relative",
              zIndex: 1,
              whiteSpace: "nowrap",
            }}
          >
            Happy Mothers' day
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            gap: "22px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {buttons.map((btn) => {
            const isHovered = hovered === btn.id;
            return (
              <button
                key={btn.id}
                onMouseEnter={() => setHovered(btn.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navigate(`/person/${btn.id}`)}
                style={{
                  width: "170px",
                  height: "58px",
                  background: isHovered ? btn.hover : btn.color,
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: isHovered ? "14px" : "16px",
                  fontFamily: "'Georgia', serif",
                  color: "white",
                  fontWeight: "700",
                  letterSpacing: isHovered ? "0.5px" : "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: isHovered ? "6px" : "0",
                  transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: isHovered
                    ? "translateY(-6px) scale(1.08)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? `0 12px 28px ${btn.color}88, 0 2px 8px rgba(0,0,0,0.15)`
                    : "0 4px 15px rgba(0,0,0,0.15)",
                  outline: "none",
                  textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                {isHovered ? (
                  <>
                    <span style={{ fontSize: "18px" }}>{btn.emoji}</span>
                    <span>{btn.text}</span>
                  </>
                ) : (
                  btn.label
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
