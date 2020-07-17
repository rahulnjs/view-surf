import React, {Fragment, useState, useRef} from 'react';
import '../style/html-output.scss';

export default function HTMLOutput(props) {

    const [hideConsoleBtn, setHideCloseBtn] = useState(false);
    const consoleRef = useRef();
    const resultsRef = useRef();
    const dumpRef = useRef();

  

    function toggleConsole() {
        let show = !hideConsoleBtn;
        let height = '20';
        if(show) {
            height = (resultsRef.current.offsetHeight / 2 + 16);
        } 
        consoleRef.current.style.height = height + 'px';
        setHideCloseBtn(show);
    }

    if(resultsRef.current) {
        resultsRef.current.contentWindow.document.open();
        resultsRef.current.contentWindow.document.write(
            `<style>${props.css}</style>
            ${props.html}
            <script>
             ${props.js}
            </script>
            `);
        resultsRef.current.contentWindow.document.close();
        resultsRef.current.contentWindow.console.log = dump;
    }

    

    function dump(l) {
        dumpRef.current.innerHTML += '<div class="op">' + l + '</div>';
    }


    return (
    <> <iframe ref={resultsRef} title='Result' src="" className='result-frame'></iframe>
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