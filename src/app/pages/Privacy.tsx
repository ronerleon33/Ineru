import { Shield, Lock, Eye, FileText } from "lucide-react";

export function Privacy() {
  const sections = [
    {
      title: "1. Общие положения",
      content: `Настоящая Политика конфиденциальности персональных данных (далее – Политика) действует в отношении всей информации, которую INERU (далее – Компания) может получить о пользователе во время использования им сайта ine.ru.

Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.`
    },
    {
      title: "2. Персональные данные пользователей",
      content: `Под персональными данными понимается информация, которая может быть использована для идентификации пользователя, в том числе:

• Фамилия, имя, отчество
• Адрес электронной почты
• Номер телефона
• Информация о компании и должности`
    },
    {
      title: "3. Цели сбора персональных данных",
      content: `Компания собирает и обрабатывает персональные данные пользователей в целях:

• Связи с пользователем для предоставления информации о продуктах и услугах
• Обработки запросов и заявок пользователя
• Улучшения качества услуг и обслуживания клиентов
• Информирования о новых продуктах и специальных предложениях
• Выполнения обязательств перед пользователем`
    },
    {
      title: "4. Правовые основания обработки",
      content: `Обработка персональных данных осуществляется на основании:

• Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»
• Федерального закона от 27.07.2006 № 149-ФЗ «Об информации, информационных технологиях и о защите информации»
• Согласия пользователя на обработку персональных данных`
    },
    {
      title: "5. Защита персональных данных",
      content: `Компания принимает необходимые организационные и технические меры для защиты персональных данных пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.`
    },
    {
      title: "6. Права пользователей",
      content: `Пользователь имеет право:

• Получать информацию, касающуюся обработки его персональных данных
• Требовать уточнения, блокирования или уничтожения своих персональных данных
• Отозвать согласие на обработку персональных данных
• Обжаловать действия или бездействие Компании в уполномоченном органе по защите прав субъектов персональных данных`
    },
    {
      title: "7. Срок хранения данных",
      content: `Персональные данные пользователей хранятся только в течение периода, необходимого для достижения целей их обработки, но не более срока, установленного законодательством Российской Федерации.`
    },
    {
      title: "8. Изменение Политики конфиденциальности",
      content: `Компания имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента ее размещения на сайте.`
    },
    {
      title: "9. Контактная информация",
      content: `По вопросам, связанным с обработкой персональных данных, пользователи могут обращаться по адресу электронной почты: info@ine.ru`
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
            <Shield className="w-5 h-5 text-[#EC7036]" />
            <span className="text-sm font-medium text-gray-700">Защита данных</span>
          </div>
          <h1 className="mb-6 text-5xl md:text-6xl">
            Политика конфиденциальности
          </h1>
          <p className="text-xl text-gray-600">
            Политика обработки персональных данных в соответствии с законодательством РФ
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Безопасность</h3>
              <p className="text-sm text-gray-600">
                Защита ваших данных — наш приоритет
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100">
              <Eye className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Прозрачность</h3>
              <p className="text-sm text-gray-600">
                Открытая информация о обработке данных
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-teal-100">
              <FileText className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Соответствие закону</h3>
              <p className="text-sm text-gray-600">
                Согласно ФЗ-152 «О персональных данных»
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <h2 className="mb-4 text-2xl text-gray-900">{section.title}</h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
            <h3 className="mb-4 text-xl text-gray-900 font-semibold">Согласие на обработку персональных данных</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Отправляя форму на сайте ine.ru, вы подтверждаете, что ознакомились с настоящей Политикой конфиденциальности и даете согласие на обработку ваших персональных данных в соответствии с целями и условиями, указанными в данной Политике.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Вы можете в любой момент отозвать свое согласие, направив письменное уведомление на адрес электронной почты info@ine.ru
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
