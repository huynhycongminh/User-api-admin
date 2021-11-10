import React, { Component } from "react";

export default class SpecificationsCompare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Trạng thái nút
      buttonstate1: true,
      buttonstate2: true,
      buttonState3: true,
      buttonState4: true,
    };
  }
  handleStatus1 = () => {
    this.setState({
      buttonstate1: !this.state.buttonstate1,
    });
  };
  handleStatus2 = () => {
    this.setState({
      buttonstate2: !this.state.buttonstate2,
    });
  };
  handleStatus3 = () => {
    this.setState({
      buttonState3: !this.state.buttonState3,
    });
  };
  handleStatus4 = () => {
    this.setState({
      buttonstate4: !this.state.buttonstate4,
    });
  };
  showButtonImage1 = () => {
    if (this.state.buttonstate1 === true) {
      return (
        <button
          onClick={() => {
            this.handleStatus1();
          }}
          className="info-detail-heading sub-heading"
        >
          Volume Size
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.handleStatus1();
          }}
          className="info-detail-heading sub-heading"
        >
          Volume Size
        </button>
      );
    }
  };
  showButtonImage2 = () => {
    if (this.state.buttonstate2 === true) {
      return (
        <button
          onClick={() => {
            this.handleStatus2();
          }}
          className="info-detail-heading sub-heading"
        >
          Engine Transmission
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.handleStatus2();
          }}
          className="info-detail-heading sub-heading"
        >
          Engine Transmission
        </button>
      );
    }
  };
  showButtonImage3 = () => {
    if (this.state.buttonState3 === true) {
      return (
        <button
          onClick={() => {
            this.handleStatus3();
          }}
          className="info-detail-heading sub-heading"
        >
          Exterior
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.handleStatus3();
          }}
          className="info-detail-heading sub-heading"
        >
          Exterior
        </button>
      );
    }
  };
  showButtonImage4 = () => {
    if (this.state.buttonstate4 === true) {
      return (
        <button
          onClick={() => {
            this.handleStatus4();
          }}
          className="info-detail-heading sub-heading"
        >
          Furniture
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.handleStatus4();
          }}
          className="info-detail-heading sub-heading"
        >
          Furniture
        </button>
      );
    }
  };
  showForm1 = () => {
    if (this.state.buttonstate1 === false) {
      return (
        <ul className="info-detail">
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Length
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4000kg
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8000kg
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Width
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Height
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4000kg
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8000kg
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Standard Long
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Weight
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
        </ul>
      );
    }
  };
  showForm2 = () => {
    if (this.state.buttonstate2 === false) {
      return (
        <ul className="info-detail">
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Engine
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4000kg
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8000kg
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Transmission
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Cylinder Capacity
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4000kg
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8000kg
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Maximum Power
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Maximum Speed
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
        </ul>
      );
    }
  };
  showForm3 = () => {
    if (this.state.buttonState3 === false) {
      return (
        <ul className="info-detail">
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Head Light
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4000kg
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8000kg
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Parking Light
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Day Light
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4000kg
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8000kg
            </label>
          </li>
        </ul>
      );
    }
  };
  showForm4 = () => {
    if (this.state.buttonstate4 === false) {
      return (
        <ul className="info-detail">
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Steering Wheel
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4000kg
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8000kg
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Display
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Technology
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4000kg
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8000kg
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Sound Connect
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Equipment
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              4m
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              8m
            </label>
          </li>
        </ul>
      );
    }
  };
  render() {
    return (
      <div>
        <ul className="info-detail-list section container">
          <li className="info-detail-item mb-32">
            {this.showButtonImage1()}
            {this.showForm1()}
          </li>
          <li className="info-detail-item mb-32">
            {this.showButtonImage2()}
            {this.showForm2()}
          </li>

          <li className="info-detail-item mb-32">
            {this.showButtonImage3()}
            {this.showForm3()}
          </li>
          <li className="info-detail-item mb-32">
            {this.showButtonImage4()}
            {this.showForm4()}
          </li>
        </ul>
      </div>
    );
  }
}
