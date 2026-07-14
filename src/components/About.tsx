function About() {
  return (
    <section id="about" className="bg-white">

      <div className="container grid md:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
            alt="Construção"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>

          <span className="text-amber-500 font-semibold uppercase tracking-widest">
            Sobre nós
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6">
            Mais de 20 anos construindo sonhos.
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            Atuamos na construção de empreendimentos residenciais,
            comerciais e corporativos, oferecendo soluções modernas,
            sustentáveis e com alto padrão de qualidade.
          </p>

          <p className="text-gray-600 leading-8">
            Nossa missão é transformar projetos em patrimônios sólidos,
            unindo tecnologia, inovação e uma equipe altamente qualificada.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;