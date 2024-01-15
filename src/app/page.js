"use client"
import Image from "next/image";
import { motion } from "framer-motion"


export default function Home() {

  const transitionValues = {
    duration: 2,
    repeat: Infinity,
    ease: "easeOut"
  };

  return (
    <>
      <div>
        {/* <section id="intro" className="h-screen flex items-center justify-center text-center bg-green-200" data-scroll-section>
          <div className="container px-5 mx-auto flex flex-col items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="relative "
            />
            <div>
              <h2 className="font-bold">Nous découvrir</h2>
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bg-contain bg-center bg-no-repeat bg-[url('/images/logo.png')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Path'O Calme</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Venez partager vos émotions naturellement.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"             
            >
              <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Nous découvrir
                <motion.span className="px-2"  transition={{
                y: transitionValues
              }}
              animate={{
                y: ["0rem", "0.5rem","0rem"]
              }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                  </svg>
                </motion.span>
              </a>
            </div>
          </div>
        </section>
        <section className="p-20 grid ">
          <motion.div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}>
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-80 w-full object-cover md:h-full md:w-80" src="images/test.jpg" alt="Modern building architecture" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Barbara Bouillet</div>
                <a href="#" className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              </div>
            </div>
          </motion.div>
          {/* <div className="max-w-md bg-white border rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg w-full object-cover" src="/images/test.jpg" alt="" />
            </a>            
          </div>
          <div className="p-5 bg-gray-200 col-span-2">
            <h2 className="text-6xl">Barbara Bouillet</h2>
            <p className="py-5 text-xl">Je vous acceuille à <strong>Trept</strong></p>
            <p></p>
          </div> */}

        </section>
        <section id="about-section" className="py-40 bg-green-50" >...</section>
        <section id="office" className="py-20">...</section>
        <section id="services" className="relative py-60 bg-green-50" >...</section>
        <section id="case-studies" className="text-center" >...</section>
        <section id="clients-section" className="py-40" >...</section>
        <section id="contact" className="py-80 border-t-2 border-solid border-gray-50" >...</section>
        <section className="h-screen flex items-center justify-center text-center bg-green-200" >...</section>
        <a className="back-to-top fixed bottom-24 right-4 text-red-500 hover:text-red-600 focus:text-red-600 transition opacity-0 invisible" href="#intro" role="button" aria-label="Back to top">
          <svg aria-hidden="true" xmlns="https://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
          </svg>
        </a>
      </div>
      {/* <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>
      </div> */}
    </>
  );
}