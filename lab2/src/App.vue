<script setup>
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'

const currentUser = ref(
  JSON.parse(localStorage.getItem('currentUser') || 'null'),
)

function updateUser(user) {
  currentUser.value = user
}

function clearUser() {
  currentUser.value = null
}

provide('currentUser', currentUser)
provide('updateUser', updateUser)
provide('clearUser', clearUser)
</script>

<template>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}
</style>


