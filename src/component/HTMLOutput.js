import React, {Fragment} from 'react';
import styles from '../style/html-output.scss';

export default function HTMLOutput() {


    return (
    <>
        <div className="html-output" id="html-output">
            
        </div>
        <div id="console">
            <div id="console-header">
                Console
            </div>
            <div id="console-dump">

            </div>
        </div>
    </>
    );
}