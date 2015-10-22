'use strict';

import React from "react";
import ReactDOM from "react-dom";

export default class Projects extends React.Component {
  static propTypes = {
    projects: React.PropTypes.array,
    onProjectSelect: React.PropTypes.func
  };

  static defaultProps = {
    projects: []
  };

  constructor() {
    super();
  };

  onProjectItemSelect = (id, name) => {
    this.props.onProjectSelect(id, name);
  };

  renderProjectList = () => {
    return this.props.projects.map((project, idx) => {
      return (
        <ProjectItem 
          key={idx} 
          id={project.id} 
          name={project.name} 
          onSelect={this.onProjectItemSelect}/>
      );
    });
  };

  addProject = (e) => {
    e.preventDefault();
    var name = ReactDOM.findDOMNode(this.refs.project_name).value;
    this.props.addNewProject(name);
  };

  render()  {
    return (
      <div id="Projects">
        <ol className="Projects__List">
          <ProjectItem/>
        </ol>
      </div>
    );
  }
};

class ProjectItem extends React.Component {
  
  static propTypes: {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    onSelect: React.PropTypes.func
  };

  static defaultProps = {
    id: 0,
    name: ''
  };

  onItemSelect = () => {
    this.props.onSelect(this.props.id, this.props.name);
  };

  render()  {
    return (
      <li className="Projects__List-Item Project">
        
        <div className="Project__Wrapper">
          <h2 className="Project__Name">Vicious Player</h2>
        </div>
        
        <div className="Project__Wrapper">
          <p className="Project__Label">spend</p>
          <p className="Project__Time-Spend">12hrs 05m</p>
        </div>

        <div className="Project__Wrapper">
          <p className="Project__Label">this week focus</p>
          <p className="Project__Focus">Create an UI for collecting music info and persist it in RethinkDB</p>
        </div>

        <div className="Project__Wrapper">
          <button className="Project__Manage Button">Manage</button>
        </div>
      </li>
    )
  }
};
