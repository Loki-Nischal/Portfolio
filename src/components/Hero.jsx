import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import profileImage from "../assets/Loki.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaLaptopCode
} from "react-icons/fa";

function Hero() {
  const [showTypewriter, setShowTypewriter] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(false);
    }, 2500); // Adjust timing based on your text length
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center gradient-bg px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-6xl font-bold mb-4 text-emerald-950">
            {showTypewriter ? (
              <Typewriter
                words={["Hello I'm Nischal"]}
                loop={false}
                cursor
                cursorStyle=" |"
                typeSpeed={70}
                deleteSpeed={0}
              />
            ) : (
              "Hello I'm Nischal"
            )}
          </h1>

          <h3 className="text-2xl font-semibold mb-6 text-black">
            <Typewriter
              words={[
                "Computer Engineer",
                "Full-Stack Developer",
                "Problem Solver"
              ]}
              loop={true}
              cursor
            />
          </h3>

          <p className="max-w-xl leading-relaxed mb-8 text-fuchsia-950">
            Passionate about building scalable web applications,
            modern UI/UX, and solving real-world problems using technology.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-5 text-2xl">
            <FaGithub />
            <FaLinkedin />
            <FaLaptopCode />
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >

          <img
            src={profileImage}
            className="w-[350px] rounded-full shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;