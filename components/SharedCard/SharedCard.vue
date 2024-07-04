<template>
  <div class="card">
    <div class="card__name">
      {{ card.name }}
    </div>
    <div class="card__description">
      {{ card.description }}
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ICard } from '~/store/card/card.types';

const props = defineProps<{card: ICard}>();
</script>
<style>
  .card {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid lightgray;
    border-radius: 5px;
    transition: box-shadow 0.3ms;
    cursor: pointer;
  }
  .card:hover{
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
</style>