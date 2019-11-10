import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './List.scss';

class List extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
        {
          id: 1,
          name: 'Minsk',
          temperature: '+ 43',
        },
        {
          id: 2,
          name: 'Moscow',
          temperature: '+ 21',
        },
        {
          id: 3,
          name: 'Bratislava',
          temperature: '+ 15',
        },
      ],
    };
  }

  render() {
    const { cities } = this.state;
    return (
      <>
        <h1 className={styles.title}>Select city</h1>
        <div className={styles.citiesList}>
          { cities && cities.map((item) => (
            <button
              type="button"
              key={item.id}
              className={styles.cityDetail}
              onClick={() => console.log(item)}>
              <h2 className={styles.cityName}>
                {item.name}
              </h2>
              <span className={styles.temperature}>
                {item.temperature}
              </span>
            </button>
          ))}
        </div>

        <Button
          name="Back"
          alignRight
          clickHandler={() => console.log('Back')} />
      </>
    );
  }
}

export default List;
