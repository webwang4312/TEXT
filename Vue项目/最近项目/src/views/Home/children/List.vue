<template>
  <div id="list">
    <ul>
      <li v-for="item in listrecommend" :key="item.id">
        <p :class="item.yangshi"></p>
        <br />
        <label>{{item.name}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      listrecommend: [
        { id: "0", yangshi: "el-icon-s-goods", name: "美食1" },
        { id: "1", yangshi: "el-icon-video-camera-solid", name: "美景" },
        { id: "2", yangshi: "el-icon-s-promotion", name: "美塞" },
        { id: "4", yangshi: "el-icon-s-goods", name: "美食2" },
        { id: "5", yangshi: "el-icon-video-camera-solid", name: "美景2" },
        { id: "6", yangshi: "el-icon-s-promotion", name: "美塞2" },
        { id: "7", yangshi: "el-icon-video-camera-solid", name: "美景3" },
        { id: "8", yangshi: "el-icon-s-promotion", name: "美塞3" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
#list ul {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  li {
    width: 20%;
    height: 37px;
    font-size: 30px;
    color: blue;
    text-align: center;
    background-color: pink;
    margin-left: 4.5%;
    margin-bottom: 10px;
    margin-top: 20px;
    border-radius: 20px;
    label {
      font-size: 20px;
      color: red;
    }
  }
}
</style>