import Vuex from 'vuex'
import {IPost} from '../components/HelloWorld.vue'
import axios from 'axios'
import { GetterTree } from 'vuex'

export interface RootState {
  posts: any [];
}
const getters: GetterTree<RootState, RootState> = {
  getPost(state): IPost {
      return {
        id:1,
        title:'Hello',
        body:'body'
      }
}}

// Create a new store instance.
const store = new Vuex.Store<RootState>({
  state: {
    posts: []
  },
  // getters : {
  //   POSTS : state => {
  //     return state.posts;
  //   }
  // },
  getters: getters,
  mutations: {
    ADD_POSTS : (state,payload) => {
      state.posts = [...state.posts,...payload]
    },
  },
  actions:{
    GET_POSTS : async (context) => {
       let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: 1,
          _limit: 10
        }
        })
        context.commit('ADD_POSTS',data)
    }
    }
})

export default store;