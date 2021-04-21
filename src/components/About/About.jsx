import aboutImage from '../../../public/about.jpg';
import * as S from '../Theme/GlobalStyles';
import CardList from '../CardList';

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
      <S.Container column>
        <h1>About us</h1>
        <p>The weather app you've always dreamed of...</p>
        <CardList items={services} />
      </S.Container>
      <img src={aboutImage} alt="about-image" />
    </div>
  );
};

export default About;
