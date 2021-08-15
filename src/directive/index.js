export default {
    inserted(el, binding, ) {
        document.addEventListener('click', function (e) {
            if (e.target === el || el.contains(e.target)) {
                return
            }
            binding.value()
        })
    },
    unbind(){
        document.removeEventListener('click' , binding.value())
    }
}