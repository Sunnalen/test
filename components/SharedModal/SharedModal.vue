<template>
  <div class="modal__background" v-show="IsClose" @click="closeModal">
    <div class="modal" v-show="IsClose">
      <div class="modal__inner">
        <p class="modal__name">{{ card.name }}</p>
        <p class="modal__description">{{ card.description }}</p>
      </div>
      <SharedButton size="m" @click="closeModal">Закрыть</SharedButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ISharedModalProps } from './SharedModal.types';

  const IsClose = ref(true);
  const props = defineProps<ISharedModalProps>();

  const closeModal = () => {
    IsClose.value = false
  };
</script>

<style lang="scss">
  .modal {
    padding: var(--indent-l);
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: var(--font-size-l);

    &__background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); 
      z-index: 1;
      display: block;
    }

    &__inner {
      padding: var(--indent-l);
      border: 1px solid lightgray;
      border-radius: 5px;
      margin-bottom: var(--indent-l);
    }

    &__name, &__description {
      border-bottom: 1px solid lightgray;
      text-align: center;
      padding: var(--indent-s);
    }
  }
</style>
