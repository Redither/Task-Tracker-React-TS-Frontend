import React, { ChangeEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { isValid } from '../../store/actions/mainActions';
import { createGroup } from '../../store/actions/groupActions';
import { Group } from '../../types/IGroup';

import classes from './CreateGroup.module.scss'

const CreateGroup = () => {

    const dispatch = useAppDispatch()

    const employees = useAppSelector(state => state.employee.employees)
    const tasks = useAppSelector(state => state.task.tasks)

    const [groupName, setGroupName] = useState<string>('')
    const [leader, setLeader] = useState<number>(-1)
    const [task, setTask] = useState<number>(-1)
    const [valid, setValid] = useState<boolean>(true)

    const handleSubmit = () => {
        const body: Group = {
            group_name: groupName,
            leader: [leader],
            task: [task],
        }

        if (isValid(body)){
            dispatch(createGroup(body))
            setValid(true)
        }

        
        else setValid(false)
    }

    const handleSelect1 = (e: ChangeEvent<HTMLSelectElement>) => {
        setLeader(Number(e.target.selectedOptions[0].id))
    }
    const handleSelect2 = (e: ChangeEvent<HTMLSelectElement>) => {
        setTask(Number(e.target.selectedOptions[0].id))
    }

    return (
        <div className={classes.container}>
            <h2>Create group</h2>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setGroupName(e.target.value)} placeholder='Group name'/>
            <select onChange={handleSelect1} placeholder='Leader'>
                <option disabled selected>Leader</option>
                {employees.map(employee => <option id={`${employee.id}`} key={employee.id}>{employee.name}</option>)}
            </select>
            <select onChange={handleSelect2} placeholder='Leader'>
                <option disabled selected>Task</option>
                {tasks.map(task => <option id={`${task.id}`} key={task.id}>{task.title}</option>)}
            </select>
            {!valid && <div style={{color: 'red'}}>Fill all fields</div>}
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
};

export default CreateGroup;