'use client';

import { motion } from 'framer-motion';

const newsItems = [
  {
    title: 'PT. Teraju Signs Export Agreement with Southeast Asia Partners',
    date: 'July 20, 2025',
    snippet:
      'A new milestone in our export initiative was marked with a signed agreement to supply marine sand to Southeast Asian countries...',
  },
  {
    title: 'Sustainable Mining Practices in Action',
    date: 'July 15, 2025',
    snippet:
      'Our operations at Pulau Bangka highlight eco-conscious extraction techniques, leading the region in responsible dredging...',
  },
  {
    title: 'Community Development Program Launched',
    date: 'July 10, 2025',
    snippet:
      'We’ve launched new community engagement efforts in coastal villages to support education and infrastructure...',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          Latest News
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12"
        >
          Stay updated with our latest projects and initiatives.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#fdf7f2] p-6 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all text-left"
            >
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{item.snippet}</p>
              <button className="text-orange-600 font-semibold hover:underline text-sm">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
