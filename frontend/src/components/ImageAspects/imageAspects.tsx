import React, {useRef, useState} from "react";

import { motion, useInView} from 'framer-motion'




// import { useGeneralContext } from "@/context/context";

import Image from 'next/image'

// import functional from '../../media/gemeni-functional.jpg'


interface AspectProps {

    src:string,
    alt:string
    title:string,
    description:string,
    index:number,
    titleInView:boolean
   
}

const AspectElement: React.FC<AspectProps> = ({src,alt,
title, description, index,titleInView}) => {



    // const {isMobile} = useGeneralContext()


    //-120px
    const MotionImage = motion(Image)

const componentRef = useRef(null)


    const inView = useInView(componentRef,{
        once:true
    }
       )



    const containerVariants = {
        initial:{
            opacity:0,
            y:-90
        },
        animate:{
            opacity:1,
            y:0
        },
        hover: {
            scale: 1.05, // Slightly scale up on hover
            // rotate: 2, 
        },
        exit: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.3
            }
        }
    }




    const [animationComplete, setAnimationComplete] = useState(false)

   


    return (
        <motion.div
        ref={componentRef}
        id={`infographic-container-${index}`}
        variants={containerVariants}
        initial='initial'
        animate={inView  && titleInView? 'animate' : 'initial'}
        
        whileHover='hover'
        whileTap="hover"
        exit="exit"
         className={`mt-5 mb-[4rem] p-0
         overflow-x-hidden
            rounded-xl
        mr-auto ml-auto 
        h-[95vw] w-[95vw] 
        flex flex-col  shadow-xl max-w-[360px] 
        max-h-[360px]
        sm:w-[45vw] sm:h-[50vw]
        xl:w-[32vw] xl:h-[32vw]
        relative z-10
        text-white
       
      `}
     
      
    //   style={{
    //     backgroundImage: `url(${image.src})`,
    //     backgroundPosition:'center',
    //     backgroundSize:'cover'
    // }}
    
        >
            <MotionImage className="absolute h-full w-full object-cover"
           
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            onAnimationComplete={()=>setAnimationComplete(true)}
            src={src}
            fetchPriority="low"
            alt={alt}
            width={600}
            height={1300}
            style={{
                filter:'brightness(0.3)'
            }}
            />
       
            <div className="relative flex flex-col justify-center
            items-center mt-auto mb-auto"
           >
           
            <section className="h-[200px]  flex flex-col
            items-start justify-center mb-auto ">

            
            <motion.h3
            initial={{
                opacity:0,
                y:60
            }}
            animate={{
                opacity:animationComplete ? 1 : 0,
                y:animationComplete ? 0 : 30
            }}
             className="text-3xl ml-auto mr-auto pr-2 pl-2
             text-center mb-auto ">{title}</motion.h3>
            <motion.p 
            initial={{
                opacity:0
            }}
            animate={{
                opacity: animationComplete ? 1 : 0,
                transition:{
                    delay:0.33
                }
            }}
            className=" ml-auto mr-auto text-md  
            mb-auto pr-5 pl-5 mt-3 sm:mt-6">
                {description}
            </motion.p>
            </section>
            </div>
        </motion.div>
    )
}

interface Props {
    images:{
        title:string,
        src:string,
      
        description:string,
        alt:string
    }[],
    title?:string,
    description?:string
    bgColor?:boolean
}
 const ImageAspects:React.FC<Props> = ({
    images,title, description,
    
}) => {


   

    // const {isMobile} = useGeneralContext()

    const componentRef = useRef(null)


    const inView = useInView(componentRef,{
        once:true
    }
       )

   

    return (
        <>

        

          {/* <div 
           className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]
        mb-8
        ">
           
       </div> */}

       <div className={``}
       ref={componentRef}>
       {title && (
            <>
             <motion.h2
             initial={{
               opacity:0,
               y:50
             }} 
             animate={{
               opacity:inView ? 1 : 0,
               y: inView ? 0 : 50
             }}
             className='relative text-2xl font-cursive
             text-black 
            text-4xl sm:text-5xl font-semibold text-center'>
                {title}
            </motion.h2>
              <motion.p
            initial={{
              opacity:0,
              x:50
            }} 
            animate={{
              opacity:inView ? 1 : 0,
              x: inView ? 0 : 50,
              transition:{
                delay:0.5
              }
            }}
             className='text-left relative z-[20]  md:text-center md:text-2xl pl-4 pr-5 mt-[2rem]
             mb-[2rem] text-black
           w-[100%] max-w-[900px] ml-auto mr-auto'>
            {description}</motion.p>
            </>
        )}
       </div>


        <section ref={componentRef}
         className={`flex
         justify-center flex-col items-center
          sm:grid sm:grid-cols-2 xl:grid-cols-3
           gap-4 lg:gap-0 w-screen max-w-[1500px]  ml-auto mr-auto
          
          `}>
          



            {images.map((image, index)=> (
                <AspectElement
                index={index}
                title={image.title}
                description={image.description}
                src={image.src}
                alt={image.alt}
                key={index}
                titleInView={inView}
                />

            ))}
            
        </section>
      
       </>
    )
}

export default ImageAspects