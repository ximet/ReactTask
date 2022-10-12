// Types
import { Feedback } from 'types';

export enum Testimonial {
  ratings = 'ratings',
  suggestions = 'suggestions',
  recommendations = 'recommendations',
  more = 'more'
}

type TestimonialsConfig = Record<Testimonial, Record<'title', string>>;

export const testimonialsConfig: TestimonialsConfig = {
  [Testimonial.ratings]: {
    title: 'How would you rate our app?'
  },
  [Testimonial.suggestions]: {
    title: 'Anything that can be improved?'
  },
  [Testimonial.recommendations]: {
    title: 'Would you recommend this app to someone else?'
  },
  [Testimonial.more]: {
    title: 'Care to share more?'
  }
};

export type Testimonials = Record<
  Testimonial,
  {
    list: {
      name: string;
      rating?: number;
      message: string;
      timestamp: Date;
    }[];
  }
>;

export const generateTestimonialData = (data: Feedback[]) =>
  data.reduce<Testimonials>(
    ({ ratings, suggestions, recommendations, more }, curr): Testimonials => ({
      [Testimonial.ratings]: {
        list: [
          ...ratings.list,
          {
            name: curr.name,
            rating: curr.rating,
            message: curr.reasons,
            timestamp: curr.timestamp
          }
        ]
      },
      [Testimonial.suggestions]: {
        list: [
          ...suggestions.list,
          { name: curr.name, message: curr.suggestions, timestamp: curr.timestamp }
        ]
      },
      [Testimonial.recommendations]: {
        list: [
          ...recommendations.list,
          { name: curr.name, message: curr.recommend, timestamp: curr.timestamp }
        ]
      },
      [Testimonial.more]: {
        list: [...more.list, { name: curr.name, message: curr.more, timestamp: curr.timestamp }]
      }
    }),
    {
      [Testimonial.ratings]: { list: [] },
      [Testimonial.suggestions]: { list: [] },
      [Testimonial.recommendations]: { list: [] },
      [Testimonial.more]: { list: [] }
    }
  );
