<template>
<!-- 吸顶灯效果 -->
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{active: currentIndex === index}"
      @click="itemClick(index)"
      v-for="(item, index) in titles"
      :key="item.index"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: function() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick: function(index) {
      // 1.改变currentIndex,接受index值
      this.currentIndex = index;
      // 2.发出事件、子组件传出
      this.$emit("itemClick", index);
    }
  }
};
</script>

<style scoped lang='less'>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  // z-index: 10;
  margin-top: 20px;
  background-color:snow;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>
