# Vue 3 Carousel

This is a fork of https://ismail9k.github.io/vue3-carousel/. Our goal is to extend this base functionality to provide more diverse usage scenarios.

Modern lightweight Vue 3 carousel component

## Documentation

Coming soon ...

## Features

- [x] Responsive breakpoints
- [x] Mouse/touch dragging
- [x] Infinity scroll (wrapping around)
- [x] Auto play
- [x] Add classes for active and for visible slides
- [x] RTL
- [x] Enrich a11y

## Getting started

### Installation

First step is to install it using `yarn` or `npm`:

```bash
npm install @podzito/vue3-carousel

# or use yarn
yarn add @podzito/vue3-carousel
```

### Basic Using

```vue
<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in 10" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import '@podzito/vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from '@podzito/vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
```
