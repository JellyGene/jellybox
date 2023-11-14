import React, { useEffect, useRef } from "react";
import { createCanvas, loadImage } from "canvas";

const BubbleCanvas = () => {
  const canvasRef = useRef(null);
  const bubbles = [];
  const bubbleImageRef = useRef(null);
  const animationIdRef = useRef(null);
  const resizeFlagRef = useRef(false); // Flag to handle resize

  const canvasDraw = () => {
    if (resizeFlagRef.current) {
      // Clear the flag and reset animation
      resizeFlagRef.current = false;
      animationIdRef.current = requestAnimationFrame(canvasDraw);
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    // Update canvas dimensions when the window size changes
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    bubbles.forEach((bubble) => bubble.update());
    animationIdRef.current = requestAnimationFrame(canvasDraw);
  };

  useEffect(() => {
    let animationId;
    const bubbleImage = createCanvas(40, 40);
    const bubbleImageContext = bubbleImage.getContext("2d");

    const loadImageData = async () => {
      const img = await loadImage("/backgrounds/bubble.png");
      bubbleImageContext.drawImage(img, 0, 0, 40, 40);
      bubbleImageRef.current = bubbleImage;
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
          const bubble = new Bubble(
            canvasWidth,
            canvasHeight,
            bubbleImageRef.current
          );
          bubble.draw();
          bubbles.push(bubble);
        }
      };

      setInterval(() => canvasAddBubbles(), 500);
      animationIdRef.current = requestAnimationFrame(canvasDraw);
    };

    loadImageData();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationIdRef.current);
      } else {
        animationIdRef.current = requestAnimationFrame(canvasDraw);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    const handleResize = () => {
      // Set the flag to handle resize event
      resizeFlagRef.current = true;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize); // Cleanup resize listener
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      const distanceToBottom = this.canvasHeight - this.y;
      const maxDistance = this.canvasHeight + this.radius;

      const fadeStartDistance = maxDistance * 0.15;

      let opacity = 1;

      if (distanceToBottom < fadeStartDistance) {
        opacity = distanceToBottom / fadeStartDistance;
      } else if (this.y < fadeStartDistance) {
        opacity = this.y / fadeStartDistance;
      }

      if (distanceToBottom > maxDistance) {
        this.active = false;
        return;
      }

      if (opacity <= 0) {
        this.active = false;
        return;
      }

      ctx.globalAlpha = opacity;

      ctx.drawImage(
        this.image,
        this.x - this.radius,
        this.y - this.radius,
        this.radius * 2,
        this.radius * 2
      );

      ctx.globalAlpha = 1;
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
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      className="bubbles"
      ref={canvasRef}
    />
  );
};

export default BubbleCanvas;
