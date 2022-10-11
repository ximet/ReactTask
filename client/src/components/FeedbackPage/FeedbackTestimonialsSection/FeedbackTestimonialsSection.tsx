import React, { FunctionComponent, useEffect, useState } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Components
import RequestDataWrapper from 'components/RequestDataWrapper/RequestDataWrapper';
import Accordion from 'components/Accordion/Accordion';

// Assets
import { IconStar, IconBlobTwo } from 'assets/images/svg';

// Utils
import dateFormatter from 'utils/dateFormatter';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../FeedbackPage.styles';

export enum Testimonial {
  ratings = 'ratings',
  suggestions = 'suggestions',
  recommendations = 'recommendations',
  more = 'more'
}

type Testimonials = Record<
  Testimonial,
  {
    title: string;
    list: {
      name: string;
      rating?: number;
      message: string;
      timestamp: Date;
    }[];
  }
>;

const FeedbackTestimonialsSection: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);
  const { data, loading, error } = useAppSelector(state => state.feedback);
  const [testimonials, setTestimonials] = useState<Testimonials>();

  const testimonialsArray =
    testimonials &&
    Object.entries(testimonials).map(entry => ({
      id: entry[0],
      content: entry[1]
    }));

  useEffect(() => {
    const testimonialData = data.reduce<Testimonials>(
      ({ ratings, suggestions, recommendations, more }, curr): Testimonials => ({
        [Testimonial.ratings]: {
          title: 'How would you rate our app?',
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
          title: 'Anything that can be improved?',
          list: [
            ...suggestions.list,
            { name: curr.name, message: curr.suggestions, timestamp: curr.timestamp }
          ]
        },
        [Testimonial.recommendations]: {
          title: 'Would you recommend this app to someone else?',
          list: [
            ...recommendations.list,
            { name: curr.name, message: curr.recommend, timestamp: curr.timestamp }
          ]
        },
        [Testimonial.more]: {
          title: 'Care to share more? ',
          list: [...more.list, { name: curr.name, message: curr.more, timestamp: curr.timestamp }]
        }
      }),
      {
        [Testimonial.ratings]: { title: '', list: [] },
        [Testimonial.suggestions]: { title: '', list: [] },
        [Testimonial.recommendations]: { title: '', list: [] },
        [Testimonial.more]: { title: '', list: [] }
      }
    );
    setTestimonials(testimonialData);
  }, [data]);

  return (
    <S.FeedbackTestimonialsSection id="testimonials">
      <Container>
        <Flex directionColumn>
          <h2>Testimonials</h2>
          {data.length > 0 ? (
            <RequestDataWrapper data={data} loading={loading} error={error}>
              {testimonialsArray?.map(({ id, content }, index) => (
                <Accordion key={id} title={content.title} index={index}>
                  {content.list
                    .filter(item => item.message)
                    .map(({ message, name, rating, timestamp }, i) => {
                      const { day, year, time } = dateFormatter(timestamp, true);

                      return (
                        <S.FeedbackTestimonial key={`testimonial-${i + 1}`} themeType={theme}>
                          <Flex directionColumn alignFlexStart>
                            <S.FeedbackTestimonialTop>
                              {rating && (
                                <Flex justifyFlexStart>
                                  {[...Array(5)].map((_, j) => (
                                    <S.FeedbackTestimonialStarWrapper
                                      key={`star-${j + 1}`}
                                      active={rating >= j + 1}
                                      themeType={theme}
                                    >
                                      <IconStar />
                                    </S.FeedbackTestimonialStarWrapper>
                                  ))}
                                </Flex>
                              )}
                              <p>{message}</p>
                            </S.FeedbackTestimonialTop>
                            <S.FeedbackTestimonialBottom themeType={theme}>
                              <Flex>
                                <p>{name},</p>&nbsp;
                                <time dateTime={`${day}, ${year}, ${time}`}>
                                  {day === 'Today' ? `${day}, ${time}` : `${day}, ${year}, ${time}`}
                                </time>
                              </Flex>
                            </S.FeedbackTestimonialBottom>
                          </Flex>
                        </S.FeedbackTestimonial>
                      );
                    })}
                </Accordion>
              ))}
            </RequestDataWrapper>
          ) : (
            <S.FeedbackTestimonialsEmpty>
              No testimonials yet. Be the first one to submit! Fill out the form below.
            </S.FeedbackTestimonialsEmpty>
          )}
        </Flex>
      </Container>
      <S.FeedbackTestimonialBlob>
        <IconBlobTwo />
      </S.FeedbackTestimonialBlob>
    </S.FeedbackTestimonialsSection>
  );
};

export default FeedbackTestimonialsSection;
