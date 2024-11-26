import { createReducer } from '@reduxjs/toolkit';

interface IGridReducerProps {
  gridSize: number;
  gridStyle: string;
}

var initialState: IGridReducerProps = {
  gridSize: 3,
  gridStyle: '',
};

export const gridReducer = createReducer(initialState, {
  gridSize: (state, action) => {
    state.gridSize = action.payload;
  },
  gridStyle: (state, action) => {
    state.gridStyle = action.payload;
  },
});
