"use strict";

var React = require("react");

var TaskList = React.createClass({
  propTypes: {
    mode: React.PropTypes.oneOf(["read", "write", "check"])
  },

  getDefaultProps: function() {
    return {
      mode: "read"
    };
  },

  render: function()  {
    return  (
      <ol className="TaskList">
        <TaskList.Task task="finish the task as soon as possible"/>
        <TaskList.Task task="Welcome my son welcome to the machine"/>
        <TaskList.Task task="gori tera gav beda pyara"/>
      </ol>
    );
  }
});

TaskList.Task = React.createClass({
  propTypes: {
    task: React.PropTypes.string
  },

  render: function()  {
    return (
      <li className="TaskList__Task">
        <i className="fa fa-check-circle"></i>
        {this.props.task}
      </li>
    );
  }
});

module.exports = TaskList;
