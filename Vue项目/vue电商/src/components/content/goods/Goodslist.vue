<template>
  <div id="goodslist">
    <Goodslistitem v-for="item in goods" :goodsitem="item" :key="item.id"></Goodslistitem>
  </div>
</template>


<script>
import Goodslistitem from "./Goodslistitem";
export default {
  name: "goodslist",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Goodslistitem
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
#goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
    