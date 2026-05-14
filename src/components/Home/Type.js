import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Principal Software Engineer",
          "Unity & C# Specialist",
          "Full-Stack Game Developer",
          "Technical Lead",
          "Gameplay Systems Architect",
          "Multiplayer & Realtime Systems Architect",
          "Backend & LiveOps Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
