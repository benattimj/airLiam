// import images from all-images/blog-img directory
import img01 from "../all-images/plane-img/seneca01.jpg";
import img02 from "../all-images/plane-img/cesna01.jpg";
import img03 from "../all-images/plane-img/cessna172.jpg";

const blogData = [
  {
    id: 1,
    title: "Piper Seneca V",
    author: "Murilo Bj",
    date: "12 Dec, 2020",
    time: "9pm",
    imgUrl: img01,
    description: "Com seu desempenho robusto e a capacidade de atender a necessidades de transporte pessoal e negócios,",
    quote:`<p>O <strong>Cessna 152</strong> é um avião leve ideal para treinamento e voos de lazer. Com um design simples e confiável, é perfeito para pilotos iniciantes e voos curtos.</p>
<p>Este modelo é conhecido por sua facilidade de manuseio e eficiência, tornando-se uma escolha popular para escolas de aviação e entusiastas da aviação leve.</p>
<h3>Características Principais:</h3>
<ul class="aircraft-features">
  <li><strong>Velocidade Máxima de Cruzeiro:</strong> Aproximadamente 150 km/h</li>
  <li><strong>Alcance:</strong> Aproximadamente 800 km</li>
  <li><strong>Altitude Operacional:</strong> Até 12.000 pés</li>
  <li><strong>Configuração:</strong> 2 assentos</li>
  <li><strong>Interior:</strong> Simples e funcional</li>
  <li><strong>Tipo de Motor:</strong> Motor de um único cilindro</li>
</ul>
<p>Com uma excelente reputação por sua confiabilidade e simplicidade, o Cessna 152 é uma escolha excelente para quem está começando na aviação.</p>
    `
  },
  {
    id: 2,
    title: "Cessna 152",
    author: "Murilo Bj",
    date: "12 Dec, 2020",
    time: "9pm",
    imgUrl: img02,
    description:
      " O Cessna 152 é um dos aviões de treinamento mais icônicos e confiáveis do mundo da aviação geral. ",
    quote:
      "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
  },

  {
    id: 3,
    title: "Cessna 172",
    author: "Murilo Bj",
    date: "12 Dec, 2020",
    time: "9pm",
    imgUrl: img03,
    description:`
      <div>
        <p>
          O <strong>Cessna 172 Skyhawk</strong> é um dos aviões mais populares e amplamente utilizados na aviação geral. Desde seu lançamento na década de 1950, o Cessna 172 tem sido uma escolha preferida tanto para treinamento de pilotos quanto para voos recreativos, graças à sua confiabilidade, facilidade de manejo e versatilidade.
        </p>
        <p>
          <strong>Características Principais:</strong>
        </p>
        <ul class="aircraft-features">
          <li><strong>Design Robusto:</strong> A estrutura do Cessna 172 é conhecida por sua durabilidade e resistência, tornando-o ideal para uma ampla gama de condições meteorológicas e operações.</li>
          <li><strong>Desempenho de Voo:</strong> O Cessna 172 oferece um desempenho confiável com uma velocidade de cruzeiro típica de aproximadamente 122 nós e um alcance de cerca de 640 milhas náuticas.</li>
          <li><strong>Facilidade de Treinamento:</strong> Com sua configuração simples e estável, o Cessna 172 é um excelente avião para pilotos em treinamento, proporcionando uma experiência de voo intuitiva e segura.</li>
          <li><strong>Interior Confortável:</strong> O cockpit espaçoso e a cabine bem equipada garantem conforto para pilotos e passageiros durante o voo.</li>
          <li><strong>Manutenção e Operação:</strong> O Cessna 172 é conhecido por suas baixas necessidades de manutenção e custos operacionais acessíveis, o que o torna uma escolha econômica para escolas de aviação e operadores privados.</li>
        </ul>
        <p>
          A confiabilidade do Cessna 172 e sua versatilidade em diferentes cenários fazem dele uma escolha ideal para uma variedade de missões, desde treinamento até transporte leve e voos recreativos. Sua popularidade contínua ao longo dos anos é um testemunho de seu design bem-sucedido e desempenho consistente.
        </p>
      </div>
    `, quote:
      "O Cessna 172 Skyhawk é um dos aviões mais populares e amplamente utilizados na aviação geral. Desde o seu lançamento na década de 1950, o Cessna 172 tem sido uma escolha preferida tanto para treinamento de pilotos quanto para voos recreativos, graças à sua confiabilidade, facilidade de manejo e versatilidade.",
  },
];

export default blogData;
