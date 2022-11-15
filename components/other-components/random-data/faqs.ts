type FaqsType = {
  id: number;
  title: string;
  answer: string;
  summary?: string;
  listElements?: string[];
};

export const buyingFaqs: FaqsType[] = [
  {
    id: 1,
    title: 'How do I buy a car from RumRumCars?',
    answer:
      'Upon successful completion of the online form, the application is handled by our trained staff, who draft an estimate offer for your vehicle based on the information you have provided. As soon as the estimate offer has been created, a manager will approve or change it and send the final response on to you. This is simply to ensure that we send you a correct estimate that has passed quality control.',
  },
  {
    id: 2,
    title: 'How do I find the vehicle that is best suited for me?',
    answer:
      'We pride ourselves on the fact that we usually offer our clients the best prices. That’s why more than 45% of our deals are repeat business or referrals and why we buy ',
  },
  {
    id: 3,
    title: 'I am looking for a specific vehicle',
    answer:
      'If you are happy with our estimated offer, your information will be sent to a RumRumCars Buyer in your area, who will then give you a call. On the first call, our Buyer will confirm the vehicle details to ensure accurate pricing. Secondly, they will confirm the condition of the vehicle, with a few quick questions regarding:',
    listElements: [
      'The ownership period and whether the vehicle is paid in full or still on finance.',
      ' The service history and availability of spare keys.',
      'Previous accident damages or repairs done to the vehicle.',
      'Availability of the vehicle.',
    ],
    summary:
      'The Buyer will then make an appointment to visit you and inspect your vehicle – wherever and whenever it best suits you.',
  },
  {
    id: 4,
    title: 'Will I be able to return a vehicle that I bought from RumRumCars?',
    answer:
      'During an appointment, you can expect our Buyer to do a quick evaluation of the vehicle. Here they will:',
    listElements: [
      'Take a few pictures of the vehicle and send it directly to our Head Office.',
      'Do an exterior inspection of the vehicle to assess whether any previous accident damage or repairs were done.',
      'Do an evaluation of the engine and check a few components such as the oil and water.',
      'Take the vehicle for a test drive.',
    ],
    summary:
      'Once the Buyer has completed the evaluation, they will contact the RumRumCars Pricing Team, who will then issue a final offer for you.',
  },
];
export const sellingFaqs: FaqsType[] = [
  {
    id: 1,
    title: 'How do I sell my car through RumRumCars?',
    answer:
      'Upon successful completion of the online form, the application is handled by our trained staff, who draft an estimate offer for your vehicle based on the information you have provided. As soon as the estimate offer has been created, a manager will approve or change it and send the final response on to you. This is simply to ensure that we send you a correct estimate that has passed quality control.',
  },
  {
    id: 2,
    title: 'How does RumRumCars decide on an offer for my vehicle?',
    answer:
      'We pride ourselves on the fact that we usually offer our clients the best prices. That’s why more than 45% of our deals are repeat business or referrals and why we buy ',
  },
  {
    id: 3,
    title: 'What happens after I accept the offer from RumRumCars?',
    answer:
      'If you are happy with our estimated offer, your information will be sent to a RumRumCars Buyer in your area, who will then give you a call. On the first call, our Buyer will confirm the vehicle details to ensure accurate pricing. Secondly, they will confirm the condition of the vehicle, with a few quick questions regarding:',
    listElements: [
      'The ownership period and whether the vehicle is paid in full or still on finance.',
      ' The service history and availability of spare keys.',
      'Previous accident damages or repairs done to the vehicle.',
      'Availability of the vehicle.',
    ],
    summary:
      'The Buyer will then make an appointment to visit you and inspect your vehicle – wherever and whenever it best suits you.',
  },
  {
    id: 4,
    title: 'What happens during an appointment with a RumRumCars Buyer?',
    answer:
      'During an appointment, you can expect our Buyer to do a quick evaluation of the vehicle. Here they will:',
    listElements: [
      'Take a few pictures of the vehicle and send it directly to our Head Office.',
      'Do an exterior inspection of the vehicle to assess whether any previous accident damage or repairs were done.',
      'Do an evaluation of the engine and check a few components such as the oil and water.',
      'Take the vehicle for a test drive.',
    ],
    summary:
      'Once the Buyer has completed the evaluation, they will contact the RumRumCars Pricing Team, who will then issue a final offer for you.',
  },
];
