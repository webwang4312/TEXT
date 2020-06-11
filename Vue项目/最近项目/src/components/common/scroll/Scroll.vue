<template>
  <div ref="wrapper">
    <slot></slot>
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
    },
   
  },
  data() {
    return {
      scroll: {},
      scrollTop:Number
    };
  },
  mounted() {
    setTimeout(this.__initScroll, 20);
  },
  methods: {
    __initScroll() {
      // 1.初始化BScroll对象
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      });

      // 2.将监听事件回调
      this.scroll.on("scroll", pos => {
        // 获取滚动高度
        this.scrollTop = Math.abs(Math.round(pos.y));
        // 传给home
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
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    //滚动到上一页面滚动的位置
    scrollPosition() {
      //scrollFlag标志是否滚动会原来位置
      if (this.scrollFlag) {
        this.scroll.scrollTo(0, 0 - this.scrollTop);
      }
    }
  },
  watch: {
    data() {
      setTimeout(this.refresh, 20);
    }
  }
};
</script>

<style scoped>
</style>
