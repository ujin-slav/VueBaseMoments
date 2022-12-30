<script lang="ts">
  import { defineComponent, PropType } from "vue"
  import PostForm from '../components/PostForm.vue'
  import PostList from '../components/PostList.vue'
  import axios from 'axios'
  import { switchCase } from "@babel/types"
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'


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
        loading:false,
        likes: 0,
        dislikes: 0,
        modalActive: false,
        searchText:"",
        selectedSort:'',
        page:1,
        posts: [] as IPost[],
        sorts: [
          {id:'1',value:"title",title:'По заголовку'},
          {id:'2',value:"body",title:'По тексту'},
        ],
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
      },
      remove(post:any) {
          this.posts = this.posts.filter((item)=>item.id!==post.id)
      },
      showModal() {
          this.modalActive = !this.modalActive
      },
      async fetchPosts(){
        try {
          this.loading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: 10
          }
          });
          this.posts = [...this.posts,...response.data]
          this.loading = false
        } catch (error) {
          alert(error)
        } finally {
          this.loading = false
        }
      },
      selectHandler(e:any){
        this.posts.reverse()
        // switch(e.target.value) {
        //     case 'title':  
        //       this.posts = this.posts.sort(dynamicSort("title"))
        //     case 'body':  
        //       this.posts = this.posts.sort(dynamicSort("body"))
        //   }
      },
      ...mapActions({
        loadMorePosts: 'GET_POSTS',
      }),
      scrollHandler(e:any){
        if((e.target.documentElement.scrollHeight - 
            (e.target.documentElement.scrollTop + window.innerHeight) <= 0)) {
                ++this.page
          }
      },},
      created() {
        //document.getElementById("postList").addEventListener('scroll',this.scrollHandler)
        //document.addEventListener('scroll',this.scrollHandler);
      },
      destroyed() {
        document.removeEventListener('scroll',this.scrollHandler);
      },
      mounted(){
        this.loadMorePosts()
      },
      computed:{
        // sortedPost(){
        //   return [...this.posts].sort((post1:any,post2:any):any=>{
        //       return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        //   }).filter((item)=>item.body.toLowerCase().includes(this.searchText.toLowerCase()))
        // },
        // sortedPost(){
        //   return this.$store.getters.POSTS
        // },
        ...mapGetters({
          sortedPost: 'POSTS',
        })
      },
      // watch:{
      //   selectedSort(value) {
      //     this.posts.sort((post1:any,post2:any):any=>{
      //         return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      //     })
      //   },
      // }
      watch:{
        page(newValue) {
          this.fetchPosts()
        },
      }
  })
</script>

<template>
  <my-button @click="addLike">+</my-button>
  <my-button @click="addDislike">-</my-button>
  <my-button @click="showModal">Добавить</my-button>
  Поиск  <my-input v-model="searchText"/>
  <h1>Количество лайков {{ likes }}</h1>
  <h1>Количество диз лайков {{ dislikes }}</h1>
  <select v-model="selectedSort">
    <option>Выбрать...</option>
    <option 
      v-for="sort in sorts" 
      :key="sort.id"
      v-bind:value="sort.value"
    >
      {{ sort.title }}
    </option>
  </select>
  <!-- <post-list v-if="!loading" v-bind:posts="sortedPost" @remove="remove"></post-list>
  <div v-else>Загрузка</div> -->
  <post-list v-bind:posts="sortedPost" @remove="remove"></post-list>
  <div ref="observer" class="observer" v-intersection="fetchPosts"></div>
  <my-button>
    <template v-slot:header>Одно</template>
    <template v-slot:footer>Другое</template>
  </my-button>
  <button @click="showModal">Показать окно</button>
  <my-modal v-model:show="modalActive">
    <post-form v-bind:posts="posts" @addPost="addPost"></post-form>
  </my-modal>
</template>

<style scoped>
.observer{
  height:30px;
  background-color: aqua;
}
</style>
