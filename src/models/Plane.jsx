import React from 'react'

import { useGLTF } from '@react-three/drei'
import PlaneScence from '../assets/3d/plane.glb'

const Plane = ({isRotating, ...props}) => {
  const {scene , animations} = useGLTF(PlaneScence);
  return (
    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane
