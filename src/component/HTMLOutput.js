import React, {Fragment, useState} from 'react';
import styles from '../style/html-output.scss';

export default function HTMLOutput() {

    const [hideConsoleBtn, setHideCloseBtn] = useState(false);

    function toggleConsole() {
        let show = !hideConsoleBtn;
        let height = '20';
        if(show) {
            height = (document.getElementById('html-output').offsetHeight + 16);
        } 
        document.getElementById('console').style.height = height + 'px';
        setHideCloseBtn(show);
    }

    return (
    <>
        <div className="html-output" id="html-output">
            
        </div>
        <div id="console" className={hideConsoleBtn  ? 'act' : ''}>
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