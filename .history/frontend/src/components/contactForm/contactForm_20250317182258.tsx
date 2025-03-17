"use client"

import React, { useEffect, } from "react";

import InputForm from "./inputForm";
import logo from '../../../public/logo.webp'
import Image from "next/image";
// import axios from 'axios'
import { useGeneralContext } from "@/context/context";


 const applicationQuestions = [
    {
      title: 'name',
      question: 'Your name',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      title: 'email',
      question: 'Your email',
      placeholder: 'Enter your email',
      isEmail: true,
      required: true,
    },
    {
      title: 'phone',
      question: 'Your phone number',
      placeholder: 'Enter your phone number',
      isPhoneNumber: true,
      required: true,
    },
    {
      title: 'message',
      question: 'Your message',
      placeholder: 'Enter your message',
      required: false,
    },
  ];

const ApplicationForm = () => {

  const aspects = [
    "Precision craftsmanship for every deck and fence we build.",
    "We use only premium-grade materials that ensure durability and longevity.",
    "Custom designs tailored to your needs, making your vision a reality.",
    "Built for strength – our decks and fences are made to withstand the toughest conditions.",
    "Expertly crafted with attention to every detail for a flawless finish.",
    "Fast, efficient project timelines so you can enjoy your new deck or fence sooner.",
    "Competitive pricing without compromising on quality.",
    "Our team is dedicated to ensuring your project is completed on time, every time."
  ];
  
      

    const { applicationFormState } = useGeneralContext()

    // name, email, phone, address,
    //     city,province,reason,time

    useEffect(()=>{
        // console.log(
        //     'application',
        //     applicationFormState
        // )
    },[applicationFormState])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

    
        // try {
        //     const response = await axios.post('/api/sendEmail', {
        //         name: applicationFormState.name,
        //         email: applicationFormState.email,
        //         phone: applicationFormState.phone,
        //         city: applicationFormState.city,
        //         province: applicationFormState.province,
        //         reason: applicationFormState.reason,
        //         time: applicationFormState.time,
        //         address: applicationFormState.address,

        //     });
        //     // console.log(response.data);
        //     alert('Form submitted successfully!');
        //     setApplicationFormState({ name: '', email: '', phone: '', projectDetails: '' });
        // } catch (error) {
        //     // console.log('username',process.env.EMAIL_USER);
        //     // console.log('password',process.env.GMAIL_PASSWORD)
        //     console.error('Error submitting form:', error);
        //     alert('Failed to submit form.');
        // }
    };

    return (
        <section className="w-full  ">
            
        <section className="w-screen flex flex-col ml-auto
        flex-col-reverse
        mr-auto md:flex-row  mb-8 
         justify-around max-w-[1200px]
        items-center
           ">
            
            <section className=" mb-[4rem] ">
                {/* <h3 className="text-2xl text-center
                mt-4 mb-4 text-black">
                    Youth Bar
                </h3> */}
                               <h2 className="text-center text-xl sm:text-2xl
               md:text-3xl mt-4">Let’s Build Something Great Together!</h2>
               <Image
               src={logo}
               alt='logo'
               className='w-[40vw] mx-auto
               max-w-[445px]
               max-h-[550px]'
               width={1200}
               height={630}
               />
               {/* <Image
               src={chris}
               alt='logo'
               className='w-[40vw] mx-auto
               max-w-[445px] object-cover
               rounded-2xl
               max-h-[550px]'
               width={1200}
               height={630}
               /> */}

               {/* <ul className="">
                {aspects.map((aspect,index) => (
                    <li className="mb-2 flex items-center" key={index}>
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {aspect}
                  </li>
                ))}
               </ul> */}

               <p className="px-4 sm:text-lg">
               At Sagittarius Construction, we;ere committed to delivering top-quality decks, fences, and renovations that stand the test of time. Whether you're looking to enhance your outdoor space or start a new construction project, our expert team is ready to bring your vision to life—on budget, on time, and with craftsmanship you can trust.
               <br/>
               Get a Free Consultation Today! Contact us now and let&rsquo;s start planning your next project. Your dream outdoor space is just one call away!
               </p>

            </section>
            <section className="
            mt-12">
                <h3 className="mt-4 mb-[-2rem]  text-left  max-w-[455px] mx-auto  md:text-lg">
                  Here you can fill out a form with your requirements
                     {/* <button onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}

                className="bg-[#4D8890] p-3 rounded-xl text-white
                hover:text-[#4D8890] hover:bg-white transition-all
                mt-4">
                    Schedule online meeting
                </button> */}
                </h3>
                <InputForm
                questions={applicationQuestions}
                />
                <button onClick={handleSubmit}
                className="bg-[#4D8890] p-3 rounded-xl
                ml-9 mb-8 hover:text-[#4D8890] hover:bg-white transition-all">
                    Submit form
                </button>


            </section>
        </section>
        </section>
    )
}


export default ApplicationForm