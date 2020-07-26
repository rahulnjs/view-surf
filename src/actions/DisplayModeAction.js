export default function toggleMode(mode) {
    // console.log('adding item:', item);
    return {
        type: 'TOGGLE_DISPLAY_MODE',
        mode
    };
  }