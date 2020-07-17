import React, { useRef, useState } from 'react';
import Editor from './component/Editor';
import HTMLOutput from './component/HTMLOutput';
import css from './app.scss';

function App() {

  var _log = window.console.log;
  const dumpRef = useRef();
  const [html, setHtml] = useState(``);
  const [css, setCss] = useState(``);
  const [js, setJs] = useState(``);

  window.console.log = dump;
  function dump(l) {
    document.getElementById('console-dump').innerHTML += '<div class="op">' + l + '</div>';
  }

  function setOutput({html, css, js}) {

    if(html) {
      setHtml(html)
    }

    if(css) {
      setCss(css);
    } else {
      setCss('')
    }

    if(js) {
      setJs(js);
    } else {
      setJs('')
    }
  }



  return (
    <div className="app">
        <Editor onRender={setOutput}/>
        <HTMLOutput html={html} css={css} js={js}/>
    </div>
  );
}

export default App;
