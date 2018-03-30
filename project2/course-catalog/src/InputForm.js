import React, { Component } from 'react';
import {Course} from './course.js';
import logo from './logo.svg';

export class InputForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      prof: "",
      dept: "",
      ccc: "",
      year: "2019",
      semester: "Fall"

    }

    this.updateFields = this.updateFields.bind(this);

    this.classTitleChange = this.classTitleChange.bind(this);
    this.deptChange = this.deptChange.bind(this);
    this.profChange = this.profChange.bind(this);
    this.cccChange = this.cccChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.semesterChange = this.semesterChange.bind(this);
  }

  updateFields(e){
    e.preventDefault();
    this.props.submitHandler(this.state.prof,
                             this.state.title,
                             this.state.dept,
                             this.state.ccc,
                             this.state.year,
                             this.state.semester)
  }

  classTitleChange(event){
    this.setState({title: event.target.value})
  }

  deptChange(event){
    this.setState({dept: event.target.value})
  }

  profChange(event){
    this.setState({prof: event.target.value})
  }

  cccChange(event){
    this.setState({ccc: event.target.value})
  }

  yearChange(event){
    this.setState({year: event.target.value})
  }

  semesterChange(event){
    this.setState({semester: event.target.value})
  }


  render() {
    return (
      <div>
      <form className="">
            <br/>
            <input type="text" onChange={this.classTitleChange} className="form-control" id="classTitle" placeholder="Class Title" style={{width:340, marginLeft: 10, marginRight: 10}}></input>

            <select onChange={this.deptChange} name="Department" size="1" style={{width:340, marginLeft: 10, marginRight: 10, marginBottom: 20}}>
              <option value="" selected>Any Department</option>
              <option value="ACFM">ACFM (Acct &amp; Financial Management)</option>
              <option value="OFFAF">OFFAF (Africa)</option>
              <option value="AFST">AFST (Africana Studies)</option>
              <option value="ANBE">ANBE (Animal Behavior)</option>
              <option value="ANTH">ANTH (Anthropology)</option>
              <option value="ARBC">ARBC (Arabic)</option>
              <option value="ARTH">ARTH (Art History)</option>
              <option value="ARST">ARST (Art Studio)</option>
              <option value="ASTR">ASTR (Astronomy)</option>
              <option value="BIOL">BIOL (Biology)</option>
              <option value="BMEG">BMEG (Biomedical Engineering)</option>
              <option value="OFFL">OFFL (Bucknell London Semester)</option>
              <option value="OFFD">OFFD (Bucknell en Espana (Granada))</option>
              <option value="OFFF">OFFF (Bucknell en France)</option>
              <option value="OFFAT">OFFAT (Bucknell in Athens)</option>
              <option value="OFFGH">OFFGH (Bucknell in Ghana)</option>
              <option value="OFFG">OFFG (Bucknell in Nicaragua)</option>
              <option value="OFFCB">OFFCB (Caribbean)</option>
              <option value="CHEG">CHEG (Chemical Engineering)</option>
              <option value="CHEM">CHEM (Chemistry)</option>
              <option value="CHIN">CHIN (Chinese)</option>
              <option value="CEEG">CEEG (Civil &amp; Environmental Engr.)</option>
              <option value="CLAS">CLAS (Classics)</option>
              <option value="CSCI">CSCI (Computer Science)</option>
              <option value="ENCW">ENCW (Creative Writing)</option>
              <option value="DANC">DANC (Dance)</option>
              <option value="OFFDN">OFFDN (Denmark Program)</option>
              <option value="EAST">EAST (East Asian Studies)</option>
              <option value="ECON">ECON (Economics)</option>
              <option value="EDUC">EDUC (Education)</option>
              <option value="ECEG">ECEG (Electrical &amp; Computer Engr.)</option>
              <option value="ENGR">ENGR (Engineering)</option>
              <option value="ENGL">ENGL (English)</option>
              <option value="ENST">ENST (Environmental Studies)</option>
              <option value="ENFS">ENFS (Film/Media Studies)</option>
              <option value="FOUN">FOUN (Foundation Seminar)</option>
              <option value="FREN">FREN (French)</option>
              <option value="GEOG">GEOG (Geography)</option>
              <option value="GEOL">GEOL (Geology)</option>
              <option value="GRMN">GRMN (German)</option>
              <option value="GLBM">GLBM (Global Management)</option>
              <option value="GREK">GREK (Greek)</option>
              <option value="HEBR">HEBR (Hebrew)</option>
              <option value="HIST">HIST (History)</option>
              <option value="HUMN">HUMN (Humanities)</option>
              <option value="IDPT">IDPT (Interdepartmental)</option>
              <option value="IREL">IREL (International Relations)</option>
              <option value="ITAL">ITAL (Italian)</option>
              <option value="OFFJP">OFFJP (Japan)</option>
              <option value="JAPN">JAPN (Japanese)</option>
              <option value="LATN">LATN (Latin)</option>
              <option value="LAMS">LAMS (Latin American Studies)</option>
              <option value="LEGL">LEGL (Legal Studies)</option>
              <option value="LING">LING (Linguistics)</option>
              <option value="ENLS">ENLS (Literary Studies)</option>
              <option value="MGMT">MGMT (Management)</option>
              <option value="MSUS">MSUS (Managing for Sustainability)</option>
              <option value="MIDE">MIDE (Markets, Innovation &amp; Design)</option>
              <option value="MATH">MATH (Mathematics)</option>
              <option value="MECH">MECH (Mechanical Engineering)</option>
              <option value="MILS">MILS (Military Science)</option>
              <option value="MUSC">MUSC (Music)</option>
              <option value="NEUR">NEUR (Neuroscience)</option>
              <option value="OCST">OCST (Off Campus Study)</option>
              <option value="PHIL">PHIL (Philosophy)</option>
              <option value="PHYS">PHYS (Physics)</option>
              <option value="POLS">POLS (Political Science)</option>
              <option value="PSYC">PSYC (Psychology)</option>
              <option value="RELI">RELI (Religion)</option>
              <option value="RESC">RESC (Residential Colleges)</option>
              <option value="RUSS">RUSS (Russian)</option>
              <option value="SIGN">SIGN (Sign Language)</option>
              <option value="SOCI">SOCI (Sociology)</option>
              <option value="SPAN">SPAN (Spanish)</option>
              <option value="SLIF">SLIF (Student Life)</option>
              <option value="THEA">THEA (Theatre)</option>
              <option value="UNIV">UNIV (University Course)</option>
              <option value="WMST">WMST (Women's and Gender Studies)</option>
            </select>
          <br/>
          <input onChange={this.profChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Professor Name" onKeyPress={this.updateProfField} style={{width:340, marginLeft: 10, marginRight: 10}}/>
          <select onChange={this.cccChange} name="cccReq" size="1" style={{width:340, marginLeft: 10, marginRight: 10, marginBottom: 20}}>
            <option value="" selected> CCC Requirement </option>
            <option value="ARHC">Arts and Humanities</option>
            <option value="AHLG">Arts and Humanities Learning Goals</option>
            <option value="CBL">Community Based Learning</option>
            <option value="DUSC">Diversity in the U.S.</option>
            <option value="GLSP">Engineering Global and Societal Perspectives</option>
            <option value="EGHU">Engineering Humanities</option>
            <option value="EGSS">Engineering Social Science</option>
            <option value="EVCN">Environmental Connections</option>
            <option value="FRST">First year course</option>
            <option value="CCFL">Foreign Language</option>
            <option value="FOUN">Foundation Seminar</option>
            <option value="GBCC">Global Connections</option>
            <option value="CCIP">Integrated Perspectives</option>
            <option value="LBSC">Lab Science</option>
            <option value="NSMC">Natural Science and Mathematics</option>
            <option value="NMLG">Natural Science and Mathematics Learning Goals</option>
            <option value="CCQR">Quantitative Reasoning</option>
            <option value="SL">Service Learning Course</option>
            <option value="SLSC">Social Science</option>
            <option value="SSLG">Social Science Learning Goals</option>
            <option value="W1">Writing Level 1</option>
            <option value="W2">Writing Level 2</option>
          </select>
        <br/>
        <input onChange={this.yearChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Year" style={{width:340, marginLeft: 10, marginRight: 10}}/>
        <select name="semester" onChange={this.semesterChange} style={{width:340, marginLeft: 10, marginRight: 10, marginBottom: 20}}>
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
        </select>
      </form>

      <button type="button" className="ui-btn raise code-btn center-text concert"
        onClick={this.updateFields}
        style={{marginTop:15}}
      > Submit</button>



      </div>
    );
  }
}