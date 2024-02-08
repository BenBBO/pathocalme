"use client"
import { motion } from "framer-motion";


const AnimationCard = ({ imageUrl }) => {
    return <>
        <div className="group relative h-96 overflow-hidden rounded-lg bg-white">

            {/* transition-all duration-300 ease-in-out group-hover:-top-96 absolute left-0 top-0 */}
            <div className=" h-full w-full"
            >
                <img className="h-4/6 w-full object-cover" src={imageUrl} alt="" />
                <motion.div className="absolute left-0 grid grid-col h-1/2 bg-white w-full justify-center "
                    initial={{ bottom: -50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ bottom: 0 }}
                >
                    <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">Atelier éveil bébé</h1>
                    <p className="px-8 text-center">Le développement en pleine nature est important à cette âge pour explorer, grandir à son rythme et être accompagné</p>
                    <p className="bg-slate-200 py-4"></p>
                </motion.div>
                {/* <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">Portugal's Hot Baloon Festival</h1>
                <p className="mt-1 px-4 text-center text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.</p> */}
            </div>
            {/* transition-all duration-300 ease-in-out group-hover:bottom-0 -bottom-96  */}


        </div>

    </>
}

export default AnimationCard;