<template>
    <div>
        <slot name="header"></slot>
        <span class="redText">
            <slot name="footer"></slot>
        </span>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style scoped>
.redText{
    color:red;
}
</style>