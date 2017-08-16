import React from 'react';
import {render}  from 'react-dom';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';


const root = document.querySelector('#root');
render(<TodoInput/>,root);