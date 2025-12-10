import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BooksyButton from './BooksyButton';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 'jz',
      initials: 'JZ',
      name: 'Justyna Ziółkowska',
      role: 'KOSMETOLOG',
      shortBio: 'Założycielka ORANŻERII. Łączy nowoczesną kosmetologię z podejściem holistycznym.',
      fullBio: [
        'To Justyna w ORANŻERII zadba o Waszą skórę i zdrowy, promienny wygląd, łącząc nowoczesną kosmetologię, laseroterapię oraz holistyczne podejście w duchu well aging.',
        'Jako założycielka ORANŻERII z pasją i doświadczeniem wykonuje skuteczne i bezpieczne zabiegi kosmetologiczne oraz laserowe, które wspierają naturalne procesy skóry i pomagają cieszyć się zdrowym pięknem na dłużej. Justyna tworzy indywidualne beauty plany, dopasowane do Waszych potrzeb i celów - niezależnie od tego, czy chcesz zniwelować oznaki starzenia, poprawić kondycję skóry wrażliwej czy walczysz z trądzikiem. Dzięki temu każdy zabieg przynosi realne efekty i komfort.'
      ]
    },
    {
      id: 'as',
      initials: 'AS',
      name: 'Agnieszka Sukiennik',
      role: 'LINERGISTKA',
      shortBio: 'Specjalistka od naturalnego makijażu permanentnego. Półfinalistka Mistrzostw Polski PMU 2025.',
      fullBio: [
        'To właśnie Agnieszka w ORANŻERII dba o Wasze nowe brwi, usta i skórę - tworząc makijaż permanentny, który wygląda naturalnie, harmonijnie i pięknie się goi.',
        'Z wykształcenia jest kosmetologiem, a specjalizuje się w zaawansowanych technikach pigmentacji oraz bezpiecznym usuwaniu starych makijaży. Korzysta z metod takich jak hairstroke, ombre, scalp micropigmentation (SMP) itd., by idealnie dopasować efekt do Twojej urody. Jest półfinalistką Mistrzostw Polski PMU 2025 w aż trzech kategoriach - i nieustannie się szkoli, by dawać Wam to, co najlepsze. Agnieszka słynie z precyzji, profesjonalizmu i… cudownej atmosfery podczas zabiegów. W pracy stawia na indywidualne podejście, bezpieczeństwo i efekty, które naprawdę cieszą - nie tylko wizualnie.'
      ]
    },
    {
      id: 'mn',
      initials: 'MN',
      name: 'Maja Nowak',
      role: 'SPECJALISTKA MEDYCYNY ESTETYCZNEJ',
      shortBio: 'Łączy wiedzę medyczną z estetyką, aby wydobyć Twoje naturalne piękno.',
      fullBio: [
        'Maja w ORANŻERII łączy wiedzę i doświadczenie, by dzięki medycynie estetycznej uwydatnić Twoje naturalne piękno, zachowując jednocześnie delikatność i harmonię rysów twarzy.',
        'Ukończyła szkołę kosmetyczną w Gdyni i regularnie rozwija swoje umiejętności na kursach oraz szkoleniach z zakresu kosmetologii i medycyny estetycznej. W swojej pracy stawia na bezpieczeństwo, indywidualne podejście i najwyższą jakość, korzystając tylko z certyfikowanych preparatów i sprawdzonych marek. Każdy zabieg poprzedza konsultacją oraz wywiadem medycznym, a w razie potrzeby dba o komfort stosując znieczulenie. Maja korzysta z profesjonalnych linii kosmetycznych, mezokoktajli i wypełniaczy, by osiągnąć subtelne i trwałe efekty, które zachwycają. Jej misją jest, byś każdy klient poczuł się naturalnie piękny, pewny siebie i otoczony troską - niezależnie od wieku.'
      ]
    }
  ];

  // Team Card Component
  const TeamCard = ({ member, onClick, index }) => {
    return (
      <motion.div
        layoutId={`card-${member.id}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        onClick={onClick}
        className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-100 flex flex-col items-center text-center h-full"
        whileHover={{ y: -5 }}
      >
        {/* Decorative Initials Circle */}
        <div className="w-24 h-24 rounded-full bg-[#C86B46] flex items-center justify-center text-white text-2xl font-serif mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {member.initials}
        </div>
        <h3 
          className="text-2xl font-bold text-[#2F4F4F] mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {member.name}
        </h3>
        <p className="text-xs font-bold tracking-widest text-[#C86B46] uppercase mb-4">
          {member.role}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {member.shortBio}
        </p>
        <div className="mt-auto">
          <span className="text-sm font-medium text-gray-400 group-hover:text-[#C86B46] transition-colors flex items-center gap-1">
            Poznaj mnie bliżej →
          </span>
        </div>
      </motion.div>
    );
  };

  // Modal Component
  const Modal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className="fixed inset-0 z-50 grid place-items-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        {/* Modal Content */}
        <motion.div
          layoutId={`card-${member.id}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="relative p-8 md:p-10 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors z-10"
              aria-label="Zamknij"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center mb-8">
              <div
                className="w-20 h-20 rounded-full bg-[#C86B46] flex items-center justify-center text-white text-xl font-serif mb-4 shadow-inner"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {member.initials}
              </div>
              <h2
                className="text-3xl font-bold text-[#2F4F4F] text-center"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {member.name}
              </h2>
              <p className="text-xs font-bold tracking-widest text-[#C86B46] uppercase mt-2">
                {member.role}
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
              {member.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#C86B46] text-white rounded-full hover:bg-[#B85C3A] transition-colors text-sm tracking-wide font-medium"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Zamknij
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

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
      {/* Hero Section - Elegant Split Layout */}
      <section className="relative w-full pt-24 md:pt-28 pb-20 md:pb-24 px-4 md:px-8 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2F4F4F] leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
                Witaj w ORANŻERII!
              </h1>
          <motion.p
                initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
                Miejsce, gdzie piękno spotyka się z naturą, a każdy szczegół tworzony jest z myślą o Twoim komforcie i dobrej energii.
          </motion.p>
            </motion.div>

            {/* Right: Elegant Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/img/1.jpg"
                  alt="Oranżeria - Salon Piękności"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = '/img/469171614_17842771176380714_7787508925189487850_n.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section - Two Column Layout */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                O nas
              </h2>
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  To miejsce gdzie piękno spotyka się z naturą, a każdy szczegół wnętrza stworzony jest z myślą o komforcie naszych gości którym oferujemy kompleksową gamę usług - od pielęgnacji twarzy, przez relaksujące zabiegi na ciało oraz skórę głowy aż po pielęgnację i stylizację dłoni oraz stóp.
                </p>
                <p>
                  Zatrzymaj się w ORANŻERII, gdzie przestronny, stylowy wystrój i atmosfera pełna spokoju tworzą dla Ciebie idealne warunki do relaksu, a nasz zespół profesjonalistów zadba o Twoje piękno i dobre samopoczucie. Dla nas żadne wyzwanie skórne nie jest problemem!
                </p>
                <p>
                  ORANŻERIA to połączenie najnowocześniejszych na rynku technologii i urządzeń, wysokiej jakości kosmetyków oraz doświadczenia wykwalifikowanego personelu.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/1.jpg"
                  alt="Wnętrze Oranżerii"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - White Background, Right Aligned (Z-pattern) */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-right md:text-left"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasza filozofia
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                W ORANŻERII stawiamy na świadome i spersonalizowane podejście. Każdy plan pielęgnacyjny i każdy zabieg tworzymy z myślą o tym, co najlepiej odpowiada Twojej skórze i stylowi życia.
              </p>
              <p>
                Wykorzystujemy najnowsze technologie oraz certyfikowane preparaty, łącząc je z autorskimi metodami, które gwarantują efekty naturalne, ale zauważalne.
              </p>
              <p>
                Wierzymy, że prawdziwe piękno pochodzi z harmonii ciała i ducha, dlatego podchodzimy do pielęgnacji holistycznie, z szacunkiem dla naturalności i indywidualnych potrzeb każdej osoby.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different - Cream Background, Left Aligned */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#FFFAF5]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Co nas wyróżnia?
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Jesteśmy miejscem, gdzie nowoczesna kosmetologia spotyka się z przyjazną, domową atmosferą. Nasi goście mogą liczyć na pełne bezpieczeństwo, profesjonalizm oraz wsparcie na każdym etapie pielęgnacji. Dbamy o komfort, higienę i indywidualne potrzeby - bo wiemy, że każdy zasługuje na wyjątkową troskę.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section - White Background */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasze wartości
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Pasja, profesjonalizm, empatia i ciągły rozwój – to wartości, które kierują naszą pracą każdego dnia. Nieustannie podnosimy kwalifikacje, by dostarczać usługi na najwyższym poziomie i być na bieżąco z trendami w branży beauty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 
                  className="text-2xl md:text-3xl font-bold text-[#2F4F4F] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Cream Background, 3-Column Grid */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasi specjaliści
            </h2>
            
            {/* Team Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12 md:mb-16"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg max-w-5xl mx-auto">
                <img
                  src="/img/2.jpg"
                  alt="Zespół Oranżerii"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '300px', maxHeight: '500px' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>

            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
              Poznaj specjalistki, które zadbają o Twoje piękno i komfort w ORANŻERII.
            </p>
          </motion.div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => setSelectedMember(member)}
                index={index}
              />
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedMember && (
              <Modal
                member={selectedMember}
                onClose={() => setSelectedMember(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* How We Care Section - White Background */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Jak dbamy o Ciebie?
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              W Oranżerii każdy klient otrzymuje indywidualne podejście - zaczynając od konsultacji, przez przygotowanie spersonalizowanego planu zabiegowego, aż po opiekę pozabiegowa. Jesteśmy tu, by służyć radą i wsparciem, pomagając Ci osiągnąć zdrowy, naturalny wygląd i dobre samopoczucie.
                    </p>
                  </motion.div>
                </div>
      </section>

      {/* Atmosphere Section - Cream Background */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#FFFAF5]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
              Atmosfera i miejsce
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Tworzymy przestrzeń, w której panuje ciepło, zaufanie i pełen komfort. Chcemy, aby każda wizyta była nie tylko skutecznym zabiegiem, ale także chwilą relaksu i przyjemności - miejscem, które dodaje energii i pozwala zadbać o siebie w spokoju.
            </p>
              </motion.div>
        </div>
      </section>

      {/* Final CTA Section - White Background */}
      <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-white">
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
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
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
              className="text-xl md:text-2xl font-bold text-[#2F4F4F] mb-10 md:mb-12"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Odwiedź ORANŻERIE by poczuć różnicę!
            </p>
            <div className="flex justify-center">
              <BooksyButton 
                text="Umów Konsultację" 
                variant="primary"
                size="default"
                centered={true}
                className="min-w-[280px]"
              />
                </div>
              </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
