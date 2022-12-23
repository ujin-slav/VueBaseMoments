<script lang="ts">
  import { defineComponent, PropType } from "vue"
  import PostForm from '../components/PostForm.vue'
  import PostList from '../components/PostList.vue'
import MyButton from "./MyButton.vue"

  export type IPost = {
    id:number,
    title:string,
    body:string
  }

  export default defineComponent({
    components:{
      PostForm,PostList,
        MyButton
    },
    data() {
      return {
        likes: 0,
        dislikes: 0,
        posts: [
          {id:1,title:"Заголовок",body:"Тело поста"},
          {id:2,title:"Заголовок",body:"Тело поста"},
          {id:3,title:"Заголовок",body:"Тело поста"}
        ] as IPost[],
        title:'',
        body:''
      }
    },
    methods: {
      addLike(e: Event) {
        this.likes += 1
      },
      addDislike(e: Event) {
        this.dislikes += 1
      },
      addPost(newPost:any) {
            console.log(newPost)
      }
    },
  })
</script>

<template>
  <button @click="addLike">+</button>
  <button @click="addDislike">-</button>
  <h1>Количество лайков {{ likes }}</h1>
  <h1>Количество диз лайков {{ dislikes }}</h1>
  <post-form v-bind:posts="posts" @addPost="addPost"></post-form>
  <post-list v-bind:posts="posts"></post-list>
  <my-button>
    <template v-slot:header>Одно</template>
    <template v-slot:footer>Другое</template>
  </my-button>
</template>

<style scoped>
</style>
