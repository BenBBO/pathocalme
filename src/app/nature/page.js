export default function Nature() {
  return (<>
    <section className=" bg-nature py-20">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
        <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl`}>Prévention de la nature</h1>
        <p className={`mb-8 text-2xl font-normal text-gray-300 text-text-nature lg:text-3xl sm:px-16 lg:px-48`}>découverte et respect du monde animal</p>
      </div>
    </section>
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Tout être vivant mérite respect</h2>
          <p className="mb-4">Chaque être communique différement, mais cela veut-il dire que certains êtres ne ressentent rien ?</p>
          <p className="mb-4">Tout être utilise ses 5 sens plus ou moins développés pour survivre dans la nature, mais comment ?</p>
          <p className="mb-4">Des programmes sont développés afin d'améliorer les connaissances pour mieux comprendre et respecter les êtres vivants</p>
          <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
            <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              Apprendre des autres
            </p>

            <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Échanger
            </p>

            <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Comprendre
            </p>
          </div>
          <div class="w-full">
            <div class="h-full bg-gray-100 p-4 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-2" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed mb-4 italic">On ne voit bien qu'avec le coeur, l'essentiel est invisible pour les yeux.</p>
              <a class="inline-flex items-center">
                <span class="flex-grow flex flex-col pl-2">
                  <span class="title-font font-medium text-gray-900">Le renard au Petit Prince</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src="images/l214.png" alt="affiche l214" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src="images/classe.png" alt="en classe" />
        </div>
      </div>

    </section>
  </>
  )
}