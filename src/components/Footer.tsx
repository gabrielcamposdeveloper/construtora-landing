import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Horizon<span className="text-amber-500">.</span>
            </h2>

            <p className="mt-4">Construindo espaços que inspiram.</p>
          </div>

          <div className="flex gap-6">
            <FaInstagram className="text-2xl cursor-pointer hover:text-white transition" />
            <FaFacebookF className="text-2xl cursor-pointer hover:text-white transition" />
            <FaLinkedinIn className="text-2xl cursor-pointer hover:text-white transition" />
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-8 text-center">
          © 2026 Horizon Construtora. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;