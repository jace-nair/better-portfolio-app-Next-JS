"use client";

import { navLinks } from "@/lib/data";
import { SectionName } from "@/lib/types";
import { ActiveSectionContextProviderProps } from "@/lib/types";
import { ActiveSectionContextType } from "@/lib/types";

import { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({children,}: ActiveSectionContextProviderProps) => {

    const [activeSection, setActiveSection] = useState<SectionName>("Home");

    return(
        <ActiveSectionContext.Provider value={{
            activeSection: activeSection,
            setActiveSection: setActiveSection,
        }}>{children}</ActiveSectionContext.Provider>
    );
}

export const useActiveSectionContext = () => {

    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return(context);
}