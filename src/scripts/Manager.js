"use script";

import {EventEmitter} from "events";
import React from "react";
import DataStore from "./DataStore";
import Header from "./Header";
import Projects from "./Projects";
import ProjectDashboard from "./ProjectDashboard";

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
    projectSelected: '',
    projects: []
  };

  ManageView(id, name)  {
    this.setState({ view : 'project', projectSelected: name }, () => {
      console.log('Manage View', this.state);
    });
  };

  componentDidMount = () => {
    this.getProjects();
  };

  getProjects = () => {
    DataStore.getProjects((err, docs) => {
      this.setState({ projects: docs }, function()  {
        console.log('Get Projects', this.state);
      });
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

  renderView = () => {
    var view = false;

    switch(this.state.view) {
      case 'home':
        view = this._projectListPartial();
      break;
      case 'project':
        view = this._projectDashboardPartial();
      break;
      default:
        view = this._projectListPartial();
    }

    return view;
  };

  _projectListPartial = () => {
    return <Projects projects={this.state.projects} onProjectSelect={this.ManageView}/>;
  };

  _projectDashboardPartial = () => {
    return <ProjectDashboard/>;
  };

  render()  {
    return (
      <section className="App">
        <Header/>
        <main className="Wrapper">
          {this.renderView()}
        </main>
      </section>
    );
  }
}
