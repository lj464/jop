export function setStorage(key , value){
    localStorage.setItem(key,value)
}
export function removeSrora(key){
    localStorage.removeItem(key)
}
export function getStorage(key){
   return localStorage.getItem(key)
}