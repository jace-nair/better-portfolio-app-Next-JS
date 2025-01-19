import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";

import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import FigmaIcon from "@/assets/icons/figma.svg"
import NextJSIcon from "@/assets/icons/next-js.svg";
import TypeScriptIcon from "@/assets/icons/typescript2.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg";
import MySQLIcon from "@/assets/icons/mysql2.svg";
import MariaDBIcon from "@/assets/icons/mariadb.svg";
import PostGreSQLIcon from "@/assets/icons/postgresql.svg";
import GoIcon from "@/assets/icons/go-2.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import VSCodeIcon from "@/assets/icons/visual-studio-code.svg";
import LinuxIcon from "@/assets/icons/linux.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { ToolboxItems } from "@/components/ToolboxItems";




const toolboxItems = [
    {
        title: "Figma",
        iconType: FigmaIcon,
    },
    {
        title: "HTML5",
        iconType: HTMLIcon,
    },
    {
        title: "CSS3",
        iconType: CSSIcon,
    },
    {
        title: "JavaScript",
        iconType: JavaScriptIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "Next JS",
        iconType: NextJSIcon,
    },
    {
        title: "TypeScript",
        iconType: TypeScriptIcon,
    },
    {
        title: "Tailwind",
        iconType: TailwindIcon,
    },
    {
        title: "MySQL",
        iconType: MySQLIcon,
    },
    {
        title: "MariaDB",
        iconType: MariaDBIcon,
    },
    {
        title: "PostGreSQL",
        iconType: PostGreSQLIcon,
    },
    {
        title: "Go",
        iconType: GoIcon,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },
    {
        title: "Docker",
        iconType: DockerIcon,
    },
    {
        title: "Visual Studio Code",
        iconType: VSCodeIcon,
    },
    {
        title: "Linux",
        iconType: LinuxIcon,
    },
];


export const About = () => {

    return(
        <div className="py-20">
            <div className="container">
                <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do and what inspires me." />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="md:grid md:grid-cols-5 md:gap-8">
                        <Card className="h-[320px] md:col-span-2">
                            <CardHeader title="My Reads" description="Explore the books shaping my perspective." />
                            <div className="w-40 mx-auto mt-6">
                                <Image src={bookImage} alt="Book cover" />
                            </div>
                        </Card>
                        <Card className="h-[320px] mt-8 md:mt-0 md:col-span-3">
                            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className="pt-2 px-2"/>
                            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:80s]"/>
                            <ToolboxItems items={toolboxItems} itemsWrapperClassName="mt-6 animate-move-right [animation-duration:40s]"/>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
