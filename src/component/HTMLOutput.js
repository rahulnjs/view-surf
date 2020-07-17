import React, {Fragment, useState, useRef} from 'react';
import styles from '../style/html-output.scss';

export default function HTMLOutput(props) {

    const [hideConsoleBtn, setHideCloseBtn] = useState(false);
    const outPutRef = useRef();
    const consoleRef = useRef();

    function toggleConsole() {
        let show = !hideConsoleBtn;
        let height = '20';
        if(show) {
            height = (outPutRef.current.offsetHeight + 16);
        } 
        consoleRef.current.style.height = height + 'px';
        setHideCloseBtn(show);
    }
    return (
    <>
    <style>
        {props.css}
    </style>
        <div className="html-output" ref={outPutRef} id="html-output" dangerouslySetInnerHTML={{ __html: props.render }}>
        </div>
        <div id="console" ref={consoleRef} className={hideConsoleBtn  ? 'act' : ''}>
            <div id="console-header">
                <span onClick={() => toggleConsole()}>Console
                    {
                        hideConsoleBtn && <div>&#10005;</div>
                    }
                </span>
            </div>
            <div id="console-dump">
            </div>
        </div>
    </>
    );
}