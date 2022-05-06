import { Component } from 'react';
import * as S from './StarRating.styles';

class StarRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: [],
      rating: 0,
      hovered: 0,
      selectedIcon: '★',
      deselectedIcon: '☆'
    };

    let outOf = props.outOf ? props.outOf : 5;

    for (let i = 0; i < outOf; i++) {
      this.state.stars.push(i + 1);
    }
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
    const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

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
              {rating < star ? (hovered < star ? deselectedIcon : selectedIcon) : selectedIcon}
            </S.Star>
          ))}
        </S.StarWrapper>
      </S.RateWrapper>
    );
  }
}

export default StarRating;
