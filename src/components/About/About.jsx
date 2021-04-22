import PropTypes from 'prop-types';
import CardList from '../CardList';
import aboutImage from '../../../public/about.jpg';
import * as Styled from '../../styles/globalStyles';

const services = [
  {
    name: 'Search By Location',
    description: "Whereever in the world you'd like to check the weather, we can help",
    id: 1
  },
  {
    name: 'Current Weather',
    description: 'See what the weather is anywhere, in real time.',
    id: 2
  },
  {
    name: 'Daily forecast',
    description: 'Be prepared for whatever nature surprises you with',
    id: 3
  }
];

const About = ({ className }) => {
  return (
    <div className={className}>
      <Styled.Container column>
        <h1>About us</h1>
        <p>The weather app you've always dreamed of...</p>
        <CardList items={services} />
      </Styled.Container>
      <img src={aboutImage} alt="about-image" />
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string
};

export default About;
