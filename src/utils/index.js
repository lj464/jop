// 发布订阅库
let sub = function (){
    class subm  {
        constructor(){
            this.$point = []
        }
        add(func){
            this.$point.push(func)
        }
        remove(func){
            this.$point.forEach((v,i)=>{
                if (v===func){
                    this.$point[i] = null
                }
            })
        }
        fire(...arg){
            // this.$point.forEach(v=>{
            //     v.call(this,...arg)
            // })
            let point = this.$point
            for(let i = 0 ; i<= point.length ;i++){
                let item = point[i]
                if(item === null){
                    point.splice(i , 1)
                    i--
                    continue
                }
                item.call(this,...arg)
            }
        }
    }
    return subm
}()
export default sub