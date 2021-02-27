<template>
  <section id="header">
    <img src="../assets/logos/logo.svg" alt="logo" />
    <button v-if="hasLogin">Login</button>
    <slot name="content"></slot>
  </section>
</template>

<script>
import '../assets/css/Header.css';

export default {
  props: {
    hasLogin: Boolean,
  },
};
</script>

<style></style>
