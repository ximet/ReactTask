import aboutImage from '../../public/about.jpg';
import CardList from './CardList';

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

const About = () => {
  return (
    <div className="app__main about">
      <div className="about__info">
        <h1 className="about__info__title">About us</h1>
        <p className="about__info__subtext">The weather app you've always dreamed of...</p>
        <CardList items={services} />
      </div>
      <img className="about__img" src={aboutImage} alt="about-image" />
    </div>
  );
};

export default About;
