<script setup lang="ts">
import { ref } from "vue";
defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <section>
    <h3>Button</h3>
      <button
        class="button button--primary button--small"
        type="button"
        @click="count++"
      >
        <span class="button__text">
          small
          <div class="button__loader"></div>
        </span>
      </button>

      <button
        class="button button--primary button--large"
        type="button"
        @click="count++"
      >
        <span class="button__text">
          Large
          <div class="button__loader"></div>
        </span>
      </button>

      <button
        class="button button--primary button--large button--loading"
        type="button"
        @click="count++"
      >
        <span class="button__text">
          Loading
          <div class="button__loader"></div>
        </span>
      </button>

      <button
        class="button button--primary button--wide"
        type="button"
        @click="count++"
      >
        <span class="button__text">
          Wide
          <div class="button__loader"></div>
        </span>
      </button>

      <button
        class="button button--large button--primary"
        type="button"
        @click="count++"
        disabled
        >
        <span class="button__text">
          Wide
          <div class="button__loader"></div>
        </span>
      </button>
  </section>
</template>

<style scoped>
section {
  max-width: 500px;
  display: grid;
  gap: 1rem;
}
</style>
