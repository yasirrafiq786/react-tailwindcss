import React, {Component} from 'react';
import moment from 'moment';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <li className="p-2 rounded-md mt-3 bg-blue-900 bg-opacity-50 text-xl text-white text-opacity-70">
        {' '}
        <div className="flex justify-between" key={item.key}>
          {item.text}
          <button onClick={() => this.delete(item.key)}>
            <i className="far fa-trash-alt text-blue-400"></i>
          </button>
        </div>
        <div className="text-xs text-gray-700">
          {moment(item.key).fromNow()}
        </div>
      </li>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
