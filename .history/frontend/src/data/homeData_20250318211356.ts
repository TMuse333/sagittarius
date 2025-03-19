

import { ContentProps } from "@/components/imageTextBox/imageTextBox";


export const carouselHeroData = {
    mainHeader: "Fantastic Construction & Renovations",
    titleText: "Construction in Halifax Nova Scotia",
    descriptionText:
      "At Sagittarius Construction, we specialize in top-quality renovations, decks, and fences that elevate your home and outdoor space. From kitchen remodels and living area updates to custom decks and durable fences, we deliver expert craftsmanship and reliable service. Our commitment to quality materials and precision ensures that every project enhances the beauty, functionality, and value of your property.",
    buttonText: "Get in Touch",
    hasScroll:true,
    destination:'contact',
    images: [
        {
            src: '/deck.webp',
            alt: 'Wooden deck built by Sagittarius Construction',
            description: 'A well-crafted outdoor wooden deck providing a comfortable space for relaxation.'
        },
        {
            src: '/indoor-1.webp',
            alt: 'Privacy fence by Sagittarius Construction',
            description: 'A high-quality wooden fence built for security and style.'
        },
        {
            src: '/kitchen-2.webp',
            alt: 'Outdoor patio space by Sagittarius Construction',
            description: 'A beautifully designed patio space perfect for entertaining guests.'
        },
        {
            src: '/tyvek.webp',
            alt: 'Outdoor patio space by Sagittarius Construction',
            description: 'A beautifully designed patio space perfect for entertaining guests.'
        },
        {
            src: '/wall-after.webp',
            alt: 'Outdoor patio space by Sagittarius Construction',
            description: 'A beautifully designed patio space perfect for entertaining guests.'
        }
    ]
  };

export const lorem60 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nobis laborum porro voluptas molestias nihil, eum ea velit quae, perspiciatis blanditiis dolorum culpa unde est eos earum a rem eveniet accusantium doloremque! Molestias illum inventore quae adipisci esse unde tempore, deleniti sed culpa nulla, sint placeat asperiores commodi? Libero ut tempora ad deserunt beatae facilis cum esse magni quaerat. Quasi nihil perspiciatis culpa minus, voluptates inventore saepe repudiandae reiciendis accusantium fuga exercitationem vero, eligendi voluptatibus nam neque, cumque explicabo vitae tenetur expedita accusamus placeat. Corporis perspiciatis, eius minus debitis ex, ad ducimus, error neque id itaque eligendi quibusdam hic pariatur!"

export const renovationIntro = {
  title: "Transform Your Home with Expert Renovations",
  description: 
    "At Sagittarius Construction, we bring over 5 years of experience in delivering high-quality renovations that elevate your home without disrupting your daily life. Whether you’re looking to modernize your kitchen, refresh your bathroom, or transform your entire home, we guarantee expert craftsmanship, attention to detail, and lasting results. Our team works efficiently and professionally, ensuring that your renovation is completed on time and within budget. With a focus on durability, style, and functionality, we create spaces that not only look incredible but also improve the way you live.",
  src: "/kitchen",
  buttonDestination: "",
};

export const imageTextBoxData = {
    src: '/logo.webp',
    alt: 'Sagittarius Construction Team',
    description: "We Are A Local Nova Scotian Team. Delivering Up To Date Construction & Renovation Practices & Designs. Old School Work Ethic & Care, Giving Our Clients Workmanship On A Budget, On Time. We Proudly Commit To A Friendly & Transparent Approach To Building Lasting Relationships."
,
    title: 'Meet Our Team',
    buttonLink: '/about-us',
    buttonText: 'Learn More'
};
  

  export const imageTextBoxData2 = {
    src: '/logo.webp', // Replace with your image source
    alt: 'Lorem Ipsum Team',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  
    reverse: false, // Optional: You can set it to true if needed to adjust the layout
    title: 'Find a home',
    buttonLink: '/buy-home', // Link to the About page
    buttonText: 'Learn More'
  };


  export const experienceCardData = {
    title: 'Expert Craftsmanship in Every Build',
    src: '/logo.webp',
    alt: 'Experienced Builders',
    description: 
    "At Sagittarius Construction, we specialize in high-quality renovations, carpentry, decks, and fences that elevate both indoor and outdoor spaces. With years of experience in the industry, we take pride in delivering durable, aesthetically pleasing, and functional solutions tailored to your needs.\n\n Whether you're looking for a custom-built deck, a stylish fence, expert flooring and trim work, or full-scale home renovations, our skilled team is committed to precision, craftsmanship, and customer satisfaction. From kitchens and bathrooms to siding and roofing, we handle every project with the utmost care and professionalism, ensuring long-lasting results that enhance your home’s beauty and value."
,
aspects: [

    'Decks & Fences',
    'Flooring & Trim',
    'Renovations',
    'Siding & Roofing',
    'Kitchens & Bathrooms',
    'And Much More!',
],

    link: '/contact',
    reverse: false,
    aspectHeader: 'We offer all aspects of carpentry, including...',
};

  //interface Props {
