<template>
  <v-row id="Counter"
    ><v-col cols="12" lg="12" sm="12" md="12">
      <h4 class="secondary--text">Prepárate, lo bueno esta por venir</h4></v-col
    >
    <v-col cols="12" lg="12" sm="12" md="12">
      <v-row>
        <v-col cols="12" lg="3" class="dias">
          <h1>{{ dias }}</h1>
          <p>Dias</p>
        </v-col>
        <v-col cols="12" lg="3" class="dias">
          <h1>{{ horas }}</h1>
          <p>Hora</p>
        </v-col>
        <v-col cols="12" lg="3" class="dias">
          <h1>{{ minutos }}</h1>
          <p>Minutos</p>
        </v-col>
        <v-col cols="12" lg="3" class="dias">
          <h1>{{ segundos }}</h1>
          <p>Dias</p>
        </v-col>
      </v-row></v-col
    >
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dias: 365,
      timer: 0,
      horas: 24,
      minutos: 60,
      segundos: 60,
      endTime: new Date('02/25/2022 10:00 AM'),
    };
  },
  mounted() {
    this.timer = setInterval(this.showTime, 1000);
  },
  methods: {
    showTime() {
      const sec = 1000;
      const min = sec * 60;
      const hour = min * 60;
      const day = hour * 24;
      let now = new Date();
      let distance = this.endTime - now;

      if (distance < 0) {
        clearInterval(this.timer);
        this.dias = 0;
        this.horas = 0;
        this.minutos = 0;
        this.segundos = 0;
      }

      let days = Math.floor(distance / day);
      let hours = Math.floor((distance % day) / hour);
      let minutes = Math.floor((distance % hour) / min);
      let seconds = Math.floor((distance % min) / sec);

      this.dias = days;
      this.horas = hours;
      this.minutos = minutes;
      this.segundos = seconds;
    },
  },
};
</script>

<style></style>
