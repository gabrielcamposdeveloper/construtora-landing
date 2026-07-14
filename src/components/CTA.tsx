function CTA() {
  return (
    <section
      id="contact"
      className="bg-neutral-900 text-white"
    >
      <div className="container text-center">

        <span className="uppercase tracking-[5px] text-amber-500">
          Vamos conversar
        </span>

        <h2 className="text-5xl font-bold mt-6 mb-6">
          Transforme seu projeto em realidade.
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto leading-8 mb-10">
          Nossa equipe está preparada para desenvolver soluções
          modernas, seguras e personalizadas para sua obra.
        </p>

        <button className="bg-amber-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-amber-400 transition">
          Solicitar orçamento
        </button>

      </div>
    </section>
  );
}

export default CTA;