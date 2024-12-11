import React from 'react';
import { Button } from './Button';
import { FilterValueType } from './App';

type FilterButtonsType = {
  changeFilterType: (filterType: FilterValueType) => void;
};

export const FilterButtons = ({ changeFilterType }: FilterButtonsType) => {
  return (
    <div>
      <Button title="All" onClickHandler={() => changeFilterType('all')} />
      <Button title="Active" onClickHandler={() => changeFilterType('active')} />
      <Button title="Completed" onClickHandler={() => changeFilterType('completed')} />
    </div>
  );
};
