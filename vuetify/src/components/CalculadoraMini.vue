<template>
  <v-app>
    <v-card class="mx-auto mt-8" max-width="400">
      <v-card-title class="text-center">Calculadora</v-card-title>
      <v-card-text>
        <v-row justify="center">
          <v-text-field v-model="display" readonly></v-text-field>
        </v-row>
        <v-row justify="center">
          <v-btn v-for="digit in digits" :key="digit" @click="appendDigit(digit)">{{ digit }}</v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn v-for="operator in operators" :key="operator" @click="appendOperator(operator)">{{ operator }}</v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn @click="clear">C</v-btn>
          <v-btn @click="calculate">=</v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn @click="clear">Exportar</v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script setup>
import {ref} from 'vue';


const display = ref('');
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/'];

const appendDigit = (digit) => {
  display.value += digit.toString();
};

const appendOperator = (operator) => {
  display.value += operator;
};

const clear = () => {
  display.value = '';
};

const calculate = () => {
  display.value = eval(display.value);
};


</script>

<style>
.v-btn {
  margin: 4px;
}
</style>
