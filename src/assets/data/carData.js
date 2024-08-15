// import all images from assets/images directory
import img01 from "../all-images/plane-img/c1521.jpeg";
import img02 from "../all-images/plane-img/c1721.jpeg";
import img03 from "../all-images/plane-img/c3101.jpeg";
import img04 from "../all-images/plane-img/b101.jpg";
import img05 from "../all-images/plane-img/b58.jpg";
import img06 from "../all-images/plane-img/se12.jpg";
import img07 from "../all-images/plane-img/king1.jpg";
import img08 from "../all-images/plane-img/phenon1.jpg";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Cessna 152",
    imgUrl: img01,
    model: "Model 1972",
    price: 250,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Single Engine",
    description: `
      <p>O <strong>Piper Seneca V</strong> é a escolha ideal para missões que requerem a confiabilidade e redundância de um avião bimotor. Ideal para voos sobre montanhas, à noite, sobre água ou terrenos inóspitos, o Seneca V oferece a tranquilidade necessária para tais cenários.</p>
     <h3>Características Principais:</h3>
      <ul class="aircraft-features">
        <li><strong>Velocidade Máxima de Cruzeiro:</strong> 197 ktas</li>
        <li><strong>Alcance:</strong> 826 nm em configurações de potência de longo alcance</li>
        <li><strong>Altitude Operacional:</strong> 25.000 pés</li>
        <li><strong>Configuração:</strong> Múltiplas portas de entrada e bagagem</li>
        <li><strong>Interior:</strong> Conforto de classe cabine</li>
      </ul>
      <p>Com seu desempenho robusto e a capacidade de atender a necessidades de transporte pessoal e negócios, o Piper Seneca V é a ferramenta perfeita para voos exigentes.</p>
    ` },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Cessna 172",
    imgUrl: img02,
    model: "Model-1972",
    price: 850,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Single Engine",
    description: `
     <p>O <strong>Cessna 172</strong> é uma aeronave versátil usada para treinamento, voos pessoais e comerciais leves. Com uma reputação sólida por sua robustez, é ideal para pilotos de todos os níveis.</p>
<p>É amplamente utilizado ao redor do mundo por suas características de voo confiáveis e sua capacidade de operar em diferentes condições.</p>
<h3>Características Principais:</h3>
<ul class="aircraft-features">
  <li><strong>Velocidade Máxima de Cruzeiro:</strong> Aproximadamente 220 km/h</li>
  <li><strong>Alcance:</strong> Aproximadamente 1.200 km</li>
  <li><strong>Altitude Operacional:</strong> Até 14.000 pés</li>
  <li><strong>Configuração:</strong> 4 assentos</li>
  <li><strong>Interior:</strong> Confortável e espaçoso</li>
  <li><strong>Tipo de Motor:</strong> Motor de um único cilindro</li>
</ul>
<p>O Cessna 172 combina performance confiável com conforto, sendo uma excelente escolha para treinamento e viagens pessoais.</p>` },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "Cessna 310",
    imgUrl: img03,
    model: "Model-1971",
    price: 1.203,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Mult Engine",
    description:`
     <p>O <strong>Cessna 310</strong> é uma aeronave de alto desempenho com motor duplo, ideal para negócios e voos de longa distância. Seu design robusto e velocidade fazem dele uma opção premium para pilotos experientes.</p>
<p>Com capacidade para mais passageiros e maior alcance, o Cessna 310 é perfeito para viagens rápidas e transporte de passageiros.</p>
<h3>Características Principais:</h3>
<ul class="aircraft-features">
  <li><strong>Velocidade Máxima de Cruzeiro:</strong> Aproximadamente 370 km/h</li>
  <li><strong>Alcance:</strong> Aproximadamente 1.500 km</li>
  <li><strong>Altitude Operacional:</strong> Até 20.000 pés</li>
  <li><strong>Configuração:</strong> 6 assentos</li>
  <li><strong>Interior:</strong> Confortável e de luxo</li>
  <li><strong>Tipo de Motor:</strong> Motor de múltiplos cilindros</li>
</ul> ` },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Bonanza",
    imgUrl: img04,
    model: "Model-1985",
    price: 3.178,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Single Engine",
    description:`
     <p>O <strong>Beechcraft Bonanza</strong> é conhecido por seu desempenho robusto e design elegante. Ideal para voos pessoais e de negócios, oferece um excelente equilíbrio entre velocidade e conforto.</p>
<p>Com uma cabine confortável e capacidades avançadas, o Bonanza é uma escolha confiável para quem busca desempenho e estilo.</p>
<h3>Características Principais:</h3>
<ul class="aircraft-features">
  <li><strong>Velocidade Máxima de Cruzeiro:</strong> Aproximadamente 300 km/h</li>
  <li><strong>Alcance:</strong> Aproximadamente 1.200 km</li>
  <li><strong>Altitude Operacional:</strong> Até 18.000 pés</li>
  <li><strong>Configuração:</strong> 4-6 assentos</li>
  <li><strong>Interior:</strong> Luxuoso e confortável</li>
  <li><strong>Tipo de Motor:</strong> Motor de um único cilindro</li>
</ul>
<p>O Beechcraft Bonanza é ideal para quem procura uma aeronave que combine estilo e desempenho para viagens de longo alcance.</p>`

},

  {
    id: 5,
    brand: "Baron",
    rating: 94,
    carName: "Baron",
    imgUrl: img05,
    model: "Model-1991",
    price: 2.454,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Multi Engine",
    description:`<p>O <strong>Beechcraft Baron</strong> é uma aeronave de alto desempenho com motor duplo, projetada para conforto e eficiência. É ideal para voos de negócios e transporte rápido de passageiros.</p>
<p>Seu desempenho superior e espaço interno confortável tornam o Baron uma excelente escolha para quem necessita de uma aeronave rápida e confiável.</p>
<h3>Características Principais:</h3>
<ul class="aircraft-features">
  <li><strong>Velocidade Máxima de Cruzeiro:</strong> Aproximadamente 350 km/h</li>
  <li><strong>Alcance:</strong> Aproximadamente 1.500 km</li>
  <li><strong>Altitude Operacional:</strong> Até 20.000 pés</li>
  <li><strong>Configuração:</strong> 6 assentos</li>
  <li><strong>Interior:</strong> Luxuoso e espaçoso</li>
  <li><strong>Tipo de Motor:</strong> Motor de múltiplos cilindros</li>
</ul>
<p>O Beechcraft Baron é perfeito para quem busca uma combinação de velocidade e conforto em uma aeronave de alto desempenho.</p>

    `    },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Seneca 2",
    imgUrl: img06,
    model: "Model-1973",
    price: 2.385,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Multi Engine",
    description: ` <p>O <strong>Piper Seneca II</strong> é uma aeronave bimotor ideal para viagens de negócios e transporte de passageiros com alta confiabilidade. Seu desempenho robusto e capacidade para múltiplos passageiros a torna uma escolha excelente.</p>
<p>O Seneca II é especialmente útil para voos em áreas remotas e difíceis, oferecendo conforto e segurança em todas as condições.</p>
<h3>Características Principais:</h3>
<ul class="aircraft-features">
  <li><strong>Velocidade Máxima de Cruzeiro:</strong> Aproximadamente 300 km/h</li>
  <li><strong>Alcance:</strong> Aproximadamente 1.400 km</li>
  <li><strong>Altitude Operacional:</strong> Até 25.000 pés</li>
  <li><strong>Configuração:</strong> 6 assentos</li>
  <li><strong>Interior:</strong> Conforto de classe cabine</li>
  <li><strong>Tipo de Motor:</strong> Motor de múltiplos cilindros</li>
</ul>
<p>Com a combinação de confiabilidade e conforto, o Piper Seneca II é ideal para missões que requerem um avião bimotor robusto e eficiente.</p> `
 },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "King Air",
    imgUrl: img07,
    model: "Model c90",
    price: 9.799,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Multi Engine",
    description:` <p>O <strong>Beechcraft King Air C90</strong> é uma aeronave turboélice de alto desempenho, ideal para voos corporativos e comerciais. Com sua capacidade para transportar vários passageiros e suas avançadas características de voo, é a escolha perfeita para viagens de longa distância.</p>
<p>Com um interior confortável e capacidades de voo excepcionais, o King Air C90 é amplamente utilizado para fretamentos e transporte de executivos.</p>
<h3>Características Principais:</h3>
<ul class="aircraft-features">
  <li><strong>Velocidade Máxima de Cruzeiro:</strong> Aproximadamente 500 km/h</li>
  <li><strong>Alcance:</strong> Aproximadamente 2.000 km</li>
  <li><strong>Altitude Operacional:</strong> Até 30.000 pés</li>
  <li><strong>Configuração:</strong> 6-9 assentos</li>
  <li><strong>Interior:</strong> Confortável e sofisticado</li>
  <li><strong>Tipo de Motor:</strong> Turboélice</li>
</ul>
<p>O King Air C90 combina desempenho robusto com luxo, sendo ideal para viagens corporativas e fretamentos de longa distância.</p>`
   },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Phenon 100",
    imgUrl: img08,
    model: "Model 3",
    price: 22.2250,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "TurboFan",
    description:` <p>O <strong>Embraer Phenom 100</strong> é um jato leve de alta performance, projetado para oferecer conforto e eficiência em viagens de longa distância. Com sua tecnologia TurboFan e design moderno, é ideal para voos executivos e

    `
   },
];

export default carData;
