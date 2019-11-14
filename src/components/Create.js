import React, { Component } from "react";
import axios from "axios";
import { Card } from "antd";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      title: this.state.title,
      body: this.state.body
    };

    axios.post(`http://5dccfe88d795470014e4ca93.mockapi.io/test`, data)
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <Card title="Create" style={{ width: 700, marginLeft: 150 }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input
              type="text"
              className="form-control"
              placeholder="Body"
              value={this.state.body}
              onChange={this.handleChangeBody}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Card>
    );
  }
}

export default Create;
