/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  // Estado para gerenciar os valores do formulário
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  
  // Estado para gerenciar erros de validação
  const [errors, setErrors] = useState({});
  
  // Estado para o reCAPTCHA
  const [captchaValue, setCaptchaValue] = useState(null);
  
  // Estado para a mensagem de sucesso após envio
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Estado para indicar que o formulário está sendo enviado
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Limpar erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Função para validar o formulário
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

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar o formulário antes de enviar
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Aqui você faria a chamada para seu backend
      // Exemplo com fetch:
      const response = await fetch('https://sua-api.com/enviar-formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: captchaValue,
        }),
      });
      
      // Verificar se a resposta foi bem-sucedida
      if (response.ok) {
        // Limpar o formulário após o envio bem-sucedido
        setFormData({ name: "", phone: "", message: "" });
        setCaptchaValue(null);
        setIsSubmitted(true);
        
        // Reset do estado de sucesso após 5 segundos
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Se a resposta não for bem-sucedida, tratar o erro
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao enviar o formulário');
      }
    } catch (error) {
      // Tratar erros de rede ou da API
      setErrors({
        ...errors,
        form: `Erro ao enviar o formulário: ${error.message}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para lidar com a mudança do reCAPTCHA
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
    <section className="contact">
      <div className="container mx-auto">
        <div className="title title--third">
          <div className="title__content">
            <div className="">
              <div className="title__number mb-3">03</div>
              <div className="title__spacer"></div>
              <h2 className="title__text">
                CON
                <br className="hidden md:block" /> 
                TA
                <br className="hidden md:block" /> 
                TOS
              </h2>
            </div>
          </div>

          <div className="contact__group">
            <div className="contact__title flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div className="contact__text">
                <p className="text-white">
                  Estamos comprometidos em oferecer um atendimento exclusivo e
                  personalizado para você! Para começarmos, por favor, preencha o
                  formulário abaixo:
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content__content mx-auto px-4 py-8">
          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 mx-auto">
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
                  className={`w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-yellow-500 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
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
                  className={`w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-yellow-500 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
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
                  className={`w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-yellow-500 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <div className="mb-6">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Este é um sitekey de teste, você precisará substituí-lo pelo seu
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;