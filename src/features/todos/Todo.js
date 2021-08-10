import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { deleteTodo, toggleTodo } from './todosSlice';

// import TodoFormModal from './TodoFormModal';

const Todo = props => {
    let match = useRouteMatch();
    let { todoId } = useParams();
    console.log('match: ', match);
    console.log('todoId: ', todoId);
    const dispatch = useDispatch();
    const deleteTodoThunk = deleteTodo(props.todo.id);

    const onChange = e => {
        const editedTodo = { ...props.todo, completed: e.target.checked };
        const toggleTodoThunk = toggleTodo(editedTodo);
        dispatch(toggleTodoThunk);
    }

    return (
        <div className="col-6 mb-2">
            <div className="card">
                <div className="card-body">
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked={props.todo.completed}
                            onChange={onChange} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {props.todo.completed ? 'Completed' : 'Mark as completed'}
                        </label>
                    </div>
                    <h5 className="card-title">
                        {props.todo.title}
                    </h5>
                    <button className="icon-absolute-top-right edit-icon"
                        type="button" data-bs-toggle="modal" data-bs-target="#todoFormModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                    </button>
                    <button className="icon-absolute-top-right close-icon" onClick={() => dispatch(deleteTodoThunk)}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x-lg"
                            viewBox="0 0 16 16">
                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                        </svg>
                    </button>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {props.todo.created}
                    </h6>
                    <p className="card-text">
                        {props.todo.details}
                    </p>
                    <Link to={`${match.url}/${props.todo.id}`} className="card-link">View</Link>
                    {/* <Link to={`${match.url}/components`}>Components</Link> */}
                    <a href="/" className="card-link">Another link</a>
                </div>
            </div>
            {/* <TodoFormModal /> */}
        </div>
    );
}

export default Todo;
