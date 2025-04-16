import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"
import {
    SiDocker,
    SiKubernetes,
    SiTerraform,
    SiGithubactions,
    SiJenkins,
    SiLinux,
    SiGnubash,
    SiGooglecloud,
  } from "react-icons/si"
  
import { FaAws } from "react-icons/fa"
import { FaJava } from 'react-icons/fa';
import { SiPython, SiGo } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';

  

  
const iconVariants = (duration) => ({
    initial: {y : -10},
    animate:{
        y:[10,-10],
        transition: {
            duration: duration, 
            ease : "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

{/* Newer Code */}
const IconCard = ({ icon: Icon, label, color, duration }) => (
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4"
    >
      <Icon className={`text-6xl ${color}`} />
      <p className="text-sm text-white">{label}</p>
    </motion.div>
  );
{/* Newer Code End */}


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            whileInView={{opacity:1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies I Use : </motion.h1>
        <motion.div whileInView={{ opacity: 1 , x:0 }}
            initial={{opacity:0,x:-100 }}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} 
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl"/>
            </motion.div>
            <motion.div variants={iconVariants(5)} 
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVariants(2)} 
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div variants={iconVariants(6)} 
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVariants(4)} 
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
            
            
                                    {/* CLOUD */}
                            <div className="mb-10 text-center text-lg text-neutral-400"></div>
                            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                                <IconCard icon={FaAws} label="AWS" color="text-yellow-400" duration={3} />
                                <IconCard icon={SiGooglecloud} label="GCP" color="text-blue-400" duration={3.5} />
                            </div>

                            {/* CONTAINERS */}
                            <div className="mb-10 text-center text-lg text-neutral-400"></div>
                            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                                <IconCard icon={SiDocker} label="Docker" color="text-blue-300" duration={2} />
                                <IconCard icon={SiKubernetes} label="Kubernetes" color="text-blue-400" duration={2.5} />
                            </div>

                            {/* CI/CD */}
                            <div className="mb-10 text-center text-lg text-neutral-400"></div>
                            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                                <IconCard icon={SiTerraform} label="Terraform" color="text-purple-500" duration={2.8} />
                                <IconCard icon={SiGithubactions} label="GitHub Actions" color="text-indigo-400" duration={3} />
                                <IconCard icon={SiJenkins} label="Jenkins" color="text-red-500" duration={3.3} />
                            </div>

                            {/* OS / SCRIPTING */}
                            <div className="mb-10 text-center text-lg text-neutral-400"></div>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <IconCard icon={SiLinux} label="Linux" color="text-yellow-300" duration={2.7} />
                                <IconCard icon={SiGnubash} label="Bash" color="text-gray-300" duration={3.2} />
                            </div>

                                                        {/* LANGUAGES */}
                            <div className="mb-10 text-center text-lg text-neutral-400"></div>
                            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                                <IconCard icon={FaJava} label="Java" color="text-orange-600" duration={3} />
                                <IconCard icon={SiPython} label="Python" color="text-blue-500" duration={3.5} />
                                <IconCard icon={SiGo} label="Go" color="text-cyan-500" duration={4} />
                                <IconCard icon={SiMysql} label="Mysql" color="text-yellow-500" duration={4} />
                            </div>



{/* Newer Code Start

                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAmazonaws className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGooglecloud className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDocker className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKubernetes className="text-7xl text-blue-300" />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTerraform className="text-7xl text-purple-600" />
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGithubactions className="text-7xl text-purple-500" />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJenkins className="text-7xl text-red-500" />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiLinux className="text-7xl text-yellow-300" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGnubash className="text-7xl text-gray-300" />
                </motion.div>

//Newer Code End */}

        </motion.div>
    </div>
  );
};

export default Technologies
