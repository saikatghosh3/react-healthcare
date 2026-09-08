import {
  Syringe,
  HeartPulse,
  Brain,
  Bone,
  Stethoscope,
  Activity,
  ShieldCheck,
  Users,
  FileText,
  Baby,
  FlaskConical,
  Microscope,
  Heart,
  TestTube,
  Pill,
  Zap,
  HeartHandshake,
  Globe,
  Eye,
  Watch,
  BadgeCheck,
  Truck,
  Siren,
  LifeBuoy,
  type LucideIcon
} from 'lucide-react';

export type ServiceCategory = 'specialties' | 'diagnostics' | 'preventive' | 'emergency';

export interface DetailFeature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceDetailContent {
  category: ServiceCategory;
  tagline: string;
  stats: { value: string; label: string }[];
  features: DetailFeature[];
  process: ProcessStep[];
  benefits: string[];
  faqs: FaqItem[];
  related: string[];
}

const processSpecialty: ProcessStep[] = [
  { title: 'Consult & Assess', text: 'A detailed consultation and review of your symptoms and medical history.' },
  { title: 'Diagnostic Workup', text: 'Targeted tests and scans to reach an accurate, evidence-based diagnosis.' },
  { title: 'Personalized Plan', text: 'A treatment plan tailored to your condition, lifestyle and goals.' },
  { title: 'Follow-up Care', text: 'Ongoing monitoring and support to track recovery and long-term health.' }
];

const processDiagnostic: ProcessStep[] = [
  { title: 'Book Your Slot', text: 'Schedule a convenient time online, over the phone or at any of our centres.' },
  { title: 'Sample & Scanning', text: 'Fast, hygienic sample collection and imaging performed by certified staff.' },
  { title: 'Advanced Analysis', text: 'NABL-accredited lab processing with strict quality control on every sample.' },
  { title: 'Digital Report', text: 'Accurate digital reports delivered to your phone and email within 24-48 hours.' }
];

const processPreventive: ProcessStep[] = [
  { title: 'Health Assessment', text: 'A baseline consultation to understand your age, lifestyle and risk factors.' },
  { title: 'Tailored Plan', text: 'A personalised plan of vaccinations, screenings and preventive measures.' },
  { title: 'Delivered Care', text: 'Comfortable, low-pain administration by our experienced clinical staff.' },
  { title: 'Reminders & Reviews', text: 'Automatic reminders for the next dose or test, plus a clear review of results.' }
];

const processEmergency: ProcessStep[] = [
  { title: 'Call & Activate', text: 'Call immediately and share your location. Our dispatch team responds at once.' },
  { title: 'Rapid Response', text: 'Trained paramedics arrive fast, stabilising you on site or en route.' },
  { title: 'Receive Care', text: 'Continue care in our emergency department with specialists on standby.' },
  { title: 'Recovery Support', text: 'Clear instructions, medication plans and follow-up appointments after discharge.' }
];

const faqShared = (title: string, duration: string): FaqItem[] => [
  { q: `Is ${title} covered by insurance?`, a: 'We accept most major insurance providers. Our coordination desk can confirm your coverage and handle pre-authorisation before your visit.' },
  { q: `How long does ${title.toLowerCase()} typically take?`, a: `Most ${title.toLowerCase()} visits take ${duration}. Detailed diagnostics may need a little longer and will be explained to you upfront.` },
  { q: 'What should I bring to my visit?', a: 'Please bring a valid ID, your insurance card and any previous reports, prescriptions or imaging relevant to your health.' },
  { q: 'Can I cancel or reschedule?', a: 'Yes. Bookings can be rescheduled or cancelled up to a few hours before your slot with no fees. Our team is happy to help anytime.' }
];

const benefitCore = [
  'Board-certified specialists leading your care',
  'State-of-the-art, NABL-accredited facilities',
  'Transparent, upfront pricing with no hidden charges',
  'Digital reports and records, accessible 24/7'
];

