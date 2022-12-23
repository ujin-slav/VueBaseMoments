<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <div>{{ post.id }}</div>
            <div>{{ post.title }}</div>
            <div>{{ post.body }}</div>
        </div>
    </div>
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
<style lang="">
    
</style>