import Image from "next/image";

export default function Home() {
  return (
    <>
      <div data-scroll-container>
        {/* <section id="intro" class="h-screen flex items-center justify-center text-center bg-green-200" data-scroll-section>
          <div class="container px-5 mx-auto flex flex-col items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="relative "
            />
            <div>
              <h2 class="font-bold">Nous découvrir</h2>
              <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            </div>
          </div>
        </section> */}
        <section class="bg-contain bg-no-repeat bg-[url('/images/logo.png')] bg-gray-700 bg-blend-multiply">
          <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Path'O Calme</h1>
            <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Venez partager vos émotions naturellement.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Nous découvrir
                <span class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section class="p-20 grid grid-cols-3 gap-10" data-scroll-section>
          <div class="max-w-md bg-white border rounded-lg shadow">
            <a href="#">
              <img class="rounded-t-lg" src="/images/test.jpg" alt="" />
            </a>
            {/* <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div> */}
          </div>
          <div class="p-5 bg-gray-200 col-span-2">
            <h2 class="text-6xl">Barbara Bouillet</h2>
            <p class="py-5 text-xl">Je vous acceuille à <strong>Trept</strong></p>
            <p></p>
          </div>

        </section>
        <section id="about-section" class="py-40 bg-green-50" data-scroll-section>...</section>
        <section id="office" class="py-20" data-scroll-section>...</section>
        <section id="services" class="relative py-60 bg-green-50" data-scroll-section>...</section>
        <section id="case-studies" class="text-center" data-scroll-section>...</section>
        <section id="clients-section" class="py-40" data-scroll-section>...</section>
        <section id="contact" class="py-80 border-t-2 border-solid border-gray-50" data-scroll-section>...</section>
        <section class="h-screen flex items-center justify-center text-center bg-green-200" data-scroll-section>...</section>
        <a class="back-to-top fixed bottom-24 right-4 text-red-500 hover:text-red-600 focus:text-red-600 transition opacity-0 invisible" href="#intro" role="button" aria-label="Back to top" data-scroll-to>
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