"use script";

import {EventEmitter} from "events";
import React from "react";
import Projects from "./Projects";
import Header from "./Header";
import DataStore from "./DataStore";

export default class Manager extends React.Component {
  constructor() {
    super();
    this.ManageView = this.ManageView.bind(this);
    this.data = {};
    this.emitter = new EventEmitter();

    this.emitter.on('newProjectAdded', this.getProjects)
  };

  state = {
    view: 'home',
    projects: []
  };

  ManageView()  {
    this.setState({ view : 'project' });
  };

  componentDidMount = () => {
    this.getProjects();
  };

  getProjects = () => {
    DataStore.getProjects((err, docs) => {
      this.setState({ projects: docs });
    });
  };

  addNewProject = (name) => {
    var project = {};
    project.created_date = new Date();
    project.name = name;

    DataStore.addProject(project, () => {
      this.emitter.emit('newProjectAdded');
    })
  };

  render()  {
    return (
      <div>
        <Header/>
        <Projects projects={this.state.projects} onProjectSelect={this.ManageView}/>
      </div>
    );
  }
}
