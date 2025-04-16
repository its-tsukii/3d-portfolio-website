import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="borer-b border-neutral-900 pb-4">
       <h1 className="my-20 text-center text-4xl">What I Bring To The  
            <span className="text-neutral-500">
                Table : 
            </span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity: 0, x:-100}}
                transition={{duration:0.5}}

                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl"src={aboutImg} alt="about" />
                </div>
            </motion.div>
                <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">I like to spend my free time working on side projects, exploring new tools, and completing hands-on DevOps tasks. I document and share my learnings regularly on <u><a href="https://github.com/its-tsukii/" className="text-yellow-500 hover:text-yellow-700">Hashnode</a></u>, <u><a href="https://github.com/its-tsukii/" className="text-red-500 hover:text-red-700">Github</a></u>, and <u><a href="https://medium.com/@sroy10012001" className="text-pink-500 hover:text-pink-700">Medium</a></u>—because learning is great, but sharing what you learn is even better! you can follow my Whole <u><a href="https://medium.com/@sroy10012001">Medium</a></u> Task/Project Journey!</p>
                    </div>
                </motion.div>
        </div>
    </div>
  );
};

export default About
