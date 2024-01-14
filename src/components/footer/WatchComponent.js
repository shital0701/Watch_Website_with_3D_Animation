import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WatchComponent= () => {
    const canvasRef = useRef(null);
  const [imageSeq, setImageSeq] = useState({ frame: 1 });
  const frameCount = 241;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    canvas.width ='100vw';
    canvas.height = '792px';
    const context = canvas.getContext('2d');
    console.log(context)
  

    const images = [];
    var img
    const loadImages = async () => {
        const paths = files();
    //   for (let i = 0; i < frameCount; i++) {
         img = new Image();
        img.src = files()[0];
        img.className = "watch-image";
        
        // console.log(img)
    //     images.push(img);
    //     // console.log(images)
    //     // await new Promise((resolve) => {
    //     //   img.onload = resolve;
    //     // });
    //   }

    //   console.log(images)

    //   console.log(images,"images")

      gsap.to(".watch-image", {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: 0.15,
          trigger: `.watch-image`,
          start: `top center`,
          end: ` top top`,
          scroller: `.main`,
        },
        onUpdate: render,
      });
    //   images[1].onload = render;
    img.onload = render;
    };

    loadImages();

    function files(index) {
     var data = []
     
    for (let i = 0; i <= 240; i++) {
        const imagePath = `/images/Tech_view/DR_TECHNICAL_VIEW_TRANSPARENCY_${i.toString().padStart(3, '0')}.webp`;
        data.push(imagePath);
    }

    // console.log(data)
    return data;
    }

    function render() {
      scaleImage(img, context);
    //   scaleImage(images[imageSeq.frame], context);
    }

    // function scaleImage(img, ctx) {
    //   var canvas = ctx.canvas;
    //   var hRatio = canvas.width / img.width;
    //   var vRatio = canvas.height / img.height;
    //   var ratio = Math.max(hRatio, vRatio);
    // //   var centerShift_x = (canvas.width - img.width * ratio) / 2;
    // //   var centerShift_y = (canvas.height - img.height * ratio) / 2;
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   ctx.drawImage(
    //     img,
    //     0,
    //     0,
    //     img.width,
    //     img.height,
    //     // centerShift_x,
    //     // centerShift_y,
    //     img.width * ratio,
    //     img.height * ratio
    //   );
    // }

    function scaleImage(img, ctx) {
        
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        console.log(img, 0, 0, img.width, img.height, 0, 0, 700, 792);
      
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 700, 792);
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0);
      }

    gsap.to('.watch-image', {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: 0.15,
          trigger: canvas, // Use the canvas element as the trigger
          start: 'top center',
          end: 'top top',
          scroller: '.main',
        },
        onUpdate: render,
      });
},[canvasRef])

return <canvas ref={canvasRef}></canvas>;


}

export default WatchComponent;