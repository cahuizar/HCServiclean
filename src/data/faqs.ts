export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'trust';
}

export const faqs: FaqItem[] = [
  {
    category: 'general',
    question: 'Do you bring all the cleaning supplies needed?',
    answer:
      'HC ServiClean provides products to give your home a great clean such as: mop, vacuum, and bucket. For personal preference, please note that we are willing to use any products you may provide us.',
  },
  {
    category: 'general',
    question: 'What cleaning areas are included?',
    answer:
      'Bedrooms, bathrooms, living rooms, kitchen — and if you would like anything extra, it can be discussed during your free consultation.',
  },
  {
    category: 'general',
    question: 'What if you stay extra long to finish the job?',
    answer:
      'Unlike others, HC ServiClean has a service quote, not a time quote. This means that the cleaners will stay until everything that is needed gets done.',
  },
  {
    category: 'general',
    question: 'Do I have to be home while you clean?',
    answer:
      'You do not have to be home for your clean as long as your cleaner has proper directions for entering and exiting your home.',
  },
  {
    category: 'general',
    question: 'What are the payment options?',
    answer: 'At the moment we accept cash and checks.',
  },
  {
    category: 'trust',
    question: 'How long have you been in business?',
    answer:
      'We have been cleaning homes in Indiana since 2010. We have a long history of excellence and dedication to our clients.',
  },
  {
    category: 'trust',
    question: 'Can I trust the cleaners?',
    answer:
      'Absolutely. The cleaners are highly trained, background and reference checked. Our cleaners are full-time employees of our company, not contractors.',
  },
  {
    category: 'trust',
    question: 'Is HC ServiClean pet safe?',
    answer:
      'We love animals, but they don\'t always love us. If you think your pet may become overly anxious while we are there, please make temporary arrangements while we are in your home. Feel free to share any pet instructions with us.',
  },
  {
    category: 'trust',
    question: 'Any references?',
    answer:
      'Yes, we have served countless happy customers. Please read our <a href="https://www.yelp.com/biz/hc-serviclean-noblesville-2" target="_blank" rel="noopener noreferrer" class="text-teal-dark underline hover:text-teal">Yelp reviews</a> or send us an email!',
  },
  {
    category: 'trust',
    question: 'Do you use cleaning products that are safe for all surfaces?',
    answer:
      'All of our cleaners are trained to use products that are safe for all surfaces, including stainless steel, tiles, glass, wood, and more.',
  },
];
