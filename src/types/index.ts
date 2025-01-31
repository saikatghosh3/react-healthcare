export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  schedule: {
    days: string[];
    hours: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}