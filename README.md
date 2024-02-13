REDUX


1 . npm install @reduxjs/toolkit

2 . npm install react-redux

3 . create a store.js

import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
   
})


4 . create slice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";


4.1 . set initialState to slice

const initialState = {
    todos : [{
        id: nanoid(),
        text: "Learn Redux Toolkit",
        completed: false
    }]
}


4.2 add createSlice function
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})






4.3 individual reducer functions export

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;



4.4. export slice reducer to access in store
export default todoSlice.reducer


5 . Update the reducer in store
import todoReducer from "../features/todo/todoSlice";


export const store = configureStore({
    reducer: todoReducer
})


6 . dispatch

const dispatch = useDispatch();

dispatch uses reducer to make changes in store

const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }


7.useSelector

const todos = useSelector((state) => state.todos);


8. Wrap main app with Provider
import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { store } from "./app/store";

<Provider store={store}>
      <h1>Learn About Redux toolkit.</h1>
      <AddTodo />
      <Todos />
    </Provider>
