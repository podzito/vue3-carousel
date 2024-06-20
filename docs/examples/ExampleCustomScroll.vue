<template>
  <Carousel :items-to-show="5" :items-to-scroll="5" :wrap-around="false">
    <Slide v-for="slide in 20" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from '../../dist/carousel.es'

import '../../dist/carousel.css'

export default defineComponent({
  name: 'CustomScroll',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>
