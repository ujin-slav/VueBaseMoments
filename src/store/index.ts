import Vuex from 'vuex'
import {IPost} from '../components/HelloWorld.vue'
import axios from 'axios'

// Create a new store instance.
const store = new Vuex.Store({
  state : {
    posts: []
  },
  getters : {
    POSTS : state => {
      return state.posts;
    }
  },
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