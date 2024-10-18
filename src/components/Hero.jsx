import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/prerakPatelProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0, scale: 0.8 },
  visible: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Prerak Patel
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="rounded-2xl"
              src={profilePic}
              alt="Prerak Patel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
