import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './testimonialData';
import { SectionHeading } from '../SectionHeading';

export const Testimonials = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our"
          highlight="Patients Say"
          description="Read about the experiences of our patients and how our dedicated team has helped them on their journey to better health."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="h-full"
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};