// ---------------------------------------------------------------------------
// SPECIALTIES
// ---------------------------------------------------------------------------
const specialtiesContent: Record<string, ServiceDetailContent> = {
  cardiology: {
    category: 'specialties',
    tagline: 'Complete heart care — from prevention and diagnostics to advanced interventional treatment.',
    stats: [
      { value: '15+', label: 'Years Experience' },
      { value: '48h', label: 'Full Report Time' },
      { value: '4.9', label: 'Patient Rating' }
    ],
    features: [
      { icon: HeartPulse, title: 'Advanced Diagnostics', text: 'ECG, Echo, stress testing and cardiac imaging for a complete picture of your heart health.' },
      { icon: Stethoscope, title: 'Expert Cardiologists', text: 'Board-certified cardiologists with experience across preventive, interventional and emergency care.' },
      { icon: Activity, title: 'Risk Assessment', text: 'Detailed profiling of blood pressure, cholesterol and lifestyle to predict and prevent risk.' },
      { icon: HeartHandshake, title: 'Lifestyle Programs', text: 'Nutrition, exercise and stress-management guidance built around your cardiac plan.' }
    ],
    process: processSpecialty,
    benefits: benefitCore,
    faqs: faqShared('Cardiology', '45-60 minutes'),
    related: ['neurology', 'wellness-cardiac', 'general-health']
  },
  neurology: {
    category: 'specialties',
    tagline: 'Expert diagnosis and treatment for brain, spine and nervous system conditions.',
    stats: [
      { value: '12+', label: 'Years Experience' },
      { value: '24/7', label: 'Stroke Support' },
      { value: '4.8', label: 'Patient Rating' }
    ],
    features: [
      { icon: Brain, title: 'Comprehensive Neurology', text: 'Care for headaches, epilepsy, movement disorders, neuropathy and stroke recovery.' },
      { icon: Microscope, title: 'Advanced Imaging', text: 'MRI, CT and EEG diagnostics interpreted by specialist neuroradiologists.' },
      { icon: FileText, title: 'Detailed Evaluations', text: 'In-depth cognitive, sensory and motor assessment for accurate diagnosis.' },
      { icon: Zap, title: 'Rapid Stroke Care', text: 'Round-the-clock stroke response to limit damage and speed up recovery.' }
    ],
    process: processSpecialty,
    benefits: benefitCore,
    faqs: faqShared('Neurology', '45-60 minutes'),
    related: ['cardiology', 'senior-executive', 'premier-health']
  },
  orthopedics: {
    category: 'specialties',
    tagline: 'Comprehensive care for bones, joints, muscles and sports injuries — from diagnosis to recovery.',
    stats: [
      { value: '20+', label: 'Years Experience' },
      { value: '50%', label: 'Cases Avoid Surgery' },
      { value: '4.9', label: 'Patient Rating' }
    ],
    features: [
      { icon: Bone, title: 'Bone & Joint Care', text: 'Treatment for arthritis, fractures, back pain and musculoskeletal conditions.' },
      { icon: Activity, title: 'Sports Medicine', text: 'Specialist rehab and injury prevention programs for athletes and active lifestyles.' },
      { icon: BadgeCheck, title: 'Advanced Surgery', text: 'Minimally invasive and joint-replacement procedures when surgery is the right choice.' },
      { icon: HeartHandshake, title: 'Physiotherapy', text: 'On-site physiotherapy and rehabilitation to get you moving again, faster.' }
    ],
    process: processSpecialty,
    benefits: benefitCore,
    faqs: faqShared('Orthopedics', '45-60 minutes'),
    related: ['neurology', 'wellness-basic', 'general-health']
  }
};

