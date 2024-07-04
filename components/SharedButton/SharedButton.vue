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
<style>
  .btn {
    padding: 5px;
    margin-bottom: 10px;
    background-color: blue;
    color: white;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3ms all;
  }

  .btn:active{
    transform: scale(0.98);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .btn__large {
    font-size: 24px;
  }
  
  .btn__medium {
    font-size: 16px;
  }
</style>