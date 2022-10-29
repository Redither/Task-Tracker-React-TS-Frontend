import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { useAppSelector, useAppDispatch } from '../../../store/hooks';

import classes from './GroupPage.module.scss'
import { deleteGroup } from '../../../store/actions/groupActions';
import { Group } from '../../../types/IGroup';

const GroupPage = () => {

    const dispatch = useAppDispatch()

    const groups = useAppSelector((state) => state.group.groups)

    useEffect(() => {
        if (groups.length) setSortedArr(groups)
    }, [groups])

    const [sortedArr, setSortedArr] = useState<Group[]>()
    const [sort, setSort] = useState<string>('')
    const [group, setGroup] = useState<number>(0)

    const changeSort = () => {
        if (sort === '') setSort('A-z')
        else if (sort === 'A-z') setSort('Z-a')
        else if (sort === 'Z-a') setSort('A-z')
    }

    useEffect(() => {
        let tempArr = [...groups]
        if (sort === 'A-z') setSortedArr(tempArr.sort((a, b) => a.group_name.localeCompare(b.group_name)))
        else if (sort === 'Z-a') setSortedArr(tempArr.sort((a, b) => b.group_name.localeCompare(a.group_name)))
    }, [sort])

    const handleDelete = (id: any) => {
        dispatch(deleteGroup(id))
    }

    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <h2>Groups</h2>
                <div className={classes.sort}>
                    <span>Sort by group name:</span>
                    {
                        sort === 'A-z'
                            ?
                            <button onClick={changeSort}><FaArrowDown /></button>
                            :
                            <button onClick={changeSort}><FaArrowUp /></button>
                    }
                </div>
                <div className={classes.page}>
                    <button onClick={() => setGroup(group - 1)} disabled={group === 0}><FaArrowLeft /></button>
                    <button onClick={() => setGroup(group + 1)} disabled={groups.length / 3 <= group + 1}><FaArrowRight /></button>
                </div>
            </div>
            {sortedArr?.slice(group * 3, (group + 1) * 3).map((group) =>
                <div className={classes.item}>
                    <div className={classes.main}>
                        <div><span>Group name:</span> <span>{group.group_name}</span></div>
                        <div><span>Leader:</span> <span>{group.leader}</span></div>
                        {group.task && <div><span>Task:</span> <span>{group.task}</span></div>}
                    </div>
                    <div className={classes.delete}>
                        <button onClick={() => handleDelete(group.id)}><MdDelete /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GroupPage;