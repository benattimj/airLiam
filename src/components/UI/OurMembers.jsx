import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/m1.jpg";
import ava02 from "../../assets/all-images/m2.jpg";
import ava03 from "../../assets/all-images/l3.jpg";

const OUR__MEMBERS = [
  {
    name: "Murilo Benatti",
    experience: "13 anos de experiência",
    class: "Piloto de Avião",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
    special: false,
  },

  {
    name: "Mariana Benatti",
    experience: "5 anos de experiência",
    class: "Consultora Analista ",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
    special: false,
  },

  {
    name: "Liam Benatti",
    experience: "1 anos de experiência",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
    special: true,
  },

  {
    name: "Murilo Benatti",
    experience: "years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
    special: false,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
         <img 
                src={item.imgUrl} 
                alt={item.name} 
                className={`w-100 ${item.special ? 'special-img' : ''}`} 
              />
              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>

            <h6 className="section__on text-center">
              {item.class}
            </h6>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
