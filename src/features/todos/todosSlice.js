import axios from 'axios';

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/todosLoaded':
            return action.payload;
        case 'todos/todoAdded':
            return [
                ...state,
                action.payload
            ];
        case 'todos/todoDeleted':
            return state.filter(todo => todo.id !== action.payload);
        case 'todos/todoToggled':
            return state.map(todo => {
                if (todo.id !== action.payload.id) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: action.payload.completed
                }
            })

        default:
            return state;
    }
}

export const todosLoaded = todos => {
    return {
        type: 'todos/todosLoaded',
        payload: todos
    }
}

export const todoAdded = todo => {
    return {
        type: 'todos/todoAdded',
        payload: todo
    }
}

export const todoDeleted = id => {
    return {
        type: 'todos/todoDeleted',
        payload: id
    }
}

export const todoToggled = todo => {
    return {
        type: 'todos/todoToggled',
        payload: todo
    }
}

export const fetchTodos = async (dispatch, getState) => {
    const response = await axios.get('http://localhost:8000/api/todos')
        .then(response => response)
        .catch(error => console.log('Fetching todos error: ', error));

    dispatch(todosLoaded(response.data));
}

export function addTodo(todo) {
    return async function addTodoThunk(dispatch, getState) {
        const response = await axios.post('http://localhost:8000/api/todos', todo)
            .then(response => response)
            .catch(error => console.log('Adding todo error: ', error));

        dispatch(todoAdded(response.data));
    }
}

export function deleteTodo(id) {
    return async function deleteTodoThunk(dispatch, getState) {
        const response = await axios.delete(`http://localhost:8000/api/todos/${id}`)
            .then(response => response)
            .catch(error => console.log('Deleting todo error: ', error));

        dispatch(todoDeleted(response.data.id));
    }
}

export function toggleTodo(todo) {
    return async function toggleTodoThunk(dispatch, getState) {
        const response = await axios.put(`http://localhost:8000/api/todos/${todo.id}`, todo)
            .then(response => response)
            .catch(error => console.log('Toggling todo error: ', error));

        dispatch(todoToggled(response.data));
    }
}

export default todosReducer;
