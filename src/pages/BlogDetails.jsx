import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/ava-1.jpg";
import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  // Verificação se o blog existe
  if (!blog) {
    return (
      <Helmet title="Not Found">
        <section>
          <Container>
            <Row>
              <Col>
                <h2 className="section__title">Postagem não encontrada</h2>
                <p>Desculpe, não conseguimos encontrar a aeronave que você está procurando.</p>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  }

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt={blog.title} className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <div
                  className="section__description"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
                <div className="section__description mt-4">
                  <h5>Especificações:</h5>
                  <ul>
                    <li><strong>Velocidade Máxima:</strong> {blog.specifications.velocidadeMaxima}</li>
                    <li><strong>Alcance:</strong> {blog.specifications.alcance}</li>
                    <li><strong>Altitude Máxima:</strong> {blog.specifications.altitudeMaxima}</li>
                    <li><strong>Capacidade de Combustível:</strong> {blog.specifications.capacidadeCombustivel}</li>
                    <li><strong>Número de Assentos:</strong> {blog.specifications.numeroAssentos}</li>
                    <li><strong>Tipo de Motor:</strong> {blog.specifications.tipoMotor}</li>
                  </ul>
                </div>
                <div className="section__description mt-4">
                  <h5>Informações do Fabricante:</h5>
                  <ul>
                    <li><strong>Fabricante:</strong> {blog.manufacturerInfo.fabricante}</li>
                    <li><strong>País de Origem:</strong> {blog.manufacturerInfo.paisOrigem}</li>
                    <li><strong>Ano de Fabricação:</strong> {blog.manufacturerInfo.anoFabricacao}</li>
                  </ul>
                </div>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comentários</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="Comentário" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">Vítor Bruno</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Gostei!
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i className="ri-reply-line"></i> Responder
                    </span>
                  </div>
                </div>

                <div className="leave__comment-form mt-5">
                  <h4>Deixe um Comentário</h4>
                  <p className="section__description">
                    Você deve estar logado para fazer um comentário
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Nome completo" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comentário..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Postar Comentário
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Postagens Recentes</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt={item.title} className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;