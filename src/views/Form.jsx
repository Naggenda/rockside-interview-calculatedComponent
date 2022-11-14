import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      val1: 0,
      val2: 0
    };
  }

  updateVal1(event) {
    this.setState({
      val1: event.target.value
    });
  }

  updateVal2(event) {
    this.setState({
      val2: event.target.value
    });
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  addForm(event) {
    console.log("clicked");
  }

  render() {
    const { title, val1, val2 } = this.state;

    const total = parseInt(val1) + parseInt(val2);

    const product = total * 10;

    return (
      <div className="App">
        <form className="form-data">
          <div>
            <label htmlFor="">Title: </label>
            <input
              type="text"
              value={title}
              onChange={this.updateTitle.bind(this)}
            />
          </div>
          <div>
            <label htmlFor="">Name: </label>
            <input
              type="text"
              value={title}
              onChange={this.updateTitle.bind(this)}
            />
          </div>
          <div>
            <label htmlFor="">Display As:</label>
            <select>
              <option value="form">Form</option>
              <option value="wizard">Wizard</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
        </form>

        <button>Add Form</button>

        <hr/>
        <div className="app-title">
          <h3>{title}</h3>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="">Number of sheep</label>
            <input
              type="number"
              value={val1}
              onChange={this.updateVal1.bind(this)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Number of Goats</label>
            <input
              type="number"
              value={val2}
              onChange={this.updateVal2.bind(this)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Total animals</label>
            <input
              type="text"
              value={total}
              className="form-control"
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Number of Goats</label>
            <input
              type="text"
              value={product}
              className="form-control"
              readOnly
            />
          </div>
        </form>

        <button className="btn btn-primary">Submit</button>
      </div>
    );
  }
}

export default Form;
