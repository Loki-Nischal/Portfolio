const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Tech Company",
    duration: "2025",
    desc: "Built responsive UI using React.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self Employed",
    duration: "2024",
    desc: "Created business websites for clients.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-black/5">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="border-l-4 border-orange-500 pl-10 space-y-10">

          {experiences.map((exp, index) => (
            <div key={index} className="relative">

              <div className="absolute -left-[50px] top-1 w-5 h-5 bg-orange-500 rounded-full" />

              <h3 className="text-2xl font-bold">
                {exp.role}
              </h3>

              <p className="text-orange-500">
                {exp.company} • {exp.duration}
              </p>

              <p className="mt-3">
                {exp.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;