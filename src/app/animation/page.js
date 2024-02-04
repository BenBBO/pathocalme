import miniferme from "../../../public/images/miniferme.png";

export default function Animation() {
  return (<>
    <section className="bg-animation py-14">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
        <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl`}>Animation pour enfants</h1>
        <p className={`mb-8 text-2xl font-normal text-gray-300 text-text-nature lg:text-3xl sm:px-16 lg:px-48`}>diplomée du BAFA</p>
      </div>
    </section>


    <section class="bg-cover bg-no-repeat bg-gray-600 bg-blend-multiply"
      style={{ backgroundImage: `url(${miniferme.src})` }}>
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Rejoignez nous à la mini-ferme</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Située à Trept en Isère, entrez dans un parc de 3000m² arborés.
          Evoluez au milieu des animaux, entouré de différentes familles : caprin, porcin, gallinacé, lagomorphe, rongeur, réptile, insecte.
          Différentes activités sont proposées tout au long de l&apos;année afin de s&apos;émerveiller pour mieux respecter.</p>
      </div>
    </section>



  </>
  )
}