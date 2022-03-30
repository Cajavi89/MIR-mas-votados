import React from 'react';
import SortButton from '../SortButton';

function Sort({handleSort}) {

  return (
    <div className='ml-4 mt-4 flex gap-2'>
        <h2 className="self-center">Ordenar:</h2>
      <div>
        <SortButton
        title='Ascendente'
        handleSort={handleSort}
        />

        <SortButton
        title='Descendente'
        handleSort={handleSort}
         />
      </div>
    </div>
  );
}

export default Sort;
