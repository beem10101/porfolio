import React from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles';

const Particle = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        // console.log
    }
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    canvasClassName="tsparticles-P"
    options={{
      background:{
        color:{
          value:'#b1d5fc',
        }
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 5, max: 10 },
        },
      },
      detectRetina: true,
    }}
  />
  )
}

export default Particle