

// home one
import testimonialImg1 from "../../assets/images/testimonial/male.png";
import testimonialImg2 from "../../assets/images/testimonial/female.png";
import testimonialImg3 from "../../assets/images/testimonial/male.png";
import testimonialImg4 from "../../assets/images/testimonial/female.png";
import testimonialTwoImg1 from '../../assets/images/testimonial/testimonial-2-1.png';
import type { Testimonial, TestimonialPage, TestimonialTwo } from "./type";
import img1 from "../../assets/images/testimonial/testimonial-1-1.jpg";
import img2 from "../../assets/images/testimonial/testimonial-1-2.jpg";
import img3 from "../../assets/images/testimonial/testimonial-1-3.jpg";
import img4 from "../../assets/images/testimonial/testimonial-1-4.jpg";
import img5 from "../../assets/images/testimonial/testimonial-1-5.jpg";
import img6 from "../../assets/images/testimonial/testimonial-1-6.jpg";

export const testimonials: Testimonial[] = [
    {
        id: 1,
        image: testimonialImg1,
        name: "IT Director",
        position: "Global Telecom Company",
        text: "IP Global Services demonstrated exceptional expertise in designing and implementing our enterprise network infrastructure. Their team ensured a seamless deployment while maintaining high security and performance standards.",
        rating: 5
    },
    {
        id: 2,
        image: testimonialImg2,
        name: "Technology Manager",
        position: "Enterprise Organization",
        text: "The team provided outstanding support during our cloud infrastructure migration. Their technical knowledge and proactive approach made the entire process smooth and efficient.",
        rating: 5
    },
    {
        id: 3,
        image: testimonialImg3,
        name: "Operations Head",
        position: "Financial Services Company",
        text: "IP Global Services helped us modernize our data center infrastructure with minimal disruption to our operations. Their professionalism and commitment to quality were impressive.",
        rating: 5
    },
    {
        id: 4,
        image: testimonialImg4,
        name: "CIO",
        position: "Technology Solutions Provider",
        text: "Their consulting team provided clear insights and strategic guidance that helped us align our technology with our business goals. We value their expertise and long-term partnership.",
        rating: 5
    },

];

// home one

//testimonials two





export const testimonialsTwo: TestimonialTwo[] = [
    {
        id: 1,
        name: 'Sarah Olivia',
        title: 'Project Manager',
        image: testimonialTwoImg1,
        link: '/testimonials',
        text: `"I have been thoroughly impressed with the service provided. The team exceeded our expectations in every way, delivering results that truly made a difference. I highly recommend them!"`,
    },
    {
        id: 2,
        name: 'Sarah Albart',
        title: 'Project Manager',
        image: testimonialTwoImg1,
        link: '/testimonials',
        text: `"Fantastic experience! The professionalism and creativity of the team truly stood out. Our collaboration resulted in outstanding outcomes."`,
    },
    {
        id: 3,
        name: 'Jessica Brown',
        title: 'Project Manager',
        image: testimonialTwoImg1,
        link: '/testimonials',
        text: `"Absolutely wonderful service from start to finish. Their dedication and attention to detail made all the difference."`,
    },
];


// Testimonials page

export const testimonialsPage: TestimonialPage[] = [
  {
    id: 1,
    name: "Olivia Rose",
    role: "Marketing Director",
    image: img1,
    text: `"Exceptional service and attention to detail! The team went above and beyond to ensure our project was a success. Highly recommend!"`,
    rating: 5,
  },
  {
    id: 2,
    name: "Michael James",
    role: "Operations Officer",
    image: img2,
    text: `"The product exceeded my expectations. Great quality and fast delivery. I'll definitely be a returning customer!"`,
    rating: 4,
  },
  {
    id: 3,
    name: "Liam Alexander",
    role: "Senior Software Engineer",
    image: img3,
    text: `"Customer support was fantastic. They were responsive and resolved my issue quickly. Overall, a wonderful experience!"`,
    rating: 5,
  },
  {
    id: 4,
    name: "Alex Hales",
    role: "Marketing Director",
    image: img4,
    text: `"Exceptional service and attention to detail! The team went above and beyond to ensure our project was a success. Highly recommend!"`,
    rating: 5,
  },
  {
    id: 5,
    name: "Michael Golf",
    role: "Operations Officer",
    image: img5,
    text: `"The product exceeded my expectations. Great quality and fast delivery. I'll definitely be a returning customer!"`,
    rating: 4,
  },
  {
    id: 6,
    name: "Lima Rose",
    role: "Senior Software Engineer",
    image: img6,
    text: `"Customer support was fantastic. They were responsive and resolved my issue quickly. Overall, a wonderful experience!"`,
    rating: 5,
  },
];