// ---------------------------------------------------------------------------
// PREVENTIVE CARE
// ---------------------------------------------------------------------------
const preventiveContent: Record<string, ServiceDetailContent> = {
  vaccination: {
    category: 'preventive',
    tagline: 'Full-range vaccination for children and adults — protect yourself, your family and your community.',
    stats: [
      { value: '50+', label: 'Vaccines Available' },
      { value: '0', label: 'Waiting Times' },
      { value: '10k+', label: 'Doses Administered' }
    ],
    features: [
      { icon: Baby, title: 'Childhood Immunisation', text: 'Complete childhood vaccination schedules following national and WHO guidelines.' },
      { icon: Syringe, title: 'Adult & Travel Vaccines', text: 'Flu, HPV, hepatitis, typhoid and travel-specific vaccines for every destination.' },
      { icon: ShieldCheck, title: 'Safe Administration', text: 'Single-use sterile equipment and trained nurses in a comfortable, monitored setting.' },
      { icon: FileText, title: 'Digital Immunisation Card', text: 'Get a shareable digital record of every dose, with smart reminders for boosters.' }
    ],
    process: processPreventive,
    benefits: benefitCore,
    faqs: faqShared('Vaccination', '15-30 minutes'),
    related: ['checkup', 'screening', 'vita-must']
  },
  checkup: {
    category: 'preventive',
    tagline: 'A comprehensive yearly health assessment that catches issues early and keeps you on track.',
    stats: [
      { value: '40+', label: 'Health Markers' },
      { value: '1h', label: 'Total Visit Time' },
      { value: 'Same-day', label: 'Report Preview' }
    ],
    features: [
      { icon: Stethoscope, title: 'Head-to-Toe Check', text: 'A full physical examination covering all major systems with your family physician.' },
      { icon: FlaskConical, title: 'Core Blood Panel', text: 'Essential blood work including sugar, cholesterol, liver, kidney and thyroid markers.' },
      { icon: HeartPulse, title: 'Cardiac Review', text: 'Heart-rate, blood-pressure and ECG assessment as part of your yearly baseline.' },
      { icon: FileText, title: 'Physician Summary', text: 'A clear, plain-language summary of your health with action points for the year ahead.' }
    ],
    process: processPreventive,
    benefits: benefitCore,
    faqs: faqShared('Annual Check-up', '45-60 minutes'),
    related: ['standard-health', 'screening', 'vaccination']
  },
  screening: {
    category: 'preventive',
    tagline: 'Targeted early-detection programs for the conditions that matter most — when they are most treatable.',
    stats: [
      { value: '90%', label: 'Success When Early' },
      { value: '15+', label: 'Screening Panels' },
      { value: '48h', label: 'Report Delivery' }
    ],
    features: [
      { icon: Eye, title: 'Cancer Screening', text: 'Regular screening for breast, cervical, colorectal and prostate cancers, age-appropriate.' },
      { icon: HeartPulse, title: 'Cardiovascular Screening', text: 'Early markers for heart disease and stroke so risk is managed before symptoms appear.' },
      { icon: Watch, title: 'Metabolic Screening', text: 'Diabetes, thyroid and cholesterol checks with lifestyle guidance based on results.' },
      { icon: Users, title: 'Family Risk Review', text: 'A review of your family history to build the screening plan that fits you.' }
    ],
    process: processPreventive,
    benefits: benefitCore,
    faqs: faqShared('Health Screening', '45-60 minutes'),
    related: ['premier-health', 'checkup', 'vita-plus']
  }
};

// ---------------------------------------------------------------------------
// DIAGNOSTICS / HEALTH PACKAGES
// ---------------------------------------------------------------------------
const makeDiagnostic = (
  id: string,
  tagline: string,
  stats: ServiceDetailContent['stats'],
  features: DetailFeature[],
  related: string[],
): ServiceDetailContent => ({
  category: 'diagnostics',
  tagline,
  stats,
  features,
  process: processDiagnostic,
  benefits: benefitCore,
  faqs: faqShared(id.replace(/-/g, ' '), 'about one hour'),
  related,
});

