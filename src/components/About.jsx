/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
      <section className="container mx-auto">
        <div className="title">
          <div className="title__content">
            <div className="">
              <div className="title__number mb-3">01</div>
              <div className="title__spacer"></div>
              <h2 className="title__text">
                SO
                <br className="hidden md:block" /> 
                BRE
                <br className="hidden md:block" /> 
                NOS
              </h2>
            </div>
          </div>

          <div className="about">
            <div className="about__subtitle">
              <p>QUEM SOMOS</p>
            </div>

            <div className="about__title md\:flex justify-between items-center">
              <div className="about__header">
                <h3>Conectando mentes, construindo o futuro</h3>
              </div>

              <div className="about__content">
                <p>
                  Nossa agência se dedica à promoção de soluções para a educação
                  corporativa, utilizando a tecnologia como ferramenta
                  principal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="info__space"></div>
          <div className="info_content">
            <div className="info__video-container">
              <video controls>
                <source src={"meuvideo.mp4"} type="video/mp4" />
                <source src={"meuvideo.webm"} type="video/webm" />
                <source src={"meuvideo.ogv"} type="video/ogg" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
            <div className="info__text">
              <p className="info__textdestaque text-white mb-3">
                Com vasta experiência em treinamento corporativo, a Penta
                oferece soluções completas e flexíveis para atender às
                necessidades específicas de cada empresa. Nossa equipe de
                especialistas em Ed Tech e desenvolvimento de talentos trabalha
                em conjunto com você para criar programas de treinamento que
                engajam, capacitam e transformam seus colaboradores em
                profissionais de alta performance.
              </p>

              <h3 className="text-white font-extrabold">O que oferecemos</h3>
              <p className=" text-white">
                Oferecemos consultoria especializada em soluções edtech e no
                desenvolvimento de comunicação assertiva, por meio da produção
                de vídeos, treinamentos corporativos e apresentações
                profissionais.
              </p>

              <h3 className="text-white font-extrabold">Público-alvo</h3>
              <p className="info__textdestaque text-white mb-5">
                Nosso foco está no setor de treinamento de empresas de médio e grande porte.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
