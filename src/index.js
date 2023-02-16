import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskDetail, { loader as taskLoader } from './pages/TaskDetail';
import Task from './pages/Task';

const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children: [
      { index: true, element: <Task /> },
      { path: '/task/:id',
        element: <TaskDetail />,
        loader: taskLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
