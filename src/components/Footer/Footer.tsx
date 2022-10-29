import { FaGithub } from 'react-icons/fa';
import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.links}>
                    <h3>Links for code review:</h3>
                    <a href='https://github.com/Redither/Task-Tracker-Python-Django-API'><FaGithub/>    API repository</a>
                    <a href='https://github.com/Redither/Task-Tracker-React-TS-Frontend'><FaGithub/>    SPA repository</a>
                </div>
            </div>
            <div className={classes.copyright}>
                    <span>Developed by <a href='https://github.com/Redither'>Redither</a></span>
            </div>
        </footer>
    );
};

export default Footer;