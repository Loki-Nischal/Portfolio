import { motion } from "framer-motion";
import necLogo from "../assets/nec.png";

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-blue-600 mb-2">ABOUT ME</p>

          <h2 className="text-5xl font-bold mb-12">Who I Am</h2>

          <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto ">
            I'm a MERN full-stack developer passionate about building complete
            digital solutions — from responsive frontend interfaces to scalable
            backend systems and intelligent applications using Python. I
            specialize in creating modern web applications with MongoDB,
            Express.js, React, and Node.js while also leveraging Python for
            automation, AI-powered features, and backend development. Currently
            freelancing, I have experience delivering production-grade
            applications with clean UI/UX, secure APIs, database optimization,
            and real-world problem-solving. I enjoy turning ideas into fast,
            scalable, and user-focused products. Looking for a developer who can
            handle both frontend and backend development while integrating
            powerful Python solutions Let’s build something great together.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <img
                src={necLogo}
                alt="Nepal Engineering College Logo"
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              B.E Computer Engineering
            </h3>

            <p className="text-gray-400">
              Nepal Engineering College • 2021 - 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
