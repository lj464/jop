import throttle from 'lodash/throttle'
const attributes = {
    delay:{
        default:200
    },
    immediate:{
        default:false
    },
    disabled:{
        default:false
    },
    distance:{
        default:10
    }
}
function getFatheContainer(el) {
    let parent = el
    while (parent) {
        if (document.documentElement == parent) {
            return window; //表示没有找到
        }
        const overflow = getComputedStyle(parent)['overflow-y']
        if (overflow.match(/scroll|auto/)) {
            return parent;
        }
        parent = parent.parentNode;
    }
}

export default {
    name: "infiniteScroll",
    inserted(el, options, vnode) {
        console.log(el, options, vnode);
        // 找到滚动的父节点
        let parent = getFatheContainer(el)


    }
}