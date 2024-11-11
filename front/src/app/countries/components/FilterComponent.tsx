import React from "react";

interface Props {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const FilterComponent = ({ handleOnChange, search }: Props) => {
  return (
    <div>
      <input
        className="p-2 border rounded-md"
        onChange={handleOnChange}
        value={search}
        type="search"
        placeholder="Filter"
      />
    </div>
  );
};

export default FilterComponent;
