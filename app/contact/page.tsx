import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function ContactPage() {
  const whatsappNumber = '7718096969';

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
            Contact <span className="text-amber-400">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch with us for inquiries, custom orders, or to visit our showroom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visit Our Showroom</h3>
                    <p className="text-gray-400">
                      123 Hardware Street, Andheri West<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <a href="tel:+919876543210" className="text-gray-400 hover:text-amber-400 transition-colors">
                      +91 98765 43210
                    </a>
                    <br />
                    <a href="tel:+912212345678" className="text-gray-400 hover:text-amber-400 transition-colors">
                      +91 22 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <a href="mailto:info@luxorahardware.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                      info@luxorahardware.com
                    </a>
                    <br />
                    <a href="mailto:sales@luxorahardware.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                      sales@luxorahardware.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <h2 className="text-white font-semibold text-xl mb-4">Connect With Us</h2>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  <Facebook size={20} />
                  Facebook
                </a>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I'd like to get in touch with Luxora Hardware`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-4 rounded-lg font-semibold text-center hover:from-amber-600 hover:to-amber-700 transition-all hover:shadow-lg hover:shadow-amber-500/50"
            >
              Message Us on WhatsApp
            </a>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8574703823646!2d72.83581931490177!3d19.07413728709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f9ee0d2d27%3A0x7f3c6f9dd9c3f9c1!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luxora Hardware Location"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl p-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're an architect, designer, or homeowner, our team is here to help you
            find the perfect hardware solutions for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in Luxora Hardware products`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-900 transition-all"
            >
              Request a Consultation
            </a>
            <a
              href="#"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Download Product Catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
