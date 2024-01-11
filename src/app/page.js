import Image from "next/image";

export default function Home() {
  return (
    <>
      <div data-scroll-container>
        <section id="intro" class="h-screen flex items-center justify-center text-center bg-green-200" data-scroll-section>
          <div class="container px-5 mx-auto flex flex-col items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="relative "
            />
            <div>
              <h2>Nous découvrir</h2>
              <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section class="py-40" data-scroll-section>...</section>
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