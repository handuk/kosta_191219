import './Form.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class Form extends Component {
    //상태변수
    state = {
        input: ''
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value // input 의 다음 바뀔 값
        });
    }
    handleCreate = () => {
        //서버에게 등록할 값 보내기
        this.props.addTodo(
            {
                text: this.state.input,
                checked: false,
            });
        this.setState({ input: '' });
    }
    handleKeyPress = (e) => {
        // 눌려짂 키가 Enter 이면 handleCreate 호출
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }
    render() {

        const { input } = this.state;
        const {handleChange, handleCreate, handleKeyPress} = this;

        return (
            <div className="form">
                <input value={input} onChange={handleChange}
                    onKeyPress={handleKeyPress} />
                <div className="create-button" onClick={handleCreate}>추가</div>
            </div>
        );
    }
}

export default connect(null, { addTodo })(Form);