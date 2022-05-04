import { Accordion } from '../../components';
import { companyServiceData } from '../../utils/data';

const About = () => {
  return (
    <div>
      <h1>Our company services:</h1>
      <Accordion data={companyServiceData} />
    </div>
  );
};

export default About;
