import React, {Component} from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
      this._inputElement.value = '';
    }
    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem} className="flex justify-center mt-4">
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="Enter task..."
              className="rounded-md p-2 text-black w-3/5 focus:outline-none md:shadow-lg"
            ></input>
            <button type="submit" className="ml-3 focus:outline-none focus:opacity-50 ">
              <i className="fas fa-plus text-2xl text-blue-400 md:text-black"></i>
            </button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
