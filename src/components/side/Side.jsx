import classes from './side.scss';

const nav = [
    {
        display: 'Weather',
        path: '/'
    },
    {
        display: 'World weather',
        path: '/worldWeather'
    },
    {
        display: 'Contact Us',
        path: '/contactUs'
    },
]

function Side() {
    return (
        <div className={ classes.side }>
            <ul className={ classes.nav }>
                {
                    nav.map((route, index) => (
                        
                        <li key={index} >
                            <a to={route.path}>
                                {route.display}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Side;