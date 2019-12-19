import React, { Component } from 'react';
import PropTypes from 'prop-types';
class HelloComponent extends Component {
    //상태변수 선언
    state = {
        number : 0,
        message : '',
        username: '',
        names : ['Angular', 'React', 'Vue', 'Ember']
    }
    //event handler 메서드 선언
    handleDec = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClear = () => {
        this.setState({
            message:''
        })
    }

    handleKeyPress = (e) => {
        if(e.keyCode === 13){
            this.setState({
                names: this.state.names.concat(this.state[e.target.name]),
                [e.target.name]:''
            })
            this.myUserName.focus();
        }
    }

    handleRemove = (index) => {
        this.setState({
            names : this.state.names.filter((item, i) => i !== index)
        })
    }

    render() {
        const {name, age} = this.props;
        const {number, message, username, names} = this.state;
        const {handleDec, handleChange, handleClear, handleKeyPress, handleRemove} = this;
        const nameList = names.map((item, index) => (<li key={index} onDoubleClick={()=>handleRemove(index)}>{item}</li>))
        return (
            <React.Fragment>
                <ul>
                    {nameList}
                </ul>
                <span>입력한 값 : {message}</span><br/>
                <input type="text" name="message" value={message} onKeyDown={handleKeyPress} onChange={handleChange}/>
                <button onClick={handleClear}>초기화</button>
                <br/>
                <h3>Hello {name} age : {age}</h3>
                <h3>number : {number}</h3>
                <button onClick={()=>{
                    this.setState({
                        number : number + 1
                    })
                }}>Number 증가</button>
                <button onClick={handleDec}>Number 감소</button>


                <br/>
                <span>유저 이름은 : {username}</span><br/>
                <input type="text" ref={(ref) => {this.myUserName = ref}} name="username" value={username} onKeyDown={handleKeyPress} onChange={handleChange}/>
            </React.Fragment>
        );
    }
}

HelloComponent.defaultProps = {
    name:'기본이름'
};

HelloComponent.propTypes = {
    name: PropTypes.string,
    age:PropTypes.number.isRequired
};

export default HelloComponent;