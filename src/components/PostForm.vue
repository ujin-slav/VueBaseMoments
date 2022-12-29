<template>
    <div>
        <div>
            Заголовок
            <my-input v-model="post.title" v-focus/>
        </div>
        <div>
            Тело
            <my-input v-model="post.body"/>
  </div>
  <button @click="addPost">Добавить</button>
   </div>
</template>
<script  lang="ts">
import { IPost } from './HelloWorld.vue'

export default {
    props:{
        posts:{
            required: true,
            type: Array as () => Array<IPost>,
        }
    },
    data() {
        return{
            post:{
            title:'',
            body:''
        }}
    },
    methods:{
        addPost(e: Event) {
            const newPost:IPost = {
                id:this.posts.length+1,
                title:this.post.title,
                body:this.post.body
            }
            this.posts.push(newPost) 
            this.$emit("addPost",newPost)
        }
    }
}
</script>
<style lang="">
    
</style>