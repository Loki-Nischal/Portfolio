import ecommerceImg from "../assets/ecommerce.png";
import snakeImg from "../assets/snake.png";
import todoImg from "../assets/todo.png";
import getdateImg from "../assets/getdate.png";

const projects = [
  {
    title: "Product Recommendation System",
    category: "Web Dev",
    tech: "React, Python, Machine Learning",
    image: ecommerceImg,
    desc: "AI-powered product recommendation engine using collaborative filtering.",
  },
  {
    title: "Snake Game",
    category: "Game",
    tech: "Python, Pygame",
    image: snakeImg,
    desc: "Classic snake game with smooth gameplay and difficulty levels.",
  },
  {
    title: "To-Do List App",
    category: "Mobile",
    tech: "React Native, Firebase, Redux",
    image: todoImg,
    desc: "Cross-platform mobile app with cloud sync and real-time updates.",
  },
  {
    title: "Getdate",
    category: "Web Dev",
    tech: "React, Node.js, MongoDB, Firebase",
    image: getdateImg,
    desc: "Full-stack dating platform with authentication and messaging.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="flex gap-4 mb-10 flex-wrap">
          {["All", "Web Dev", "Mobile", "Game"].map((item) => (
            <button
              key={item}
              className="px-5 py-2 rounded-full border"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg"
            >

              <img
                src={project.image}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm mb-2">
                  {project.tech}
                </p>

                <p className="text-gray-500">
                  {project.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;