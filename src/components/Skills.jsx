import { motion } from "framer-motion";
import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaGit,
  FaGithub,
  FaCode,
  FaDocker,
  FaMobileAlt,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiPostman } from "react-icons/si";

function Skills() {
  const skillCategories = {
    programming: [
      { name: "React", icon: <FaReact className="text-5xl text-blue-400" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-5xl text-yellow-400" /> },
      { name: "Python", icon: <FaPython className="text-5xl text-blue-500" /> },
      { name: "React Native", icon: <FaMobileAlt className="text-5xl text-blue-400" /> },
    ],
    frameworks: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-cyan-400" /> },
      { name: "Node.js", icon: <FaReact className="text-5xl text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-600" /> },
      { name: "Firebase", icon: <FaDatabase className="text-5xl text-yellow-500" /> },
    ],
    databases: [
      { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-600" /> },
      { name: "MySQL", icon: <FaDatabase className="text-5xl text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-blue-700" /> },
    ],
    tools: [
      { name: "Git", icon: <FaGit className="text-5xl text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-5xl text-gray-800" /> },
      { name: "VS Code", icon: <FaCode className="text-5xl text-blue-400" /> },
      { name: "Postman", icon: <SiPostman className="text-5xl text-orange-500" /> },
    ],
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white border border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-purple-600 hover:shadow-2xl hover:border-purple-500 transition-all duration-300 cursor-pointer group"
    >
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
      <p className="text-lg font-semibold text-blue-950 group-hover:text-white transition-colors duration-300">{skill.name}</p>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-orange-500 mb-2">WHAT I USE</p>
          <h2 className="text-5xl font-bold mb-8 text-white">Skills & Technologies</h2>
        </motion.div>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-orange-400 mb-6">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text" >
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;