import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import googleLogo from "../assets/powered_by_google_on_white.png";

//className and style props for the input element should be passed through classNames.input and styles.input respectively
class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "", error: "" };
    this.onChange = address => this.setState({ address, error: "" });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };
  onError = status => {
    this.setState({ error: "No results" });
  };
  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: "Enter location"
    };

    return (
      <form onSubmit={this.handleFormSubmit}>
        {this.state.error ? this.state.error : null}
        <PlacesAutocomplete
          inputProps={inputProps}
          autocompleteItem={AutocompleteItem}
          classNames={cssClasses}
          onError={this.onError}
          clearItemsOnError={true}
        />
        <img src={googleLogo} alt="" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
//it could be any react functional component

const AutocompleteItem = ({ formattedSuggestion }) => (
  <div>
    <i className="fa fa-map-marker" />{" "}
    <strong>{formattedSuggestion.mainText}</strong>
    {" "}
    <small>{formattedSuggestion.secondaryText}</small>
  </div>
);
const cssClasses = {
  root: "form-group",
  input: "form-control",
  autocompleteContainer: "my-autocomplete-container" //add some styles to this class
};

export default SimpleForm;