const diagnosticsContent: Record<string, ServiceDetailContent> = {
  'diabetic-basic': makeDiagnostic(
    'diabetic-basic',
    'An essential profile to monitor blood sugar control and protect against diabetes complications.',
    [{ value: '5', label: 'Key Tests' }, { value: '12h', label: 'Pre-Test Fast' }, { value: '48h', label: 'Report Time' }],
    [
      { icon: TestTube, title: 'HbA1c', text: 'Three-month average blood sugar — the gold standard for diabetes control.' },
      { icon: Activity, title: 'Fasting Sugar', text: 'A fasting glucose check to guide medication and lifestyle decisions.' },
      { icon: HeartPulse, title: 'Lipid Profile', text: 'Cholesterol and triglycerides, since diabetes affects heart health too.' },
      { icon: FlaskConical, title: 'Kidney Function', text: 'Monthly monitoring for the early signs of diabetic kidney disease.' }
    ],
    ['general-health', 'wellness-basic', 'vita-must']
  ),
  'general-health': makeDiagnostic(
    'general-health',
    'A broad, budget-friendly profile that gives a dependable snapshot of your overall health.',
    [{ value: '8+', label: 'Key Tests' }, { value: '1h', label: 'Total Time' }, { value: '48h', label: 'Report Time' }],
    [
      { icon: TestTube, title: 'Complete Blood Count', text: 'A broad look at red cells, white cells and platelets for anaemia and infection.' },
      { icon: FlaskConical, title: 'Liver & Kidney', text: 'Enzyme and function tests to confirm your liver and kidneys are working well.' },
      { icon: HeartPulse, title: 'Chest X-ray & ECG', text: 'Imaging and rhythm checks to screen the heart and lungs.' }
    ],
    ['standard-health', 'wellness-basic', 'checkup']
  ),
  'gastro-liver': makeDiagnostic(
    'gastro-liver',
    'A deep-dive screening of your digestive system and liver for a complete picture of gut health.',
    [{ value: '5', label: 'Advanced Tests' }, { value: '4h', label: 'Prep Needed' }, { value: '3d', label: 'Report Time' }],
    [
      { icon: FlaskConical, title: 'Liver Function Panel', text: 'Comprehensive enzyme and protein markers for liver health.' },
      { icon: TestTube, title: 'Hepatitis Profile', text: 'Screening for hepatitis A, B and C viral infections.' },
      { icon: Microscope, title: 'Ultrasound Abdomen', text: 'Non-invasive imaging of the liver, gallbladder and pancreas.' },
      { icon: FileText, title: 'Gastroscopy', text: 'A direct look at the upper digestive tract if clinically indicated.' }
    ],
    ['premier-health', 'general-health', 'senior-executive']
  ),
  'premier-health': makeDiagnostic(
    'premier-health',
    'Our flagship executive screening — comprehensive diagnostics with specialist consultation included.',
    [{ value: '60+', label: 'Health Markers' }, { value: '4h', label: 'Full Visit' }, { value: '2d', label: 'Report Time' }],
    [
      { icon: Microscope, title: 'Full Body Check-up', text: 'The most complete health evaluation we offer, across every major system.' },
      { icon: TestTube, title: 'Cancer Markers', text: 'Tumour marker screening for early warning across common cancers.' },
      { icon: Pill, title: 'Thyroid & Vitamin Panel', text: 'Hormone and vitamin levels that drive energy, mood and metabolism.' },
      { icon: Stethoscope, title: 'Specialist Consult', text: 'A dedicated consultation to walk you through every result, in person.' }
    ],
    ['senior-executive', 'wellness-cardiac', 'vita-plus']
  ),
  'senior-executive': makeDiagnostic(
    'senior-executive',
    'An age-focused screening built for mature health — joints, senses, mind and bone.',
    [{ value: '5', label: 'Age-Focused Tests' }, { value: '2h', label: 'Total Time' }, { value: '2d', label: 'Report Time' }],
    [
      { icon: Bone, title: 'Bone Density Scan', text: 'DXA scan to assess osteoporosis risk and fracture likelihood.' },
      { icon: Eye, title: 'Vision & Hearing', text: 'Screening for age-related changes in sight and hearing.' },
      { icon: Brain, title: 'Memory Assessment', text: 'A gentle cognitive check to keep your mind as healthy as your body.' },
      { icon: Activity, title: 'Joint Health', text: 'Mobility and joint assessment to keep you active and independent.' }
    ],
    ['premier-health', 'standard-health', 'gastro-liver']
  ),
  'standard-health': makeDiagnostic(
    'standard-health',
    'Every essential health parameter, in one affordable and easy-to-understand package.',
    [{ value: '5', label: 'Core Checks' }, { value: '45m', label: 'Total Time' }, { value: '48h', label: 'Report Time' }],
    [
      { icon: TestTube, title: 'Basic Blood Work', text: 'CBC and glucose essentials to establish your healthy baseline.' },
      { icon: FlaskConical, title: 'Urine Analysis', text: 'A quick test for kidney health, diabetes and urinary infections.' },
      { icon: Activity, title: 'BMI & Blood Pressure', text: 'Vitals and body-composition checks to guide daily habits.' },
      { icon: Heart, title: 'Cholesterol & Sugar', text: 'The two numbers that matter most for long-term heart and metabolic health.' }
    ],
    ['wellness-basic', 'general-health', 'checkup']
  ),
  'vita-must': makeDiagnostic(
    'vita-must',
    'Essential vitamin and mineral screening to find and fix the deficiencies holding you back.',
    [{ value: '5', label: 'Nutrients Tested' }, { value: 'NA', label: 'No Prep Needed' }, { value: '48h', label: 'Report Time' }],
    [
      { icon: Pill, title: 'Vitamin D & B12', text: 'The two most common deficiencies behind fatigue, mood and bone issues.' },
      { icon: TestTube, title: 'Iron Profile', text: 'Iron, ferritin and saturation to assess energy and anaemia risk.' },
      { icon: Bone, title: 'Calcium & Zinc', text: 'Minerals essential for immunity, bone strength and recovery.' }
    ],
    ['vita-plus', 'wellness-basic', 'general-health']
  ),
  'vita-plus': makeDiagnostic(
    'vita-plus',
    'Our advanced nutritional panel — every vitamin, mineral and antioxidant that powers your body.',
    [{ value: '15+', label: 'Nutrients Tested' }, { value: 'NA', label: 'No Prep Needed' }, { value: '48h', label: 'Report Time' }],
    [
      { icon: Pill, title: 'Complete Vitamin Panel', text: 'The full A-to-Z vitamin spectrum including D, B-complex and E.' },
      { icon: TestTube, title: 'Mineral Profile', text: 'Magnesium, calcium, zinc and iron for a complete mineral map.' },
      { icon: HeartPulse, title: 'Antioxidant Levels', text: 'Oxidative-stress markers that reflect how well your body repairs itself.' },
      { icon: FlaskConical, title: 'Omega & Hormones', text: 'Essential fatty acids and key hormones that influence energy and mood.' }
    ],
    ['vita-must', 'premier-health', 'wellness-basic']
  ),
  'wellness-basic': makeDiagnostic(
    'wellness-basic',
    'A preventive-first package focusing on lifestyle indicators and your everyday wellbeing.',
    [{ value: '5', label: 'Wellness Checks' }, { value: '30m', label: 'Total Time' }, { value: '48h', label: 'Report Time' }],
    [
      { icon: Activity, title: 'Basic Health Check', text: 'A gentle all-round assessment with your physician as your guide.' },
      { icon: Activity, title: 'BMI & Blood Pressure', text: 'Simple numbers that carry a big weight of insight about your health.' },
      { icon: Heart, title: 'Cholesterol & Sugar', text: 'Everyday metabolic markers you can act on with small changes.' }
    ],
    ['standard-health', 'general-health', 'vita-must']
  ),
  'wellness-cardiac': makeDiagnostic(
    'wellness-cardiac',
    'A focused cardiac assessment combining imaging, rhythm and lipid analysis for heart confidence.',
    [{ value: '5', label: 'Heart Tests' }, { value: '1h', label: 'Total Time' }, { value: '2d', label: 'Report Time' }],
    [
      { icon: HeartPulse, title: 'ECG & Echo', text: 'Rhythm and structure imaging to see how your heart is truly working.' },
      { icon: Activity, title: 'Stress Test', text: 'A treadmill assessment to check how your heart performs under effort.' },
      { icon: TestTube, title: 'Cardiac Markers', text: 'Enzyme and lipid markers that flag heart risk early.' }
    ],
    ['cardiology', 'premier-health', 'senior-executive']
  ),
};