//     title?: string;
//     description?: string;
//     bgImage?:boolean
//     images: {
//         src: string;
//         alt: string;
//         title:string,
//         description:string,
//         link?:string,
//         date?:string
       
//     }[];
//     iframe?:boolean
   
// }
  
export const textAndListData = {
    subTitle: "Why Choose Sagittarius Construction?",
    title: "Deck and Fence Specialists You Can Trust",
    src: "/logo.webp",
    alt: "Sagittarius Construction Logo",
    description:
      "We bring expertise, precision, and dedication to every deck and fence project. Our goal is to create outdoor spaces that are both functional and visually appealing. Contact us today for a consultation.",  
    listAspects: [
        {
            src: "/materials.jpg",
            alt: "Premium Materials",
            title: "High-Quality Materials",
            description: "We use only the best materials to ensure long-lasting decks and fences.",
        },
        {
            src: "/design.jpg",
            alt: "Custom Designs",
            title: "Custom Designs",
            description: "Every project is tailored to match your style and outdoor space.",
        },
        {
            src: "/reliable.jpg",
            alt: "Reliable Service",
            title: "Reliable & Efficient",
            description: "We complete projects on time and with meticulous attention to detail.",
        }
    ],
};




  export const parallaxTextContentData = {
    src: '/place-holder.jpg',
    alt: 'Lorem Ipsum Team',
    isVideo: false,
    muted: false,
    // thumbnail: false,
    description: "Chris hosts a captivating podcast that brings together voices from across Halifax, diving into stories of success, business, and community impact. Each episode offers listeners valuable insights, engaging discussions, and a fresh perspective on local industries.\n\n" +  
    "From entrepreneurs to creatives, Chris explores what drives Halifax forward, sharing inspiring conversations with influential guests. Whether you're looking to learn, connect, or be entertained, this podcast is your go-to source for real conversations that matter.",  

    heading: 'The Halifax Network Podcast',
    subHeading: 'Keeping you connected'
  };




export const closingStatement = {
  title: "Transform Your Well-Being Today",
  description: `Whether you’re buying your first home, upgrading to a dream property, or selling to start a new chapter, I’m here to make the process simple and stress-free. With deep roots in Halifax and over a decade of sales and marketing experience, I combine local market knowledge with personalized service to help you reach your real estate goals.

  As a proud member of RE/MAX Nova, I focus on delivering results while building lasting relationships. My mission is to provide expert advice, innovative strategies, and clear communication every step of the way.
  
  Let’s navigate the Halifax real estate market together—whether you're looking for a cozy home in Sackville, a vibrant condo in Downtown Halifax, or a rental property to build your investment portfolio.
  
  Ready to get started? I’d love to hear your story and help you take the next step.`,
  buttonText: "Book Your Appointment Now",
  buttonDestination: "/contact",
};

// src:string,
// alt:string,
// name:string,
// title:string
// description:string,
// quote:string
// phone:string,
// email:string,


// export const contactData = {
//   src:'/chris-nobg.png',
//   alt:'Chris Crowell',
//   name:'Chris Crowell',
//   title:'Your Netword Realtor',
//   description:'Ready to go',
//   quote:'Your can place an ending statment here or something else.',
//   phone:'902-209-3919',
//   email:'chriscrowell@remaxNova.ca'
  
// }


