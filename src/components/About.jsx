import aboutImg from "../assets/girlWEB.jpg";
import{motion} from "framer-motion";

const About = () => {
  return (
    <div clasName="border-neutral-900 pb-4">
    <h1  className="my-20 text-center text-4xl">About<span className="text-neutral-500"> Me!</span>
    </h1>
     <motion.div
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:-100}}
     transition={{duration:0.5}}
     className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
             <img 
             
              className="rounded-2xl h-[350PX] w-80" src={aboutImg} alt="aboutImg"/>
        </div>
        
        </div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
         className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
             <p className="my-2 max-w-xl py-6">
             I am Priyanshi, a Full Stack Developer,I have completed my B.Tech in Computer Science and Engineering from the Institute of Engineering and Technology, Lucknow. I specialize in Next.js,React.js ,JavaScript,Tailwind CSS, HTML, Node.js,express.js,mongodb,mysql , currently leanring about LLMS and ReAct Agents  and I also have experience with  C++ and DSA. My skills include Full Stack Development, Data Structures, Algorithms, Version Control and many more  .<br></br>
             
             
             Achievements:<br></br>
• CODEFORCES — Pupil - Highest Rating: 1259
• Global Rank - 3203 in Codeforces Round 880 (Div 2)
• Global Rank - 3683 in Educational Codeforces Round 152 (Rated for Div. 2)
• Global Rank - 4444 in Codeforces Round 889 (Div. 2)<br></br>
• CODECHEF — 3 Stars - Highest Rating: 1650
• Global Rank - 147 in Starters 104 Division 4 (Rated)
• Global Rank - 321 in Starters 108 Division 3 (Rated)<br>
</br>
My ho
             </p>
        </div>
        </motion.div>
     </motion.div>
    </div>
  )
}

export default About
