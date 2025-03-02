"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/contexts/ActiveSectionContextProvider";
import { useEffect } from "react";

const portfolioProjects = [
    {
      company: "Contact",
      year: "Me",
      title: "email@jacenair.com",
      image: darkSaasLandingPage,
    },
  ] as const;

export const Contact = () => {

    const {ref, inView} = useInView({
        threshold: 0.95,
    });
    const {setActiveSection} = useActiveSectionContext();

    useEffect(() => {
      if (inView) {
      setActiveSection("Contact");
    }
    }, [inView]);

    return(
        <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact" ref={ref}>
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                    <div className="absolute inset-0 opacity-5 -z-10" style={{backgroundImage: `url(${grainImage.src})`}}></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
                            <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.</p>
                            <p className="text-sm md:text-base mt-2">Please contact me directly at <a className="underline" href="mailto:email@jacenair.com">email@jacenair.com</a> or through this form.</p>
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
                                
                                
                                <div className="text-gray-900 font-sans">
                                    <form className="mt-10 flex flex-col" action="">
                                        <input className="h-14 rounded-lg border border-black/10 p-4" type="email" />
                                        <textarea className="h-52 my-3 rounded-lg border border-black/10 p-4" />
                                        <button className="group bg-white transition-all text-gray-950 hover:text-gray-700 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8" type="submit"><span>Submit</span><ArrowUpRightIcon className="size-4 group-hover:translate-x-1 group-hover:-translate-y-3"/></button>
                                    </form>
                                </div>
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