<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Simulador de tweets</span>
      <button 
        class="btn ps-4 pe-4 btn-secondary" 
        :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
        @click="openCloseForm">
        {{ !showForm ? "Nuevo Tweet" : "Cerrar Tweet" }}
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
    
  export default defineComponent({
    name: 'Navbar',
    props: {
      showForm: Boolean,
      openCloseForm: Function
    }
  });
  </script>
  

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
