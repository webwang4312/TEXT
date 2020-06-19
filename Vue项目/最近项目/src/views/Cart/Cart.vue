<template>
  <div id="cart">
    <!-- <Tabs type="line">
      <TabPane label="swiperlist2[0].name">{{swiperlist[0].name}}</TabPane>
      <TabPane label="swiperlist2[1].name">{{swiperlist[1].name}}</TabPane>
      <TabPane label="swiperlist2[2].name">{{swiperlist[2].name}}</TabPane>
    </Tabs>-->
    <ul class="asideleft">
      <li v-for="item in swiperlist" :key="item.id" class="swiperlist" @mouseenter="add">
        <p>{{item.name}}</p>
      </li>
    </ul>
    <ul class="asideright">
      <li v-for="item in swiperlist2" :key="item.id">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cart",
  components: {},
  data() {
    return {
      tabPosition: "left",
      swiperlist: [
        { id: 0, name: "hello" },
        { id: 1, name: "word" },
        { id: 2, name: "goodbye" }
      ],
      swiperlist2: [
        { id: 3, name: "hello2" },
        { id: 4, name: "word2" },
        { id: 5, name: "goodbye2" }
      ],
      block: "none"
    };
  },
  methods: {
    add() {
      var a = document.querySelectorAll(".asideleft li");
      console.log(a.length);
      var c = document.querySelectorAll(".asideright li");
      for (var i = 0; i < a.length; i++) {
        a[i].onmouseenter = function() {
          for (var j = 0; j < c.length; j++) {
            c[j].style.display = "none";
          }
         c[i].style.display = "block";
        };
      }
    },
    leave() {
      var cd = document.querySelectorAll(".aside");
      cd.onmouseleave = function() {
        cd.style.display = "none";
        console.log("5");
      };
    }
  }
};
</script>
<style lang="less" >
.swiperlist3 {
  display: none;
}
</style>

