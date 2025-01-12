
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import futuristicRifle from '../models/futuristic_rifle.glb'
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3
export function Gun(props) {
    const { nodes, materials } = useGLTF(futuristicRifle)

    const animref = useRef()
    const tl = useRef()

    const scroll = useScroll()

    useFrame(() => {
        tl.current.seek((scroll.offset)*tl.current.duration())
    })

    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
        tl.current.to(
            animref.current.position,{
                duration: 2,
                y: -FLOOR_HEIGHT*(NB_FLOORS-1),
            },

        )
       
    },[])


  
  return (
    <group {...props} dispose={null} ref={animref}>
      <mesh geometry={nodes.pCylinder42_bullet_0.geometry} material={materials.bullet} />
      <mesh geometry={nodes.pCylinder42_extraBits_0.geometry} material={materials.extraBits} />
      <mesh  geometry={nodes.pCylinder42_barrel_0.geometry} material={materials.barrel} />
      <mesh geometry={nodes.pCylinder42_body_0.geometry} material={materials.body} />
      <mesh geometry={nodes.pCylinder42_magazine_0.geometry} material={materials.magazine} />
      <mesh geometry={nodes.pCylinder42_transparents_0.geometry} material={materials.transparents} />
    </group>
  )
}

useGLTF.preload(futuristicRifle)
