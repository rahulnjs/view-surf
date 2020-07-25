export default {
    getItem,
    setItem
}

const storage = localStorage;

function getItem(item) {
    return localStorage.getItem(item);
}

function setItem(item) {
    if(!item) {
        return;
    }

    try {
        const i = JSON.parse(item);
        storage.setItem(i);
    } catch {
        storage.setItem(item);
    }
}