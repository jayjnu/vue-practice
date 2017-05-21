<template>
  <div id="loadingIcon" v-if="visible">
    <i class="ld ld-spinner ld-spin"></i>
  </div>
</template>
<script>
  export default {
    name: 'loading-icon',
    props: ['visible']
  }
</script>
<style src="../assets/loading.css"></style>
<style scoped>
  #loadingIcon {
    background-color: rgba(255, 255, 255, 0.6);
    position:absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    text-align: center;
    line-height: 500px;
    z-index: 999;
  }
  .ld { color: #888; }

</style>
