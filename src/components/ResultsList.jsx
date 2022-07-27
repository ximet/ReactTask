import { Link } from 'react-router-dom';

export default function ResultsList(props) {
  return (
    <>
      {!!props.list.length && (
        <div className="search-results">
          <ul className="search-results__list">
            {props.list.map(item => (
              <li key={item.lat} className="search-results__list-item">
                <Link
                  to={{
                    pathname: `/location/weather-in-${item.name}`,
                    search: `?name=${item.name}&lon-lat=${item.lat},${item.lat}&id=${item.id}`
                  }}
                >
                  {item.name}, {item.adminArea}, {item.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
