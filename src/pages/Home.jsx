import React from "react";
import "../styles/home.css";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../Featured-tours/FeaturedTourList";
import MasonryImageGallery from "../components/Image-gallery/MasonryImageGallery";
import sachi_logo from '../assets/images/sachilogo.png'

const Home = () => {
  return (
    <>
      {/* ____________ Hero Section Start __________ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Eyes Are Yours See{" "}
                  <span className="highlight"> Through Us</span>
                </h1>
                <p>
                Embark on a voyage of discovery with Sachi Tourism, where every destination becomes a story, and every adventure creates memories that last a lifetime. We believe that travel is not just about visiting new places; it's about immersing yourself in diverse cultures, savoring unique flavors, and creating connections that transcend borders.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* Sections Starts */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* Featured tour section end */}

      {/* Experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Rest assured with our premium services.
                  <br />
                  We make sure you feel at peace.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>1k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>500+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={sachi_logo} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Experience section ends */}

      {/* Gallery Section starts */}
      <section>
        <Container>
          <Row>
            <Col lg='12' >
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Home;
