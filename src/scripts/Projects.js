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

  onManage = (id, name) => {
    this.props.onProjectSelect(id, name);
  };

  render()  {
    return (
      <section className="Wrapper--Projects">
        <ol className="Projects">
          <ProjectItem id={1} name={"Vicious Player"} onSelect={this.onManage}/>
          <ProjectItem id={2} name={"KTM.JS Website"} onSelect={this.onManage}/>
          <ProjectItem id={3} name={"Samagri Toolkit"} onSelect={this.onManage}/>
        </ol>
        <footer className="Footer">
          <div className="Footer__Hills"></div>
          <div className="Footer__Gate"></div>
          <div className="Footer__Tree"></div>
          <div className="Footer__Birds"></div>
          <div className="Footer__Birds--small"></div>
        </footer>
      </section>
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
        
        <div className="Project__Wrapper Project__Wrapper--name">
          <h2 className="Project__Name">{this.props.name}</h2>
        </div>
        
        <div className="Project__Wrapper Project__Wrapper--time-spend">
          <p className="Label Project__Label">spend</p>
          <p className="Project__Time-Spend">
            12<span className="Project__Time-Spend--param">hrs</span> 
            05<span className="Project__Time-Spend--param">m</span>
          </p>
        </div>

        <div className="Project__Wrapper Project__Wrapper--focus">
          <p className="Label Project__Label">this week focus</p>
          <p className="Project__Focus">Create an UI for collecting music info and persist it in RethinkDB</p>
        </div>

        <div className="Project__Wrapper Project__Wrapper--button">
          <button className="Project__Manage Button" onClick={this.onItemSelect}>Manage</button>
        </div>
      </li>
    )
  }
};
