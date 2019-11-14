import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://5dccfe88d795470014e4ca93.mockapi.io/test").then(res => {
      const data = res.data;
      this.setState({ data });
    });
  }

  onDelete(id) {
    axios.delete(`http://5dccfe88d795470014e4ca93.mockapi.io/test/`+ id).then(res => {
      console.log('DELETE')
    })
  }

  render() {
    let element = this.state.data.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.id}</th>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <td>
            <button className="btn btn-success btn-sm">
              <a href="#" className="text-light">Edit</a>
            </button>
            <button type="button" className="btn btn-danger btn-sm ml-1" onClick={() => this.onDelete(item.id)}>Delete</button>
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
