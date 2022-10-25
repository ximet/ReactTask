import React, { FunctionComponent } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Assets
import imgSearch from 'assets/images/search.png';
import imgWidget from 'assets/images/widget.png';
import imgThemeSwitch from 'assets/images/theme-switch.png';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../AboutPage.styles';

const articles = [
  {
    title: 'Search your city',
    content:
      'Use search to find weather of your city. Just enter the name of the city in the searchbar and click on the preferred one in a dropdown window below.',
    image: { src: imgSearch, alt: 'Example of using search' }
  },
  {
    title: 'Look through different info types',
    content:
      'Check out different weather data by clicking through hourly, three-hourly and daily tabs. Click on the widget to expand it and see more detailed weather data. Use click-and-drag to view all the widgets.',
    image: { src: imgWidget, alt: 'Example of using widget' }
  },
  {
    title: 'Toggle light/dark mode',
    content: 'Switch to light or dark mode and vice versa depending on your preference.',
    image: { src: imgThemeSwitch, alt: 'Example of using theme-switch' }
  }
];

const AboutHowSection: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <S.AboutHowSection id="how-it-works" themeType={theme}>
      <Container>
        <Flex directionColumn>
          <h2>How It Works</h2>
          {articles.map(({ title, content, image }, i) => (
            <S.AboutArticle key={`article-${i + 1}`}>
              <Flex>
                <S.AboutArticleContent>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </S.AboutArticleContent>
                <S.AboutArticlePicture>
                  <img src={image.src} alt={image.alt} />
                </S.AboutArticlePicture>
              </Flex>
            </S.AboutArticle>
          ))}
        </Flex>
      </Container>
    </S.AboutHowSection>
  );
};

export default AboutHowSection;
