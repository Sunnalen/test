import { ref } from 'vue';
import { useCardStore } from '~/store/card/cards';

export function useDragAndDrop() {
  const cardStore = useCardStore();
  const disableDragDrop = ref(false);
  const { cardList } = storeToRefs(cardStore);

  const handleEnd = () => {
    cardStore.saveCardsToLocalStorage();
  };

  return {
    disableDragDrop,
    cardList,
    handleEnd
  };
}