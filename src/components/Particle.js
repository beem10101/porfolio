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
      particles: {
        color: {
          value: "#fffff",
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
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
  />
  )
}

export default Particle