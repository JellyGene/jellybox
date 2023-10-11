import React, { useEffect, useRef } from "react";
import { createCanvas, loadImage } from "canvas";

const BubbleCanvas = () => {
  const canvasRef = useRef(null); //test
  const bubbles = [];
  const bubbleImage = createCanvas(40, 40);
  const bubbleImageContext = bubbleImage.getContext("2d");

  const loadImageData = async () => {
    const img = await loadImage("/backgrounds/bubble.png");
    bubbleImageContext.drawImage(img, 0, 0, 40, 40);
    canvasInit();
  };

  useEffect(() => {
    loadImageData();
  }, []);

  const canvasInit = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const canvasAddBubbles = () => {
      const bubble = new Bubble(ctx, canvasWidth, canvasHeight, bubbleImage);
      bubble.draw();
      bubbles.push(bubble);
    };

    const canvasDraw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      bubbles.forEach((bubble) => bubble.update());
      window.requestAnimationFrame(canvasDraw);
    };

    setInterval(() => canvasAddBubbles(), 500);
    canvasDraw();
  };

  class Bubble {
    constructor(ctx, canvasWidth, canvasHeight, image) {
      this.canvasHeight = canvasHeight;
      this.canvasWidth = canvasWidth;
      this.ctx = ctx;
      this.radius = this.randomVal(5, 20);
      this.x = this.randomVal(0, canvasWidth);
      this.y = canvasHeight + this.radius;
      this.velocityX = 0.25;
      this.velocityY = 0.75;
      this.active = true;
      this.image = image;
    }

    draw() {
      this.ctx.drawImage(
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

  return <canvas className="bubbles" ref={canvasRef} />;
};

export default BubbleCanvas;
