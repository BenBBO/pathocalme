const Prestation = ({ imageUrl, onClick, title, description, color }) => {
    return <>
        <article className="mx-auto w-full shadow-xl bg-cover bg-center min-h-150 transform duration-500 md:hover:-translate-y-2 cursor-pointer group"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={onClick}>
            <div className="p-5 bg-black bg-opacity-60 md:bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 md:hover:bg-opacity-60 transform duration-300">
                <h1 className="text-white text-3xl mb-5 md:transform md:translate-y-20 md:group-hover:translate-y-0 duration-300">
                    {title}
                </h1>
                <div className={`w-16 h-2 bg-${color}-500 rounded-full mb-5 transform md:translate-y-20 md:group-hover:translate-y-0 duration-300`}>
                </div>
                <p className="md:opacity-0 text-white text-xl md:group-hover:opacity-80 transform duration-500 h-20">
                    {description}
                </p>
            </div>
        </article>
    </>
}

export default Prestation;