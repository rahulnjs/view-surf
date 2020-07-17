import React, { useRef, useState } from 'react';
import Editor from './component/Editor';
import HTMLOutput from './component/HTMLOutput';
import css from './app.scss';

function App() {

  var _log = window.console.log;
  const dumpRef = useRef();
  const [html, setHtml] = useState(``);
  const [css, setCss] = useState(``);

  window.console.log = dump;
  function dump(l) {
    document.getElementById('console-dump').innerHTML += '<div class="op">' + l + '</div>';
  }

  function setOutput({html, css}) {

    if(html) {
      setHtml(html)
    }

    if(css) {
      console.log(css)
      setCss(css);
    } else {
      setCss('')
    }
  }



  return (
    <div className="app">
        <Editor onRender={setOutput}/>
        <HTMLOutput render={html} css={css}/>
    </div>
  );
}

export default App;
