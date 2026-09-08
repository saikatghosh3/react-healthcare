import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { SectionHeading } from '../Home/components/SectionHeading';
import { handleImageError } from '../../utils/imageUtils';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    bio: 'Visionary leader with 20+ years in cardiology and hospital administration.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Head of Surgery',
    bio: 'Award-winning surgeon specializing in minimally invasive procedures.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Dr. Emily Williams',
    role: 'Director of Patient Care',
    bio: 'Pediatric specialist devoted to compassionate, family-centered care.',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600',
  },
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Mail, label: 'Email' },
];

export const TeamSection = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Leadership Team"
          title="The People Behind"
          highlight="Our Care"
          description="Meet the dedicated leaders guiding our hospital with expertise, integrity and a passion for healing."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              {/* Photo */}
              <div className="relative aspect-[4/4.4] overflow-hidden bg-blue-50">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  onError={handleImageError}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

                {/* Social icons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      onClick={(e) => e.preventDefault()}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:ring-blue-600"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                  {member.role}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};