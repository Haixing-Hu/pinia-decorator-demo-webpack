////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { defineStore } from 'pinia';

const useBasketStore = defineStore('basket', {
  state: () => ({
    fruits: ['🍍', '🍎', '🍇', '🍋', '🍎'],
    selected: '🍎',
  }),
  getters: {
    fruitCount: (state) =>
        (fruit) => state.fruits.filter((f) => f === fruit).length,
    count: (state) => state.fruits.length,
  },
  actions: {
    addFruit(fruit) {
      this.fruits.push(fruit);
    },
    addFruits(fruits) {
      this.fruits.push(...fruits);
    },
    selectFruit(fruit) {
      this.selected = fruit;
    },
  },
});

export default useBasketStore;
