export default(state={}, payload) => {
    switch (payload.type) {
        case 'TOGGLE_DISPLAY_MODE':
            return {darkMode: !state.darkMode};
        default:
            return state;
    }
};