import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { AnimateOnScroll } from "./AnimateOnScroll";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!/^[0-9\s()+\-]+$/.test(formData.phone)) {
      newErrors.phone = "Telefone inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }

    if (!captchaValue) {
      newErrors.captcha = "Por favor, confirme que você não é um robô";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (captchaValue) {
        const emailParams = {
          from_name: formData.name,
          from_phone: formData.phone,
          message: formData.message,
          to_email: 'silas@gmail.com', // Substitua pelo email de destino
        };

        await emailjs.send('service_irlc2od', 'template_yp6n50e', emailParams, '6zJTvasKc_dSTwadw'); // Substitua suas credenciais do EmailJS

        setFormData({ name: "", phone: "", message: "" });
        setCaptchaValue(null);
        recaptchaRef.current.reset();
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrors({
          ...errors,
          form: "Por favor, complete o reCAPTCHA.",
        });
      }
    } catch (error) {
      setErrors({
        ...errors,
        form: `Erro ao enviar o formulário: ${error.message}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (errors.captcha) {
      setErrors({
        ...errors,
        captcha: null,
      });
    }
  };

  return (
    <section id="contato" className="contact">
      <div className="container mx-auto">
        <div className="title title--third">
          <div className="title__content">
            <div className="">
              <AnimateOnScroll direction="left" delay={0.2}>
                <div className="title__number mb-3">03</div>
                <div className="title__spacer"></div>
                <h2 className="title__text">
                  CON
                  <br className="hidden md:block" />
                  TA
                  <br className="hidden md:block" />
                  TOS
                </h2>
              </AnimateOnScroll>
            </div>
          </div>

          <div className="contact__group">
            <div className="contact__title flex flex-col md:flex-row justify-between md:items-center gap-6">
              <AnimateOnScroll direction="right" delay={0.4}>
                <div className="contact__text">
                  <p className="text-white">
                    Estamos comprometidos em oferecer atendimento personalizado. Por favor, preencha o formulário abaixo:
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        <div className="content__content mx-auto px-4 py-8">
          {isSubmitted ? (
            <AnimateOnScroll direction="zoom" delay={0.2}>
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            </AnimateOnScroll>
          ) : (
            <AnimateOnScroll direction="up" delay={0.3}>
              <form onSubmit={handleSubmit} className="py-6 mx-auto">
                {errors.form && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {errors.form}
                  </div>
                )}

                <div className="mb-6">
                  <label htmlFor="name" className="block text-white mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-yellow-500 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-white mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-yellow-500 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-yellow-500 ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="mb-6">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lfj5eUqAAAAAFr2tqcysbpqyCv4zmJVABxFEwW-" // Substitua por sua chave reCAPTCHA v2
                    onChange={handleCaptchaChange}
                    theme="dark"
                  />
                  {errors.captcha && <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-bold btn-contact transition-colors duration-300 uppercase"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </div>
              </form>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;