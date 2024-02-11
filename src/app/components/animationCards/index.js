"use client"
import { motion } from "framer-motion";


const AnimationCard = ({ imageUrl, title, description, footerLeft, footerRight, limite, age }) => {
    return <>
        <div className="group relative h-128 overflow-hidden rounded-lg bg-white">

            {/* transition-all duration-300 ease-in-out group-hover:-top-96 absolute left-0 top-0 */}
            <div className=" h-full w-full"
            >
                <img className="h-4/6 w-full object-cover" src={imageUrl} alt="" />
                <motion.div className="absolute pt-2 left-0 grid grid-col h-1/2 bg-white w-full justify-center content-between"
                    initial={{ bottom: -50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ bottom: 0 }}
                >
                    <div className="px-2 text-center">
                        <h1 className="font-serif text-xl font-semibold text-rose-500">{title}</h1>
                        <h2 className="text-center italic font-light text-sm">{age} - {limite}</h2>
                    </div>
                    <p className="px-2 text-center text-sm">{description}</p>
                    <p className="border-t-2 py-2 px-2 grid grid-cols-2 italic font-bold text-xs content-center">
                        <span className="text-left">{footerLeft}</span>
                        <span className="text-right">{footerRight}</span>
                    </p>
                </motion.div>
                {/* <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">Portugal's Hot Baloon Festival</h1>
                <p className="mt-1 px-4 text-center text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.</p> */}
            </div>
            {/* transition-all duration-300 ease-in-out group-hover:bottom-0 -bottom-96  */}


        </div>

    </>
}

export default AnimationCard;