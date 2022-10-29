import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CreateTask from './CreateTask';
import CreateGroup from './CreateGroup';
import CreateEmployee from './CreateEmployee';

import classes from './Sidebar.module.scss'

const Sidebar = () => {

    const location = useLocation()

    const CreateItem = () => {
        switch(location.pathname){
            case '/tasks':
                return (
                    <CreateTask/>
                )
            case '/employees':
                return (
                    <CreateEmployee/>
                )
            case '/groups':
                return (
                    <CreateGroup/>
                )
        }
        return (<></>)
    }


    return (
        <div className={classes.container}>
            <CreateItem />
        </div>
    );
};

export default Sidebar;