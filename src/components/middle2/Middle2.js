import './middle.css'
import gsap from 'gsap';
import { useRef , useEffect } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Middle2(){
    const imgRef = useRef(null)
    useEffect(() => {
        const el = imgRef.current;
        gsap.fromTo(
            el,
            { x: '100%' }, 
            {
              x: '0%', 
              duration: 5,
              scrollTrigger: {
                trigger: el,
                start: 'top center', 
                end: 'bottom center',
                scrub:2
              },
            }
        );

        const el2 = '.right-side';
        gsap.fromTo(
            '.right-side',
            { x: '-100%'}, 
            {
              x: '40%', 
              duration: 5,
              scrollTrigger: {
                trigger: el2,
                start: 'top center', 
                end: 'bottom center',
                scrub:3
              },
            }
          );

        const el3 = '.crafted-gold';
        gsap.fromTo(
            el3,
            { x: '-60%'}, 
            {
            x: '0%', 
            duration: 5,
            scrollTrigger: {
                trigger: el3,
                start: 'top center', 
                end: 'bottom center',
                scrub:3
            },
            }
        );

        const el4 = '.hand-finish';
        gsap.fromTo(
            el3,
            { x: '-100%'}, 
            {
            x: '20%', 
            duration: 5,
            scrollTrigger: {
                trigger: el4,
                start: 'top center', 
                end: 'bottom center',
                scrub:3
            },
            }
        );

        const el5 = '.gold-description-1';
        gsap.fromTo(
            el3,
            { x: '-100%'}, 
            {
            x: '20%', 
            duration: 10,
            scrollTrigger: {
                trigger: el5,
                start: 'top center', 
                end: 'bottom center',
                scrub:3
            },
            }
        );
        }, []);

    return (
        <div className='mid-sec-main-container'>
            <div className='first-container' >
                <div className='right-side'>
                    <span className='text1'>THE</span>
                    <span className='text2'>ORIGINAL</span>
                    <div className='text'>
                        <span className='text3'>CASH DESIGN</span>
                    </div>
                    <span className='text4'>REVISITED</span>
                </div>
                <div className='left-side'>
                    <div className='image-container'>
                    <img className='image-1'  src={'/images/midSection/DR_VIEW_PRESENTATION_03-0db491.webp'}/>
                    </div>
                    <div className='image-conatiner1'>
                    <img className='image-2'  src={'/images/midSection/DR_VIEW_PRESENTATION_04-3c252f.webp'} />
                    </div>
                    <div className='paragraph-1'>
                    <p> CASE DIMENSIONS IDENTICAL
                    TO THE ORIGINAL TOURBILLON
                    <br></br><br></br>
                    LUGS GENTLY RESHAPED FOR
                    AN IMPROVED WEARABILITY
                    </p>
                    </div>
                </div>
            </div>
            <div className='second-container'>
                <div className='top-container'>
                    <div className='description-paragraph'>
                        <p>A CROSS BETWEEN A CIRCLE AND A SQUARE, THE SIGNATURE DOUBLE-ELLIPSE CASE WAS SPECIFICALLY DESIGNED BY MR. ROTH TO MAGNIFY THE TOURBILLON COMPLICATION WHILE LEAVING ENOUGH SPACE TO THE DIAL.</p>
                    </div>
                    <div className='description-heading' >
                        <div  ref={imgRef}>HAND-FINISH DIAL</div>
                        <div  className='crafted-gold'> CRAFTED IN SOLID GOLD</div>
                    </div>
                </div>
                <div className='bottom-container'>
                    <div className='sec-text-container'>
                        <div className='gold-description-1'>
                            <p>The hand-finish dial of the Original Tourbillon is made</p>
                        </div>
                        {/* <div className='gold-description-2'>
                            <p>The hand-finish dial of the Original Tourbillon is made</p>
                        </div> */}
                    </div>
                    <div className='image-conatiner'>
                        <div className='sec-image-1'>
                        <img className='sec-image-1'  src={'/images/midSection/DR_VIEW_PRESENTATION_01-4998c7.webp'}/>
                        </div>
                        <div>
                        <img className='sec-image-1 space'  src={'/images/midSection/DR_VIEW_PRESENTATION_02-01ceed.webp'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Middle2