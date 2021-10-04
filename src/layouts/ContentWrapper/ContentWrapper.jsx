import MainWrapper from '../MainWrapper/MainWrapper';
import SidebarWrapper from '../SidebarWrapper/SidebarWrapper';
import Container from '../../components/Container/Container';

import './ContentWrapper.css'

function ContentWrapper() {
  return (
    <Container>
      <div className="content-wrapper">
        <MainWrapper />
        <SidebarWrapper />
      </div>
    </Container>
  );
}

export default ContentWrapper;
