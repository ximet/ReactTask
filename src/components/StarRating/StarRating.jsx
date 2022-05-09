import { Component } from 'react';
import { icons } from '../../utils/icons';
import * as S from './StarRating.styles';

class StarRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: [],
      rating: 0,
      hovered: 0
    };

    this.state.stars.push(...Array.from({ length: 5 }, (_, i) => i + 1));
  }

  changeRating(newRating) {
    this.setState({ rating: newRating }, () => {
      this.getStarRate(this.state.rating);
    });
  }

  hoverRating(rating) {
    this.setState({ hovered: rating });
  }

  getStarRate(star) {
    this.props.onChange(star);
  }

  render() {
    const { stars, rating, hovered } = this.state;

    return (
      <S.RateWrapper>
        <S.StarWrapper>
          {stars.map(star => (
            <S.Star
              key={star}
              onClick={() => this.changeRating(star)}
              onMouseEnter={() => this.hoverRating(star)}
              onMouseLeave={() => this.hoverRating(0)}
            >
              {rating < star && hovered < star ? icons.deselectedIcon : icons.selectedIcon}
            </S.Star>
          ))}
        </S.StarWrapper>
      </S.RateWrapper>
    );
  }
}

export default StarRating;
