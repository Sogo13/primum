<template>
  <div class="wrapper-view">
    <CreateProjectPage />
  </div>
</template>

<script>
import CreateProjectPage from "@/components/pages/createProjectPage/createProjectPage.vue";
export default {
  emits: [''],
  props: {},
  name: 'CreateProjectView',
  components: {
    CreateProjectPage
  },
}
</script>

<style lang="scss" scoped></style>