// ---------------------------------------------------------------------------
// EMERGENCY
// ---------------------------------------------------------------------------
const emergencyContent: Record<string, ServiceDetailContent> = {
  emergency: {
    category: 'emergency',
    tagline: 'Around-the-clock emergency medicine with rapid response and specialists always on standby.',
    stats: [
      { value: '24/7', label: 'Always Open' },
      { value: '8 min', label: 'Avg Response' },
      { value: '9', label: 'ER Locations' }
    ],
    features: [
      { icon: Siren, title: 'Rapid Response', text: 'Ambulance dispatch and ER readiness triggered the moment you call.' },
      { icon: Stethoscope, title: 'Trauma Ready', text: 'Trauma bays, ICU and emergency surgery ready for the most critical cases.' },
      { icon: HeartPulse, title: 'Specialist On Call', text: 'Cardiology, neurology and surgery specialists reach the ER within minutes.' },
      { icon: LifeBuoy, title: '24/7 Support', text: 'A dedicated emergency helpline staffed by trained coordinators, day and night.' }
    ],
    process: processEmergency,
    benefits: benefitCore,
    faqs: faqShared('Emergency care', 'as fast as possible'),
    related: ['ambulance', 'urgent-care', 'cardiology']
  },
  'urgent-care': {
    category: 'emergency',
    tagline: 'Same-day care for non-life-threatening conditions — without an appointment or long waits.',
    stats: [
      { value: '30 min', label: 'Avg Wait' },
      { value: '7 days', label: 'Open Weekly' },
      { value: 'No', label: 'Appointment Needed' }
    ],
    features: [
      { icon: Zap, title: 'Walk-In Welcome', text: 'Simply walk in — our team triages quickly so minor issues are seen fast.' },
      { icon: Stethoscope, title: 'Common Ailments', text: 'Fevers, infections, minor injuries, sprains, rashes and allergic reactions.' },
      { icon: TestTube, title: 'On-Site Diagnostics', text: 'Blood work, X-ray and rapid tests so you leave with answers, not mysteries.' },
      { icon: Pill, title: 'Prescriptions', text: 'Immediate treatment and prescriptions to get you back to your day.' }
    ],
    process: processEmergency,
    benefits: benefitCore,
    faqs: faqShared('Urgent care', '30-45 minutes'),
    related: ['emergency', 'ambulance', 'general-health']
  },
  ambulance: {
    category: 'emergency',
    tagline: 'Rapid, medically-equipped transport with trained paramedics — when every minute matters.',
    stats: [
      { value: '8 min', label: 'Avg Arrival' },
      { value: '12', label: 'Fleet Units' },
      { value: '24/7', label: 'Dispatch' }
    ],
    features: [
      { icon: Truck, title: 'Advanced Life Support', text: 'Ventilators, defibrillators and critical-care equipment on every unit.' },
      { icon: HeartPulse, title: 'ALS Paramedics', text: 'Every crew includes fully-trained paramedics, not just drivers.' },
      { icon: Globe, title: 'GPS Tracking', text: 'Live vehicle location and hospital handover coordinated before you arrive.' },
      { icon: Siren, title: '24/7 Dispatch', text: 'A dedicated control room keeps ambulances on the move, armed and ready.' }
    ],
    process: processEmergency,
    benefits: benefitCore,
    faqs: faqShared('Ambulance service', 'the shortest time possible'),
    related: ['emergency', 'urgent-care', 'orthopedics']
  }
};

