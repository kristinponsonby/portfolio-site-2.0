import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [ 
            "Hi, I'm Kristin ✨",
            "Coffee-and-coding-is-life.tsx",
            "But also <Design />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden">
        <BackgroundCircles />
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
        alt="demo profile photo"
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
                Software Engineer
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold -px-10">
              <span>{text}</span>
              <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className="pt-5">
                <Link href="#about">
                <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                <button className="heroButton">Experience</button>
                </Link>
                <Link href="#Skills">
                <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div> 
  )
} 
 
 