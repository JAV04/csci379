import React, { Component } from 'react';
import {Course} from './course.js';
import {SearchParameters} from './SearchParameters.js';
import { Select, Checkbox, Row, Col, Card, Radio, Form} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Option = Select.Option;

Array.prototype.diff = function(array) {
    return this.filter(function(i) {return array.indexOf(i) < 0;});
};

export class InputForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchParams: [],
      dept: "",
      ccc: "",
      year: "2019",
      semester: "Fall"
    }

    this.deptChange = this.deptChange.bind(this);
    this.cccChange = this.cccChange.bind(this);
    this.semesterChange = this.semesterChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
  }


  deptChange(value){
    this.props.deptHandler(value);
  }

  cccChange(value){
    this.props.cccHandler(value);
  }

  semesterChange(event){
    this.props.semesterHandler(event.target.value);
  }

  yearChange(value){
  }

  dateChange(value){
    let days = ["M","T","W","R","F"]
    this.props.daysHandler(days.diff(value))
  }



  render() {

    return (
      <div>

      <Row style={{marginTop: 20}}>
        <Col span={24}>
          <Checkbox.Group defaultValue={["M","T","W","R","F"]} style={{ marginLeft:12 , width: '100%' }} onChange={this.dateChange}>
            <Row>
              <Checkbox value="M">Monday</Checkbox>
              <Checkbox value="T">Tuesday</Checkbox>
              <Checkbox value="W">Wednesday</Checkbox>
              <Checkbox value="R">Thursday</Checkbox>
              <Checkbox value="F">Friday</Checkbox>
            </Row>
          </Checkbox.Group>

        </Col>
      </Row>
      <Row style={{marginTop: 20, marginBottom: 20}}>
        <Col span={8} offset={6}>
          <form className="">
                <Select defaultValue="" style={{ width: 300, marginLeft: 20 }} onChange={this.deptChange}>
                  <Option value="" selected>Any Department</Option>
                  <Option value="ACFM">ACFM (Acct &amp; Financial Management)</Option>
                  <Option value="OFFAF">OFFAF (Africa)</Option>
                  <Option value="AFST">AFST (Africana Studies)</Option>
                  <Option value="ANBE">ANBE (Animal Behavior)</Option>
                  <Option value="ANTH">ANTH (Anthropology)</Option>
                  <Option value="ARBC">ARBC (Arabic)</Option>
                  <Option value="ARTH">ARTH (Art History)</Option>
                  <Option value="ARST">ARST (Art Studio)</Option>
                  <Option value="ASTR">ASTR (Astronomy)</Option>
                  <Option value="BIOL">BIOL (Biology)</Option>
                  <Option value="BMEG">BMEG (Biomedical Engineering)</Option>
                  <Option value="OFFL">OFFL (Bucknell London Semester)</Option>
                  <Option value="OFFD">OFFD (Bucknell en Espana (Granada))</Option>
                  <Option value="OFFF">OFFF (Bucknell en France)</Option>
                  <Option value="OFFAT">OFFAT (Bucknell in Athens)</Option>
                  <Option value="OFFGH">OFFGH (Bucknell in Ghana)</Option>
                  <Option value="OFFG">OFFG (Bucknell in Nicaragua)</Option>
                  <Option value="OFFCB">OFFCB (Caribbean)</Option>
                  <Option value="CHEG">CHEG (Chemical Engineering)</Option>
                  <Option value="CHEM">CHEM (Chemistry)</Option>
                  <Option value="CHIN">CHIN (Chinese)</Option>
                  <Option value="CEEG">CEEG (Civil &amp; Environmental Engr.)</Option>
                  <Option value="CLAS">CLAS (Classics)</Option>
                  <Option value="CSCI">CSCI (Computer Science)</Option>
                  <Option value="ENCW">ENCW (Creative Writing)</Option>
                  <Option value="DANC">DANC (Dance)</Option>
                  <Option value="OFFDN">OFFDN (Denmark Program)</Option>
                  <Option value="EAST">EAST (East Asian Studies)</Option>
                  <Option value="ECON">ECON (Economics)</Option>
                  <Option value="EDUC">EDUC (Education)</Option>
                  <Option value="ECEG">ECEG (Electrical &amp; Computer Engr.)</Option>
                  <Option value="ENGR">ENGR (Engineering)</Option>
                  <Option value="ENGL">ENGL (English)</Option>
                  <Option value="ENST">ENST (Environmental Studies)</Option>
                  <Option value="ENFS">ENFS (Film/Media Studies)</Option>
                  <Option value="FOUN">FOUN (Foundation Seminar)</Option>
                  <Option value="FREN">FREN (French)</Option>
                  <Option value="GEOG">GEOG (Geography)</Option>
                  <Option value="GEOL">GEOL (Geology)</Option>
                  <Option value="GRMN">GRMN (German)</Option>
                  <Option value="GLBM">GLBM (Global Management)</Option>
                  <Option value="GREK">GREK (Greek)</Option>
                  <Option value="HEBR">HEBR (Hebrew)</Option>
                  <Option value="HIST">HIST (History)</Option>
                  <Option value="HUMN">HUMN (Humanities)</Option>
                  <Option value="IDPT">IDPT (Interdepartmental)</Option>
                  <Option value="IREL">IREL (International Relations)</Option>
                  <Option value="ITAL">ITAL (Italian)</Option>
                  <Option value="OFFJP">OFFJP (Japan)</Option>
                  <Option value="JAPN">JAPN (Japanese)</Option>
                  <Option value="LATN">LATN (Latin)</Option>
                  <Option value="LAMS">LAMS (Latin American Studies)</Option>
                  <Option value="LEGL">LEGL (Legal Studies)</Option>
                  <Option value="LING">LING (Linguistics)</Option>
                  <Option value="ENLS">ENLS (Literary Studies)</Option>
                  <Option value="MGMT">MGMT (Management)</Option>
                  <Option value="MSUS">MSUS (Managing for Sustainability)</Option>
                  <Option value="MIDE">MIDE (Markets, Innovation &amp; Design)</Option>
                  <Option value="MATH">MATH (Mathematics)</Option>
                  <Option value="MECH">MECH (Mechanical Engineering)</Option>
                  <Option value="MILS">MILS (Military Science)</Option>
                  <Option value="MUSC">MUSC (Music)</Option>
                  <Option value="NEUR">NEUR (Neuroscience)</Option>
                  <Option value="OCST">OCST (Off Campus Study)</Option>
                  <Option value="PHIL">PHIL (Philosophy)</Option>
                  <Option value="PHYS">PHYS (Physics)</Option>
                  <Option value="POLS">POLS (Political Science)</Option>
                  <Option value="PSYC">PSYC (Psychology)</Option>
                  <Option value="RELI">RELI (Religion)</Option>
                  <Option value="RESC">RESC (Residential Colleges)</Option>
                  <Option value="RUSS">RUSS (Russian)</Option>
                  <Option value="SIGN">SIGN (Sign Language)</Option>
                  <Option value="SOCI">SOCI (Sociology)</Option>
                  <Option value="SPAN">SPAN (Spanish)</Option>
                  <Option value="SLIF">SLIF (Student Life)</Option>
                  <Option value="THEA">THEA (Theatre)</Option>
                  <Option value="UNIV">UNIV (University Course)</Option>
                  <Option value="WMST">WMST (Women's and Gender Studies)</Option>
                </Select>
              <br/>
                

              <Select defaultValue="" style={{ width: 300, marginLeft: 20 }} onChange={this.cccChange}>
                <Option value="" selected> CCC Requirement (All)</Option>
                <Option value="ARHC">Arts and Humanities</Option>
                <Option value="AHLG">Arts and Humanities Learning Goals</Option>
                <Option value="CBL">Community Based Learning</Option>
                <Option value="DUSC">Diversity in the U.S.</Option>
                <Option value="GLSP">Engineering Global and Societal Perspectives</Option>
                <Option value="EGHU">Engineering Humanities</Option>
                <Option value="EGSS">Engineering Social Science</Option>
                <Option value="EVCN">Environmental Connections</Option>
                <Option value="FRST">First year course</Option>
                <Option value="CCFL">Foreign Language</Option>
                <Option value="FOUN">Foundation Seminar</Option>
                <Option value="GBCC">Global Connections</Option>
                <Option value="CCIP">Integrated Perspectives</Option>
                <Option value="LBSC">Lab Science</Option>
                <Option value="NSMC">Natural Science and Mathematics</Option>
                <Option value="NMLG">Natural Science and Mathematics Learning Goals</Option>
                <Option value="CCQR">Quantitative Reasoning</Option>
                <Option value="SL">Service Learning Course</Option>
                <Option value="SLSC">Social Science</Option>
                <Option value="SSLG">Social Science Learning Goals</Option>
                <Option value="W1">Writing Level 1</Option>
                <Option value="W2">Writing Level 2</Option>
              </Select>
            <br/>
          </form>

        </Col>

        <Col span={4}>

          <RadioGroup defaultValue={this.props.semester} size="large" onChange={this.semesterChange}>
            <RadioButton value="Fall">Fall</RadioButton>
            <RadioButton value="Spring">Spring</RadioButton>
          </RadioGroup>

          <Select defaultValue={this.props.year} style={{ width: 140, marginLeft: 5,marginTop:10}} onChange={this.cccChange}>
            <Option value="2018" selected> 2018 (All)</Option>
            <Option value="2019"> 2019 </Option>
            <Option value="2020"> 2020 </Option>
          </Select>

        </Col>
      </Row>

      </div>
    );
  }
}