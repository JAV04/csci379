import React, { Component } from 'react';
import {Card} from 'antd';

export class Course extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <Card
        type="inner"
        title={{this.props.course.Course}}
        extra={<a href="#">More Info</a>}
      >
        {this.props.course.Title}
      </Card>
    );
  }
}