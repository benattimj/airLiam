import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/plane-img/seneca01.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Air Liam</h4>
              <h2 className="section__title">Bem vindo o site dedicado a Aviação</h2>
              <p className="section__description"> Explore um recurso completo para entusiastas e profissionais da aviação. 
                Nosso site oferece informações detalhadas sobre configurações de aeronaves, incluindo manuais e especificações técnicas.
                 Mantenha-se atualizado com as médias de preços do mercado e descubra as tendências atuais do setor. Seja você um piloto, 
                 um engenheiro aeronáutico ou simplesmente um apaixonado por aviação, 
                 aqui você encontrará tudo o que precisa para expandir seu conhecimento e manter-se à frente no mundo da aviação.
                
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Configurações
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Ficha tecnica / Preços
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Encontre aeronave qualquer lugar
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Cursos
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
