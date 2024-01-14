import React, { useEffect,useRef }  from "react";
import './SectionOne.css';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

function SectionOne() {
  const lineStyle = {
    stroke: '#372D25',
    strokeWidth: 2,
  };

  const letterRef = useRef(null);

  useEffect(() => {
    const el = letterRef.current;
  
    gsap.fromTo(
      el,
      { x: '10%' },
      {
        x: '0%',
        duration: 5,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub:1
        },
      }
    );
  
    gsap.fromTo(
      "#text2",
      { x: '-10%' },
      {
        x: '0%',
        duration: 5,
        scrollTrigger: {
          trigger: "#text2",
          start: 'top center',
          end: 'bottom center',
          scrub:1
        },
      }
    );
  }, []);
 
  return (
    <div className="Maindiv">

      <div className="rowDiv lines" >
      
        <svg height="500" width="100">
          <line x1="-100" y1="90" x2="40" y2="500" style={ lineStyle } />   {/* y */}
        </svg>
        <svg height="500" width="100">
          <line x1="30" y1="350" x2="30" y2="470" style={ lineStyle } />  {/* y */}
        </svg>
        <svg height="500" width="100">
          <line x1="10" y1="500" x2="65" y2="375" style={ lineStyle } />
        </svg>
      </div>

      <div className="rowDiv">

        <div className="MainContent">

          <div className="Content" style={{margin:'2px'}}> <span className="text" ref={letterRef}>LA Montre</span>
          </div>

          <div className="Content"  >
            <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 201 247" fill="none">
              <g clipPath="url(#clip0_1_29)">
                <path d="M102.333 0.7146C121.975 0.775779 141.232 6.16892 158.05 16.3188C161.678 18.4845 164.961 20.7218 167.915 22.8875L170.266 24.6803C173.571 27.2628 176.744 30.0104 179.772 32.9126C184.079 37.0812 188.048 41.5844 191.644 46.3799C194.21 49.754 196.557 53.2894 198.67 56.9643L199.071 57.6814L199.516 58.4559V188.51L198.67 189.944C193.513 198.829 187.121 206.937 179.686 214.025C176.689 216.916 173.54 219.645 170.252 222.2C156.186 233.128 132.973 246.18 102.318 246.18H98.5904C78.2899 246.108 58.4178 240.333 41.2384 229.514C37.5958 227.262 34.0734 224.82 30.6856 222.2C29.4668 221.253 28.2911 220.235 27.0867 219.231C25.0938 217.567 23.1438 215.846 21.2512 214.025C16.9607 209.926 13.0007 205.495 9.40796 200.773C6.78339 197.349 4.38847 193.756 2.23895 190.016L1.96653 189.528L1.39301 188.51V58.4559L1.96653 57.5093L2.23895 56.9643C4.38116 53.2152 6.77638 49.6166 9.40796 46.1934C12.9694 41.4665 16.8957 37.0259 21.1508 32.9126C24.1734 30.0141 27.3414 27.2712 30.6426 24.6946L33.0083 22.9018C35.9476 20.7362 39.231 18.4988 42.8729 16.3332C59.6745 6.16723 78.9256 0.768024 98.5618 0.7146H102.333Z" stroke="#372D25" strokeWidth="1.4469" strokeMiterlimit="10" />
                <path opacity="0.5" d="M102.003 21.6533C118.341 21.6898 134.364 26.1502 148.372 34.5612C151.383 36.354 154.107 38.2041 156.573 40.0112C157.247 40.4988 157.907 41.0008 158.538 41.4454C161.287 43.583 163.924 45.8617 166.438 48.2723C170.024 51.7311 173.332 55.4668 176.331 59.4448C178.469 62.2439 180.428 65.1755 182.195 68.2221L182.54 68.8102L182.898 69.4556V177.337L182.195 178.585C177.91 185.953 172.599 192.675 166.424 198.549C163.925 200.946 161.302 203.211 158.566 205.333C142.472 218.104 122.575 225.135 102.032 225.311H98.8916C81.9978 225.253 65.458 220.464 51.146 211.485C48.1219 209.618 45.1977 207.593 42.3854 205.419C41.3674 204.63 40.3781 203.798 39.3888 202.966C37.7256 201.532 36.0911 200.098 34.5282 198.664C30.9759 195.249 27.6968 191.562 24.721 187.634C22.5292 184.791 20.5271 181.806 18.7277 178.699L18.4983 178.298L18.0251 177.452V69.5416L18.4983 68.6954L18.7277 68.3082C20.5203 65.2004 22.5177 62.2155 24.7067 59.3731C27.6726 55.4509 30.9422 51.768 34.4852 48.3583C36.9986 45.9518 39.6356 43.6779 42.3854 41.5458L44.3498 40.1116C46.8016 38.3188 49.5258 36.4544 52.5511 34.6616C66.5333 26.2156 82.5434 21.72 98.8772 21.6533H102.003Z" stroke="#372D25" stroke-width="1.4469" stroke-miterlimit="10" />
              </g>
              <defs>
                <clipPath id="clip0_1_29">
                  <rect width="199.585" height="246.957" fill="white" transform="translate(0.676453 -0.00268555)" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="Content" > <span className="text" id="text2">objet d’art'</span></div>
          {/* <div className="Content" > <span className="text" id="text2" ref={text2Ref} >objet d’art'</span></div> */}

        </div>

      </div>

      <div className="rowDiv lines">
      <svg height="500" width="100">
          <line x1="50" y1="200" x2="5" y2="350" style={ lineStyle } />
        </svg>
        <svg height="500" width="100">
          <line x1="30" y1="230" x2="30" y2="350" style={ lineStyle } />
        </svg>
        <svg height="500" width="100">
          <line x1="70" y1="350" x2="10" y2="200" style={ lineStyle } />
        </svg>
      </div>
    </div>
  );
}

export default SectionOne;
