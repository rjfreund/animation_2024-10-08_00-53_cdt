"use client"

// pages/animated.js
import {useEffect,useRef} from 'react';
import anime from 'animejs';
import Image from 'next/image';

const AnimatedPage=() =>
{
     const boxRef=useRef(null);

     useEffect(() =>
     {
          // Create the animation when the component mounts

          anime({
               targets: boxRef.current,
               translateY: 10,
               //rotate: '1turn',
               //backgroundColor: '#FF6347',
               direction: 'alternate',
               easing: 'easeInOutQuad',
               duration: 2000,
               loop: true
          });
     },[]);

     return (
          <div style={styles.container}>
               <Image src="/OswinBackground.png" alt="Oswin  " width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%',height: 'auto',position: 'absolute'}} />
               <Image src="/Oswin.png" alt="Oswin  " width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%',height: 'auto', position: 'absolute'}}
                    ref={boxRef}/>

          </div>
     );
};

const styles={
     container: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#f0f0f0',
     },
     box: {
          width: '100%',
          height: '100%',
          backgroundColor: '#00f',
     },
};

export default AnimatedPage;
