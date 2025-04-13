import React, { useEffect, useRef, useState } from "react";
import LETTER_MAP from "./LetterMap";

const LETTER_WIDTH = 8;
const PATTERN_HEIGHT = 5;
const SPACE_BETWEEN = 2;
const CHAR_RAIN = "K E N C H E N D E B U G G E R".split(" ");
const CHAR_PATTERN = "FULLSTACKDEV".split("");

const LetterRain = () => {
  const canvasRef = useRef();
  const [stateIndex, setStateIndex] = useState(0);
  const modes = ["rain", "KENCHEN", "rain", "FULLSTACKDEV"];
  const mode = modes[stateIndex % modes.length];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.offsetWidth;
    const cssHeight = canvas.offsetHeight;
    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    ctx.scale(dpr, dpr);

    const columns = Math.floor(cssWidth);
    let drops = Array(columns).fill(1);

    const charSet = mode === "FULLSTACKDEV" ? CHAR_PATTERN : CHAR_RAIN;
    const letterSequence = mode === "FULLSTACKDEV" ? "FULLSTACKDEV" : "KENCHEN";
    const letters = letterSequence.split("");
    const patternUnits = letters.length * (LETTER_WIDTH + SPACE_BETWEEN);
    const optimalFontSize = Math.floor(cssWidth / patternUnits);
    const fontSize = Math.max(optimalFontSize, 2);

    let currentRow = 0;
    let animationFrame;

    const drawRain = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, cssWidth, cssHeight);
      ctx.fillStyle = "#00FF88";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charSet[Math.floor(Math.random() * charSet.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > cssHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrame = requestAnimationFrame(drawRain);
    };

    const drawLetterPattern = () => {
      ctx.clearRect(0, 0, cssWidth, cssHeight);
      ctx.fillStyle = "#00FF88";
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";

      const totalWidth = letters.length * (LETTER_WIDTH + SPACE_BETWEEN);
      const offsetX = Math.floor((cssWidth / fontSize - totalWidth) / 2);
      const offsetY = Math.floor((cssHeight - PATTERN_HEIGHT * fontSize) / 2);

      for (let l = 0; l < letters.length; l++) {
        const char = letters[l];
        const pattern = LETTER_MAP[char];
        if (!pattern) continue;

        const colOffset = offsetX + l * (LETTER_WIDTH + SPACE_BETWEEN);
        for (let y = 0; y <= currentRow && y < pattern.length; y++) {
          for (let x = 0; x < pattern[y].length; x++) {
            if (pattern[y][x] === "1") {
              ctx.fillText(char, (colOffset + x) * fontSize, offsetY + y * fontSize);
            }
          }
        }
      }

      currentRow++;
      if (currentRow <= PATTERN_HEIGHT) {
        setTimeout(drawLetterPattern, 200);
      }
    };

    if (mode === "rain") {
      drawRain();
    } else {
      cancelAnimationFrame(animationFrame);
      drawLetterPattern();
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [stateIndex, mode]);

  return (
    <canvas
      ref={canvasRef}
      className="letter-rain"
      onClick={() => setStateIndex(prev => prev + 1)}
    />
  );
};

export default LetterRain;
