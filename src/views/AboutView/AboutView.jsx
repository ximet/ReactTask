import classes from './AboutView.module.scss';
import ContentWrapper from '../../layouts/ContentWrapper/ContentWrapper';
import About from '../../components/About/About';

function AboutView() {
  return (
    <div className={classes.viewContainer}>
      <div className={classes.content}>
        <ContentWrapper>
          <About />
        </ContentWrapper>
      </div>
    </div>
  );
}

export default AboutView;
