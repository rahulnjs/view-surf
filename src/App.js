import React from 'react';
import Editor from './component/Editor';
import HTMLOutput from './component/HTMLOutput';
import css from './app.scss';

function App() {

  var _log = window.console.log;

  window.console.log = function(l) {
    document.getElementById('console').innerHTML = l;
  } 

  return (
    <div className="app">
        <Editor />
        <HTMLOutput />
    </div>
  );
}

export default App;