export const testimonials = [
  {
    name: "Ernestine Meagher-Oakley",
    src: "/place-holder.jpg",
    description:
      "I am very pleased with the work on our deck and front railing. The work is top quality. Michael and Crew do their own work and do not contract out. They are fair, dependable and great to work with.",
    date: "a month ago",
    alt: "Testimonial from Alicia Lockhart"
  },
  {
    name: "Michela Demarco",
    src: "/place-holder.jpg",
    description:
      "Does great work and is always reliable!",
    date: "a month ago",
    alt: "Testimonial from Jake Gaudet"
  },
  {
    name: "Rose Dillman",
    src: "/place-holder.jpg",
    description:
      "I had Mike and crew to do gable ends on my house. I was very pleased with the work. when he found something else wrong that should be fixed, he let me know before going ahead. very reasonable price and very careful and considerate of property. Nice job guys.",
    date: "a month ago",
    alt: "Testimonial from Adam Piercey"
  },
  {
    name: "Rachael Taylor",
    src: "/place-holder.jpg",
    description:
      `I have been fortunate enough to have Michael and his crew on a couple projects. Obviously I am pleased with the work and the end results, thus the review. But what impressed me was them taking the time to confirm the integrity of the surrounding area, making suggestions to improve the function and longevity of my outdoor living space, and their clear concise communications. Not to mention their quote was accurate, and extremely reasonable compared to the others I received. 
      You will love the beauty that Sagittarius C&R creates for your custom project. From the quality of the materials to the time and attention to detail, you will see the pride they take in their work every step of the way.`,
    date: "5 months ago",
    alt: "Testimonial from John Gilfillan"
  },
//   {
//     name: "Bryan Lawlor",
//     src: "/place-holder.jpg",
//     description:
//       "Chris was great to deal with! He is very knowledgeable of the industry and fully understood our needs and wants. Also was readily available to have phone calls when we needed to ask questions!",
//     date: "4 weeks ago",
//     alt: "Testimonial from Bryan Lawlor"
//   },
//   {
//     name: "Bonnie Noddin",
//     src: "/place-holder.jpg",
//     description:
//       "Amazing customer service and a whole lot of support through the first-time home buyers process. Couldn't have asked for a better agent on my side! Thanks so much, Chris - you made this experience so positive for us! Quick responses, strong support!",
//     date: "5 months ago",
//     alt: "Testimonial from Bonnie Noddin"
//   },
//   {
//     name: "John Vo",
//     src: "/place-holder.jpg",
//     description:
//       "Chris is a very knowledgeable and responsive realtor. He goes above and beyond for his clients and I recommend him for anyone looking to buy or sell their home. You won't be disappointed!",
//     date: "4 months ago",
//     alt: "Testimonial from John Vo"
//   },
//   {
//     name: "Cathy MacDonald",
//     src: "/place-holder.jpg",
//     description:
//       "Best broker ever. Chris was very knowledgeable and always there when I needed him. He made the purchase of my home stress-free. Whatever I needed, whatever questions I had he was there. I highly recommend Chris to everyone.",
//     date: "a year ago",
//     alt: "Testimonial from Cathy MacDonald"
//   },
//   {
//     name: "Marilou Simons",
//     src: "/place-holder.jpg",
//     description:
//       "Chris is absolutely phenomenal- he helped myself and my husband every step of the way through the process of buying our first home- which, in this market/time, we weren’t sure would happen, let alone have a good time while doing it.",
//     date: "a year ago",
//     alt: "Testimonial from Marilou Simons"
//   },
//   {
//     name: "Austin Maillet",
//     src: "/place-holder.jpg",
//     description:
//       "Easy to work with, knows his stuff, got us the price we wanted - what more could you ask for? Chris is good at what he does!",
//     date: "a month ago",
//     alt: "Testimonial from Austin Maillet"
//   },
//   {
//     name: "LUCAS RIBEIRO DE SOUZA Ribeiro",
//     src: "/place-holder.jpg",
//     description:
//       "Absolutely fantastic, caring, all-time available and honest and transparent. I cannot encourage enough anyone buying a home to go with this man. He is just great and cares for his clients with all he has. Thanks again for all your hard work, Chris! You rock!",
//     date: "8 months ago",
//     alt: "Testimonial from LUCAS RIBEIRO DE SOUZA Ribeiro"
//   },
//   {
//     name: "Joline LeBlanc",
//     src: "/place-holder.jpg",
//     description:
//       "Chris took the stress out of trying to sell my place from across the country. No matter what hurdles were put in the way, he was prepared to deal with them and keep the process moving forward. Great communication throughout the whole process!",
//     date: "a year ago",
//     alt: "Testimonial from Joline LeBlanc"
//   }
];


