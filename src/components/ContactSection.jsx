// components/ContactSection.tsx
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">Have questions or want to collaborate? Reach out to us.</p>
        <a href="mailto:info@terajusukses.com" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
