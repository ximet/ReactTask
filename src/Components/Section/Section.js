import styles from './Section.css';

const Section = props => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.block}>{props.children}</div>
      </div>
    </section>
  );
};

export default Section;
