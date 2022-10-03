import React, { FunctionComponent, useState } from 'react';

// Types
import type { InputProps } from 'types';

// Assets
import { IconStar } from 'assets/images/svg';

// Styles
import { Flex } from 'styles/global';
import * as S from './StarRating.styles';

const StarRating: FunctionComponent<InputProps> = ({ id, theme, inputConfig, ...otherProps }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [ratingHovered, setRatingHovered] = useState<number | null>(null);

  const ratings = Object.values(inputConfig!.options!);

  return (
    <S.StarRating>
      <Flex justifyFlexStart>
        {ratings.map(ratingValue => (
          <S.StarWrapper
            key={`star-${ratingValue}`}
            themeType={theme}
            active={ratingValue <= (ratingHovered! || rating!)}
          >
            <label htmlFor={id}>
              <S.Star
                name={id}
                value={ratingValue}
                {...inputConfig}
                onClick={() => setRating(ratingValue as number)}
                onMouseEnter={() => setRatingHovered(ratingValue as number)}
                onMouseLeave={() => setRatingHovered(null)}
                {...otherProps}
              />
              <IconStar />
            </label>
          </S.StarWrapper>
        ))}
      </Flex>
    </S.StarRating>
  );
};

export default StarRating;
