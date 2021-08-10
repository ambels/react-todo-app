import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Todo from './Todo';
import AddTodo from './AddTodo';
import Topic from '../topics/Topic';

const todosSelector = state => state.todos;

const Todos = () => {
    const todos = useSelector(todosSelector);
    const todosCount = todos.length;
    const title = todosCount === 0 ? 'You have no todos at the moment.' : `My todos (${todosCount})`;
    let match = useRouteMatch();
    return (
        <section className="container">
            <div className="row">
                <div className="col-6 m-auto">
                    <AddTodo />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <h3>{title}</h3>
                </div>

                <div className="col-12 mb-3">
                    <span>Sort: </span>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary">All</button>
                        <button type="button" className="btn btn-outline-primary">Active</button>
                        <button type="button" className="btn btn-outline-primary">Completed</button>
                    </div>
                </div>

                <Switch>
                    <Route path={`${match.path}/:topicId`}>
                        <Topic />
                    </Route>
                    <Route path={`${match.path}`}>
                        <h1>Please select a todo.</h1>
                        {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
                    </Route>
                </Switch>

            </div>
        </section>
    );
}

export default Todos;
