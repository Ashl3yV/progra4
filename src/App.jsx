import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from "./TaskList"
import Task from './Task'

function App() {
  const tasks = [
    {id: 1, name: "Tarea1"},
    {id: 2, name: "Tarea2"},
    {id: 3, name: "Tarea3"}
  ]
  const tasks2 = [
    {id: 1, name: "Task1"},
    {id: 2, name: "Task2"},
    {id: 3, name: "Task3"},
    {id: 4, name: "Task4"},
    {id: 5, name: "Task5"},
    {id: 6, name: "Task6"}
  ]
  return ( <Fragment> 
    <TaskList tasks = {tasks}/>
    <TaskList tasks = {tasks2}/>
    <Task keyValue = {10} name = "fin de la lista"/>
  </Fragment>)
  
  
  
}

export default App
