import './Preloader.css';
import preloaderImg from '../../assets/img/spinner.svg';

function Preloader() {
  return (
    <div className="preloader">
      <img src={preloaderImg} alt="Preloader" className="preloader__img" />
    </div>
  );
}

export default Preloader;
