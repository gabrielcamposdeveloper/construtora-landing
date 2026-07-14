const projects = [
  {
    title: "Residencial Aurora",
    city: "São Paulo",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900",
  },
  {
    title: "Edifício Horizon",
    city: "Campinas",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
  },
  {
    title: "Condomínio Prime",
    city: "Jundiaí",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="container">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-amber-500">
            Projetos
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Alguns dos nossos empreendimentos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl shadow-xl group"
            >
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {project.city}
                </p>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;