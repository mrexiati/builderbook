import Button from "@mui/material/Button";
import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { getGithubReposApiMethod } from "../../lib/api/admin";
import { styleTextField } from "../SharedStyles";
import notify from "../../lib/notify";

const propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequiredp,
};

const defaultProps = {
  book: null,
};

class EditBook extends React.Component {}

EditBook.propTypes = propTypes;
EditBook.defaultProps = defaultProps;

export default EditBook;
