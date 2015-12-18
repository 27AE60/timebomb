'use strict';

var React = require('react');

var TaskList = require('./TaskList.js');

var Timeline = React.createClass({
  render: function()  {
    return (
      <ol className="Timeline">
        <Timeline.Slice/>
      </ol>
    );
  }
});

Timeline.Slice = React.createClass({
  render: function()  {
    return (
      <li className="Timeline__Slice">
        <Timeline.Slice.Date/>
        <Timeline.Slice.Effort/>
        <TaskList/>
      </li>
    );
  }
});

Timeline.Slice.Date = React.createClass({
  render: function()  {
    return(
      <date className="Slice__Date">
        25 November 2015,
        <span className="Slice__Day">Tuesday</span>
      </date>
    );
  }
});

Timeline.Slice.Effort = React.createClass({
  render: function()  {
    return  (
      <div className="Slice__Wrapper">
        <p className="Label">spend</p>
        <time className="Slice__Effort">04 hrs 25 m</time>
      </div>
    );
  }
});

module.exports = Timeline;

// 'use strict';
//
// import React from 'react';
//
// export default class Timeline extends React.Component {
//   constructor() {
//     super();
//   };
//
//   render()  {
//     return (
//       <ol className="Timeline">
//         <TimeSlice/>
//       </ol>
//     );
//   }
// };
//
// class TimeSlice extends React.Component {
//   render()  {
//     return  (
//       <li className="TimeSlice">
//         <Dated />
//         <Pin />
//         <Effort />
//         <Tasks />
//       </li>
//     );
//   };
// };
//
// class Dated extends React.Component  {
//   render () {
//     return (
//       <div className="TimeSlice__Wrapper--dated">
//         <date className="TimeSlice__Date">25 November 2015</date>
//         <p className="TimeSlice__Day">Tuesday</p>
//       </div>
//     );
//   };
// }
//
// class Pin extends React.Component {
//   render()  {
//     return <div className="TimeSlice__Pin"></div>;
//   };
// }
//
// class Effort extends React.Component  {
//   render () {
//     return  (
//       <div className="TimeSlice__Wrapper--effort">
//         <p className="Label">spend</p>
//         <time className="TimeSlice__Effort">04 hrs 25 m</time>
//       </div>
//     );
//   };
// }
//
// class Tasks extends React.Component  {
//   render () {
//     return  (
//       <ol className="TimeSlice__Wrapper--tasks">
//         <li className="TimeSlice TimeSlice__Task">
//           <div className="TimeSlice__Pin TimeSlice__Task--done fa fa-check-circle"></div>
//           Create driver login screen
//         </li>
//         <li className="TimeSlice__Task">
//           <div className="TimeSlice__Task--pending"></div>Add user authentication functionality to login page
//         </li>
//         <li className="TimeSlice__Task">
//           <div className="TimeSlice__Task--done fa-check-circle"></div>Add user login validation
//         </li>
//         <li className="TimeSlice__Task">
//           <div className="TimeSlice__Task--done fa-check-circle"></div>Show error message on validation fails
//         </li>
//         <li className="TimeSlice__Task">
//           <div className="TimeSlice__Task--done fa-check-circle"></div>Create driver login screen
//         </li>
//         <li className="TimeSlice__Task">
//           <div className="TimeSlice__Task--pending"></div>Forget password functionality and design
//         </li>
//       </ol>
//     );
//   };
// }
