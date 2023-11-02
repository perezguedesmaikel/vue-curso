<template>
  <div class="pa-5">
    <h1>{{ count }}</h1>
    <CountButton color="green" text="Incrementar" :custom-function="increment"/>
    <CountButton color="red" text="Decrementar" :custom-function="decrement"/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import CountButton from "@/components/camparation/CountButton.vue";
//Section Home
export default {
  components: {CountButton},
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };
//Section Table
    const decrement = () => {
      if(count.value>=1){
        count.value--;
      }

    };

    return {
      count,
      increment,
      decrement
    };
  }
};
</script>
