import React, { FunctionComponent, useEffect, useState } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Components
import RequestDataWrapper from 'components/RequestDataWrapper/RequestDataWrapper';
import Accordion from 'components/Accordion/Accordion';

// Assets
import { IconStar } from 'assets/images/svg';

// Utils
import dateFormatter from 'utils/dateFormatter';
import {
  Testimonials,
  testimonialsConfig,
  generateTestimonialData
} from './FeedbackTestimonialsSection.utils';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../FeedbackPage.styles';

const testimonialsConfigArray = Object.entries(testimonialsConfig).map(entry => ({
  title: entry[1].title
}));

const FeedbackTestimonialsSection: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);
  const { data, loading, error } = useAppSelector(state => state.feedback);
  const [testimonials, setTestimonials] = useState<Testimonials>();

  const testimonialsDataArray =
    testimonials &&
    Object.entries(testimonials).map(entry => ({
      id: entry[0],
      content: entry[1]
    }));

  // Generate testimonials data object for use in the accordion tabs
  useEffect(() => {
    const testimonialData = generateTestimonialData(data);
    setTestimonials(testimonialData);
  }, [data]);

  return (
    <S.FeedbackTestimonialsSection id="testimonials">
      <Container>
        <Flex directionColumn>
          <h2>Testimonials</h2>
          {data.length > 0 ? (
            <RequestDataWrapper data={data} loading={loading} error={error}>
              {testimonialsDataArray?.map(({ id, content }, index) => (
                <Accordion key={id} title={testimonialsConfigArray[index].title} index={index}>
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
    </S.FeedbackTestimonialsSection>
  );
};

export default FeedbackTestimonialsSection;
