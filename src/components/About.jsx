/* eslint-disable no-unused-vars */
import React from "react";
import { AnimateOnScroll } from "./AnimateOnScroll"; // Importe o componente de animação

const About = () => {
  return (
    <section id="sobre-nos" className="container mx-auto">
      <div className="title">
        <div className="title__content">
          <div className="">
            <AnimateOnScroll direction="left" delay={0.2}>
              <div className="title__number mb-3">01</div>
              <div className="title__spacer"></div>
              <h2 className="title__text">
                SO
                <br className="hidden md:block" /> 
                BRE&nbsp;
                <br className="hidden md:block" /> 
                NÓS
              </h2>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="about">
          <AnimateOnScroll direction="right" delay={0.4}>
            <div className="about__subtitle">
              <p>QUEM SOMOS</p>
            </div>
          </AnimateOnScroll>

          <div className="about__title md:flex justify-between items-center">
            <AnimateOnScroll direction="left" delay={0.6}>
              <div className="about__header">
                <h3>Aprendizado criativo, profissionais capacitados!</h3>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.8}>
              <div className="about__content">
                <p>
                Nossa agência une criatividade e tecnologia para transformar a educação corporativa.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info__space"></div>
        <div className="info_content">
          <AnimateOnScroll direction="left" delay={0.3}>
            <div className="info__video-container">
              <video controls>
                <source src="/assets/videos/video.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </AnimateOnScroll>
          <div className="info__text">
            <AnimateOnScroll direction="right" delay={0.4}>
              <p className="info__textdestaque text-white mb-3">
              Com ampla experiência em diversos setores, garantimos excelência e resultados em nossos projetos, atendendo às necessidades de organizações com prazos e orçamentos específicos.
              </p>
            </AnimateOnScroll>

{/*             <AnimateOnScroll direction="right" delay={0.5}>
              <h3 className="text-white font-extrabold">O que oferecemos</h3>
              <p className="text-white">
                Oferecemos consultoria especializada em soluções edtech e no
                desenvolvimento de comunicação assertiva, por meio da produção
                de vídeos, treinamentos corporativos e apresentações
                profissionais.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.6}>
              <h3 className="text-white font-extrabold">Público-alvo</h3>
              <p className="text-white mb-5">
                Nosso foco está no setor de treinamento de empresas de médio e grande porte.
              </p>
            </AnimateOnScroll> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;