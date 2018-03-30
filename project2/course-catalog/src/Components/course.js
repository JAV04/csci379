import React, { Component } from 'react';
import {Card} from 'antd';

export class Course extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let t = this.props.course.Course + ":  " + this.props.course.Title ;
    return (

      <Card
        hoverable
        type="inner"
        title={t}
        style={{marginBottom:20}}
      >
        {this.props.course.Instructor} <br/>
        {this.props.course['Meeting Time']} <br/>
        CRN: {this.props.course.CRN}<br/>
        {"Seats Available: " + this.props.course.SeatsAvail}<br/>
        {this.props.course.Room}
      </Card>
    );
  }
}