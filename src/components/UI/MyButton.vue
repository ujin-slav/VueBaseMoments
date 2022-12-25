<template>
    <button class="btn">
        <slot name="header"></slot>
        <span class="redText">
            <slot name="footer"></slot>
        </span>
        <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: 'my-button'
}
</script>
<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
.redText {
  color: red;
}
</style>