'use strict'
const CLICK_SHOWINFO = 'CLICK_SHOWINFO';

let setTimeoutActionCreator = (info) => {
    console.log('pass action');
    return {
        type: CLICK_SHOWINFO,
        info: info + Math.random()
    };
};

export {CLICK_SHOWINFO, setTimeoutActionCreator};