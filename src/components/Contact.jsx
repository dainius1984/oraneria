import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = {
    phone: '+48 794 777 412',
    address: {
      street: 'ul. Ślężna 189/191 LU 2',
      city: '53-110 Wrocław'
    },
    hours: {
      weekdays: 'poniedziałek – piątek: 08:00 – 21:00',
      saturday: 'sobota: 08:00 – 14:00'
    },
    mapUrl: 'https://maps.app.goo.gl/L49coh5mvugD25PF6'
  };

  return (
    <section id="kontakt" className="w-full bg-[#FFFAF5] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">
            Odwiedź Nas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Zapraszamy do naszego salonu w sercu Wrocławia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <h3 
              className="text-2xl md:text-3xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Informacje Kontaktowe
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <svg className="w-6 h-6 text-[#C86B46] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-[#2F4F4F] mb-1">Adres</p>
                    <p className="text-gray-600">{contactInfo.address.street}</p>
                    <p className="text-gray-600">{contactInfo.address.city}</p>
                  </div>
                </div>
                <a
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C86B46] hover:underline ml-9 inline-block mt-2"
                >
                  Zobacz na mapie →
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#C86B46] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium text-[#2F4F4F] mb-1">Telefon</p>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-gray-600 hover:text-[#C86B46] transition-colors text-lg"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#C86B46] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium text-[#2F4F4F] mb-1">Godziny otwarcia</p>
                  <p className="text-gray-600">{contactInfo.hours.weekdays}</p>
                  <p className="text-gray-600">{contactInfo.hours.saturday}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://booksy.com/pl-pl/dl/show-business/263937"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary booksy-business-link mt-8 inline-block text-center"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#E08D6D',
                boxShadow: '0 10px 25px rgba(200, 107, 70, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Umów Wizytę
            </motion.a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-2 shadow-lg overflow-hidden"
          >
            <div className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1234567890123!2d17.0123456!3d51.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzI0LjQiTiAxN8KwMDAnNDQuNCJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl&q=${encodeURIComponent('ul. Ślężna 189/191 LU 2, 53-110 Wrocław')}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Salonu Oranżeria"
                className="rounded-xl"
              />
              <div className="absolute bottom-4 right-4">
                <a
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white px-4 py-2 rounded-lg shadow-md text-[#C86B46] hover:text-[#E08D6D] transition-colors text-sm font-medium flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Otwórz w Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

