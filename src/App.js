import React, { useState, useRef } from 'react';
import './App.css';
import Marked from './marked';
import Mode from './components/mode.component';
import Editor from './components/editor.component';
import Preview from './components/preview.component';

function App() {
  const text = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;

  const copyTextAreaRef = useRef(null);
  const copyFeedBackDisplayRef = useRef(null);
  const [input, setInput] = useState({ value: text });
  const [display, setDisplay] = useState({ type: 'preview' });
  const handleChange = e => {
    setInput({
      value: e.target.value
    });
  };
  const handleClear = () => {
    setInput({
      value: ''
    });
  };
  const handleSelect = e => {
    setDisplay({
      type: e.target.value
    });
  };
  const handleCopy = () => {
    const copyText = copyTextAreaRef.current;
    copyText.select();
    document.execCommand('copy');

    copyFeedBackDisplayRef.current.style.display = 'block';
    setTimeout(() => {
      copyFeedBackDisplayRef.current.style.display = 'none';
    }, 1000);
  };

  Marked.setOptions({
    renderer: new Marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  return (
    <>
    <h1>Markdown Previewer <a href="https://github.com/Confidence-Okoghenun/Front-End-Libraries-Projects---Build-a-Drum-Machine">(GitHub)</a></h1>
      <div className='app'>
        <div className='container'>
          <div className='title'>EDITOR</div>
          <div className='left_controls'>
            <button onClick={handleClear}>Clear</button>
          </div>
          <Editor onChange={handleChange} value={input} />
        </div>
        <div className='container'>
          <div className='title'>PREVIEW</div>
          <div className='right_controls'>
            <div className='select_container'>
              View Mode
              <Mode onChange={handleSelect} />
            </div>
            <button onClick={handleCopy}>Copy</button>{' '}
            <div ref={copyFeedBackDisplayRef}>Copied!</div>
          </div>
          <Preview value={Marked(input.value)} display={display} />
        </div>
      </div>
      <textarea
        className='copyTextArea'
        ref={copyTextAreaRef}
        value={Marked(input.value)}
        readOnly
      ></textarea>
    </>
  );
}

export default App;
