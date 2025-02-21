import CarouselHero from "@/components/herobanner/carouselHero";
import { carouselHeroData } from "@/data/homeData";
import React from "react";



const Homepage = () => {


    return (
        <main className="w-screen">

            <CarouselHero
            {...carouselHeroData}
            />
        </main>
    )
}