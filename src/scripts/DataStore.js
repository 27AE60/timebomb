'use strict';

import NeDB from 'nedb';

let DataStore = {

  _stores: {
    projects: new NeDB({ filename: __dirname + '/stores/projects.db', autoload: true })
  },

  getProjects: function(cb) {
    this._stores.projects.find({}).sort({ name: 1 }).exec(cb);
  },

  addProject: function(data, cb) {
    console.log(data);
    this._stores.projects.insert(data, cb);
  }

};

export default DataStore;
