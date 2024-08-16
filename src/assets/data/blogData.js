import img01 from "../all-images/plane-img/seneca01.jpg";
import img02 from "../all-images/plane-img/cesna01.jpg";
import img03 from "../all-images/plane-img/cessna172.jpg";
import img04 from "../all-images/plane-img/king350.webp";
import img05 from "../all-images/plane-img/g650.jpg";
import img06 from "../all-images/plane-img/p12.jpg";


const blogData = [
  {
    id: 1,
    title: "Piper Seneca V",
    author: "Murilo Bj",
    date: "12 Dec, 2020",
    time: "9pm",
    imgUrl: img01,
    description: `
      O <strong>Piper Seneca V</strong> é uma aeronave bimotor de alta performance, ideal para voos de longa distância e transporte executivo. Com uma cabine espaçosa e moderna, é uma escolha popular para quem busca conforto e eficiência.`,
    specifications: {
      velocidadeMaxima: "200 nós",
      alcance: "1.000 milhas náuticas",
      altitudeMaxima: "25.000 pés",
      capacidadeCombustivel: "123 galões",
      numeroAssentos: 6,
      tipoMotor: "2x Continental TSIO-360-RB",
    },
    manufacturerInfo: {
      fabricante: "Piper Aircraft",
      paisOrigem: "Estados Unidos",
      anoFabricacao: "1998 - presente",
    },
    quote: `
      <p>O Piper Seneca V oferece o equilíbrio perfeito entre desempenho e conforto. Sua capacidade de operar em pistas curtas e em condições meteorológicas adversas o torna uma escolha versátil para diversas missões.</p>
    `,
  },
  {
    id: 2,
    title: "Cessna 152",
    author: "Murilo Bj",
    date: "12 Dec, 2020",
    time: "9pm",
    imgUrl: img02,
    description: `
      O <strong>Cessna 152</strong> é um avião leve ideal para treinamento e voos de lazer. Com um design simples e confiável, é perfeito para pilotos iniciantes.`,
    specifications: {
      velocidadeMaxima: "107 nós",
      alcance: "415 milhas náuticas",
      altitudeMaxima: "14.700 pés",
      capacidadeCombustivel: "26 galões",
      numeroAssentos: 2,
      tipoMotor: "Lycoming O-235",
    },
    manufacturerInfo: {
      fabricante: "Cessna Aircraft",
      paisOrigem: "Estados Unidos",
      anoFabricacao: "1977 - 1985",
    },
    quote: `
      <p>Com uma excelente reputação por sua confiabilidade e simplicidade, o Cessna 152 é uma escolha excelente para quem está começando na aviação.</p>
    `,
  },
  {
    id: 3,
    title: "Cessna 172",
    author: "Murilo Bj",
    date: "12 Dec, 2020",
    time: "9pm",
    imgUrl: img03,
    description: `
      O <strong>Cessna 172 Skyhawk</strong> é um dos aviões mais populares na aviação geral. Sua confiabilidade e facilidade de manejo o tornam ideal para treinamento e voos recreativos.`,
    specifications: {
      velocidadeMaxima: "122 nós",
      alcance: "640 milhas náuticas",
      altitudeMaxima: "13.500 pés",
      capacidadeCombustivel: "56 galões",
      numeroAssentos: 4,
      tipoMotor: "Lycoming O-320",
    },
    manufacturerInfo: {
      fabricante: "Cessna Aircraft",
      paisOrigem: "Estados Unidos",
      anoFabricacao: "1956 - presente",
    },
    quote: `
      <p>O Cessna 172 é uma escolha popular tanto para treinamento de pilotos quanto para voos recreativos, graças à sua confiabilidade e versatilidade.</p>
    `,
  },
  {
    id: 4,
    title: "Beechcraft King Air 350",
    author: "Murilo Bj",
    date: "15 Jan, 2021",
    time: "3pm",
    imgUrl: img04,
    description: `
      O <strong>Beechcraft King Air 350</strong> é uma aeronave bimotor turboélice conhecida por sua versatilidade e confiabilidade. É amplamente utilizado para transporte executivo e voos charter devido à sua capacidade de operar em pistas curtas.`,
    specifications: {
      velocidadeMaxima: "312 nós",
      alcance: "1.806 milhas náuticas",
      altitudeMaxima: "35.000 pés",
      capacidadeCombustivel: "361 galões",
      numeroAssentos: 11,
      tipoMotor: "2x Pratt & Whitney PT6A-60A",
    },
    manufacturerInfo: {
      fabricante: "Beechcraft",
      paisOrigem: "Estados Unidos",
      anoFabricacao: "1984 - presente",
    },
    quote: `
      <p>O King Air 350 é um dos aviões mais versáteis em sua classe, combinando desempenho superior com conforto para os passageiros.</p>
    `,
  },
  {
    id: 5,
    title: "Gulfstream G650",
    author: "Murilo Bj",
    date: "22 Feb, 2021",
    time: "1pm",
    imgUrl: img05,
    description: `
      O <strong>Gulfstream G650</strong> é uma aeronave de ultralongo alcance conhecida por seu luxo e tecnologia de ponta. É amplamente utilizado por executivos e celebridades para viagens internacionais.`,
    specifications: {
      velocidadeMaxima: "516 nós",
      alcance: "7.000 milhas náuticas",
      altitudeMaxima: "51.000 pés",
      capacidadeCombustivel: "44.200 libras",
      numeroAssentos: 18,
      tipoMotor: "2x Rolls-Royce BR725",
    },
    manufacturerInfo: {
      fabricante: "Gulfstream Aerospace",
      paisOrigem: "Estados Unidos",
      anoFabricacao: "2008 - presente",
    },
    quote: `
      <p>O Gulfstream G650 é o epítome do luxo nos céus, oferecendo alcance inigualável e conforto sem comprometer o desempenho.</p>
    `,
  },
  {
    id: 6,
    title: "Pilatus PC-12",
    author: "Murilo Bj",
    date: "10 Mar, 2021",
    time: "4pm",
    imgUrl: img06,
    description: `
      O <strong>Pilatus PC-12</strong> é uma aeronave monomotor turboélice versátil e confiável, ideal para operações em pistas curtas e não pavimentadas. É popular tanto para transporte executivo quanto para missões especiais.`,
    specifications: {
      velocidadeMaxima: "285 nós",
      alcance: "1.845 milhas náuticas",
      altitudeMaxima: "30.000 pés",
      capacidadeCombustivel: "402 galões",
      numeroAssentos: 9,
      tipoMotor: "Pratt & Whitney PT6A-67P",
    },
    manufacturerInfo: {
      fabricante: "Pilatus Aircraft",
      paisOrigem: "Suíça",
      anoFabricacao: "1994 - presente",
    },
    quote: `
      <p>Com uma combinação única de desempenho, economia e flexibilidade, o Pilatus PC-12 é um dos aviões mais procurados no mercado de aviação geral.</p>
    `,
  },


];

export default blogData;