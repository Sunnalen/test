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
  ]);

  // добавление карточки //
  const addCard = (newCard: ICard) => {
    cardList.value.push(newCard); 
    saveCardsToLocalStorage();
  }

  // установка списка карточек //
  const setCards = (cards: ICard[]) => {
    cardList.value = cards;
  };

  // получение всего списка карточек //
  const getAllCards = () => {
    return cardList.value;
  };

  // сохранение карточки в локальном хранилище //
  const saveCardsToLocalStorage = () => {
    localStorage.setItem('cards', JSON.stringify(cardList.value));
  };
  
  return {
    cardList,
    addCard,
    getAllCards,
    setCards,
    saveCardsToLocalStorage
  }
});