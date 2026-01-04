import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BooksyButton from './BooksyButton';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const teamMembers = [
    {
      id: 'jz',
      name: 'Justyna Ziółkowska',
      role: 'KOSMETOLOG',
      photo: '/img/2.jpg',
      shortBio: 'Założycielka ORANŻERII. Łączy nowoczesną kosmetologię z podejściem holistycznym.',
      fullBio: [
        'To Justyna w ORANŻERII zadba o Waszą skórę i zdrowy, promienny wygląd, łącząc nowoczesną kosmetologię, laseroterapię oraz holistyczne podejście w duchu well aging.',
        'Jako założycielka ORANŻERII z pasją i doświadczeniem wykonuje skuteczne i bezpieczne zabiegi kosmetologiczne oraz laserowe, które wspierają naturalne procesy skóry i pomagają cieszyć się zdrowym pięknem na dłużej. Justyna tworzy indywidualne beauty plany, dopasowane do Waszych potrzeb i celów - niezależnie od tego, czy chcesz zniwelować oznaki starzenia, poprawić kondycję skóry wrażliwej czy walczysz z trądzikiem. Dzięki temu każdy zabieg przynosi realne efekty i komfort.'
      ]
    },
    {
      id: 'as',
      name: 'Agnieszka Sukiennik',
      role: 'LINERGISTKA',
      photo: '/img/2.jpg',
      shortBio: 'Specjalistka od naturalnego makijażu permanentnego. Półfinalistka Mistrzostw Polski PMU 2025.',
      fullBio: [
        'To właśnie Agnieszka w ORANŻERII dba o Wasze nowe brwi, usta i skórę - tworząc makijaż permanentny, który wygląda naturalnie, harmonijnie i pięknie się goi.',
        'Z wykształcenia jest kosmetologiem, a specjalizuje się w zaawansowanych technikach pigmentacji oraz bezpiecznym usuwaniu starych makijaży. Korzysta z metod takich jak hairstroke, ombre, scalp micropigmentation (SMP) itd., by idealnie dopasować efekt do Twojej urody. Jest półfinalistką Mistrzostw Polski PMU 2025 w aż trzech kategoriach - i nieustannie się szkoli, by dawać Wam to, co najlepsze. Agnieszka słynie z precyzji, profesjonalizmu i… cudownej atmosfery podczas zabiegów. W pracy stawia na indywidualne podejście, bezpieczeństwo i efekty, które naprawdę cieszą - nie tylko wizualnie.'
      ]
    },
    {
      id: 'mn',
      name: 'Maja Nowak',
      role: 'SPECJALISTKA MEDYCYNY ESTETYCZNEJ',
      photo: '/img/2.jpg',
      shortBio: 'Łączy wiedzę medyczną z estetyką, aby wydobyć Twoje naturalne piękno.',
      fullBio: [
        'Maja w ORANŻERII łączy wiedzę i doświadczenie, by dzięki medycynie estetycznej uwydatnić Twoje naturalne piękno, zachowując jednocześnie delikatność i harmonię rysów twarzy.',
        'Ukończyła szkołę kosmetyczną w Gdyni i regularnie rozwija swoje umiejętności na kursach oraz szkoleniach z zakresu kosmetologii i medycyny estetycznej. W swojej pracy stawia na bezpieczeństwo, indywidualne podejście i najwyższą jakość, korzystając tylko z certyfikowanych preparatów i sprawdzonych marek. Każdy zabieg poprzedza konsultacją oraz wywiadem medycznym, a w razie potrzeby dba o komfort stosując znieczulenie. Maja korzysta z profesjonalnych linii kosmetycznych, mezokoktajli i wypełniaczy, by osiągnąć subtelne i trwałe efekty, które zachwycają. Jej misją jest, byś każdy klient poczuł się naturalnie piękny, pewny siebie i otoczony troską - niezależnie od wieku.'
      ]
    }
  ];

  const galleryImages = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/469171614_17842771176380714_7787508925189487850_n.jpg',
    '/img/469195222_17842771191380714_3063002111071437658_n.jpg',
    '/img/469532008_17842771203380714_8774777161940506774_n.jpg'
  ];

  const values = [
    {
      id: 1,
      title: 'Pasja',
      icon: '✨',
      description: 'Kochamy to, co robimy i widać to w każdym detalu naszej pracy.'
    },
    {
      id: 2,
      title: 'Profesjonalizm',
      icon: '🎓',
      description: 'Nieustannie podnosimy kwalifikacje, by dostarczać usługi na najwyższym poziomie.'
    },
    {
      id: 3,
      title: 'Empatia',
      icon: '💚',
      description: 'Rozumiemy Twoje potrzeby i dostosowujemy się do Ciebie z pełnym zrozumieniem.'
    },
    {
      id: 4,
      title: 'Ciągły rozwój',
      icon: '📈',
      description: 'Jesteśmy na bieżąco z trendami w branży beauty i najnowszymi technologiami.'
    }
  ];

  // Team Card Component with Photo
  const TeamCard = ({ member, onClick, index }) => {
    return (
      <motion.div
        layoutId={`card-${member.id}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        onClick={onClick}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-100 flex flex-col h-full"
        whileHover={{ y: -5 }}
      >
        {/* Portrait Photo */}
        <div className="relative w-full h-80 overflow-hidden">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 
            className="text-2xl font-bold text-[#2F4F4F] mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {member.name}
          </h3>
          <p className="text-xs font-bold tracking-widest text-[#C86B46] uppercase mb-4">
            {member.role}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
            {member.shortBio}
          </p>
          <div className="mt-auto pt-4 border-t border-gray-100">
            <span className="text-sm font-medium text-gray-400 group-hover:text-[#C86B46] transition-colors flex items-center gap-1">
              Poznaj mnie bliżej →
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  // Modal Component
  const Modal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className="fixed inset-0 z-50 grid place-items-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        <motion.div
          layoutId={`card-${member.id}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10"
        >
          <div className="relative p-8 md:p-10 overflow-y-auto">
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
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg ring-4 ring-[#C86B46]/20">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop';
                  }}
                />
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

  return (
    <div className="w-full bg-[#FFFAF5]">
      {/* Hero Lite Section - Larger Atmospheric Photo */}
      <section className="relative w-full pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Large Atmospheric Image */}
            <div className="relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl mb-8 md:mb-12">
              <img
                src="/img/1.jpg"
                alt="Oranżeria - Salon Piękności"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/img/469171614_17842771176380714_7787508925189487850_n.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Overlapping Content */}
            <div className="relative -mt-16 md:-mt-24 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F4F4F] leading-tight mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Witaj w ORANŻERII!
                </h1>
                <p 
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.35rem',
                    fontWeight: 400,
                    fontStyle: 'italic'
                  }}
                >
                  Miejsce, gdzie piękno spotyka się z naturą, a każdy szczegół tworzony jest z myślą o Twoim komforcie i dobrej energii.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Zatrzymaj się w przestrzeni, która łączy nowoczesną kosmetologię z holistycznym podejściem do piękna. W ORANŻERII znajdziesz nie tylko profesjonalne usługi, ale także atmosferę pełną spokoju i troski o Twoje dobre samopoczucie.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zigzag Storytelling - O nas & Filozofia Combined */}
      <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {/* First Block: Image Left, Text Right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/img/2.jpg"
                  alt="Wnętrze Oranżerii"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
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
            </div>
          </motion.div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center py-12 md:py-16"
          >
            <div className="relative inline-block px-8 md:px-12">
              {/* Opening quote mark - positioned above first word */}
              <span 
                className="absolute -top-4 md:-top-6 left-0 text-5xl md:text-7xl lg:text-8xl text-[#C86B46]/20 leading-none"
                style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
              >
                &ldquo;
              </span>
              <p 
                className="text-2xl md:text-3xl lg:text-4xl text-[#2F4F4F] leading-relaxed italic relative"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Prawdziwe piękno pochodzi z harmonii ciała i ducha
              </p>
              {/* Closing quote mark - positioned below last word */}
              <span 
                className="absolute -bottom-4 md:-bottom-6 right-0 text-5xl md:text-7xl lg:text-8xl text-[#C86B46]/20 leading-none"
                style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
              >
                &rdquo;
              </span>
            </div>
          </motion.div>

          {/* Second Block: Text Left, Image Right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div>
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
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/img/469171614_17842771176380714_7787508925189487850_n.jpg"
                  alt="Filozofia Oranżerii"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Soft UI Cards */}
      <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#FFFAF5]">
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
              Pasja, profesjonalizm, empatia i ciągły rozwój – to wartości, które kierują naszą pracą każdego dnia.
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
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#C86B46]/20 hover:border-[#C86B46]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 
                  className="text-xl md:text-2xl font-bold text-[#2F4F4F] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-white">
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
              Nasi specjaliści
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Poznaj specjalistki, które zadbają o Twoje piękno i komfort w ORANŻERII.
            </p>
          </motion.div>

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

      {/* What Makes Us Different */}
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
              Co nas wyróżnia?
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Jesteśmy miejscem, gdzie nowoczesna kosmetologia spotyka się z przyjazną, domową atmosferą. Nasi goście mogą liczyć na pełne bezpieczeństwo, profesjonalizm oraz wsparcie na każdym etapie pielęgnacji. Dbamy o komfort, higienę i indywidualne potrzeby - bo wiemy, że każdy zasługuje na wyjątkową troskę.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Atmosphere Gallery Section */}
      <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-white">
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
              Atmosfera i miejsce
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Tworzymy przestrzeń, w której panuje ciepło, zaufanie i pełen komfort. Chcemy, aby każda wizyta była nie tylko skutecznym zabiegiem, ale także chwilą relaksu i przyjemności.
            </p>
          </motion.div>

          {/* Image Gallery/Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryIndex}
                  src={galleryImages[galleryIndex]}
                  alt={`Oranżeria - Galeria ${galleryIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop';
                  }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2F4F4F] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Poprzednie zdjęcie"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2F4F4F] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Następne zdjęcie"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setGalleryIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === galleryIndex ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                    aria-label={`Przejdź do zdjęcia ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Card with Background Image */}
      <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#FFFAF5]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src="/img/1.jpg"
                alt="Oranżeria"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/img/469171614_17842771176380714_7787508925189487850_n.jpg';
                }}
              />
              <div className="absolute inset-0 bg-[#2F4F4F]/85" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Zapraszamy do ORANŻERII!
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Jesteśmy gotowe, by poznać Ciebie i Twoje potrzeby. Zapraszamy do kontaktu, umówienia konsultacji i wspólnego odkrywania Twojego naturalnego piękna.
              </p>
              <div className="flex justify-center">
                <BooksyButton 
                  text="Umów Konsultację" 
                  variant="primary"
                  size="large"
                  centered={true}
                  className="min-w-[280px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
