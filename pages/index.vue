<template>
  <div class="main">
    <div class="container">
      <div class="inner">
        <div class="header">
          <SharedButton size="l" @click="add">Добавить</SharedButton>
          <div class="header__checkbox">
            <input type="checkbox" v-model="disableDrag"> Отключить Drag&Drop
          </div>
        </div>
        <div class="contant">
          <draggable class="card__list" v-model="cardList" @end="handleEnd" itemKey="id">
            <template v-slot:item="{ element }">
              <SharedCard  
              :key="element.id"
              :card="element"
              @click="openModal(element)"
              />
            </template>
          </draggable>
          <SharedModal v-if="selectedCard" :card="selectedCard" @click="handleModalClose" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import SharedButton from '~/components/SharedButton/SharedButton.vue';
  import { useCardStore } from '~/store/card/cards';
  import draggable from 'vuedraggable'

  const cardStore = useCardStore()
  const router = useRouter();

  const disableDrag = ref(false)
  const selectedCard = ref(null)


  const cardList = computed(() => cardStore.getAllCards())

  const add = () => {
    router.push('/add')
  }

  const handleEnd = (event) => {
    if (!disableDrag.value) {
      cardList.value.splice(event.newIndex, 0, cardList.value.splice(event.oldIndex, 1)[0]);
      cardStore.saveCardsToLocalStorage();
    }
  }

  const handleModalClose = () => {
    selectedCard.value = null;
  }

  const openModal = (card) => {
    selectedCard.value = card;
  }
</script>
<style>
  .main {
    display: flex;
    justify-content: center;
  }

  .container {
    padding: 5px;
  }

  .inner{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    display: flex;
    flex-direction: column;
  }

  .header__checkbox {
    margin-bottom: 15px;
  }
  
  .card__list {
    padding: 20px;
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    gap: 15px 45px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
</style>
