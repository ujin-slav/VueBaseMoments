<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#"><router-link to="/">Home</router-link></b-navbar-brand>
      
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#"><router-link to="/About">About</router-link></b-nav-item>
              <button @click="$router.push('/About')">About</button>
              <button @click="$router.push('/store')">Store</button>
              <button @click="$router.push('/composition')">Composition</button>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>      
</template>

<script>
    export default {
        name: 'navbar',
    }
</script>

<style lang="scss" scoped>

</style>