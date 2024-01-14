import React from 'react';
import './footer.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



function Footer() {
    const imgRef = useRef(null);

    const specifications = [
        {
          category: 'CASE',
          specifications: [
            { key: 'CASE MATERIAL', value: '18K Yellow gold 3N' },
            { key: 'DIMENSIONS', value: '38,6 x 35,5mm' },
            { key: 'THICKNESS', value: '9,2mm' },
            { key: 'WATER RESISTANCE', value: '30m' },
          ],
        },
        {
          category: 'MOVEMENT DEVELOPED AND ASSEMBLED BY LA FABRIQUE DU TEMPS LOUIS VUITTON',
          specifications: [
            { key: 'COMPLICATION', value: 'Tourbillon 1-minute' },
            { key: 'POWER RESERVE', value: '80hrs' },
            { key: 'FREQUENCY', value: '3hZ' },
            { key: 'MOVEMENT DIMENSIONS', value: '31 x 28mm' },
            { key: 'MOVEMENT THICKNESS', value: '4,6mm' },
            { key: 'COMPONENTS', value: 'JEWELS' },
          ],
        },
      ];

    useEffect(() => {
        const el = imgRef.current;
    
   
        const imagePaths = Array.from({ length: 241 }, (_, index) => `/images/Tech_view/DR_TECHNICAL_VIEW_TRANSPARENCY_${index.toString().padStart(3, '0')}.webp`);
        
        ScrollTrigger.create({
            y:-50,
          trigger: el,
          start: "top 90%",
          end: "150% top",
          scrub: 1,
          toggleActions: "restart none none complete",
          onUpdate: (self) => {
            const index = Math.floor(self.progress * (imagePaths.length - 1));
    
            el.src = imagePaths[index];
          },
        });

        gsap.to('.TechDetails', {
            duration: 2,
            x: -180,
            duration: 2,
            ScrollTrigger: {
              trigger: '.TechDetails',
              start: 'top 20%',
              end: 'end top',
              scrub: '1',
              pin: true,
            },
          });
      
          gsap.to('.specification', {
            duration: 2,
            y: -120,
            duration: 5,
            ScrollTrigger: {
              trigger: '.TechDetails',
              start: 'top center',
              end: 'end top',
              scrub: 1.2,
              pin: true,
            },
          });
  }, []);

    return (
        <div className="main">
            <div class="help-section">
        <button>Notify Me For Next Launch</button>
    </div>
      <div 
     className="TechDetails">
        <div className='specification'>
      <div className='heading'>SPECIFICATIONS</div>
      <ul>
        {specifications.map((category, index) => (
          <li key={index}>
            <div>{category.category}</div>
            <ul className='subHeading'>
              {category.specifications.map((specification, subIndex) => (
                <li key={subIndex}>
                  <div>{specification.key}: {specification.value} </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
        <img className='watch-image' src={'/images/Tech_view/DR_TECHNICAL_VIEW_TRANSPARENCY_000.webp'} alt="Watch Image" ref={imgRef}></img>
        
      </div>
      <div className='FooterMenu'>
            <div className='menu'>Privacy Policy</div>
            <div className='menu'>Instagram</div>
            <div className='menu'>Terms of use</div>
      </div>
      </div>
    );
  }
  
  export default Footer;