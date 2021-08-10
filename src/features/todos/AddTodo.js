import React from 'react';

import TodoForm from './TodoForm';

class AddTodo extends React.Component {
    render() {
        return <TodoForm action="Add" />;
    }
}

export default AddTodo;
