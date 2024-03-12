<template>
  <div class="mainSearch">
    <input class="mainSearchInput heading_5" placeholder="Start searching...">
  </div>
</template>

<script>
export default {
  components:{
  },
  data(){

  }
}

</script>

<style scoped lang="scss">
.mainSearch{
  width: 60%;
  border: 1px solid var(--border-turn-off);
  border-radius: 8px;
  &:hover{
    transition: 0.2s;
    border-color: #8d8d8d;
  }

}
.mainSearchInput{
  border-radius: 8px;
  padding: 16px 32px;
  height: 100%;
  width: 100%;
  border: none  ;
}
</style>