export const dualImageData = [
    {
        src1:'/sad-face.png',
        alt1:'sad man',
        src2:'/happy-face.jpg',
        alt2:'happy man',
        description:'Before i tried youth bar i was very sad'+
        " as i had a non youthful face but now i am happy because i look young again due to youth bar's great services",
        name:"Jonathan"
    },
    {
        src1:'/sad-face.png',
        alt1:'sad man',
        src2:'/happy-face.jpg',
        alt2:'happy man',
        description:'Before i tried youth bar i was very sad'+
        " as i had a non youthful face but now i am happy because i look young again due to youth bar's great services",
        name:"Jonathan"
    },
    {
        src1:'/sad-face.png',
        alt1:'sad man',
        src2:'/happy-face.jpg',
        alt2:'happy man',
        description:'Before i tried youth bar i was very sad'+
        " as i had a non youthful face but now i am happy because i look young again due to youth bar's great services",
        name:"-Jonathan, satisfied customer"
    },
    {
        src1:'/sad-face.png',
        alt1:'sad man',
        src2:'/happy-face.jpg',
        alt2:'happy man',
        description:'Before i tried youth bar i was very sad'+
        " as i had a non youthful face but now i am happy because i look young again due to youth bar's great services",
        name:"-Jonathan, satisfied customer"
    }
]



export const gridItems = [
    {
        url:'/deck.webp',
        title:'A deck for sagittarius construction'
    },
    {
        url:'/indoor-1.webp',
        title:'A indoor image for sagittarius construction'
    },
    {
        url:'/kitchen-2.webp',
        title:'A kitchen from sagittarius construction'
    },
    {
        url:'/tyvek.webp',
        title:'A deck for sagittarius construction'
    },
    {
        url:'/wall-after.webp',
        title:'A deck for sagittarius construction'
    },
    {
      url:'/big-fence.webp',
       title:'A deck for sagittarius construction'
    },
    {
      url:'/deck2.webp',
      title:'A deck for sagittarius construction'
    },
   {
    url:'/deck4.webp',
    title:'A deck for sagittarius construction'

   },
   {
    url:'/kitchen.webp',
    title:'A kitchen'
   }
]

  
export const deckTextBox: ContentProps = {
  src: '/deck3.webp',
  alt: 'A big deck for Sagittarius Construction',
  description: 'Our team specializes in designing and building high-quality, durable decks that enhance outdoor spaces. We use premium materials and expert craftsmanship to create decks that are both stylish and long-lasting, ensuring you get the perfect space for relaxing and entertaining. Whether you need a spacious deck for hosting gatherings or a cozy retreat for quiet evenings, we tailor every project to your needs. Our attention to detail and commitment to excellence guarantee a deck that not only looks great but also withstands the test of time.',
  title: 'Our Decks',
};

export const fenceTextBox: ContentProps = {
  src: '/big-fence.webp',
  alt: 'A tall wooden fence built by Sagittarius Construction',
  description: 'We build strong, aesthetically pleasing fences that provide security, privacy, and curb appeal. Whether you need a classic wooden fence, a modern design, or a fully customized solution, we ensure top-tier craftsmanship and high-quality materials. Our fences are built to endure harsh weather conditions while maintaining their beauty and functionality. From enhancing the look of your property to keeping your space secure, our expertly crafted fences are designed to meet your specific requirements, giving you peace of mind and a standout property boundary.',
  title: 'Our Fences',
};

export const aspectsData = [
  {
    title: "Expertise and Experience",
    src: "/big-fence.webp",
    description: "Our team has extensive experience in various types of construction projects, ensuring high-quality results.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Skilled Workforce",
    src: "/big-fence.webp",
    description: "We employ skilled professionals who are trained in the latest construction techniques and safety standards.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Quality Materials",
    src: "/big-fence.webp",
    description: "We use only the best materials to ensure durability and longevity in all our projects.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Customer-Centric Approach",
    src: "/big-fence.webp",
    description: "We prioritize our clients’ needs and provide personalized service to ensure that your vision is realized.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Timely Completion",
    src: "/big-fence.webp",
    description: "We understand the importance of deadlines and work diligently to complete projects on time without compromising quality.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Transparent Pricing",
    src: "/big-fence.webp",
    description: "Our pricing is competitive and transparent, with no hidden fees. We provide detailed estimates to help you budget effectively.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Sustainability Practices",
    src: "/big-fence.webp",
    description: "We are committed to environmentally friendly practices, using sustainable materials and energy-efficient techniques wherever possible.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Strong Reputation",
    src: "/big-fence.webp",
    description: "Our company has a solid track record of satisfied clients and successful projects, which speaks to our reliability and quality of work.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Comprehensive Services",
    src: "/big-fence.webp",
    description: "We offer a wide range of services, from initial design and planning to construction and post-project support.",
    alt: "A reason to choose Sagittarius Construction",
  },
  {
    title: "Safety Commitment",
    src: "/big-fence.webp",
    description: "Safety is our top priority. We adhere to strict safety protocols to ensure the well-being of our team and clients.",
    alt: "A reason to choose Sagittarius Construction",
  },
];



  