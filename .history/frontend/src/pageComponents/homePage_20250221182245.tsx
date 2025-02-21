"use client"

import ApplicationForm from "@/components/contactForm/contactForm";
import DualImageBoxes from "@/components/dualImageTextBox/dualImageTextBox";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import Footer2 from "@/components/footer/footer";
import GoogleReviews from "@/components/googleReviews/googleReviews";
import GridCarousel from "@/components/gridCarousel/gridCarousel";
import CarouselHero from "@/components/herobanner/carouselHero";
import Navbar from "@/components/navbar/navbar";
import TextAndList from "@/components/textAndList/textAndList";
import { carouselHeroData, dualImageData, experienceCardData, testimonials, textAndListData } from "@/data/homeData";
import React from "react";



const Homepage = () => {

    const links = [
        {
            destination:'about',
            name:'About',
            hasScroll:true
        }
    ]

    return (
        <>
          <Navbar
            links={links}
            />
        <main className="w-screen mt-[5rem]">
          

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

            <GridCarousel
            images={gri}

            <GoogleReviews
            reviews={testimonials}
            />

            <ApplicationForm/>

            <Footer2
            excludedLink="Home"
            />


        </main>
        </>
    )
}


export default Homepage