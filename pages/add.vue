<template>
  <div class="addition">
    <div class="container">
      <div class="addition__inner">
        <div class="addition__form">
          <SharedInput v-model="cardData.name"  name="name" type="text" :error="errors.name">Name</SharedInput>
          <SharedInput v-model="cardData.description" name="description" type="text" :error="errors.description">Description</SharedInput>
        </div>
        <div class="addition__btn">
          <SharedButton size="m" @click="addCard">Добавить</SharedButton>
          <SharedButton size="m" @click="main">Отмена</SharedButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import type {ICard} from '~/store/card/card.types';
  import { useCardStore } from '~/store/card/cards';

  const cardStore = useCardStore()
  const router = useRouter();

  const errors = ref<ICard>({
    name:'',
    description:''
  })

  const cardData = ref<ICard>({
    name: '',
    description: ''
  })

  const addCardToStore = () => {
    if(!errors.value.name && !errors.value.description) {
      cardStore.addCard(cardData.value);
      router.push('/')
    } else {
      return
    }
  }

  const addCard = () => {
    addCardToStore();
  }

  const validateName = () => {
  if (!cardData.value.name.trim()) {
    errors.value.name = '*поле Name обязательно для заполнения';
  } else {
    errors.value.name = cardData.value.name.length < 5 ? '*поле должно содержать не менее 5 символов' : '';
  }
  };

  const validateDescription = () => {
  if (!cardData.value.description.trim()) {
    errors.value.description = '*поле Description обязательно для заполнения';
  } else {
    errors.value.description = cardData.value.description.length < 5 ? '*поле должно содержать не менее 5 символов' : '';
  }
  };
  
  watch(cardData, () => {
    validateName();
    validateDescription();
  }, {deep:true})

  const main = () => {
  router.push('/');
  }
</script>
<style>
  .addition {
    display: flex;
    justify-content: center;
  }

  .container {
    padding: 5px;
  }

  .addition__inner {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 10px;
  }

  .addition__btn {
    display: flex;
    gap: 15px;
  }
</style>