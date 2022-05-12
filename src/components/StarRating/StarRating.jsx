import { Component } from 'react';
import { icons } from '../../utils/icons';
import * as S from './StarRating.styles';

class StarRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverAnimation: 0
    };
  }
  getStarRate(star) {
    this.props.onChange(star);
  }

  hoverRating(star) {
    this.setState({ hoverAnimation: star });
  }

  render() {
    const { stars, rating } = this.props.value;
    const { hoverAnimation } = this.state;

    return (
      <S.RateWrapper>
        <S.StarWrapper>
          {stars.map(star => (
            <S.Star
              key={star}
              onClick={() => this.getStarRate(star)}
              onMouseEnter={() => this.hoverRating(star)}
              onMouseLeave={() => this.hoverRating(0)}
            >
              {rating < star && hoverAnimation < star ? icons.deselectedIcon : icons.selectedIcon}
            </S.Star>
          ))}
        </S.StarWrapper>
      </S.RateWrapper>
    );
  }
}

export default StarRating;
