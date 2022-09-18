import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        viewport={{
            once: true,
        }}
        src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
             <h4 className="text-4xl font-semibold">
             A {" "}
             <span className="underline decoration-[#F7AB0a]/50">little</span>{" "}
             about me
             </h4>
             <p className="text-base">
             I'm Kristin. 🦋 I'm a full stack software engineer and fierce advocate for women in STEM. I completed the Flatiron School intensive 11 month bootcamp program in software engineering in 2021. 🏆 I am proficient in JavaScript, React/Redux, Ruby on Rails, SASS, and HTML/CSS. Additionally, I have substantial experience with AWS microservices including Lambda, Athena, Auroa, S3, Amplify, and other services as needed. Currently, I work as a software engineer in healthcare tech. My diverse professional background includes Web Development, UX/ UI Design, Real Estate, and Digital Marketing.
             </p>
        </div>
    </motion.div>
  )
}

export default About