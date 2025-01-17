import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                width={150}
                height={150}
                src={project.image}
                alt={project.description}
                className="mb-6 rounded mx-auto"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {project.title}
                <span className="text-sm pl-3 text-purple-100 ">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-100"
                  >
                    View Project
                  </a>
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {project.description}
              </p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Project;
