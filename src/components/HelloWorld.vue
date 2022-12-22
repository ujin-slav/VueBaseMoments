<script lang="ts">
  import { defineComponent, PropType } from "vue"

  declare type IPost = {
    id:number,
    title:string,
    body:string
  }

  export default defineComponent({
    data() {
      return {
        likes: 0,
        dislikes: 0,
        posts: [
          {id:1,title:"Заголовок",body:"Тело поста"},
          {id:2,title:"Заголовок",body:"Тело поста"},
          {id:3,title:"Заголовок",body:"Тело поста"}
        ] as IPost[]
      }
    },
    methods: {
      addLike(e: Event) {
        this.likes += 1
      },
      addDislike(e: Event) {
        this.dislikes -= 1
      }
    },
  })
</script>

<template>
  <button @click="addLike">+</button>
  <button @click="addDislike">-</button>
  <h1>Количество лайков {{ likes }}</h1>
  <h1>Количество диз лайков {{ dislikes }}</h1>
  <div v-for="post in posts">
    <div>{{ post.id }}</div>
    <div>{{ post.title }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<style scoped>
</style>
