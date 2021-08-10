import React from 'react';

import TodoForm from './TodoForm';

const TodoFormModal = () => {
    return (
        <section>
            <div className="modal fade" id="todoFormModal" tabIndex="-1" aria-labelledby="todoFormModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="todoFormModalLabel">Edit todo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <TodoForm action="Edit" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TodoFormModal;
