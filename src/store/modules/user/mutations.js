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

const UPDATE_USER_PHOTOURL = (state, payload) => {
  state.userInfo.photoURL = payload;
};

const UPDATE_BACKGROUND_SELECTOR = (state, payload) => {
  state.backgroundSelector = payload;
};

const UPDATE_SELECTED_BACKGROUND = (state, payload) => {
  state.selectedBackground = payload;
};

export {
  UPDATE_BASE_SNACKBAR,
  UPDATE_COLUMN_ADD,
  UPDATE_COLUMN_DELETE,
  UPDATE_EXISTING_THEMES,
  UPDATE_USER_PHOTOURL,
  UPDATE_BACKGROUND_SELECTOR,
  UPDATE_SELECTED_BACKGROUND
}
