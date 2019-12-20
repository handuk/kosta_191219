import React, { Component } from 'react';
import './TodoItem.css';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions';



class TodoItem extends Component {

    /* shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    } */

    handleRemove = (id) => {
        this.props.removeTodo(id);
    }

    handleToggle = (todo) => {
        this.props.toggleTodo(todo)
    }


    render() {
        const { text, checked, id } = this.props;
        const { handleRemove, handleToggle } = this;
        return (
            <div className="todo-item" onClick={() => {
                const todo = { id, text, checked };
                todo.checked = !todo.checked;
                handleToggle(todo)
            }}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(id)
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default connect(null, { removeTodo, toggleTodo })(TodoItem);
