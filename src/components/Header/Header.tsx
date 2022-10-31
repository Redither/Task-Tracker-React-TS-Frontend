import { Link } from 'react-router-dom';
import classes from './Header.module.scss'


const routes = [
    {
        id: 0,
        route: '/tasks',
        text: 'Tasks'
    },
    {
        id: 1,
        route: '/employees',
        text: 'Employees'
    },
    {
        id: 2,
        route: '/groups',
        text: 'Groups'
    },
]

const Header = () => {
    return (
        <header>
            <div className={classes.container}>
                <nav className={classes.routes}>
                    {routes.map(route =>
                        <Link key={route.id} to={route.route}>
                            {route.text}
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;

