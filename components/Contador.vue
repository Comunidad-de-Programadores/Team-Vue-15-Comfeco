<template>
  <div id="Contador">
    <h4>Preparate, lo bueno esta por venir</h4>
    <div class="tiempo">
      <div class="dias">
        <h1>{{dias}}</h1>
        <p>Dias</p>
      </div>
      <div class="horas">
        <h1>{{horas}}</h1>
        <p>Horas</p>
      </div>
      <div class="minutos">
        <h1>{{minutos}}</h1>
        <p>Minutos</p>
      </div>
      <div class="segundos">
        <h1>{{segundos}}</h1>
        <p>Segundos</p>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/Contador.css'

var sec = 1000
var min = sec * 60
var hour = min * 60
var day = hour * 24
var timer

export default {
  data: () => {
    return {
      dias: 365,
      horas: 24,
      minutos: 60,
      segundos: 60,
      endTime: new Date('02/25/2021 10:00 AM')
    }
  },
  mounted(){
    timer = setInterval(this.showTime, 1000)
  },
  methods:{
    showTime(){
      let now = new Date()
      let distance = this.endTime - now

      if(distance < 0){
        clearInterval(timer)
        this.dias = 0
        this.horas = 0
        this.minutos = 0
        this.segundos = 0
      }

      let days = Math.floor(distance / day)
      let hours = Math.floor((distance % day) / hour)
      let minutes = Math.floor((distance % hour) / min);
      let seconds = Math.floor((distance % min) / sec);

      this.dias = days
      this.horas = hours
      this.minutos = minutes
      this.segundos = seconds
    }
  },
}
</script>

<style>

</style>