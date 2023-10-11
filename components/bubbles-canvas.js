import React, { Component } from "react";
const { createCanvas, loadImage } = require("canvas");

class BubbleCanvas extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.bubbles = [];
    this.bubbleImage = createCanvas(40, 40);
    this.bubbleImageContext = this.bubbleImage.getContext("2d");
    this.loadImage();
  }

  loadImage = async () => {
    const img = await loadImage("/backgrounds/bubble.png");
    this.bubbleImageContext.drawImage(img, 0, 0, 40, 40);
    this.canvasInit();
  };

  canvasInit = () => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    canvas.width = this.canvasWidth;
    canvas.height = this.canvasHeight;
    this.ctx = ctx;
    this.canvasDraw();
    window.setInterval(() => this.canvasAddBubbles(), 500);
  };

  canvasAddBubbles = () => {
    const bubble = new Bubble(
      this.ctx,
      this.canvasWidth,
      this.canvasHeight,
      this.bubbleImage
    );
    bubble.draw();
    this.bubbles.push(bubble);
  };

  canvasDraw = () => {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.bubbles = this.bubbles.filter((bubble) => bubble.active);
    this.bubbles.forEach((bubble) => bubble.update());
    window.requestAnimationFrame(this.canvasDraw);
  };

  render() {
    return <canvas className="bubbles" ref={this.canvasRef} />;
  }
}

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

export default BubbleCanvas;
