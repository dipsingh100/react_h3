import React, { Component } from "react";
import "../css/form.css";
import ShowData from "./ShowData";

class Form extends Component {
  state = {
    Name: "",
    Dep: "",
    Rating: "",
    EmpData: [],
    show: true,
  };
  changeHandle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  clickHandle = () => {
    this.setState({
      show: false,
    });
    const newObj = {
      name: this.state.Name,
      dept: this.state.Dep,
      rate: this.state.Rating,
    };

    this.state.EmpData.push(newObj);
    this.setState({
      EmpData: this.state.EmpData,
      Name: "",
      Dep: "",
      Rating: "",
    });
  };

  handleBack = ()=>{
    this.setState({
      show:true
    })
  }
  render() {
    return (
      <>
        {this.state.show && (
          <div className="fBox">
            <div className="inputCont">
              <div className="cont2">
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  value={this.state.Name}
                  onChange={this.changeHandle}
                />
              </div>
              <div className="cont2">
                <label htmlFor="dept">Department :</label>
                <input
                  type="text"
                  name="Dep"
                  id="dept"
                  value={this.state.Dep}
                  onChange={this.changeHandle}
                />
              </div>
              <div className="cont2">
                <label htmlFor="rate">Rating :</label>
                <input
                  type="text"
                  name="Rating"
                  id="rate"
                  value={this.state.Rating}
                  onChange={this.changeHandle}
                />
              </div>
            </div>

            <button type="button" onClick={this.clickHandle}>
              Submit
            </button>
          </div>
        )}
        {!this.state.show && (
          <>
            <ShowData data={this.state.EmpData} />
            <button type="button" onClick={this.handleBack}>Go Back</button>
          </>
        )}
      </>
    );
  }
}

export default Form;
