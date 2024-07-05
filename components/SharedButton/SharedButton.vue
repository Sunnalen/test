<template>
    <button :class="['btn', buttonSize[size]]"><slot /></button>
</template>

<script setup lang="ts">
  import type { ISharedButtonProps, TButtonSizeClass,  } from './SharedButton.types';

  const props = defineProps<ISharedButtonProps>();
  const buttonSize: TButtonSizeClass = {
    l: 'btn__large',
    m: 'btn__medium'
  };
</script>

<style lang="scss">
  .btn {
    padding: var(--indent-s);
    margin-bottom: var(--indent-m);
    background-color: blue;
    color: white;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3ms all;

    &:active {
      transform: scale(0.98);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &__large {
      font-size: var(--font-size-l);
    }

    &__medium {
      font-size: var(--font-size-s);
    }
  }
</style>