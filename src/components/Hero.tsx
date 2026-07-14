import hero from "../assets/Hero.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container flex h-full items-center">
        <div className="max-w-3xl text-white">

          <p className="uppercase tracking-[6px] text-amber-400 mb-4">
            Construtora Premium
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Construindo espaços que inspiram.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-8">
            Projetamos e executamos obras residenciais e comerciais
            com excelência, inovação e compromisso em cada detalhe.
          </p>

          <div className="flex gap-4 flex-wrap">

            <button className="bg-amber-500 hover:bg-amber-600 transition px-8 py-4 rounded-full text-black font-semibold">
              Conheça nossos projetos
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Solicitar orçamento
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;