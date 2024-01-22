"use client"
import { motion } from "framer-motion"


export default function Home() {

  const transitionValues = {
    duration: 2,
    repeat: Infinity,
    ease: "easeOut"
  };

  return (
    <>
      <div id="intro">
        <section className="bg-contain bg-center bg-no-repeat bg-[url('/images/logo.png')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Path'O Calme</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Venez partager vos émotions naturellement.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
            >
              <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Nous découvrir
                <motion.span className="px-2" transition={{
                  y: transitionValues
                }}
                  animate={{
                    y: ["0rem", "0.5rem", "0rem"]
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
        </section>
        <section className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10 bg-green-50 p-20">
          <article className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url('/images/nature.png')" }}>
            <div className="p-5 bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
              <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                Nature
              </h1>
              <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
              </div>
              <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae
              </p>
            </div>
          </article>

          <article className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url('/images/animation.png')" }}>
            <div className="p-5 bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
              <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                Animation
              </h1>
              <div className="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
              </div>
              <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
              </p>
            </div>
          </article>

          <article className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url('/images/mediation.png')" }}>
            <div className="p-5 bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
              <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                Mediation
              </h1>
              <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
              </div>
              <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
              </p>
            </div>
          </article>
          <article className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url('/images/pension.png')" }}>
            <div className="p-5 bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
              <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                Pension/Garderie
              </h1>
              <div className="w-16 h-2 bg-green-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
              </div>
              <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
              </p>
            </div>
          </article>
        </section>
        <a className="back-to-top fixed bottom-24 right-4 text-red-500 hover:text-red-600 focus:text-red-600" href="#intro" role="button" aria-label="Back to top">
          <svg aria-hidden="true" xmlns="https://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
          </svg>
        </a>
      </div>
    </>
  );
}