<template>
  <div class="wrapper-view">
    <MainPage />
  </div>
</template>

<script>
import MainPage from '@/components/pages/MainPage/MainPage.vue'
export default {
  emits: [''],
  props: {},
  name: 'HomeView',
  components: {
    MainPage,
  },
}
</script>

<style lang="scss" scoped></style>
