export type Stat = {
  number: string;
  label: string;
  icon: React.ElementType; // ✅ bukan React.ReactNode
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Package = {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
  gradient: string;
  borderColor: string;
  question: string;
};

export type Service = {
  icon: React.ElementType; // ✅ juga ini
  title: string;
  description: string;
};

export type Team = {
  name: string;
  role: string;
  avatar: string;
};

export type Logos = {
  name: string;
  src: string;
};

export type Components = {
  ClassName?: string;
};
