import SecondaryPagesLayout from 'components/layouts/SecondaryPagesLayout';
import React, { FC } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { MdWbSunny } from 'react-icons/md';
import { FaTemperatureLow } from 'react-icons/fa';
import { getBannerImage } from 'utils/getImages';
import styles from './styles.module.scss';

const linkIcons = [
  {
    title: 'Current Weather',
    icon: <FaTemperatureLow className={styles.icon} />,
    name: 'current'
  },
  {
    title: 'Weather Forecast',
    icon: <MdWbSunny className={styles.icon} />,
    name: 'forecast'
  },
  {
    title: 'Get the Dark theme',
    icon: <CgDarkMode className={styles.icon} />,
    name: 'theme'
  }
];

const Info: FC = () => {
  const handleClick = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLAnchorElement>,
    name: string
  ): void => {
    event.preventDefault();
    const link = document.getElementById(name);
    link?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <SecondaryPagesLayout>
      <div className={styles.banner}>
        <div className={styles.imgDiv}>
          <img src={getBannerImage} alt="weather" className={styles.backgroundImage} />
        </div>
        <h1 className={styles.title}>Weather in the city</h1>
      </div>
      <section className={styles.content}>
        {linkIcons.map(({ title, icon, name }) => {
          return (
            <div className={styles.iconBox}>
              <a
                key={name}
                href={`#${name}`}
                onClick={event => {
                  return handleClick(event, name);
                }}
                onKeyDown={event => {
                  return handleClick(event, name);
                }}
              >
                {icon}
                <h3>{title}</h3>
              </a>
            </div>
          );
        })}
      </section>
      <div className={styles.scrollContainer}>
        <section className={styles.currentWeatherBox} id="current">
          <div className={styles.text}>
            <h2 className={styles.sectionTitle}>Your Current City Weather</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos inventore, beatae
            accusantium hic, non modi nulla ex possimus neque sed, laborum quia impedit. Doloremque
            rem libero sequi eaque nisi ex sunt hic similique non iusto debitis eos provident
            nesciunt dicta ipsa, sapiente odit consectetur. Repellat necessitatibus harum sit error
            consequuntur esse quae dolor, voluptas repellendus nostrum, praesentium tempore dolorum
            natus distinctio odio soluta inventore recusandae exercitationem reiciendis explicabo
            quaerat earum.
          </div>
        </section>
        <section className={styles.forecastBox} id="forecast">
          <div className={styles.text}>
            <h2 className={styles.sectionTitle}>Daily and Hourly Forecast</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos inventore, beatae
            accusantium hic, non modi nulla ex possimus neque sed, laborum quia impedit. Doloremque
            rem libero sequi eaque nisi ex sunt hic similique non iusto debitis eos provident
            nesciunt dicta ipsa, sapiente odit consectetur. Repellat necessitatibus harum sit error
            consequuntur esse quae dolor, voluptas repellendus nostrum, praesentium tempore dolorum
            natus distinctio!
          </div>
        </section>
        <section className={styles.themeBox} id="theme">
          <div className={styles.text}>
            <h2 className={styles.sectionTitle}>Dark Mode</h2>
            <div className={styles.iconsImg} />
          </div>
        </section>
      </div>
    </SecondaryPagesLayout>
  );
};

export default Info;
