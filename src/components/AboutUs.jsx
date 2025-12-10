import { motion } from 'framer-motion';
import { openBooksyWidget } from '../utils/booksy';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Justyna Ziółkowska',
      role: 'KOSMETOLOG',
      description: 'To Justyna w ORANŻERII zadba o Waszą skórę i zdrowy, promienny wygląd, łącząc nowoczesną kosmetologię, laseroterapię oraz holistyczne podejście w duchu well aging.',
      details: 'Jako założycielka ORANŻERII z pasją i doświadczeniem wykonuje skuteczne i bezpieczne zabiegi kosmetologiczne oraz laserowe, które wspierają naturalne procesy skóry i pomagają cieszyć się zdrowym pięknem na dłużej. Justyna tworzy indywidualne beauty plany, dopasowane do Waszych potrzeb i celów - niezależnie od tego, czy chcesz zniwelować oznaki starzenia, poprawić kondycję skóry wrażliwej czy walczysz z trądzikiem. Dzięki temu każdy zabieg przynosi realne efekty i komfort.'
    },
    {
      id: 2,
      name: 'Agnieszka Sukiennik',
      role: 'LINERGISTKA',
      description: 'To właśnie Agnieszka w ORANŻERII dba o Wasze nowe brwi, usta i skórę - tworząc makijaż permanentny, który wygląda naturalnie, harmonijnie i pięknie się goi.',
      details: 'Z wykształcenia jest kosmetologiem, a specjalizuje się w zaawansowanych technikach pigmentacji oraz bezpiecznym usuwaniu starych makijaży. Korzysta z metod takich jak hairstroke, ombre, scalp micropigmentation (SMP) itd., by idealnie dopasować efekt do Twojej urody. Jest półfinalistką Mistrzostw Polski PMU 2025 w aż trzech kategoriach - i nieustannie się szkoli, by dawać Wam to, co najlepsze. Agnieszka słynie z precyzji, profesjonalizmu i… cudownej atmosfery podczas zabiegów. W pracy stawia na indywidualne podejście, bezpieczeństwo i efekty, które naprawdę cieszą - nie tylko wizualnie.'
    },
    {
      id: 3,
      name: 'Maja Nowak',
      role: 'SPECJALISTKA MEDYCYNY ESTETYCZNEJ',
      description: 'Maja w ORANŻERII łączy wiedzę i doświadczenie, by dzięki medycynie estetycznej uwydatnić Twoje naturalne piękno, zachowując jednocześnie delikatność i harmonię rysów twarzy.',
      details: 'Ukończyła szkołę kosmetyczną w Gdyni i regularnie rozwija swoje umiejętności na kursach oraz szkoleniach z zakresu kosmetologii i medycyny estetycznej. W swojej pracy stawia na bezpieczeństwo, indywidualne podejście i najwyższą jakość, korzystając tylko z certyfikowanych preparatów i sprawdzonych marek. Każdy zabieg poprzedza konsultacją oraz wywiadem medycznym, a w razie potrzeby dba o komfort stosując znieczulenie. Maja korzysta z profesjonalnych linii kosmetycznych, mezokoktajli i wypełniaczy, by osiągnąć subtelne i trwałe efekty, które zachwycają. Jej misją jest, byś każdy klient poczuł się naturalnie piękny, pewny siebie i otoczony troską - niezależnie od wieku.'
    }
  ];

  const values = [
    {
      id: 1,
      title: 'Pasja',
      description: 'Kochamy to, co robimy i widać to w każdym detalu naszej pracy.'
    },
    {
      id: 2,
      title: 'Profesjonalizm',
      description: 'Nieustannie podnosimy kwalifikacje, by dostarczać usługi na najwyższym poziomie.'
    },
    {
      id: 3,
      title: 'Empatia',
      description: 'Rozumiemy Twoje potrzeby i dostosowujemy się do Ciebie z pełnym zrozumieniem.'
    },
    {
      id: 4,
      title: 'Ciągły rozwój',
      description: 'Jesteśmy na bieżąco z trendami w branży beauty i najnowszymi technologiami.'
    }
  ];

  return (
    <div className="w-full bg-[#FFFAF5]">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl mb-6"
            >
              🧡
            </motion.div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Witaj w ORANŻERII!
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-md border border-orange-100/50"
          >
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              O nas:
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              To miejsce gdzie piękno spotyka się z naturą, a każdy szczegół wnętrza stworzony jest z myślą o komforcie naszych gości którym oferujemy kompleksową gamę usług - od pielęgnacji twarzy, przez relaksujące zabiegi na ciało oraz skórę głowy aż po pielęgnację i stylizację dłoni oraz stóp.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Zatrzymaj się w ORANŻERII, gdzie przestronny, stylowy wystrój i atmosfera pełna spokoju tworzą dla Ciebie idealne warunki do relaksu, a nasz zespół profesjonalistów zadba o Twoje piękno i dobre samopoczucie. Dla nas żadne wyzwanie skórne nie jest problemem!
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              ORANŻERIA to połączenie najnowocześniejszych na rynku technologii i urządzeń, wysokiej jakości kosmetyków oraz doświadczenia wykwalifikowanego personelu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-md border border-orange-100/50"
          >
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasza filozofia:
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              W ORANŻERII stawiamy na świadome i spersonalizowane podejście. Każdy plan pielęgnacyjny i każdy zabieg tworzymy z myślą o tym, co najlepiej odpowiada Twojej skórze i stylowi życia.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Wykorzystujemy najnowsze technologie oraz certyfikowane preparaty, łącząc je z autorskimi metodami, które gwarantują efekty naturalne, ale zauważalne.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Wierzymy, że prawdziwe piękno pochodzi z harmonii ciała i ducha, dlatego podchodzimy do pielęgnacji holistycznie, z szacunkiem dla naturalności i indywidualnych potrzeb każdej osoby.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-md border border-orange-100/50"
          >
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Co nas wyróżnia?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Jesteśmy miejscem, gdzie nowoczesna kosmetologia spotyka się z przyjazną, domową atmosferą. Nasi goście mogą liczyć na pełne bezpieczeństwo, profesjonalizm oraz wsparcie na każdym etapie pielęgnacji. Dbamy o komfort, higienę i indywidualne potrzeby - bo wiemy, że każdy zasługuje na wyjątkową troskę.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasze wartości:
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Pasja, profesjonalizm, empatia i ciągły rozwój – to wartości, które kierują naszą pracą każdego dnia. Nieustannie podnosimy kwalifikacje, by dostarczać usługi na najwyższym poziomie i być na bieżąco z trendami w branży beauty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-orange-100/50 text-center"
              >
                <h3 
                  className="text-xl md:text-2xl font-bold text-[#2F4F4F] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasi specjaliści:
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Za każdą wizytą w naszym salonie stoi zespół pełen pasji, doświadczenia i uważności. Nasze specjalistki łączą wspólny cel - troskę o Twoje piękno, komfort i dobre samopoczucie.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
              W ORANŻERII nie ma przypadkowych osób - każda z nas jest tutaj, by tworzyć wyjątkowe miejsce, do którego chce się wracać. Z nami możesz być pewny, że znajdziesz wsparcie i fachową opiekę dostosowaną do Twoich oczekiwań.
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-md border border-orange-100/50"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="md:w-1/3">
                    <h3 
                      className="text-2xl md:text-3xl font-bold text-[#2F4F4F] mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-lg md:text-xl text-[#C86B46] font-medium mb-4">
                      {member.role}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {member.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Care Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-md border border-orange-100/50"
          >
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Jak dbamy o Ciebie?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              W Oranżerii każdy klient otrzymuje indywidualne podejście - zaczynając od konsultacji, przez przygotowanie spersonalizowanego planu zabiegowego, aż po opiekę pozabiegowa. Jesteśmy tu, by służyć radą i wsparciem, pomagając Ci osiągnąć zdrowy, naturalny wygląd i dobre samopoczucie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-md border border-orange-100/50"
          >
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Atmosfera i miejsce:
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Tworzymy przestrzeń, w której panuje ciepło, zaufanie i pełen komfort. Chcemy, aby każda wizyta była nie tylko skutecznym zabiegiem, ale także chwilą relaksu i przyjemności - miejscem, które dodaje energii i pozwala zadbać o siebie w spokoju.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Zapraszamy do ORANŻERII!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Jesteśmy gotowe, by poznać Ciebie i Twoje potrzeby. Zapraszamy do kontaktu, umówienia konsultacji i wspólnego odkrywania Twojego naturalnego piękna. U nas znajdziesz nie tylko profesjonalne usługi, ale także zespół, który troszczy się o Ciebie z sercem.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl mb-8"
            >
              🧡
            </motion.div>
            <p 
              className="text-xl md:text-2xl font-bold text-[#2F4F4F] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Odwiedź ORANŻERIE by poczuć różnicę!
            </p>
            <motion.button
              onClick={openBooksyWidget}
              className="btn-primary booksy-business-link inline-block cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#E08D6D',
                boxShadow: '0 10px 25px rgba(200, 107, 70, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Umów Konsultację
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
