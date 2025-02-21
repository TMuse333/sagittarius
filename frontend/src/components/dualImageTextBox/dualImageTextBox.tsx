import Image from "next/image";
import React from "react";


interface ElementProps {
    src1:string,
    alt1:string,
    src2:string,
    alt2:string
    description:string,
    name:string,
}


const DualImageBox:React.FC<ElementProps> = ({
    src1,alt1,src2,alt2,description,name
}) => {
    return (
        <section className="flex flex-col
       rounded-2xl
        max-w-[500px] mx-auto
       border border-white border-4
       py-3 text-white 
       neutral-gradient-bg
      
        ">
            <div className="flex mb-4
            mx-auto items-center justify-center">
                <Image
                src={src1}
                alt={alt1}
                width={600}
                height={1300}
                className='w-[44vw] object-contain
                mr-2 max-w-[200px]'/>
                           <Image
                src={src2}
                alt={alt2}
                width={600}
                height={1300}
                className='w-[44vw] object-contain
                ml-2 max-w-[200px]'/>
            </div>
            <div className="flex flex-col
            text-white px-4 mx-auto">
                {description}
                <p>&quot;{name}&quot;</p>
            </div>
        </section>
    )
}

interface Props {
    title?:string,
    description?:string
    boxData:ElementProps[]
}

const DualImageBoxes:React.FC<Props> = ({
    boxData,title,description
}) => {


    return (<>
    {title && description && (
<>

    
    <h2 className="font-bold text-center
    text-3xl sm:text-4xl md:text-5xl
    text-black">
        {title}
    </h2>
    <p className="text-black
    mt-4 text-center sm:text-lg">{description}</p>
    </>

)}
        <section className="flex flex-col
        sm:grid grid-cols-2 justify-center
        items-center max-w-[1200px]
        mx-auto gap-2  
      bg-component-color
         py-10 mx-auto">
            {boxData.map((box,index) => (
                <DualImageBox
                {...box}
                key={index}
                />
            ))}
            </section>
            </>
    )
}

export default DualImageBoxes