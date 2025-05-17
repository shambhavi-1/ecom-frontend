import React from "react";
import "./AuthPage.css";

function Teddy({ eyesClosed }) {
  return (
    <div className="teddy-container">
      <svg width="150" height="150" viewBox="0 0 64 64">
        {/* Face */}
        <circle cx="32" cy="32" r="30" fill="#FFD1DC" />

        {/* Eyes background */}
        <circle cx="22" cy="24" r="6" fill="#fff" />
        <circle cx="42" cy="24" r="6" fill="#fff" />

        {/* Eyes - open or closed */}
        {eyesClosed ? (
          <>
            <line
              x1="19"
              y1="24"
              x2="25"
              y2="24"
              stroke="#000"
              strokeWidth="2"
            />
            <line
              x1="39"
              y1="24"
              x2="45"
              y2="24"
              stroke="#000"
              strokeWidth="2"
            />
          </>
        ) : (
          <>
            <circle cx="22" cy="24" r="2" fill="#000" />
            <circle cx="42" cy="24" r="2" fill="#000" />
          </>
        )}

        {/* Smile */}
        <path
          d="M24 40 Q32 48 40 40"
          stroke="#000"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default Teddy;
