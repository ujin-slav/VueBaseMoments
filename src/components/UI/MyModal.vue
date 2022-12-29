<template>
    <div v-if="show===true" class="modal" @click="hideDialog">
        <div @click.stop class="content">
           <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from '../../mixins'
export default {
    name: 'my-modal',
    mixins:[toggleMixin]
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;
  padding: 60px 15px;
}
.content {
  width: 100%;
  width: 500px;
  height: 500px;
  padding: 50px;
  background: #f9f9f9;
  border-radius: 3px;
  position: relative;
  box-shadow: 0 5px 15px black;
}
</style>