import SecondaryPagesLayout from 'components/layouts/SecondaryPagesLayout';
import React, { FC, useRef } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { MdWbSunny } from 'react-icons/md';
import { FaTemperatureLow } from 'react-icons/fa';
import { getBannerImage } from 'utils/getImages';
import styles from './styles.module.scss';

interface Ref {
  current: HTMLDivElement | null;
}

const Info: FC = () => {
  const refSectionCurrent = useRef<HTMLInputElement | null>(null);
  const refForecast = useRef<null | HTMLDivElement>(null);
  const refTheme = useRef<null | HTMLDivElement>(null);

  const handleClick = (ref: Ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SecondaryPagesLayout>
      <div className={styles.banner}>
        <div className={styles.imgDiv}>
          <img src={getBannerImage()} alt="weather" className={styles.backgroundImage} />
        </div>
        <h1 className={styles.title}>Weather in the city</h1>
      </div>
      <section className={styles.content}>
        <div
          className={styles.iconBox}
          onClick={() => {
            return handleClick(refSectionCurrent);
          }}
          onKeyDown={() => {
            return handleClick(refSectionCurrent);
          }}
        >
          <FaTemperatureLow className={styles.icon} />
          <h3>Current Weather</h3>
        </div>
        <div
          className={styles.iconBox}
          onClick={() => {
            return handleClick(refForecast);
          }}
          onKeyDown={() => {
            return handleClick(refForecast);
          }}
        >
          <MdWbSunny className={styles.icon} />
          <h3>Weather Forecast</h3>
        </div>
        <div
          className={styles.iconBox}
          onClick={() => {
            return handleClick(refTheme);
          }}
          onKeyDown={() => {
            return handleClick(refTheme);
          }}
        >
          <CgDarkMode className={styles.icon} />
          <h3>Get the Dark theme</h3>
        </div>
      </section>
      <section ref={refSectionCurrent} className={styles.currentWeatherBox}>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>Your Current City Weather</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos inventore, beatae
          accusantium hic, non modi nulla ex possimus neque sed, laborum quia impedit. Doloremque
          rem libero sequi eaque nisi ex sunt hic similique non iusto debitis eos provident nesciunt
          dicta ipsa, sapiente odit consectetur. Repellat necessitatibus harum sit error
          consequuntur esse quae dolor, voluptas repellendus nostrum, praesentium tempore dolorum
          natus distinctio odio soluta inventore recusandae exercitationem reiciendis explicabo
          quaerat earum, nihil obcaecati! Placeat doloribus a, voluptas, tempore cum sint quaerat
          deserunt assumenda id minus deleniti dolorem accusamus.
        </div>
      </section>
      <section ref={refForecast} className={styles.forecastBox}>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>Daily and Hourly Forecast</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos inventore, beatae
          accusantium hic, non modi nulla ex possimus neque sed, laborum quia impedit. Doloremque
          rem libero sequi eaque nisi ex sunt hic similique non iusto debitis eos provident nesciunt
          dicta ipsa, sapiente odit consectetur. Repellat necessitatibus harum sit error
          consequuntur esse quae dolor, voluptas repellendus nostrum, praesentium tempore dolorum
          natus distinctio odio soluta inventore recusandae exercitationem reiciendis explicabo
          quaerat earum, nihil obcaecati!
        </div>
      </section>
      <section ref={refTheme} className={styles.themeBox}>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>Dark Mode</h2>
          <div className={styles.iconsImg} />
        </div>
      </section>
    </SecondaryPagesLayout>
  );
};

export default Info;
