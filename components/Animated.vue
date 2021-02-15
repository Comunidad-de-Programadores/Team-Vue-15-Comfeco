<template>
  <section class="animated-bg">
    <slot></slot>
  </section>
</template>

<script>
import '../assets/css/Animated.css';

export default {
  data: () => {
    return {};
  },
  mounted() {
    const logos = ['bg-vue', 'bg-react', 'bg-angular', 'bg-svelte'];

    function createSquare() {
      const section = document.querySelector('.animated-bg');
      const square = document.createElement('span');

      var size = Math.random() * 50;
      square.style.width = 20 + size + 'px';
      square.style.height = 20 + size + 'px';

      square.style.top = Math.random() * innerHeight + 'px';
      square.style.left = Math.random() * innerWidth + 'px';

      const bg = logos[Math.floor(Math.random() * logos.length)];
      square.className += bg;
      section.appendChild(square);

      setTimeout(() => {
        square.remove();
      }, 5000);
    }
    setInterval(createSquare, 300);
  },
};
</script>

<style scoped></style>
