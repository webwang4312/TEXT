<template>
  <!-- 吸顶灯效果 -->
  <div id="stickyslot">
    <div class="searchBar" id="searchBar">
      <ul :class="searchBarFixed == true ? 'isFixed' :''">
        <li v-for="(item,index) in sticky" :key="index" @click="itemClick(index)"><p >{{item}}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "stickyslot",
  components: {},
  data() {
    return {
      searchBarFixed: false,
      currentIndex:0
    };
  },
  props: {
    sticky: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {},
  methods: {
   itemClick: function (index) {
        // 1.改变currentIndex
        this.currentIndex = index;

        // 2.发出事件
        this.$emit('itemClick', index)
      },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //console.log(scrollTop)
      let offsetTop = document.querySelector('#searchBar').offsetTop
      scrollTop > offsetTop ? (this.searchBarFixed = true) : (this.searchBarFixed = false);
    }
  },
  computed: {}
};
</script>

<style lang="less" scoped>
.searchBar {
  // background-color: snow;
  // display: flex;
  // flex-direction: row;
  .isFixed {
    background-color: snow;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  ul {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    li {
      text-align: center;
      flex: 1;
      font-size: 18px;
    }
    border-bottom: 1px solid #ddd;
  }
}
</style>