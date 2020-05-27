import React, { Component } from 'react'

class TodoForm extends Component {
    state = {
        content: ''
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({content: ''})

    }

    handleChange = (e) => {
        this.setState({content: e.target.value});

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default TodoForm
