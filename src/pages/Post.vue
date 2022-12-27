<template>
    <div>
        <div v-intersection:[direction]='565565656'></div>
         {{$route.params.id }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
            direction: 'right'
            }
        }
    }
</script>

<style scoped>

</style>