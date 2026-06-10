import { useState } from "react";
import fotoCurriculo from '../assets/fotoCurriculo.jpeg'

function Header() {

    const [mostrarContato, setMostrarContato] = useState(false);

    return (
        <header className="perfil">
            <img src={fotoCurriculo} alt="foto elisa" className="foto-curriculo" />
            <h1>Elisa Barbosa Kappaun</h1>
            <h2>Desenvolvedora Full Stack em Formação</h2>
            <p>Petrópolis, Rio de Janeiro</p>

            <button onClick={() => setMostrarContato(!mostrarContato)}>
                {mostrarContato ? "Ocultar Contatos" : "Ver Contatos"}
            </button>

            {mostrarContato && (
                <div className="contato-info">
                    <p>📧 elisa.k@email.com</p>
                    <p>📱(24) 99999-9999</p>
                    <p>🔗https://github.com/elisakappaun-netizen </p>
                </div>
            )}
        </header>
    );
}

export default Header;