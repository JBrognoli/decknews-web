const UPDATE_BASE_SNACKBAR = (state, payload) => {
  state.baseSnackbar = payload;
};

const UPDATE_COLUMN_ADD = (state, payload) => {
  state.columnAdd = payload;
};

const UPDATE_COLUMN_DELETE = (state, payload) => {
  state.columnDelete = payload;
};

const UPDATE_EXISTING_THEMES = (state, payload) => {
  state.existingThemes = payload;
};

export {
  UPDATE_BASE_SNACKBAR,
  UPDATE_COLUMN_ADD,
  UPDATE_COLUMN_DELETE,
  UPDATE_EXISTING_THEMES
}
