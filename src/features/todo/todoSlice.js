import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{
        id: nanoid(),
        text: "Learn Redux Toolkit",
        completed: false
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("addTodo", action)
            state.todos.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },
        removeTodo: (state, action) => {
            console.log("removeTodo", action)
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer
