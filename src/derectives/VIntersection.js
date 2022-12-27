export default {
    mounted(el,binding){
        console.log(el)
        if((el.scrollHeight - 
            (el.scrollTop + el.innerHeight) <= 0)) {
                console.log('dno')
        }
    }
}