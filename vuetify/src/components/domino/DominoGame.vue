<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6" sm="8">
        <v-card class="elevation-12">
          <v-card-title class="text-h5">¡Encuentra la Pareja!</v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <v-row>
              <v-col v-for="(card, index) in shuffledCards" :key="index" class="mb-3">
                <v-btn
                    v-if="!card.found"
                    :style="{ backgroundColor: card.flipped ? card.color : 'transparent' }"
                    class="elevation-8"
                    @click="selectCard(index)"
                >
                  {{ card.flipped ? card.value : '' }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {id: 1, value: 'A', color: 'red', flipped: false, found: false},
        {id: 2, value: 'A', color: 'red', flipped: false, found: false},
        {id: 3, value: 'B', color: 'blue', flipped: false, found: false},
        {id: 4, value: 'B', color: 'blue', flipped: false, found: false},
        {id: 5, value: 'C', color: 'green', flipped: false, found: false},
        {id: 6, value: 'C', color: 'green', flipped: false, found: false},
        {id: 7, value: 'D', color: 'purple', flipped: false, found: false},
        {id: 8, value: 'D', color: 'purple', flipped: false, found: false},
        {id: 9, value: 'E', color: 'orange', flipped: false, found: false},
        {id: 10, value: 'E', color: 'orange', flipped: false, found: false},
        // ... más cartas
      ],
      flippedCards: [],
    };
  },
  computed: {
    shuffledCards() {
      return this.shuffleArray([...this.cards]);
    },
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    selectCard(index) {
      const selectedCard = this.shuffledCards[index];

      // No hacer nada si la carta ya está volteada o encontrada
      if (selectedCard.flipped || selectedCard.found) {
        return;
      }

      selectedCard.flipped = true;

      // Lógica de juego: compara las cartas seleccionadas
      this.flippedCards.push(selectedCard);

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.checkMatch();
          this.flippedCards = [];
        }, 800);
      }
    },
    checkMatch() {
      const [card1, card2] = this.flippedCards;

      if (card1.value === card2.value && card1.color === card2.color) {
        // Cartas coinciden, mantenerlas encontradas
        card1.found = true;
        card2.found = true;
      } else {
        // Cartas no coinciden, voltearlas de nuevo
        card1.flipped = false;
        card2.flipped = false;
      }
    },
  },
};
</script>

<style scoped>
.v-btn {
  width: 80px;
  height: 80px;
  font-size: 24px;
  color: white;
  transition: background-color 0.3s, transform 0.3s;
}

.v-btn.flipped {
  transform: scale(1.05);
}

.v-btn.found {
  background-color: #4caf50 !important;
}
</style>
