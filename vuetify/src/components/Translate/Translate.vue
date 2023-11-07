<template>
  <div>
    <p>{{ $t('welcome') }}</p>
    <p>{{ $t('greeting', {name: 'John'}) }}</p>
  </div>
</template>

<script setup>

import {onMounted} from "vue";
import i18n from "@/components/TranslateConfig/TranslateConfig";

onMounted(() => {
  // Cambiar el idioma dinámicamente
  i18n.global.locale = 'es';
})

</script>

