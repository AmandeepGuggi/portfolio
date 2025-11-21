
import NavItem from '../components/Header/NavItems'
import { Button } from '../components/Hero/Button'
import ImageFade from '../components/ImageFade';
import Container from '../components/Skills/Container'
import { useEffect, useState } from "react";

const About = () => {
  const images = [
    "/assets/images/photo2.jpeg",
    "/assets/images/photo3.jpeg",
    "/assets/images/photo4.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3s

    return () => clearInterval(interval);
  }, []);
  return (
    <section id='about' className='py-25 flex flex-col justify-center gap-3 sm:flex-row items-center'>
      <div>
        <p className='max-w-fit text-2xl '> ABOUT ME</p>
        <h1 className='lg:text-4xl text-2xl font-bold mb-7 '>Building Meaningful Digital Experiences <hr className='mt-4' /></h1>
        {/* <h3 className='text-4xl font-semibold mb-5 text-[#e2a193]'>Frontend Developer</h3> */}
        <p className='sm:text-xl text-2xl'> I'm a full-stack developer focused on building clean,
          functional, and scalable web applications. I work primarily with
          React, Node.js, Express, MongoDB, and I’ve also built multiple
          Web3-integrated projects using Thirdweb and IPFS.</p> <br />
        <p className='sm:text-xl text-2xl '>I like figuring things out, even if I don’t know them yet. If something is new, I naturally end up exploring it until it feels familiar. I enjoy picking up ideas on the go, experimenting, and improving bit by bit it’s just how I function.</p>

        <h3 className='font-bold text-3xl my-5'>What Drives Me</h3>
        <div className='flex gap-3 flex-wrap'>
          <Container
            title="{} Languages"
            text="HTML, CSS javaScript, React, Node, express, Mongo "
          />
          <Container
            title="🎓 Education"
            text="B.Tech Computer Science 2025 (7.5 CGPA)"
          />
          <Container
            title="⚙️ projects"
            text=" built more than 5 projects "
          />
        </div>

      </div>

      <div className=' flex w-[50%] sm:w-[26%]'>
        <ImageFade />
        {/* <img 
                 key={index}
                 src={images[index]}
                alt="amandeep" className='w-[70%]\rounded-full  h-[70%] ' /> */}
      </div>
    </section>
  )
}

export default About