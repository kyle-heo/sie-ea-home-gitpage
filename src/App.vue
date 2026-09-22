<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <router-view />
  <TheFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,200');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css');
@import '/assets/css/bootstrap.min.css';
@import '/assets/css/paper-kit.css';
@import '/assets/css/sieea.css';

body {
  font-family: 'Montserrat', sans-serif;
}
</style>
