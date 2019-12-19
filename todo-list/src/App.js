import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
const initialTodos= new Array(500).fill(0).map(
  (item, idx) => ({ id: idx, text: `일정${idx}`, checked: true })
);


class App extends Component {
  id = 3;
  state = {
    input: "",
    todos: initialTodos
  };

  handleChange = e => {
    this.setState({
      input: e.target.value // input 의다음바뀔값
    });
  };
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "", // input초기화
      // concat을사용하여배열에추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };
  handleKeyPress = e => {
    // 눌려짂키가Enter 이면handleCreate호출
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todos } = this.state;
    // 파라미터로받은id 를가지고몇번째Item인지찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한객체
    const copyTodos = [...todos]; // 배열을복사
    // 기존의값들을복사하고, checked 값을덮어쓰기
    copyTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: copyTodos
    });
  };

  handleRemove= (id) => {
    const{ todos} = this.state;
    this.setState({
      todos: todos.filter(todo=> todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;
    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;