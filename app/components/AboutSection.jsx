"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Front-End",
        id: "frontend",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwind</li>
                <li>HTML/CSS</li>
                <li>Bootstrap</li>
            </ul>
        ),
    },

    {
        title: "Back-End",
        id: "backend",
        content: (
            <ul className="list-disc pl-2">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>GIT</li>
                <li>.NET **</li>
            </ul>
        ),
    },

    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>C++ **</li>
            </ul>
        ),
    },

];

const AboutSection = () => {
    const [tab, setTab] = useState("frontend");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white mt-44" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-9 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/green-bg.png" width={600} height={600} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        My professional path has been an adventure, from illustration, animation and now technology.
                        As a self-driven developer with an appetite for knowledge, I am constantly learning new technologies and tools, for both art and software. I have experience
                        working with Python, Java, React, MySQL,
                        HTML, CSS, JavaScript, Git and much more.
                        <br />
                        <br />
                        I am a highly motivated individual, with a passion for coding and problem solving. When not coding,
                        I enjoying working on traditional and digital art pieces, spending time with my family and gardening.
                    </p>
                    <p className="text-gray-500 text-sm"> Currently Learning ** </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("frontend")}
                            active={tab === "frontend"}
                        >
                            {" "}
                            Front-End{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("backend")}
                            active={tab === "backend"}
                        >
                            {" "}
                            Back-End{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("languages")}
                            active={tab === "languages"}
                        >
                            {" "}
                            Languages{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutSection
