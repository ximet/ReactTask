// Types
import { Feedback } from 'types';

export enum Testimonial {
  ratings = 'ratings',
  suggestions = 'suggestions',
  recommendations = 'recommendations',
  mores = 'mores'
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
  [Testimonial.mores]: {
    title: 'Care to share more?'
  }
};

export type Testimonials = Record<
  Testimonial,
  { name: string; rating?: number; message: string; timestamp: Date }[]
>;

export const generateTestimonialData = (data: Feedback[]) =>
  data.reduce<Testimonials>(
    (
      { ratings, suggestions, recommendations, mores },
      { name, rating, reason, suggestion, recommendation, more, timestamp }
    ): Testimonials => ({
      [Testimonial.ratings]: [...ratings, { name, rating, message: reason, timestamp }],
      [Testimonial.suggestions]: [...suggestions, { name, message: suggestion, timestamp }],
      [Testimonial.recommendations]: [
        ...recommendations,
        { name, message: recommendation, timestamp }
      ],
      [Testimonial.mores]: [...mores, { name, message: more, timestamp }]
    }),
    {
      [Testimonial.ratings]: [],
      [Testimonial.suggestions]: [],
      [Testimonial.recommendations]: [],
      [Testimonial.mores]: []
    }
  );

export type TestimonialsDataArray =
  | {
      id: Testimonial;
      list: { name: string; rating?: number; message: string; timestamp: Date }[];
    }[]
  | undefined;
