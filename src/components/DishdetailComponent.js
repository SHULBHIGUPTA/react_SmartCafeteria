import React, { Component } from "react";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h3 className="text-center">{this.props.weekname}</h3>
      <div className="dish-container">{this.props.week}</div>
      </div>
    );
  }
}

export default DishDetail;
