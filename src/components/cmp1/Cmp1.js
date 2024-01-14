import './cmp1.css'
import { useState,useEffect,useRef } from 'react';
function Cmp1() {
    
    const navbar = ['Tourbillon Souscription','History','Historical Models','Care']
    const [boxSize, setBoxSize] = useState({ width: 100, height: 100 });
    const [currentImage, setCurrentImage] = useState(0);
    const [display,setDisplay] = useState("block")
    const [visibility,setVisibility] = useState("visible")
    const [bannerOpacity,setBannerOpacity] = useState(1)
    const [afterBannerOpacity,setAfterBannerOpacity] = useState(0)
    const [bannerTextanimation,setBannerTextanimation] = useState(0)
    function prependZero(number) {
      if (number < 10) {
        return '00' + number;
      } 
      else if (number<100){
        return '0' +number
      }
      else {
        return '' + number; 
      }
    }
    const [topPosition,setTopPosition] = useState(230);
    const imagePaths = Array.from({ length: 180 }, (_, i) => `/images/section1/DR_INTRO_${prependZero(i)}.webp`);
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY
        
        const limitedScroll = Math.min(scrollY, 150);
        let newWidth = 100 - limitedScroll * 0.33;
        let newHeight = 100 - limitedScroll * 0.33;
        newWidth = Math.max(newWidth, 50);
        newHeight = Math.max(newHeight, 50);
        setBoxSize({ width: newWidth, height: newHeight });
        const imageHeight = 2.77
        const index = Math.floor(scrollY / imageHeight);
        setBannerOpacity(1-(window.scrollY/130))
        if(1-(window.scrollY/130)<=0){
          setAfterBannerOpacity((window.scrollY/130)-1.2)
          setBannerTextanimation(afterBannerOpacity*10)
        }else{
          setAfterBannerOpacity(0)
        }
        if(afterBannerOpacity>0.4){
          setBannerTextanimation(afterBannerOpacity*10)
        }
        if (index >= 0 && index < imagePaths.length) {
          setCurrentImage(index);
          setTopPosition(230-(scrollY*0.4))
          setDisplay('block')
          setVisibility('visible')
        }
        else{
          setDisplay('none')
          setVisibility('hidden')
        }

      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
      <>
          <div 
            className="nav_container"
            >
            <div className='website_name'
              style={{visibility}}
              >Luxury Watch</div>
            <div className="navbar" >
              {navbar.map((nav_text,index)=>(
                <div className={index==0?'nav_text underline':'nav_text'}>{nav_text.toUpperCase()}</div>
              ))}
            </div>
          </div>
          <div
              className='banner_text'
              style={{
                opacity:bannerOpacity
              }}
              >
                <div>TOURBILLON</div>
                <div className='right'>SOUSCRIPTION</div>
            </div>
            <div className="banner_text_1 ">
              <div className='banner_text_1_after' style={{opacity:afterBannerOpacity,left:`-${bannerTextanimation}`,display: display}}>TOURBILLON</div>
            </div>
            <div className='banner_text_2'>
              <div className='watch_desc' style={{opacity:afterBannerOpacity,display: display}}>The Foundational Complication For Daniel roth</div>
              <div className='banner_text_2_after right' style={{opacity:afterBannerOpacity,display: display}}>SOUSCRIPTION</div>
            </div>
        <div className="background_1">
          <div 
            className="background_2"
            style={{
              width: `${boxSize.width}vw`,
              height: `${boxSize.height}vh`,
              display: display
            }}
          > 
            <img 
            // src="/images/section1/DR_INTRO_075.webp"
            src={imagePaths[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="scroll-image"
            style={{top:topPosition}}
            />
          </div>
        
        </div>
        
        <div className='another_div'>

        </div>
      

      </>
    );
  }
  
  export default Cmp1;