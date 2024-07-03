<template>
  <div class="modal__back" v-show="close" @click="closeModal">
    <div class="modal" v-show="close">
      <div class="modal__inner">
        <p class="modal__name">{{ card.name }}</p>
        <p class="modal__description">{{ card.description }}</p>
      </div>
      <SharedButton size="m" @click="closeModal">Закрыть</SharedButton>
    </div>
  </div>
</template>
<script setup>
 const close = ref(true)

  const props = defineProps({
    card: Object
  })

  const { emit } = defineEmits();

  const closeModal = () => {
    close.value = false
  }
</script>

<style>
 .modal__back {
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 1;
    display: block;
 }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 24px;
  }

  .modal__inner {
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .modal__name, .modal__description {
    border-bottom: 1px solid lightgray;
    text-align: center;
    padding: 5px;
  }
</style>
