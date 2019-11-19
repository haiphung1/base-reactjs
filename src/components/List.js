import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: false
    };
  }

  componentDidMount() {
    axios.get(`http://5dccfe88d795470014e4ca93.mockapi.io/test`)
      .then(res => {
      this.setState({ data: res.data });
    });
  }

  onDelete(id) {
    axios.delete(`http://5dccfe88d795470014e4ca93.mockapi.io/test/` + id)
      .then(res => {
      this.componentDidMount()
    });
    
  }

  render() {
    let element = this.state.data.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.id}</th>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <td>
            <Link to={"/update/"+ item.id} className="btn btn-success btn-sm">Edit</Link>
            <button
              type="button"
              className="btn btn-danger btn-sm ml-1"
              onClick={() => this.onDelete(item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{element}</tbody>
        </table>
      </div>
    );
  }
}

export default List;
