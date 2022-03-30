import React, { useState } from 'react';

const SortButton = ({title, handleSort }) => {
  const [buttonClicked, setButtonCLicked] = useState(false)
  return (
    <button
      className={!buttonClicked
        ?'sort-button mr-5 p-2 border border-blue-600 text-blue-600 hover:bg-blue-300'
        :'sort-button mr-5 p-2 border border-blue-600 text-white bg-blue-700'}
      onClick={() =>{ handleSort(title); setButtonCLicked(!buttonClicked)}}
      >{title}</button>
  );
};

export default SortButton;
