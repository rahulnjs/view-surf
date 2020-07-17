import React, {Fragment, useState, useRef} from 'react';
import '../style/html-output.scss';

export default function HTMLOutput({html, css, js}) {

    const [hideConsoleBtn, setHideCloseBtn] = useState(false);
    const consoleRef = useRef();
    const dumpRef = useRef();

    const [srcDoc, setSrcDoc] = useState('HTML CSS & JS!!');

    setTimeout(() => {
        if(dumpRef.current) {
            dumpRef.current.innerHTML = '';
        }
        setSrcDoc(`
        <style>
            ${css}
        </style>
        ${html}
        <script>
            window.console.log = parent.window.dump;
            window.console.error = window.console.log;
            try {
                ${js}
            } catch(e) {}
        </script>
        `);
    }, 5);

    window.dump = function(l) {
        dumpRef.current.innerHTML += '<div class="op">' + l + '</div>';
    };
  

    function toggleConsole() {
        let show = !hideConsoleBtn;
        consoleRef.current.style.height = !hideConsoleBtn ?  '40%' : '20px';
        setHideCloseBtn(show);
    }     

    return (
    <> <iframe srcDoc={srcDoc} title='Result' className='result-frame'></iframe>
        <div id="console" ref={consoleRef} className={hideConsoleBtn  ? 'act' : ''}>
            <div id="console-header">
                <span onClick={() => toggleConsole()}>Console
                    {
                        hideConsoleBtn && <div>&#10005;</div>
                    }
                </span>
            </div>
            <div id="console-dump" ref={dumpRef}>
            </div>
        </div>
    </>
    );
}