import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/cursos.css";

const Cursos = () => {
  return (
    <Container fluid className="cursos-container">
      <Row className="text-center mb-5">
        <Col>
          <motion.h1 
            className="cursos-title" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Manuais & Instruções
          </motion.h1>
          <p className="cursos-intro">
            Bem-vindo à nossa seção de Manuais & Instruções, onde oferecemos uma gama completa de recursos para apoiar sua jornada na aviação. Nosso objetivo é proporcionar a você todo o suporte necessário para aprimorar suas habilidades e alcançar excelência em sua carreira de piloto.
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h2 className="cursos-subtitle">Serviços Oferecidos:</h2>
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={6} lg={4}>
          <motion.div 
            className="cursos-card"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Body>
                <Card.Title className="cursos-service-title">Manuais</Card.Title>
                <Card.Text className="cursos-service-description">
                  Explore nossos manuais abrangentes e detalhados, que cobrem uma vasta gama de aeronaves e tópicos técnicos. Nossos manuais são elaborados para oferecer informações precisas e atualizadas sobre operações, manutenção e procedimentos das aeronaves.
                </Card.Text>
                <Button variant="primary" href="/comprar-manual">Comprar Manual</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={6} lg={4}>
          <motion.div 
            className="cursos-card"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Body>
                <Card.Title className="cursos-service-title">Cursos</Card.Title>
                <Card.Text className="cursos-service-description">
                  Oferecemos cursos especializados para diversos níveis de experiência, desde iniciantes até pilotos avançados. Nossos cursos são projetados para equipá-lo com o conhecimento e as habilidades necessárias para operar com segurança e eficiência.
                </Card.Text>
                <Button variant="primary" href="/comprar-curso">Comprar Curso</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={6} lg={4}>
          <motion.div 
            className="cursos-card"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Body>
                <Card.Title className="cursos-service-title">Simulados</Card.Title>
                <Card.Text className="cursos-service-description">
                  Nossos simulados são uma ferramenta essencial para a preparação para exames e certificações. Eles ajudam a familiarizá-lo com o formato das provas e a testar seus conhecimentos em um ambiente semelhante ao real.
                </Card.Text>
                <Button variant="primary" href="/comprar-simulado">Comprar Simulado</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={6} lg={4}>
          <motion.div 
            className="cursos-card"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Body>
                <Card.Title className="cursos-service-title">Certificações</Card.Title>
                <Card.Text className="cursos-service-description">
                  Fornecemos informações e orientações sobre as certificações necessárias para avançar em sua carreira. Nossos recursos incluem detalhes sobre os requisitos e procedimentos para obter certificações em diferentes áreas da aviação.
                </Card.Text>
                <Button variant="primary" href="/comprar-certificacao">Comprar Certificação</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={6} lg={4}>
          <motion.div 
            className="cursos-card"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Body>
                <Card.Title className="cursos-service-title">Proficiência em Inglês</Card.Title>
                <Card.Text className="cursos-service-description">
                  A proficiência em inglês é crucial para a comunicação eficaz na aviação. Oferecemos cursos de inglês especializados para aviadores, com aulas particulares adaptadas às suas necessidades individuais.
                </Card.Text>
                <Button variant="primary" href="/comprar-ingles">Comprar Curso de Inglês</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={6} lg={4}>
          <motion.div 
            className="cursos-card"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Body>
                <Card.Title className="cursos-service-title">Aulas Particulares</Card.Title>
                <Card.Text className="cursos-service-description">
                  Além dos cursos em grupo, oferecemos aulas particulares para um aprendizado mais personalizado. Nossos instrutores dedicados trabalham com você para abordar suas áreas de interesse ou dificuldade.
                </Card.Text>
                <Button variant="primary" href="/comprar-aula-particular">Comprar Aula Particular</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          <p className="cursos-conclusion">
            Explore nossos recursos e aproveite ao máximo nossos serviços para se destacar no mundo da aviação. Estamos aqui para apoiar seu crescimento e sucesso em cada etapa de sua jornada.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cursos;
