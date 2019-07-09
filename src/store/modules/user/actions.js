const updateBaseSnackbar = ({ commit }, payload) => {
  setTimeout( () => {
    commit('UPDATE_BASE_SNACKBAR', payload)
  }, 100)
};

const updateColumnAdd = ({ commit }, payload) => {
  setTimeout( () => {
    commit('UPDATE_COLUMN_ADD', payload)
  }, 100)
};

const updateColumnDelete = ({ commit }, payload) => {
  setTimeout( () => {
    commit('UPDATE_COLUMN_DELETE', payload)
  }, 100)
};

const updateExistingThemes = ({ commit }, payload) => {
  setTimeout( () => {
    commit('UPDATE_EXISTING_THEMES', payload)
  }, 100)
};

export {
  updateBaseSnackbar,
  updateColumnAdd,
  updateColumnDelete,
  updateExistingThemes
}
