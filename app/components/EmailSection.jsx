"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section
            id="contact"
            className="my-12 md:my-12 py-24 gap-4 flex items-center justify-center"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2 flex items-center justify-center">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md flex items-center justify-center">
                    {" "}
                    Thank You For Stopping By!
                </p>
                <div className="socials flex-row gap-2 flex items-center justify-center">
                    <Link target="_blank" href="http://github.com/MotBCS">
                        <Image className="hover:animate-bounce" src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link target="_blank" href="http://linkedin.com/in/mya-thomasmot">
                        <Image className="hover:animate-bounce" src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;