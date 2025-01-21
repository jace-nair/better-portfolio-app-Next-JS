import { navLinks } from "@/lib/data";

export type SectionName = typeof navLinks[number]["name"];

export type ActiveSectionContextProviderProps = {children: React.ReactNode};

export type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};