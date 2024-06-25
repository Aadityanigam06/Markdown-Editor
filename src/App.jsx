import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function App() {
 
  const [markdown, setMarkdown] = useState(`# Hello `);
  
  const reset = () => {
    setMarkdown(`# Hello`);
  };

  const trial_table = () => {
    setMarkdown(`# Sample Table

| Name       | Age | Occupation        |
|------------|-----|-------------------|
| John Doe   | 30  | Software Engineer |
| Jane Smith | 25  | Designer          |
| Sam Johnson| 22  | Student           |
`);

  };
  return (
    <>

    <h1>Markdown-Editor</h1>
    <p>Its a simple markdown-editor that can perform basic tasks.</p>
    <button onClick={reset}>RESET</button>
    <button onClick={trial_table}>Click to see sample Table</button>
    <div className="container">
      
      <div className="editor-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className="preview-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
    </>
    
  )
}

export default App