import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Header from './components/Header/Header';
import { useAppDispatch } from './store/hooks';
import { getTasks } from './store/actions/taskActions'
import { getEmployees } from './store/actions/employeeActions';
import { getGroups } from './store/actions/groupActions';
import Sidebar from './components/Sidebar/Sidebar';
import TasksPage from './components/pages/tasks/TasksPage';
import GroupPage from './components/pages/group/GroupPage';
import EmployeePage from './components/pages/employee/EmployeePage';

import classes from './App.module.scss'
import Footer from './components/Footer/Footer';

function App() {

  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    if (location.pathname === '/') navigate('/tasks')
  }, [])

  React.useEffect(() => {
    dispatch(getTasks())
    dispatch(getEmployees())
    dispatch(getGroups())
  }, [])

  return (
    <div className="App">
      <Header />
      <main className={classes.main}>
        <Sidebar />
        <Routes>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/groups" element={<GroupPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
