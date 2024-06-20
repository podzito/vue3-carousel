# Examples

- [Basic Example](#basic-example)
- [Wrap Around](#wrap-around)
- [Breakpoints](#breakpoints)
- [Pagination](#pagination)
- [Autoplay](#autoplay)
- [Active Classes](#active-classes)
- [Custom Navigation](#custom-navigation)
- [Custom Texts](#custom-texts)
- [Gallery](#gallery)
- [Custom Scroll](#custom-scroll)

## <a name="basic-example"></a> [Basic Example](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleBasic.vue)

<ExampleBasic></ExampleBasic>

```vue
<template>
  <Carousel>
    <Slide v-for="slide in 10" :key="slide">
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
import { Carousel, Navigation, Pagination, Slide } from '@podzito/vue3-carousel'

import '@podzito/vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
```

## <a name="wrap-around"></a> [Wrap Around](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleWrapAround.vue)

<ExampleWrapAround></ExampleWrapAround>

```vue
<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from '@podzito/vue3-carousel'

import '@podzito/vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>
```

## <a name="breakpoints"></a> [Breakpoints](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleBreakpoints.vue)

<ExampleBreakpoints></ExampleBreakpoints>

```vue
<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from '@podzito/vue3-carousel'

import '@podzito/vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
})
</script>
```

## <a name="pagination"></a> [Pagination](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleBreakpoints.vue)

<ExamplePagination></ExamplePagination>

```vue
<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from '@podzito/vue3-carousel'
import '@podzito/vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'ExamplePagination',
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
})
</script>
```

## <a name="autoplay"></a> [Autoplay Example](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleAutoplay.vue)

<ExampleAutoplay></ExampleAutoplay>

```vue
<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from '@podzito/vue3-carousel'

import '@podzito/vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
})
</script>
```

## <a name="active-classes"></a> [Active Classes](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleActiveClasses.vue)

<ExampleActiveClasses></ExampleActiveClasses>

```vue
<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    ...
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from '@podzito/vue3-carousel'

import '@podzito/vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
})
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
```

## <a name="custom-navigation"></a> [Custom Navigation](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleCustomNavigation.vue)

<ExampleCustomNavigation></ExampleCustomNavigation>

```vue
<template>
  <Carousel ref="carousel" v-model="currentSlide">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide - 1 }}</div>
    </Slide>

    ...
  </Carousel>

  <div>
    <button @click="next">Next</button>
    <input type="number" min="0" max="9" v-model="currentSlide" />
    <button @click="prev">Prev</button>
  </div>
</template>
```

## <a name="custom-texts"></a> [Custom texts](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleCustomLabels.vue)

<ExampleCustomLabels></ExampleCustomLabels>

```vue
<template>
  <Carousel
    :i18n="{
      ariaNextSlide: 'Zur nächsten Slide',
      ariaPreviousSlide: 'Zur vorherigen Slide',
      ariaNavigateToSlide: 'Springe zu Slide {slideNumber}',
      ariaGallery: 'Galerie',
      itemXofY: 'Slide {currentSlide} von {slidesCount}',
      iconArrowUp: 'Pfeil nach oben',
      iconArrowDown: 'Pfeil nach unten',
      iconArrowRight: 'Pfeil nach rechts',
      iconArrowLeft: 'Pfeil nach links',
    }"
  >
    ...
  </Carousel>
</template>
```

## <a name="gallery"></a> [Gallery](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExampleGallery.vue)

<ExampleGallery></ExampleGallery>

```vue
<template>
  <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from '@podzito/vue3-carousel'

import '@podzito/vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
})
</script>
```

## <a name="custom-scroll"></a> [Custom Scroll](https://github.com/podzito/vue3-carousel/blob/master/docs/examples/ExamplePodcasts.vue)

<ExampleCustomScroll></ExampleCustomScroll>

```vue
<template>
  <Carousel :items-to-show="5" :items-to-scroll="5" :wrap-around="false">
    <Slide v-for="slide in 20" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from '@podzito/vue3-carousel'

import '@podzito/vue3-carousel/dist/carousel.css'

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
```

<script>
import ExampleBasic from './examples/ExampleBasic.vue';
import ExampleWrapAround from './examples/ExampleWrapAround.vue';
import ExampleBreakpoints from './examples/ExampleBreakpoints.vue';
import ExamplePagination from './examples/ExamplePagination.vue';
import ExampleAutoplay from './examples/ExampleAutoplay.vue';
import ExampleActiveClasses from './examples/ExampleActiveClasses.vue';
import ExampleCustomNavigation from './examples/ExampleCustomNavigation.vue';
import ExampleCustomLabels from './examples/ExampleCustomLabels.vue';
import ExampleGallery from './examples/ExampleGallery.vue';
import ExampleCustomScroll from './examples/ExampleCustomScroll.vue';

import '../dist/carousel.css'
export default {
  components: {
    ExampleBasic,
    ExampleWrapAround,
    ExampleBreakpoints,
    ExampleAutoplay,
    ExamplePagination,
    ExampleActiveClasses,
    ExampleCustomNavigation,
    ExampleCustomLabels,
    ExampleGallery,
    ExampleCustomScroll
  }
}
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vp-c-green);
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 1px;
}

.carousel__pagination {
  list-style: none !important;
}

.carousel__pagination-item {
  margin-top: 0 !important;
}

.carousel__slide {
  margin-top: 0 !important;
}

</style>
