<template>
    <div v-if="posts.length > 0">
        <transition-group tag="div" name="list">
            <div 
              v-for="post in posts" 
              :key="post.id" 
              class="listItem">
                <div>{{ post.id }}</div>
                <div>{{ post.title }}</div>
                <div>{{ post.body }}</div>
                <button @click="$emit('remove', post)">Удалить</button>
            </div>
        </transition-group>
    </div>
    <h1 v-else>Постов нет</h1>
</template>
<script  lang="ts">
import { isTSExportAssignment } from '@babel/types';
import { IPost } from './HelloWorld.vue';

export default {
    props:{
        posts:{
            required: true,
            type: Array as () => Array<IPost>,
        }
    }
}
</script>
<style scoped>
.listItem{
    background-color: lightgray;
    margin-bottom: 5px;
}
.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>