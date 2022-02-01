export function setStorage(key, value) {
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
}
export function removeSrora(key) {
    localStorage.removeItem(key)
}
export function getStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}