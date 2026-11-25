<template>
    <article :class="$style.card">
      <img
        :src="article.image"
        :alt="article.title"
        :class="$style.image"
      />
  
      <div :class="$style.content">
        <span :class="$style.category">
          {{ article.category }}
        </span>
  
        <h2 :class="$style.title">
          {{ article.title }}
        </h2>
  
        <p :class="$style.description">
          {{ article.description }}
        </p>
  
        <span :class="$style.date">
          {{ article.date }}
        </span>
  
        <RouterLink
          :to="`/article/${article.id}`"
          :class="$style.button"
        >
          Читати далі
        </RouterLink>
      </div>
    </article>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  
  defineProps({
    article: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style module src="./NewsCard.module.css"></style>
  