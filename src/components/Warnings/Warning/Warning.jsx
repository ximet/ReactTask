import Link from '../../Link/Link';
import classes from './Warning.module.scss';

function Warning() {
  return (
    <div className={classes.item}>
      <div className={classes.timestamp}>08.09.2021 17:00</div>
      <div className={classes.title}>Fog</div>
      <div className={classes.type}>Potentially dangerous</div>
      <div className={classes.description}>
        <p>
          Dense Fog Advisory issued January 08 at 4:17AM CST until January 08 at 11:00AM CST by NWS
          Minneapolis; Anoka; Benton; Blue Earth; Brown; Carver; Chippewa; Chisago; Douglas;
          Hennepin; Isanti; Kanabec; Kandiyohi; Lac Qui Parle; Le Sueur; Martin; McLeod; Meeker;
          Mille Lacs; Morrison; Nicollet; Pope; Ramsey; Redwood; Renville; Scott; Sherburne; Sibley;
          Stearns; Stevens; Swift; Todd; Watonwan; Wright; Yellow Medicine...
        </p>
      </div>
      <Link className={classes.linkMore} href="#">
        read more
      </Link>
    </div>
  );
}

export default Warning;
