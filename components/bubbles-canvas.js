import React, { useEffect, useRef } from "react";
import { createCanvas, loadImage } from "canvas";

const BubbleCanvas = () => {
  const canvasRef = useRef(null);
  const bubbles = [];
  const bubbleImage = createCanvas(40, 40);
  const bubbleImageContext = bubbleImage.getContext("2d");
  let animationId;

  const canvasDraw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    bubbles.forEach((bubble) => bubble.update());
    animationId = requestAnimationFrame(canvasDraw);
  };

  useEffect(() => {
    const loadImageData = async () => {
      const img = await loadImage("/backgrounds/bubble.png");
      bubbleImageContext.drawImage(img, 0, 0, 40, 40);
      canvasInit();
    };

    const canvasInit = () => {
      const canvas = canvasRef.current;
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const canvasAddBubbles = () => {
        if (!document.hidden) {
          const bubble = new Bubble(canvasWidth, canvasHeight, bubbleImage);
          bubble.draw();
          bubbles.push(bubble);
        }
      };

      setInterval(() => canvasAddBubbles(), 500);
      animationId = requestAnimationFrame(canvasDraw);
    };

    loadImageData();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId); // Pause animation
      } else {
        animationId = requestAnimationFrame(canvasDraw); // Resume animation
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  class Bubble {
    constructor(canvasWidth, canvasHeight, image) {
      this.canvasHeight = canvasHeight;
      this.canvasWidth = canvasWidth;
      this.radius = this.randomVal(5, 20);
      this.x = this.randomVal(0, canvasWidth);
      this.y = canvasHeight + this.radius;
      this.velocityX = 0.25;
      this.velocityY = 0.75;
      this.active = true;
      this.image = image;
    }

    draw() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        this.image,
        this.x - this.radius,
        this.y - this.radius,
        this.radius * 2,
        this.radius * 2
      );
    }

    inBounds() {
      return (
        this.x >= 0 &&
        this.x <= this.canvasWidth &&
        this.y >= 0 &&
        this.y <= this.canvasHeight + this.radius
      );
    }

    randomVal(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    update() {
      this.active = this.inBounds();
      this.x += Math.random() < 0.7 ? -this.velocityX : this.velocityX;
      this.y -= this.velocityY;

      this.draw();
    }
  }

  return (
    <canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
      className="bubbles"
      ref={canvasRef}
    />
  );
};

export default BubbleCanvas;
