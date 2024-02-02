"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

{/* Import PDF */ }

{/* Type Animation (Imported from npmjs.com) */ }
import { TypeAnimation } from 'react-type-animation';

{/* Framer Motion (Imported from npmjs.com)*/ }
import { motion } from "framer-motion"


const HeroSection = () => {
    return (
        <section className="lg:py-16 mt-28">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-[#ADB7BE] sm:text-1xl lg:text-2xl">
                            Hey There! I'm{" "}
                        </span>
                        <br></br>

                        {/* npm Type Animation Imported from npmjs.com */}
                        <TypeAnimation
                            sequence={[
                                "Mya Thomas",
                                3000, // Wait 3 seconds before display next string
                                " ",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>

                    {/* Hero Sub-Text*/}
                    <h2 className="text-white text-base sm:text-3xl mb-6 lg:text-4xl">
                        Developer + Artist
                    </h2>

                    {/* Hero paragraph summary */}
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Software Developer With A Background In Traditional and Digital Art.
                    </p>

                    {/* Hero Buttons */}
                    <div>
                        <Link
                            href="/#projects"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 font-bold text-white bg-transparent border border-white hover:text-gray-500 hover:border-gray-500"
                        >
                            View Projects
                        </Link>
                        <Link
                            target='_blank'
                            href="/MT_Resume_NR.pdf"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full font-bold text-white bg-transparent border border-white hover:text-gray-500 hover:border-gray-500 mt-3"
                        >
                            <span className="block bg-transparent rounded-full px-5 py-2">
                                View Resume
                            </span>
                        </Link>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    {/* Hero Profile Picture */}
                    <div className="rounded-full bg-transparent w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/iconPic.png"
                            alt="Profile Picture"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={450}
                            height={450}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default HeroSection;
