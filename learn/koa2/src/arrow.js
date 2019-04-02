// const arrow = function(param){}
// const arrow = (param) => {}     //传参
// const arrow = param => {}       //传一个参数
// const arrow = param => console.log(param)
// const arrow = param => ({param: param})
// const arrow = (param1,param2) => {}

// let obj = {id: 1,movie:'21322245'};
// const arrow = ({id,movie}) => {
//     console.log(id,movie);
// }
// const arrow = (obj) => {
//     console.log(id,movie);
// }

// 箭头函数解决了this指向问题

const winter = {
    id: 2,
    say:function(){
        setTimeout(function(){
            console.log('id',this.id);
        },50)
    },
    sayWithThis:function(){
        let that = this;
        setTimeout(function(){
            console.log('this id:',that.id);
        },500)
    },
    sayWithArrow:function(){
        setTimeout(() => {
            console.log('arrow id:',this.id);
        },1500)
    },
    sayWithGlobalArrow: ()=> {
        setTimeout(()=>{
            console.log('global arrow id:',this.id);
        },2000)
    }
}

winter.say()
winter.sayWithThis()
winter.sayWithArrow()
winter.sayWithGlobalArrow()