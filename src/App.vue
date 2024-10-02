<script setup lang="ts">
import WelcomeSection from './components/WelcomeSection.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper" style="margin-top: 5vh;">
      <!-- <header-component> TODO </header-component> -->
      <WelcomeSection msg="!Secção de Boas Vindas!" />
      <!-- <footer-component> TODO </footer-component> -->
    </div>
  </header>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
