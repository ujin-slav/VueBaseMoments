<script lang="ts">
  import { defineComponent, PropType, ref } from "vue"
  import PostForm from '../components/PostForm.vue'
  import PostList from '../components/PostList.vue'
  import axios from 'axios'
  import { switchCase } from "@babel/types"


  export type IPost = {
    id:number,
    title:string,
    body:string
  }

  function dynamicSort(property:any) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a:any,b:any) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }

  export default defineComponent({
    components:{
      PostForm,PostList
    },
    data() {
      return {
        modalActive: false,
        sorts: [
          {id:'1',value:"title",title:'По заголовку'},
          {id:'2',value:"body",title:'По тексту'},
        ],
      }
    },
    setup(props){
        const likes = ref(0)
        const addLike =()=> {
            likes.value++
        }
        return {
            likes,
            addLike
        }
    }
  })
</script>

<template>
    {{likes}}
    <button @click="addLike">Add like</button>
</template>

<style scoped>
.observer{
  height:30px;
  background-color: aqua;
}
</style>
