<!------------------------------------------------------------------------------
  -
  -    Copyright (c) 2022 - 2023.
  -    Haixing Hu, Qubit Co. Ltd.
  -
  -    All rights reserved.
  -
  ----------------------------------------------------------------------------->
<template>
  <div class="my-component">
    <div>
      Fruits:
      <span id="fruits">
        {{ fruits.join(',') }}
      </span>
    </div>
    <div>
      All Fruits:
      <span id="all-fruits">
        {{ allFruits.join(',') }}
      </span>
    </div>
    <div>
      Total Fruit Count:
      <span id="total-count">{{ totalCount }}</span>
    </div>
    <div>
      Selected Fruit:
      <span id="selected-fruit">{{ selected }}</span>
    </div>
    <div>
      Count of Selected Fruit:
      <span id="selected-count">{{ fruitCount(selected) }}</span>
    </div>
    <div>
      <input id="fruit" type="text" v-model="fruit" />
    </div>
    <div>
      <button
          id="change-select-fruit"
          @click="onChangeFruitClicked"
      >
        Change Selected Fruit
      </button>
      <button
          id="select-fruit"
          @click="onSelectFruitClicked"
      >
        Call Selected Fruit
      </button>
      <button
        id="add-fruit"
        @click="onAddFruitClicked"
      >
        Add Fruit
      </button>
      <button
        id="batch-add-fruits"
        @click="onBatchAddFruitsClicked"
      >
        Batch Add Fruits
      </button>
    </div>
  </div>
</template>
<script>
import { Component, toVue } from '@haixing_hu/vue3-class-component';
import { State, WritableState, Action, Getter, Store } from '@haixing_hu/pinia-decorator';
import useBasketStore from '@/store/basket';

@Component
class MyComponent {
  @State(useBasketStore)
  fruits;

  @State(useBasketStore, 'fruits')
  allFruits;

  @WritableState(useBasketStore)
  selected;

  @WritableState(useBasketStore, 'fruits')
  writableFruits;

  @Getter(useBasketStore)
  fruitCount;

  @Getter(useBasketStore, 'count')
  totalCount;

  @Action(useBasketStore)
  addFruit;

  @Action(useBasketStore, 'addFruits')
  batchAddFruits;

  @Action(useBasketStore)
  selectFruit;

  @Store(useBasketStore)
  store;

  fruit = '';

  onChangeFruitClicked() {
    console.log('onChangeFruitClicked:', this.fruit);
    if (this.fruit) {
      const list = this.fruit.split(',');
      console.log('onChangeFruitClicked: list = ', list);
      this.selected = list[0];
    }
  }

  onSelectFruitClicked() {
    console.log('onSelectFruitClicked:', this.fruit);
    if (this.fruit) {
      const list = this.fruit.split(',');
      this.selectFruit(list[0]);
    }
  }

  onAddFruitClicked() {
    console.log('onAddFruitClicked:', this.fruit);
    const list = this.fruit.split(',');
    this.addFruit(list[0]);
  }

  onBatchAddFruitsClicked() {
    console.log('onBatchAddFruitsClicked:', this.fruit);
    const list = this.fruit.split(',');
    this.batchAddFruits(list);
  }
}
export default toVue(MyComponent);
</script>
