import {defineStore} from 'pinia';
import { ICard } from './card.types';

export const useCardStore = defineStore('cardStore', () => {
  
  const cardList = ref<ICard[]>([
    {
      name: 'Name',
      description: 'Description'
    },
    {
      name: 'Name',
      description: 'Description'
    }
  ])

  // добавление карточки //
  const addCard = (newCard: ICard) => {
    cardList.value.push(newCard); 
    saveCardsToLocalStorage();
}

  // получение всего списка карточек //
  const getAllCards = () => {
    return cardList.value;
  }

  // сохранение карточки в локальном хранилище //
  const saveCardsToLocalStorage = () => {
    localStorage.setItem('cards', JSON.stringify(cardList.value));
  }

  onMounted(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      cardList.value = JSON.parse(storedCards);
      localStorage.clear()
    }
  });
  
  return {
    cardList,
    addCard,
    getAllCards,
    saveCardsToLocalStorage
  }
})