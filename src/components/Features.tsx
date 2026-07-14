import {
  Building2,
  HardHat,
  Clock3,
  ShieldCheck
} from "lucide-react";

function Features() {

  const cards = [
    {
      icon: <Building2 size={40} />,
      title: "Projetos Modernos",
      text: "Arquitetura contemporânea e soluções inteligentes."
    },
    {
      icon: <HardHat size={40} />,
      title: "Equipe Especializada",
      text: "Profissionais experientes em todas as etapas da obra."
    },
    {
      icon: <Clock3 size={40} />,
      title: "Entrega no Prazo",
      text: "Planejamento eficiente para cumprir cada cronograma."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Qualidade Garantida",
      text: "Materiais de alto padrão e acabamento impecável."
    }
  ];

  return (
    <section id="features" className="bg-gray-50">

      <div className="container">

        <div className="text-center mb-16">

          <span className="text-amber-500 uppercase tracking-widest">
            Diferenciais
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Porque escolher nossa construtora
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="text-amber-500 mb-6">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {card.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;