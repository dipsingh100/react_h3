import React, { Component } from "react";
import "../css/showdata.css";

class ShowData extends Component {
  render() {
    return (
      <>
        <div className="show-container">
          {this.props.data.map((item, index) => {
            return (
              <div className="innerBox" key={index}>
                Name : {item.name} | Department : {item.dept} | Rating :{" "}
                {item.rate}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ShowData;
