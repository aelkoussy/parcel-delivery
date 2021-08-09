/* eslint-disable react/prop-types, react/jsx-handler-names */
import MenuItem from "@material-ui/core/MenuItem";
import NoSsr from "@material-ui/core/NoSsr";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: "flex",
    padding: 0,
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  chip: {
    margin: `${theme.spacing(0.5)}px ${theme.spacing(0.25)}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class AutoSelect extends React.Component {
  state = {
    single: null,
    multi: null,
  };

  // pass chosen value to parent component
  passChangeToParent = () => this.props.onValueChosen(this.state.single);

  handleChange = (name) => (value) => {
    this.setState({ [name]: value }, this.passChangeToParent);
  };

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: (base) => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit",
        },
      }),
    };

    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={this.props.suggestions.map((suggestion) => ({
              value: suggestion.id, // we can map value here to id for example
              label: suggestion.firstName + " " + suggestion.lastName,
            }))}
            components={components}
            value={this.state.single}
            onChange={this.handleChange("single")}
            placeholder={this.props.autoSelectPlaceholder}
          />
        </NoSsr>
      </div>
    );
  }
}

AutoSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  autoSelectPlaceholder: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
};

export default withStyles(styles, { withTheme: true })(AutoSelect);
