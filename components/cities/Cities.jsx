import React from "react";
import "./Cities.css";

/**
 * Define Cities, a React componment of project #4.  The model
 * data for this view (the city names) is available
 * at window.models.citiesModel().
 */
class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      substring: "",
    };
    console.log("window.models.citiesModel()", window.models.citiesModel());
  }

  handleFilterChange = (event) => {
    this.setState({ substring: event.target.value });
  };

  render() {
    var results = window.models
      .citiesModel()
      .filter((state) =>
        state.toLowerCase().includes(this.state.substring.toLowerCase())
      )
      .map((state) => <div key={state}> {state} </div>);

    return (
      <div className="cities-container">
        {
          <h1>
            This will list several city names with the specificed substring "
            {this.state.substring}"
          </h1>
        }
        <h2 style={{ color: "red" }}> Note: this is case insensitive.</h2>
        <input
          id="cities-filterInput"
          type="text"
          value={this.state.substring}
          onChange={(event) => this.handleFilterChange(event)}
        />
        <h2>Result:</h2>
        <div id="city-container">
          {results.length ? results : <div> No results </div>}
        </div>
      </div>
    );
  }
}

export default Cities;
