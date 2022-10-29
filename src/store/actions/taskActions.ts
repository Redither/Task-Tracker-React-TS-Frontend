import axios from 'axios'

import { API_KEY } from './../../config';
import { taskSlice } from '../reducers/taskSlice';
import { Task } from '../../types/ITask';

export const getTasks = () => (dispatch: any) => {
    
    axios.get(`${API_KEY}/api/tasks/?limit=10000`)
        .then(res => {
            dispatch(taskSlice.actions.setTasks(res.data.results))
            dispatch(taskSlice.actions.setPages(res.data))
        })
}
export const createTask = (task: Task) => (dispatch: any) => {
    axios.post(`${API_KEY}/api/tasks/`, task)
        .then(res => dispatch(taskSlice.actions.addTask(res.data)))
}
export const deleteTask = (id: number) => (dispatch: any) => {
    axios.delete(`${API_KEY}/api/tasks/${id}/`)
        .then(() => dispatch(taskSlice.actions.deleteTask(id)))
}