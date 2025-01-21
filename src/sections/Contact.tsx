import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
    {
      company: "Acme Corp",
      year: "2022",
      title: "Dark Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "https://youtu.be/4k7IdSLxh6w",
      image: darkSaasLandingPage,
    },
  ] as const;

export const Contact = () => {

    return(
        <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                    <div className="absolute inset-0 opacity-5 -z-10" style={{backgroundImage: `url(${grainImage.src})`}}></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
                            <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.</p>
                        </div>
                        <div>
                            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                                <span className="font-semibold">Contact Me</span>
                                <ArrowUpRightIcon className="size-4"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex flex-col mt-10 gap-20">
                    {portfolioProjects.map(
                        (project, projectIndex) => 
                        <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{top: `calc(64px + ${projectIndex * 40}px)`,}}>
                          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                            <div className="lg:pb-16">
                                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                    <span>{project.company}</span>
                                    <span>&bull;</span>
                                    <span>{project.year}</span>
                                </div>
                                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                                <ul className="flex flex-col gap-4 mt-4 md:mt-5">{project.results.map(
                                    result => 
                                        <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                                            <CheckCircleIcon className="size-5 md:size-6"/>
                                            <span>{result.title}</span>
                                        </li>
                                )}</ul>
                                <a href ={project.link}>
                                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>Visit Live Site</span><ArrowUpRightIcon className="size-4"/></button>
                                </a>
                            </div>
                            <div className="relative">
                              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                            </div>
                          </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}