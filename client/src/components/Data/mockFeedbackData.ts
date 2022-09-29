import { Feedback } from 'types';

export const mockFeedbackData: Feedback[] = [
  {
    id: '1',
    nickname: 'Anna',
    email: 'anna@mail.com',
    reviewTitle: 'great',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    rating: 5
  },
  {
    id: '2',
    nickname: 'Jon',
    email: 'jon@mail.com',
    reviewTitle: 'normal',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    rating: 4
  },
  {
    id: '3',
    nickname: 'Kris',
    email: 'kris@mail.com',
    reviewTitle: 'works',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    rating: 3
  }
];
