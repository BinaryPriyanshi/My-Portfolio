

import { FaReact} from "@react-icons/all-files/fa/FaReact";
import { FaHtml5} from "@react-icons/all-files/fa/FaHtml5";
import { FaNode} from "@react-icons/all-files/fa/FaNode";
import { SiMongodb} from "@react-icons/all-files/si/SiMongodb";
import { DiMysql} from "@react-icons/all-files/di/DiMysql";
import{animate, motion} from "framer-motion";
const iconVariants=(duration)=>({
   initial:{y:-10},
   animate:{y:[10,-10],
   transition:{duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
   }
},
})


const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaReact className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaHtml5 className="text-5xl text-orange-800"/>
            </motion.div>
            <motion.div variants={iconVariants(1)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaNode className="text-5xl text-green-400"/>
            </motion.div>
            <motion.div variants={iconVariants(2)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
               <DiMysql className="text-5xl text-blue-400"/>
            </motion.div>
            <motion.div variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiMongodb className="text-5xl text-green-800"/>
            </motion.div>
          
              
            </motion.div>
         </div>
         
      
  )
};

export default Technology
