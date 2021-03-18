<template>
  <div id="SliderSponsors">
    <v-row class="mb-1">
      <v-col cols="12" sm="6"><h3>Sponsors</h3></v-col>
      <v-col cols="12" sm="6"><v-btn class="primary">Apoyar iniciativa</v-btn></v-col>
    </v-row>
    <v-col class="pa-0 ma-0" cols="12" lg="12" md="12" sm="12">
      <VueSlickCarousel v-bind="settings">
        <template #prevArrow="arrowOption">
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <div v-for="(item, i) in sponsors" :key="i">
          <v-avatar width="200">
            <img :src="item.logo" :alt="item.logo" />
          </v-avatar>
        </div> </VueSlickCarousel
    ></v-col>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
      sponsors: [
        { logo: `${require('@/assets/logos/huawei.svg')}`, nombre: 'Huawei' },
        { logo: `${require('@/assets/logos/tekki.svg')}`, nombre: 'Tekki' },
        { logo: `${require('@/assets/logos/fh.svg')}`, nombre: 'Fernando Herrera' },
        { logo: `${require('@/assets/logos/logdev.svg')}`, nombre: 'LogDev' },
        { logo: `${require('@/assets/logos/logdev2.svg')}`, nombre: 'LogDev2' },
        { logo: `${require('@/assets/logos/logdev3.svg')}`, nombre: 'LogDev3' },
        { logo: `${require('@/assets/logos/logdev4.svg')}`, nombre: 'LogDev4' },
        { logo: `${require('@/assets/logos/huawei.svg')}`, nombre: 'Huawei' },
        { logo: `${require('@/assets/logos/tekki.svg')}`, nombre: 'Tekki' },
        { logo: `${require('@/assets/logos/fh.svg')}`, nombre: 'Fernando Herrera' },
        { logo: `${require('@/assets/logos/logdev.svg')}`, nombre: 'LogDev' },
        { logo: `${require('@/assets/logos/logdev2.svg')}`, nombre: 'LogDev2' },
        { logo: `${require('@/assets/logos/logdev3.svg')}`, nombre: 'LogDev3' },
        { logo: `${require('@/assets/logos/logdev4.svg')}`, nombre: 'LogDev4' },
      ],
    };
  },
};
</script>

<style>
.custom-arrow {
  background: black;
}
</style>
