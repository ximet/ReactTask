import { Component } from 'react';
import PropTypes from 'prop-types';
import { icons } from '../../utils/icons';
import { MIN_STAR_LENGTH } from '../../config/constants';
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
    const rating = this.props.value;
    const { hoverAnimation } = this.state;

    return (
      <S.RateWrapper>
        <S.StarWrapper>
          {MIN_STAR_LENGTH.map(star => (
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

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default StarRating;
