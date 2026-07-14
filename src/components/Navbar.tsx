function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="container flex items-center justify-between h-20">

        <h1 className="text-2xl font-bold tracking-wide">
          Horizon<span className="text-amber-500">.</span>
        </h1>

        <nav className="hidden md:flex gap-10 text-gray-600 font-medium">

          <a
            href="#about"
            className="hover:text-black transition"
          >
            Sobre
          </a>

          <a
            href="#features"
            className="hover:text-black transition"
          >
            Diferenciais
          </a>

          <a
            href="#projects"
            className="hover:text-black transition"
          >
            Projetos
          </a>

          <a
            href="#contact"
            className="hover:text-black transition"
          >
            Contato
          </a>

        </nav>

        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Orçamento
        </button>
      </div>
    </header>
  );
}

export default Navbar;