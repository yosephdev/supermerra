import { useState, useEffect } from 'react';
import { 
  Scissors, 
  Menu, 
  X, 
  Calendar, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Users, 
  Award, 
  MessageCircle, 
  Play, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Instagram, 
  Facebook 
} from 'lucide-react';

// Move these before the component declaration
interface Service {
  name: string;
  price: string;
  description: string;
  duration: string;
  popular: boolean;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  location: string;
  image: string;
}

interface GalleryImage {
  url: string;
  title: string;
  category: string;
}

type SectionId = 'home' | 'services' | 'about' | 'gallery' | 'testimonials' | 'contact';

const SuperMerraFrisor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Then use these types for your arrays
  const services: Service[] = [
    { 
      name: 'Vuxna hårklippning', 
      price: '250 kr', 
      description: 'Professionell hårklippning anpassad efter ditt ansikte och livsstil',
      duration: '45 min',
      popular: true
    },
    { 
      name: 'Skägg trimning', 
      price: '100 kr', 
      description: 'Precision skäggtrimning för den perfekta looken',
      duration: '15 min',
      popular: false
    },
    { 
      name: 'Barn klippning', 
      price: '175 kr', 
      description: 'Barnvänlig klippning i trygg och rolig miljö',
      duration: '30 min',
      popular: false
    },
    { 
      name: 'Pensionärer', 
      price: '200 kr', 
      description: 'Specialpris för pensionärer med samma höga kvalitet',
      duration: '35 min',
      popular: false
    },
    { 
      name: 'Hårvård och behandling', 
      price: '150 kr', 
      description: 'Vårdande behandling för hälsosamt och starkt hår',
      duration: '25 min',
      popular: false
    }
  ];

  const testimonials: Testimonial[] = [
    { 
      name: 'Anders Lindström', 
      text: 'Merra är fantastisk! Alltid nöjd med resultatet. Bästa frisören i Katrineholm och omgivning. Rekommenderar varmt!', 
      rating: 5,
      location: 'Katrineholm',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    { 
      name: 'Johan Mattsson', 
      text: 'Professionell service och trevlig atmosfär. Kommer alltid tillbaka hit. Merra är verkligen en mästare på sitt yrke.', 
      rating: 5,
      location: 'Flen',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    { 
      name: 'Erik Svensson', 
      text: 'Perfekt klippning varje gång. Merra förstår verkligen vad man vill ha utan att man behöver förklara så mycket.', 
      rating: 5,
      location: 'Katrineholm',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    { 
      name: 'Magnus Olsson', 
      text: 'Har gått hit i flera år nu. Alltid samma höga kvalitet och trevlig bemötande. Kan varmt rekommendera!', 
      rating: 5,
      location: 'Nyköping',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      url: "/suppermerra-inside-front.jpg",
      title: "Vår professionella salon - framsida",
      category: "Salon"
    },
    {
      url: "/supermerra-inside-back.jpg",
      title: "Vår professionella salon - baksida",
      category: "Salon"
    },
    {
      url: "/supermerra-outside.jpg",
      title: "Super Merra Frisör - utsida",
      category: "Salon"
    },
    {
      url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern herrklippning",
      category: "Klippning"
    },
    {
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Professionell skäggtrimning",
      category: "Skägg"
    },
    {
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Traditionell rakning",
      category: "Rakning"
    },
    {
      url: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Styling och finisering",
      category: "Styling"
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Precisionsarbete",
      category: "Klippning"
    }
  ];

  const scrollToSection = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  // Define the sections array with proper typing
  const sections: SectionId[] = ['home', 'services', 'about', 'gallery', 'testimonials', 'contact'];

  // Create a mapping for section names
  const sectionNames: Record<SectionId, string> = {
    home: 'Hem',
    services: 'Tjänster',
    about: 'Om oss',
    gallery: 'Galleri',
    testimonials: 'Omdömen',
    contact: 'Kontakt'
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <Scissors className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
            <div className="absolute inset-0 animate-spin">
              <div className="h-16 w-16 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
            </div>
          </div>
          <p className="text-white text-lg">Laddar Super Merra Frisör...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center group">
              <div className="relative">
                <Scissors className="h-8 w-8 text-yellow-400 mr-3 transition-transform duration-300 group-hover:rotate-45" />
                <div className="absolute inset-0 h-8 w-8 bg-yellow-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Super Merra Frisör
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {sections.map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)} 
                    className="relative hover:text-yellow-400 transition-colors duration-300 group"
                  >
                    {sectionNames[section]}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300 hover:bg-gray-800/50 rounded-md"
                >
                  {sectionNames[section]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/suppermerra-inside-front.jpg"
            alt="Super Merra Frisör interior"
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent animate-gradient">
              Herrsalong i Katrineholm
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professionell frisörservice för den moderna mannen. Välkommen till Super Merra Frisör - där kvalitet och stil möts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                <Calendar className="h-5 w-5" />
                Boka tid
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Se våra tjänster
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 opacity-20 animate-float">
          <Scissors className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="absolute top-1/3 right-10 opacity-20 animate-float-delayed">
          <Star className="h-6 w-6 text-yellow-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-800/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Våra Tjänster
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professionella frisörtjänster för den moderna mannen med över 5 års erfarenhet
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl group ${
                  service.popular ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Populär
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <span className="text-sm text-gray-400">{service.duration}</span>
                </div>
                <p className="text-3xl font-bold mb-3 text-white">{service.price}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Boka nu
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto group"
            >
              <Calendar className="h-5 w-5" />
              Boka tid nu
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Om Merra
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I hjärtat av Katrineholm erbjuder Super Merra Frisör en fräsch approach till hårstyling, som kombinerar kreativitet med expertis. Kunder kan njuta av ett brett utbud av tjänster, från precisionshårklippningar och livfulla färgbehandlingar till lyxiga blowdrys och elegant balayage.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Med en barnvänlig miljö och bekväma faciliteter, inklusive närliggande parkering och kollektivtrafik, säkerställer denna salong en härlig upplevelse för alla åldrar.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                  <Users className="h-8 w-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">5,013</div>
                  <p className="text-sm text-gray-400">Nöjda kunder</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                  <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">5+</div>
                  <p className="text-sm text-gray-400">År erfarenhet</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">4.9</div>
                  <p className="text-sm text-gray-400">Genomsnittligt betyg</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <MessageCircle className="h-5 w-5" />
                  Läs omdömen
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <Play className="h-5 w-5" />
                  Se vårt arbete
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400/20 to-gray-800/20 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
                  <img 
                    src="/supermerra-inside-back.jpg"
                    alt="Super Merra Frisör salon interior"
                    className="w-full h-80 object-cover rounded-xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-4 rounded-full">
                  <Heart className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Vårt Arbete
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Se exempel på våra frisyrer och upplev atmosfären i vår professionella salon
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Vad Våra Kunder Säger
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Över 5,000 nöjda kunder från Katrineholm och omgivning
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400/50 mr-6"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
              
              <blockquote className="text-xl text-gray-300 text-center italic leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex justify-center items-center gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-300"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-300"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Kontakta Oss
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Boka din tid eller hör av dig med frågor. Vi ser fram emot att träffa dig!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-yellow-400">Kontaktinformation</h3>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="p-3 bg-yellow-400/20 rounded-lg mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Adress</p>
                    <p className="text-gray-300">Prinsgatan 6, 641 36 Katrineholm</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="p-3 bg-yellow-400/20 rounded-lg mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Telefon</p>
                    <p className="text-gray-300">076-282 15 58</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="p-3 bg-yellow-400/20 rounded-lg mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Öppettider</p>
                    <div className="text-gray-300">
                      <p>Måndag - Söndag: 10:00 - 19:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="https://www.fresha.com/sv/a/super-merra-frisor-katrineholm-prinsgatan-6-qqc3oyks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <Calendar className="h-6 w-6" />
                  Boka tid via Fresha
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                
                <div className="flex gap-4">
                  <a href="tel:076-282-15-58" className="flex-1 bg-gray-900 border border-gray-700 hover:border-yellow-400 text-white px-6 py-3 rounded-lg text-center transition-all duration-300 hover:bg-gray-800 flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    Ring oss
                  </a>
                  <a href="https://wa.me/46762821558?text=Hej! Jag skulle vilja boka en tid hos Super Merra Frisör" className="flex-1 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-yellow-400">Hitta Hit</h3>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <div className="w-full h-64 rounded-lg overflow-hidden mb-6 border border-gray-600">
                  <iframe
                    src="https://maps.google.com/maps?q=Super+Merra+Frisör,+Prinsgatan+6,+641+36+Katrineholm,+Sweden&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Super Merra Frisör Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-gray-300 text-center mb-4">
                  Centralt beläget på Prinsgatan i Katrineholm. Enkel parkering och nära kollektivtrafik.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <a href="https://wa.me/46762821558?text=Hej! Jag skulle vilja boka en tid hos Super Merra Frisör" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                  <a href="#" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                  <a href="#" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <Scissors className="h-8 w-8 text-yellow-400 mr-3" />
                  <div className="absolute inset-0 h-8 w-8 bg-yellow-400/20 rounded-full blur-xl"></div>
                </div>
                <span className="text-xl font-bold">Super Merra Frisör</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Katrineholms frisörsalong som kombinerar kreativitet med expertis. Vi erbjuder professionell service i en barnvänlig och modern miljö med bekväma faciliteter.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-800 hover:bg-yellow-400 hover:text-black rounded-full transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-yellow-400 hover:text-black rounded-full transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="tel:076-282-15-58" className="p-2 bg-gray-800 hover:bg-yellow-400 hover:text-black rounded-full transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="https://wa.me/46762821558?text=Hej! Jag skulle vilja boka en tid hos Super Merra Frisör" className="p-2 bg-gray-800 hover:bg-green-600 hover:text-white rounded-full transition-all duration-300">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Tjänster</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Herrklippning</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Skäggtrimning</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Traditionell rakning</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Styling</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Prinsgatan 6</li>
                <li>641 36 Katrineholm</li>
                <li>076-282 15 58</li>
                <li>info@supermerra.se</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Super Merra Frisör. Alla rättigheter förbehållna.
            </p>
            <p className="text-gray-500 text-sm">
              Herrsalong i Katrineholm - Professionell frisörservice för män sedan 2020
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SuperMerraFrisor;
