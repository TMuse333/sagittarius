import ApplicationForm from "@/components/contactForm/contactForm";
import DualImageBoxes from "@/components/dualImageTextBox/dualImageTextBox";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import Footer2 from "@/components/footer/footer";
import GoogleReviews from "@/components/googleReviews/googleReviews";
import CarouselHero from "@/components/herobanner/carouselHero";
import TextAndList from "@/components/textAndList/textAndList";
import { carouselHeroData, dualImageData, experienceCardData, testimonials, textAndListData } from "@/data/homeData";
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

            <GoogleReviews
            reviews={testimonials}
            />

            <ApplicationForm/>

            <Footer2
            excludedLink="Home"
            />


        </main>
    )
}


export default HomePage