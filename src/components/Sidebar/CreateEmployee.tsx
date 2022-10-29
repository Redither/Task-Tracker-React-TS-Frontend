import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { isValid } from '../../store/actions/mainActions';
import { Employee } from '../../types/IEmployee';
import { createEmployee } from '../../store/actions/employeeActions';

import classes from './CreateEmployee.module.scss'

const CreateEmployee = () => {

    const dispatch = useAppDispatch()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [age, setAge] = useState<number>(-1)
    const [salary, setSalary] = useState<number>(-1)
    const [valid, setValid] = useState<boolean>(true)

    const handleSubmit = () => {
        const body: Employee = {
            name: name,
            surname: surname,
            age: age,
            salary: salary
        }

        if (isValid(body)){
            dispatch(createEmployee(body))
            setValid(true)
        }
        else setValid(false)
    }

    return (
        <div className={classes.container}>
            <h2>Create employee</h2>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder='Name'/>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)} placeholder='Surname'/>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))} placeholder='Age' type="number"/>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setSalary(Number(e.target.value))} placeholder='Salary' type="number"/>
            {!valid && <div style={{color: 'red'}}>Fill all fields</div>}
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
};

export default CreateEmployee;