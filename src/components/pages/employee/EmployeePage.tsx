import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { Employee } from '../../../types/IEmployee';

import classes from './EmployeePage.module.scss'
import { deleteEmployee } from '../../../store/actions/employeeActions';

const EmployeePage = () => {

    const dispatch = useAppDispatch()

    const employees = useAppSelector((state) => state.employee.employees)

    useEffect(() => {
        if (employees.length) setSortedArr(employees)
    }, [employees])

    const [sortedArr, setSortedArr] = useState<Employee[]>()
    const [sort, setSort] = useState<string>('')
    const [page, setPage] = useState<number>(0)

    const changeSort = () => {
        if (sort === '') setSort('A-z')
        else if (sort === 'A-z') setSort('Z-a')
        else if (sort === 'Z-a') setSort('A-z')
    }

    useEffect(() => {
        let tempArr = [...employees]
        if (sort === 'A-z') setSortedArr(tempArr.sort((a, b) => a.name.localeCompare(b.name)))
        else if (sort === 'Z-a') setSortedArr(tempArr.sort((a, b) => b.name.localeCompare(a.name)))
    }, [sort])

    const handleDelete = (id: any) => {
        dispatch(deleteEmployee(id))
    }

    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <h2>Employees</h2>
                <div className={classes.sort}>
                    <span>Sort by name:</span>
                    {
                        sort === 'A-z'
                            ?
                            <button onClick={changeSort}><FaArrowDown /></button>
                            :
                            <button onClick={changeSort}><FaArrowUp /></button>
                    }
                </div>
                <div className={classes.page}>
                    <button onClick={() => setPage(page - 1)} disabled={page === 0}><FaArrowLeft /></button>
                    <button onClick={() => setPage(page + 1)} disabled={employees.length / 3 <= page + 1}><FaArrowRight /></button>
                </div>
            </div>
            {sortedArr?.slice(page * 3, (page + 1) * 3).map((employee) =>
                <div className={classes.item}>
                    <div className={classes.main}>
                        <div><span>Name:</span> <span>{employee.name}</span></div>
                        <div><span>Surname:</span> <span>{employee.surname}</span></div>
                        <div><span>Age:</span> <span>{employee.age}</span></div>
                        <div><span>Salary:</span> <span>{employee.salary}</span></div>
                    </div>
                    <div className={classes.delete}>
                        <button onClick={() => handleDelete(employee.id)}><MdDelete /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeePage;