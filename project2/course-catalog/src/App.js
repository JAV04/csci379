import React, { Component } from 'react';
import {Course} from './Components/course.js';
import {InputForm} from './Components/InputForm.js';
import {ParamTags} from './Components/ParamTags.js';
import {Card, Tag} from 'antd';
import './App.css';
import Sidebar from 'react-sidebar';

const CheckableTag = Tag.CheckableTag;
const styles = {
  root: {
  },
  sidebar: {
    backgroundColor: '#446CB3'
  },
  content: {
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
  },
};


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: [],
      sidebarOpen: true,
      dept: "",
      ccc: "",
      year: "2018",
      semester: "Fall", 
      courses: [],
      unAllowedDays: [],

      loading: false
      }

    this.updateParams = this.updateParams.bind(this);
    this.updateSemester = this.updateSemester.bind(this);
    this.updateDept = this.updateDept.bind(this);
    this.updateCCC = this.updateCCC.bind(this);
    this.updateYear = this.updateYear.bind(this);
    this.updateUnallowedDays = this.updateUnallowedDays.bind(this);

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.setOpen = this.setOpen.bind(this);

    this.updateData()
  }

  updateDept(dept){
    this.setState({dept: dept}, function () {
        this.updateData();
        console.log(dept)
    });    
  }

  updateCCC(req){
    this.setState({ccc: req}, function () {
        this.updateData();
    });   
  }

  updateYear(y){
    this.setState({year: y}, function () {
        this.updateData();
    });   
  }

  updateSemester(sem){
    this.setState({semester: sem}, function () {
        this.updateData();
    });
  }

  updateParams(params){
    this.setState({params: params}, function () {
        this.updateData();
    });
  }

  updateUnallowedDays(days){
    this.setState({unAllowedDays: days}, function () {
      this.updateData();
    });    
  }

  updateData(){ 
    this.setState({ loading: true})

    let y = this.state.year;
    let sem = this.state.semester;
    let req = this.state.ccc;
    let department = this.state.dept;
    let params = this.state.params;



    let textQuery = (params.length > 0) ? '&text=' + this.state.params.join(' '): "";
    let cccQuery = (req.length > 0) ? "&CCCReq=" + req : "";
    let deptQuery = (department.length > 0) ? "&Department=" + department : "";
    let q = "https://www.eg.bucknell.edu/~amm042/service/q?limit=75&Semester=" + sem + '&Year=' + y + deptQuery + cccQuery + textQuery;
    fetch(q)
      .then(response => response.json())
      .then(data => this.filterData(data.message))
  }

  filterData(data){
    let i, j, entry, passed;
    let letters = this.state.unAllowedDays;
    let newData = [];
    for (i in data){
      passed = true
      for (j in letters){
        entry =  data[i]['Meeting Time']
        if ( (entry === undefined) || entry.indexOf(letters[j]) > -1 || entry === 'TBA'){
          passed = false;
          break
        }
      }
      if (passed) { newData.push(data[i])}
    }
    this.setState({courses: newData, loading:false})
  }


  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  setOpen(){
    this.setState({sidebarOpen: true});    
  }

  getCourses(){
    if(this.state.courses.length === 0){ return ""}
    else{
      return (
        <div className="container">
          <div className="row">
            {this.state.courses.map((course , i) => 
              <div className="col-6">
              <Course key={i} course={course}/>
              </div>)}
          </div>
        </div>
        )
    }
  }

  render() {
    console.log(this.state.courses)

    return (
        <div className="App">


                    <Card>
                      <p
                        style={{
                          fontSize: 14,
                          color: 'rgba(0, 0, 0, 0.85)',
                          marginBottom: 16,
                          fontWeight: 500,
                        }}
                      >
                      </p>

                      <InputForm 
                        semesterHandler={this.updateSemester} semester={this.state.semester}
                        yearHandler={this.updateYear} year={this.state.year}
                        deptHandler={this.updateDept} dept={this.state.dept}
                        cccHandler={this.updateCCC} ccc={this.state.ccc}
                        daysHandler={this.updateUnallowedDays}/>
                      <ParamTags params={this.state.params} paramHandler={this.updateParams}/>

                    <Card loading={this.state.loading}>
                      <p
                        style={{
                          fontSize: 14,
                          color: 'rgba(0, 0, 0, 0.85)',
                          marginBottom: 16,
                          fontWeight: 500,
                        }}
                      >
                      </p>


                      {this.getCourses()}

                      </Card>
                    </Card>




        </div>
                    
    )};
}

export default App;
