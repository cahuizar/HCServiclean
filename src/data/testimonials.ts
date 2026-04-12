export interface Testimonial {
  quote: string;
  author: string;
  city: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I can't say enough about this team. I've been using their services for over 5 years now and I am very happy with the quality of their work. They always work around my schedule and arrive on time. I just love the day they come!",
    author: 'Michelle W.',
    city: 'Carmel',
  },
  {
    quote:
      "HC ServiClean have been cleaning for me for over 5 years. I have used several different individuals and companies in the past. None of them compare to HC ServiClean's services. They are completely reliable, flexible, and thorough.",
    author: 'Gina S.',
    city: 'Carmel',
  },
  {
    quote:
      'I highly recommend HC ServiClean if you want an amazing and yet easy experience for your house cleaning needs. We have not had to do any kind of cleaning of our own. They are very reliable and trustworthy. Try them out and see for yourself.',
    author: 'James M.',
    city: 'Fishers',
  },
];
