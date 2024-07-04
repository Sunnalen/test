<template>
  <div class="main">
    <div class="container">
      <div class="inner">
        <div class="header">
          <SharedButton size="l" @click="add">Добавить</SharedButton>
          <div class="header__checkbox">
            <input type="checkbox" v-model="disableDragDrop"> Отключить Drag&Drop
          </div>
        </div>
        <div class="contant">
          <draggable 
            class="card__list" 
            v-model="cardList" 
            @end="handleEnd" 
            itemKey="id"
            :disabled="disableDragDrop"
            >
            <template v-slot:item="{ element }">
              <SharedCard  
              :key="element.id"
              :card="element"
              @click="openModal(element)"
              />
            </template>
          </draggable>
          <SharedModal 
            v-if="IsSelectedCard" 
            :card="IsSelectedCard" 
            @click="handleModalClose" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import SharedButton from '~/components/SharedButton/SharedButton.vue';
  import { useCardStore } from '~/store/card/cards';
  import draggable from 'vuedraggable';

  const cardStore = useCardStore();
  const router = useRouter();

  const disableDragDrop = ref(false);
  const IsSelectedCard = ref(null);


  const cardList = ref(cardStore.getAllCards());

  const add = () => {
    router.push('/add')
  };

  const handleEnd = () => {
    cardStore.saveCardsToLocalStorage()
  };

  const handleModalClose = () => {
    IsSelectedCard.value = null;
  };

  const openModal = (card) => {
    IsSelectedCard.value = card;
  };

  onMounted(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      cardStore.setCards(JSON.parse(storedCards));
      cardList.value = JSON.parse(storedCards);
    }
  });

  watch(cardList, (newList) => {
      cardStore.setCards(newList);
      cardStore.saveCardsToLocalStorage();
    }, { deep: true });

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
