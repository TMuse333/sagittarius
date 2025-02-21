import DualImageBoxes from "@/components/dualImageTextBox/dualImageTextBox";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import CarouselHero from "@/components/herobanner/carouselHero";
import TextAndList from "@/components/textAndList/textAndList";
import { carouselHeroData, dualImageData, experienceCardData, textAndListData } from "@/data/homeData";
import React from "react";



const Homepage = () => {


    return (
        <main className="w-screen">

            <CarouselHero
            {...carouselHeroData}
            />

            <ExperienceCard
            {...experienceCardData}
            buttonText="Contact now"
            />

            <TextAndList
            {...textAndListData}
            />

            <DualImageBoxes
            boxData={dualImageData}
            />


        </main>
    )
}