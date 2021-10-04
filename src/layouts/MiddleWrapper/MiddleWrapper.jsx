import ContentWrapper from '../ContentWrapper/ContentWrapper';
import SidebarWrapper from '../SIdebarWrapper/SIdebarWrapper';
import Container from '../../components/Container/Container';

import './MiddleWrapper.css';

function MiddleWrapper() {
  return (
    <Container>
      <div className="middle-wrapper">
        <ContentWrapper />
        <SidebarWrapper />
      </div>
    </Container>
  );
}

export default MiddleWrapper;
