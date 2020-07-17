import React, { useEffect, useState } from 'react';
import styles from '../style/editor.scss'

export default function Editor(props) {
    const [editorToShow, setEditorToShow] = useState('html')
    let _editors = ['html', 'css', 'js'].map(l => (
        <div key={l} className="--editor" style={{ display: editorToShow === l ? 'block' : 'none' }}>
            <_Editor toRender={props.onRender} lang={l} />
        </div>
    ));

    function toggleView() {
    }
    return (
        <div className="editor" id="editor">
            <div className="tabs">
                <div className={'tab ' + (editorToShow === 'html' ? 'active' : '')} onClick={() => setEditorToShow('html')}>
                    HTML
                </div>
                <div className={'tab ' + (editorToShow === 'css' ? 'active' : '')} onClick={() => setEditorToShow('css')}>
                    CSS
                </div>
                <div className={'tab ' + (editorToShow === 'js' ? 'active' : '')} onClick={() => setEditorToShow('js')}>
                    Javascript
                </div>
                <div className="settings">
                    <img src="https://image.flaticon.com/icons/svg/38/38407.svg" alt="change view" onClick={() => toggleView()}/>
                </div>
            </div>
            <div id="editors">
                {_editors}
            </div>
        </div>
    );
}

function _Editor(props) {
    let editor;

    useEffect(() => {
        setTimeout(() => {
            let lang = props.lang === 'js' ? 'javascript' : props.lang;
            editor = window.ace.edit(props.lang);
            editor.setTheme('ace/theme/dracula');
            editor.session.setMode("ace/mode/" + lang);
            editor.renderer.setShowGutter(true);
            editor.getSession().setUseWrapMode(true);
            editor.setShowPrintMargin(false);
            editor.setReadOnly(false);

            editor.setOptions({
                fontFamily: "'Fira Code', monospace",
                fontSize: "18px",
                maxLines: 15,
                minLines: 15,
                useWorker: false,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
            });
            window[props.lang] = editor;

            render();
        }, 500);
    }, []);

    function render() {
        let _e = window[props.lang];
        window.localStorage.setItem(props.lang, _e.getValue());
        var objToRender = {};
        for(var lang of ['html', 'css', 'js']){
            var _v = window.localStorage[lang];
            objToRender[lang] = _v ? _v : '';
        }
        // objToRender.css = normalize(objToRender.css);
        props.toRender(objToRender);
    }

    return (
        <div key={props.lang} id={props.lang} onKeyUp={render}></div>
    );
}