export const serviceDetailContent: Record<string, ServiceDetailContent> = {
  ...specialtiesContent,
  ...preventiveContent,
  ...diagnosticsContent,
  ...emergencyContent
};

export const getServiceContent = (
  id: string,
  title: string,
  category: ServiceCategory,
): ServiceDetailContent => {
  const explicit = serviceDetailContent[id];
  if (explicit) return explicit;

  const process =
    category === 'diagnostics'
      ? processDiagnostic
      : category === 'preventive'
        ? processPreventive
        : category === 'emergency'
          ? processEmergency
          : processSpecialty;

  return {
    category,
    tagline: `Comprehensive ${title.toLowerCase()} care delivered by our experienced specialists.`,
    stats: [
      { value: '24/7', label: 'Support' },
      { value: '4.9', label: 'Patient Rating' },
      { value: '48h', label: 'Report Delivery' }
    ],
    features: [],
    process,
    benefits: benefitCore,
    faqs: faqShared(title, '45-60 minutes'),
    related: []
  };
};

export const categoryThemes: Record<ServiceCategory, {
  hero: string;
  text: string;
  chip: string;
  soft: string;
}> = {
  specialties: {
    hero: 'bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900',
    text: 'text-blue-600',
    chip: 'bg-blue-100 text-blue-700',
    soft: 'bg-blue-50 text-blue-600'
  },
  diagnostics: {
    hero: 'bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900',
    text: 'text-emerald-600',
    chip: 'bg-emerald-100 text-emerald-700',
    soft: 'bg-emerald-50 text-emerald-600'
  },
  preventive: {
    hero: 'bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-900',
    text: 'text-violet-600',
    chip: 'bg-violet-100 text-violet-700',
    soft: 'bg-violet-50 text-violet-600'
  },
  emergency: {
    hero: 'bg-gradient-to-br from-red-700 via-rose-800 to-red-900',
    text: 'text-red-600',
    chip: 'bg-red-100 text-red-700',
    soft: 'bg-red-50 text-red-600'
  }
};