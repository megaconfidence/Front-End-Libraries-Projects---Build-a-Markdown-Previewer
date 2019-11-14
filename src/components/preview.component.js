import React from 'react';

const Preview = ({ value, display }) => {
  const html = <div id='preview'>{value}</div>;
  const preview = (
    <div id='preview' dangerouslySetInnerHTML={{ __html: value }}></div>
  );
  return <>{display.type === 'preview' ? preview : html}</>;
};

export default Preview;
