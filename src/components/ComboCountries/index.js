import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import location from "../../data/location.json";
export default class Countries extends Component {
  constructor(props) {
    super(props);
    const useStyles = makeStyles((theme) => ({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }));

    const colums = [
      {
        field: "Country",
        headerName: "Country",
        with: 250,
      },
      {
        field: "Slug",
        headerName: "Slug",
        with: 250,
      },
      {
        field: "ISO2",
        headerName: "ISO2",
        with: 150,
      },
    ];
    this.state = {
      colums: colums,

      useStyles,
      selectedCountry: "",
    };
  }

  handleChange = (event) => {
    console.log("chon: ", event);
    this.setState({ selectedCountry: event.target.value });
  };

  render() {
    return (
      <div style={{ minWidth: 200 }}>
        <FormControl className={this.state.useStyles.formControl}>
          <InputLabel id="demo-simple-select-label" style={{ color: "grey" }}>
            Hồ Chí Minh
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ minWidth: 200 }}
            value={this.state.selectedCountry}
            onChange={this.handleChange}
          >
            {location.map((value, index) => {
              return (
                <MenuItem key={index} value={value.ten}>
                  {value.ten}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}
