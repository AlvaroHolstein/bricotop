<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <h3>depois isto fica com outro conteudo, um bem lindo</h3>
    <div class="main-welcome-section container border">
      Podia ter aqui um carrosel com imagens de vocês ou sitios onde estiveram
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.welcome {
  h1,
  h3 {
    text-align: center;
  }

  .main-welcome-section {
    text-align: center;
    border-radius: 5%;
    padding: 5px;
  }
}
</style>
