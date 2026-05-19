import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Link } from "react-router";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitted(false);
      setIsOpen(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] text-white rounded-full shadow-2xl hover:shadow-[#EC7036]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Открыть форму связи"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] p-6 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-white" />
                <h3 className="text-xl text-white">Быстрая связь</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl text-gray-900 mb-2">Спасибо!</h4>
                  <p className="text-gray-600">Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 mb-6">
                    Заполните форму, и мы свяжемся с вами в течение рабочего дня
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        id="popup-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EC7036] focus:border-transparent transition-all"
                        placeholder="Иван Иванов"
                      />
                    </div>

                    <div>
                      <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        id="popup-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EC7036] focus:border-transparent transition-all"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div>
                      <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Сообщение
                      </label>
                      <textarea
                        id="popup-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EC7036] focus:border-transparent transition-all resize-none"
                        placeholder="Опишите ваш запрос..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] text-white rounded-xl hover:shadow-xl hover:shadow-[#EC7036]/30 transition-all duration-300 hover:scale-[1.02] font-medium flex items-center justify-center gap-2"
                    >
                      Отправить
                      <Send className="w-5 h-5" />
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      Или{" "}
                      <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="text-[#EC7036] hover:text-[#d66330] underline"
                      >
                        перейдите на полную форму обратной связи
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
