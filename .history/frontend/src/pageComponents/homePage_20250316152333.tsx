"use client"

import ApplicationForm from "@/components/contactForm/contactForm";
// import DualImageBoxes from "@/components/dualImageTextBox/dualImageTextBox";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import Footer2 from "@/components/footer/footer";
import GoogleReviews from "@/components/googleReviews/googleReviews";
import GridCarousel from "@/components/gridCarousel/gridCarousel";
import CarouselHero from "@/components/herobanner/carouselHero";
import ImageTextBox from "@/components/imageTextBox/imageTextBox";
import Navbar from "@/components/navbar/navbar";
import TextAndList from "@/components/textAndList/textAndList";
import { carouselHeroData, experienceCardData,
     testimonials,
      textAndListData,
gridItems, 
imageTextBoxData,
deckTextBox} from "@/data/homeData";
import React from "react";



const Homepage = () => {

    const links = [
        {
            destination:'card',
            name:'Who We Are',
            hasScroll:true
        },
        {
            destination:'work',
            name:'Our work',
            hasScroll:true
        },
        {
            destination:'reviews',
            name:'Reviews',
            hasScroll:true
        },
        {
            destination:'why-us',
            name:'Why Us',
            hasScroll:true
        },
        {
            destination:'contact',
            name:'Contact',
            hasScroll:true
        }
    ]

    return (
        <>
          <Navbar
            links={links}
            />
           
        <main className="w-screen mt-[5rem]
        bg-[#404040]">
           

            
          

            <CarouselHero
            {...carouselHeroData}
            />

<section id='card'>


            <ExperienceCard
            {...experienceCardData}
            buttonText="Contact now"
            />
</section>
         
<section id='work'>

    <ImageTextBox
    {...deckTextBox}
    objectContain
    />

    <ImageTextBox
    


            <GridCarousel
            images={gridItems}
            isGrid
            />
            </section>

<section id='reviews'>


            <GoogleReviews
            reviews={testimonials}
            />
            </section>
            <section id='why-us'>

          
               <TextAndList
            {...textAndListData}
            />
              </section>

              <ImageTextBox
              {...imageTextBoxData}
              />

              <section id='contact'>

          

            <ApplicationForm/>
            </section>

            <Footer2
            excludedLink="Home"
            />


        </main>
        </>
    )
}


export default Homepage