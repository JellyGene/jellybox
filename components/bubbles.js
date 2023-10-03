import React, { useEffect } from "react";
import { gsap, Sine } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

const Bubbles = ({ total }) => {
  const bubbles = [...Array(total)].map((_, i) => `bubble-${i}`);

  gsap.registerPlugin(Sine, CSSPlugin);

  useEffect(() => {
    const randomX = random(10, 20);
    const randomY = random(20, 30);
    const randomDelay = random(0, 1);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(8, 12);

    bubbles.forEach((name) => {
      gsap.set(`.${name}`, {
        x: randomX(-1),
        y: randomX(1),
        css: {
          left: Math.random() * (screen.width - 45),
          top: Math.random() * (screen.height - 45),
        },
        rotation: randomAngle(-1),
      });
      moveX(`.${name}`, 1);
      moveY(`.${name}`, -1);
      rotate(`.${name}`, 1);
    });

    function rotate(target, direction) {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        // delay: randomDelay(),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveX(target, direction) {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveY(target, direction) {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    }

    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }
  }, []);

  return (
    <div className="bubbles">
      {bubbles.map((idClass, key) => {
        return <div key={key} className={`bubble ${idClass}`}></div>;
      })}
    </div>
  );
};

export default Bubbles;
