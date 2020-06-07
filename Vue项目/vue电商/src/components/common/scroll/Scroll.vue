<template>
  <div ref="wrapper">
    <div class="content"> <slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    setTimeout(this.__initScroll, 10);
  },
  methods: {
    __initScroll() {
      //console.log(this.$refs.wrapper);
      // 1.初始化BScroll对象
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      });

      // 2.将监听事件回调
      this.scroll.on("scroll", pos => {
        this.$emit("scroll", pos);
      });
      // 3.监听上拉到底部
      this.scroll.on("pullingUp", () => {
        //console.log('上拉加载');
        this.$emit("pullingUp");
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    }
  },
  watch: {
    data() {
      setTimeout(this.refresh, 20);
    }
  }
};
</script>

<style scoped lang='less'>
</style>
