import { Mail, Phone, User, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "", consent: false });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="pt-20">
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Расскажите о вашем проекте, и мы свяжемся с вами в ближайшее время
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-gradient-to-br from-green-50 to-white rounded-[2.5rem] p-12 border border-green-200 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="mb-4 text-3xl text-gray-900">Спасибо за обращение!</h2>
              <p className="text-xl text-gray-600">
                Мы получили вашу заявку и свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                    <User className="w-5 h-5 inline mr-2" />
                    ФИО <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EC7036] focus:border-transparent transition-all"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                    <Mail className="w-5 h-5 inline mr-2" />
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EC7036] focus:border-transparent transition-all"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EC7036] focus:border-transparent transition-all"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EC7036] focus:border-transparent transition-all resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#EC7036] border-gray-300 rounded focus:ring-[#EC7036]"
                    />
                    <span className="text-sm text-gray-600">
                      Я согласен на{" "}
                      <Link to="/privacy" className="text-[#EC7036] hover:text-[#d66330] underline">
                        обработку персональных данных
                      </Link>{" "}
                      в соответствии с политикой конфиденциальности <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] text-white rounded-2xl hover:shadow-xl hover:shadow-[#EC7036]/30 transition-all duration-300 hover:scale-105 font-medium inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
