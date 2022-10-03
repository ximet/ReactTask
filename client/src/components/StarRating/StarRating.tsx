import React, { FunctionComponent, Dispatch, SetStateAction, useState } from 'react';

// Types
import type { InputProps } from 'types';

// Assets
import { IconStar } from 'assets/images/svg';

// Styles
import { Flex } from 'styles/global';
import * as S from './StarRating.styles';

interface StarRatingProps extends InputProps {
  numOfStars?: number;
  rating?: number | null;
  ratingHovered?: number | null;
  setRating?: Dispatch<SetStateAction<number | null>>;
  setRatingHovered?: Dispatch<SetStateAction<number | null>>;
}

const StarRating: FunctionComponent<StarRatingProps> = ({
  id,
  numOfStars,
  theme,
  elementConfig,
  ...otherProps
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [ratingHovered, setRatingHovered] = useState<number | null>(null);

  return (
    <S.StarRating>
      <Flex justifyFlexStart>
        {[...Array(numOfStars)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <S.StarWrapper
              key={`star-${i + 1}`}
              themeType={theme}
              active={
                !!(
                  (ratingHovered && ratingValue <= ratingHovered) ||
                  (rating && ratingValue <= (ratingHovered || rating))
                )
              }
            >
              <label htmlFor={id}>
                <S.Star
                  name={id}
                  {...elementConfig}
                  onClick={() => setRating && setRating(ratingValue)}
                  onMouseEnter={() => setRatingHovered && setRatingHovered(ratingValue)}
                  onMouseLeave={() => setRatingHovered && setRatingHovered(null)}
                  {...otherProps}
                />
                <IconStar />
              </label>
            </S.StarWrapper>
          );
        })}
      </Flex>
    </S.StarRating>
  );
};

export default StarRating;
