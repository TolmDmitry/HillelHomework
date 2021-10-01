import React, { Component } from "react";

class SearchInput extends Component {
  state = { inputValue: "" };

  onFormSubmit = async (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <h3>Video Search</h3>
        <form action="" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(event) =>
              this.setState({ inputValue: event.target.value })
            }
          />
        </form>
      </div>
    );
  }
}

export default SearchInput;
