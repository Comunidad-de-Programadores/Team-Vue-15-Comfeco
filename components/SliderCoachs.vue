<template>
  <div id="SliderCoachs">
    <h4>Ellos ya creen en esta iniciativa</h4>
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

      <div v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card flat class="px-2 pt-2" tile>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="140px"
          >
            <v-card-text class="mt-5 ma-0" v-text="card.title"></v-card-text>
            <img class="pa-0 ma-0" width="40" :src="card.framework" />
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </div>
    </VueSlickCarousel>
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
        autoplay: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
      cards: [
        {
          title: 'Ignacio Anaya',
          src: 'https://pbs.twimg.com/media/EJSPoFtWwAAgUtu.jpg',
          framework: `${require('@/assets/logos/vue-icon.svg')}`,
        },
        {
          title: 'Manuel Ojeda',
          src: 'https://i.imgur.com/QmVOu4L.jpg',
          framework: `${require('@/assets/logos/vue-icon.svg')}`,
        },
        {
          title: 'Fernando de la Rosa',
          src:
            'https://d33wubrfki0l68.cloudfront.net/2c9254a85f0407c82f707db1bdee3fb18be079cb/af152/me.png',
          framework: `${require('@/assets/logos/vue-icon.svg')}`,
        },
        {
          title: 'Diego Plascencia',
          src:
            'https://pbs.twimg.com/profile_images/1294873617990377472/3uBmnzmX_400x400.jpg',
          framework: `${require('@/assets/logos/react-icon.svg')}`,
        },
        {
          title: 'Vanesa Marely',
          src:
            'https://pbs.twimg.com/profile_images/1332779818874773504/bhiSI0Xo_400x400.jpg',
          framework: `${require('@/assets/logos/react-icon.svg')}`,
        },
        {
          title: 'Lina María Montaño',
          src: 'https://miro.medium.com/max/3150/1*7FDTaU6WyiZHiwJfnPHJdg.jpeg',
          framework: `${require('@/assets/logos/react-icon.svg')}`,
        },
        {
          title: 'Oscar Barajas',
          src:
            'https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/85363/073bdd37-ebd2-4cd1-8036-4a090ba84ca9.jpg',
          framework: `${require('@/assets/logos/svelte-icon.svg')}`,
        },
        {
          title: 'Noah Kaufman',
          src: 'https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/teachers/noah.jpg',
          framework: `${require('@/assets/logos/svelte-icon.svg')}`,
        },
        {
          title: 'Silvestre Vivo',
          src: 'https://pbs.twimg.com/profile_images/766221995436544000/r_C7l_bZ.jpg',
          framework: `${require('@/assets/logos/svelte-icon.svg')}`,
        },
        {
          title: 'Bezael Perez',
          src:
            'https://pbs.twimg.com/profile_images/1275143505288089600/3YCxeMFu_400x400.jpg',
          framework: `${require('@/assets/logos/angular-icon.svg')}`,
        },
        {
          title: 'Nicolas Molina',
          src: 'https://pbs.twimg.com/profile_images/1234056128650235904/x10AJ_bT.jpg',
          framework: `${require('@/assets/logos/angular-icon.svg')}`,
        },
        {
          title: 'Mayra Rodriguez',
          src:
            'https://www.galileo.edu/trends-innovation/wp-content/uploads/2020/03/Foto-Mayra-Rodriguez.jpg',
          framework: `${require('@/assets/logos/angular-icon.svg')}`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-arrow {
  display: none;
}
</style>
