"use client"

// pages/animated.js
import {useEffect,useRef} from 'react';
import anime from 'animejs';

const AnimatedPage=() =>
{
     const boxRef=useRef(null);

     useEffect(() =>
     {
          // Create the animation when the component mounts
          anime({
               targets: boxRef.current,
               translateX: 250,
               rotate: '1turn',
               backgroundColor: '#FF6347',
               duration: 2000,
               loop: true
          });
     },[]);

     return (
          <div style={styles.container}>
               <div ref={boxRef} style={styles.box}></div>
          </div>
     );
};

const styles={
     container: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f0f0f0',
     },
     box: {
          width: '100px',
          height: '100px',
          backgroundColor: '#00f',
     },
};

export default AnimatedPage;
