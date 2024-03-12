<template>
  <div class="header">
    <div class="container">
      <div class="flex_jc_sb_al_c mainHeader">
        <p class="heading_1 logoColor">PRIMUM</p>
        <MainSearch/>
        <div class="flex_jc_sb_al_c">
        <button class="createProjectBtn heading_5">Create Project</button>
        <p class="logTxt heading_5">Log in</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import MainSearch from "@/components/Header/MainSearch.vue";
export default {
  components: {
    MainSearch
  },
  data() {

  }
}

</script>

<style scoped lang="scss">
.mainHeader{
  padding-top: 24px ;
}
.logTxt{
  margin-left: 16px;
}
.createProjectBtn{
  padding: 8px 16px;
border-right: 2px solid ;
}
</style>