
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  rating?: number;
  reviewCount?: number;
}

export interface Review {
  id: string;
  serviceId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Advantage {
  id: string;
  title: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  text: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}
