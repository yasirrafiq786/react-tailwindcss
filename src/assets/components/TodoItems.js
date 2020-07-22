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
      <li className="flex justify-between p-2 rounded-md mt-3 bg-blue-900 bg-opacity-50 text-xl text-white text-opacity-70 overflow-auto md:bg-red-400 md:shadow-md">
        {' '}
        <div key={item.key}>
          <div className="mb-2 break-normal">{item.text}</div>
          <div className="text-xs text-white">
            <i className="far fa-clock mr-1 align-center"></i>{' '}
            <i>{moment(item.key).fromNow()}</i>
          </div>
        </div>
        <div className="self-center">
          <button className="focus:outline-none focus:opacity-50" onClick={() => this.delete(item.key)}>
            <i className="far fa-trash-alt text-blue-400 hover:text-white font-thin md:text-black " ></i>
          </button>
          
        </div>
      </li>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList p-6 ">
        <FlipMove duration={250} easing="ease-out" className="md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-8">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
