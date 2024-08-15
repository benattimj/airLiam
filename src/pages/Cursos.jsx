import React from 'react';
import "../styles/cursos.css";


const Cursos = () => {
  return (
    <div className="cursos-container">
      <h1 className="cursos-title">Manuais & Instruções</h1>
      <p className="cursos-intro">
        Bem-vindo à nossa seção de Manuais & Instruções, onde oferecemos uma gama completa de recursos para apoiar sua jornada na aviação. Nosso objetivo é proporcionar a você todo o suporte necessário para aprimorar suas habilidades e alcançar excelência em sua carreira de piloto.
      </p>
      <h2 className="cursos-subtitle">Serviços Oferecidos:</h2>
      <ul className="cursos-list">
        <li>
          <h3 className="cursos-service-title">Manuais</h3>
          <p className="cursos-service-description">
            Explore nossos manuais abrangentes e detalhados, que cobrem uma vasta gama de aeronaves e tópicos técnicos. Nossos manuais são elaborados para oferecer informações precisas e atualizadas sobre operações, manutenção e procedimentos das aeronaves.
          </p>
        </li>
        <li>
          <h3 className="cursos-service-title">Cursos</h3>
          <p className="cursos-service-description">
            Oferecemos cursos especializados para diversos níveis de experiência, desde iniciantes até pilotos avançados. Nossos cursos são projetados para equipá-lo com o conhecimento e as habilidades necessárias para operar com segurança e eficiência.
          </p>
        </li>
        <li>
          <h3 className="cursos-service-title">Simulados</h3>
          <p className="cursos-service-description">
            Nossos simulados são uma ferramenta essencial para a preparação para exames e certificações. Eles ajudam a familiarizá-lo com o formato das provas e a testar seus conhecimentos em um ambiente semelhante ao real.
          </p>
        </li>
        <li>
          <h3 className="cursos-service-title">Certificações</h3>
          <p className="cursos-service-description">
            Fornecemos informações e orientações sobre as certificações necessárias para avançar em sua carreira. Nossos recursos incluem detalhes sobre os requisitos e procedimentos para obter certificações em diferentes áreas da aviação.
          </p>
        </li>
        <li>
          <h3 className="cursos-service-title">Proficiência em Inglês</h3>
          <p className="cursos-service-description">
            A proficiência em inglês é crucial para a comunicação eficaz na aviação. Oferecemos cursos de inglês especializados para aviadores, com aulas particulares adaptadas às suas necessidades individuais. Nossos instrutores são experientes e podem ajudar a melhorar suas habilidades de comunicação em inglês, fundamentais para operações e interações no setor de aviação.
          </p>
        </li>
        <li>
          <h3 className="cursos-service-title">Aulas Particulares</h3>
          <p className="cursos-service-description">
            Além dos cursos em grupo, oferecemos aulas particulares para um aprendizado mais personalizado. Nossos instrutores dedicados trabalham com você para abordar suas áreas de interesse ou dificuldade, garantindo um progresso eficaz e atingindo seus objetivos de aprendizado.
          </p>
        </li>
      </ul>
      <p className="cursos-conclusion">
        Explore nossos recursos e aproveite ao máximo nossos serviços para se destacar no mundo da aviação. Estamos aqui para apoiar seu crescimento e sucesso em cada etapa de sua jornada.
      </p>
    </div>
  );
};

export default Cursos;