import React from 'react';

const Mode = ({ onChange }) => {
  return (
    <select className='select' onChange={onChange}>
      <option value='preview'>Preview</option>
      <option value='html'>HTML Source</option>
    </select>
  );
};
export default Mode;
