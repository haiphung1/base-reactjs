import React, { Component } from "react";
import axios from "axios";
import { Card } from "antd";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  componentDidMount() {
    axios.get(`http://5dccfe88d795470014e4ca93.mockapi.io/test/` + this.props.match.params.id)
      .then(res => {
      this.setState({
        title: res.data.title,
        body: res.data.body
      });
    });
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

    axios.put(`http://5dccfe88d795470014e4ca93.mockapi.io/test/` + this.props.match.params.id, data)
      .then(res => {
      this.props.history.push('/')
    });
  }

  render() {
    return (
      <Card title="Update" style={{ width: 700, marginLeft: 150 }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" placeholder="Title"
              value={this.state.title} 
              onChange={this.handleChangeTitle}  
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input type="text" className="form-control" placeholder="Body"
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

export default Update;
