import React from 'react';
import Editor from './component/Editor';
import HTMLOutput from './component/HTMLOutput';
import css from './app.scss';

function App() {

  var _log = window.console.log;

  window.console.log = dump;


  function dump(l) {
    document.getElementById('console-dump').innerHTML += '<div class="op">' + l + '</div>';
  }

  return (
    <div className="app">
        <Editor />
        <HTMLOutput />
    </div>
  );
}

export default App;
