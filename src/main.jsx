import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import { Toaster } from 'react-hot-toast'; 
import AgentDashboard from './components/agent-dashboard/AgentDashboard.jsx'
import AgentMerchant from './components/agent-merchant-dashboard/AgentMerchant.jsx'
import Interactions from './components/interactions/Interactions.jsx'
import Tasks from './components/task-management/Tasks.jsx'
import Notifications from './components/notifications/Notifications.jsx'
import CreateInteraction from './components/interactions/CreateInteraction.jsx'
import AssignTask from './components/task-management/AssignTask.jsx'
import TaskDetails from './components/task-management/TaskDetails.jsx'
import TaskHistory from './components/task-management/TaskHistory.jsx'
import InteractionHistory from './components/interactions/InteractionHistory.jsx'
import InteractionDetails from './components/interactions/InteractionDetails.jsx'
import Login from './components/auth-login/Login.jsx'
import Signup from './components/auth-signup/Signup.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='loginsignup' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='agent-dashboard' element={<AgentDashboard/>}/>
      <Route path='merchant/:id' element={<AgentMerchant/>}/>
      <Route path='merchant/:id/interactions' element={<Interactions/>}/>
      <Route path='merchant/:id/tasks' element={<Tasks/>}/>
      <Route path='merchant/:id/notifications' element={<Notifications/>}/>
      <Route path='merchant/:id/start-interaction' element={<CreateInteraction/>}/>
      <Route path='merchant/:id/tasks/assign-task' element={<AssignTask/>}/>
      <Route path='merchant/:id/tasks/:id' element={<TaskDetails/>}/>
      <Route path='merchant/:id/tasks/:id/history' element={<TaskHistory/>}/>
      <Route path='merchant/:id/interactions/:id' element={<InteractionDetails/>}/>
      <Route path='merchant/:id/interactions/:id/history' element={<InteractionHistory/>}/>



    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster reverseOrder={false} />  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
