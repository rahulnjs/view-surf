import React, { useRef, useState } from 'react';
import Editor from './component/Editor';
import HTMLOutput from './component/HTMLOutput';
import Header from './component/header/Header';
import css from './app.scss';

function App() {

  var _log = window.console.log;
  const dumpRef = useRef();
  const [html, setHtml] = useState(``);
  const [css, setCss] = useState(``);
  const [js, setJs] = useState(``);

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
    <>
    <Header></Header>
    <div className="app">
        <Editor onRender={setOutput}/>
        <HTMLOutput html={html} css={css} js={js}/>
    </div>
    </>
  );
}

export default App;
