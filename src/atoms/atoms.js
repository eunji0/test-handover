// recoil/atoms.js

import { atom, RecoilRoot } from 'recoil';

// 검색 결과 상태
export const searchResultState = atom({
  key: 'searchResultState',
  default: [],
});

export const commentsState = atom({
  key: "commentsState",
  default: [],
});

export const favoriteState = atom({
  key: "favoriteState",
  default: [],
})