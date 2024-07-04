<template>
  <div class="field">
    <span class="field__name"><slot/></span>
    
      <input :class="{'field__input':true, 'field__input-error': error}" v-model="input" :type="type" :name="name">
   
    <span class="field__error" v-if="error">{{ error }}</span>
  </div>
</template>
<script setup lang="ts">
  import type { ISharedInputProps, ISharedInputEmits } from './SharedInput.types';
  
  const emits = defineEmits<ISharedInputEmits>();
  const props = defineProps<ISharedInputProps>();

  const input = computed({
    get() {
        return props.modelValue
    },
    set(value: string) {
        emits('update:modelValue', value)
    }
  });

</script>

<style>
  .field {
    width: 200px;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }

  .field__name {
    font-size: 18px;
  }

  .field__input {
    border: 1px solid black;
    border-radius: 5px;
  }

  .field__input:focus {
    border: 1px solid blue;
    outline: none;
  }

  .field__input-error {
    border: 1px solid red;
    outline: none;
  }
  
  .field__error {
    font-size: 15px;
    color: red;
  }
</style>