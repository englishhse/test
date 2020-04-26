<template>
  <div class="category">

    <el-rate v-model="value2" :colors="colors"></el-rate>
  </div>
</template>

<script>
import Pullup from "@better-scroll/pull-up";

export default {
  name: "Category",
  data() {
    return {
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']  
    };
  },
  mounted() {}
};
</script>

<style scoped>
.el {
  padding: 20px;
  margin: 20px;
}
</style>