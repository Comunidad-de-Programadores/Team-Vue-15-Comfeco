<template>
  <div id="Home">
    <Header />
      <Animated>
        <h1>Bienvenidos a Comunity Fest and Code</h1>
        <h3>Conoce gente, aprende y gana!</h3>
        <p>La proxima edición regresa en 2022, en la cual se planea involucrar a todos los programadores independientes <br> del area del conocimiento que se encuentre, todo con un mismo proposito, aprender en comunidad.</p>
        <section id="home-wrapper">
          <Comunidades />
          <Slider1 />
        </section>
        <Slider2 />
        <Contador />
      </Animated>
    <Footer />
  </div>
</template>

<script>
import Comunidades from '../components/Comunidades.vue';
export default {
  components: { Comunidades },
  name: 'Home',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#Home{
  font-family: 'Montserrat', sans-serif;
}
h1{
  font-size: 2.5rem;
  font-weight: bolder;
  padding: 16px;
}
h3{
  color: gray;
}
p{
  padding: 20px 0;
}
.animated-bg{
  flex-direction: column;
  padding: 100px 0;
}
#home-wrapper{
  display: flex;
}
</style>
