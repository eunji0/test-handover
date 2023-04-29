// recoil/atoms.js

import { atom } from 'recoil';

export const searchResultsState = atom({
  key: 'searchResultsState',
  default: [],
});

export const commentsState = atom({
  key: "commentsState",
  default: [],
});

// export const selectedButtonState = atom({
//   key: 'selectedButtonState',
//   default: parseInt(localStorage.getItem('selectedButton')) || null,
// });