<template>
  <div id="tables">
    <div v-if="list.length">
      <table cellspacing="0">
        <thead>
          <tr style="font-size:18px">
            <td>
              <strong>名称</strong>
            </td>
            <td>
              <strong>价格</strong>
            </td>
            <td>
              <strong>删除商品</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in list" :key="idx">
            <td style="color:red">{{item.title}}</td>
            <td class="flextd">
              <button @click="jian(idx)" :disabled="item.is_red<=0">-</button>
              <span style="color:blue">{{item.maitKey | guolvqi}}</span>
              <button @click="jia(idx)">+</button>
            </td>
            <td>
              <button @click="remove(idx)">删除</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">总价:{{ showprice | guolvqi}}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div v-else>
      <p>请购买商品</p>
    </div>
    
  </div>
</template>

<script>
// 导入home.js数据端请求，请求数据
import { getCategory } from "network/category.js";

export default {
  name: "tables",
  components: {},
  data() {
    return {
      list: []
    };
  },
  // 计算属性
  computed: {
    showprice() {
      let price = 0;
      for (let i = 0; i < this.list.length; i++) {
        price += parseInt(this.list[i].maitKey);
      }
      return price;
    }
  },
  filters: {
    guolvqi(maitKey) {
      return "￥" + parseInt(maitKey).toFixed(2);
    }
  },
  mounted() {},
  // 创建后加载请求
  created() {
    // 1.请求多个数据
    this.getMultiData();
  },
  methods: {
    getMultiData() {
      getCategory().then(res => {
        //console.log(res.data.category.list);
        let i = null;
        for (i of res.data.category.list) {
          this.list.push(i);
        }
      });
    },
    remove(idx) {
      this.list.splice(idx, 1);
    },
    jia(idx) {
      this.list[idx].maitKey++;
    },
    jian(idx) {
      this.list[idx].maitKey--;
    }
  }
};
</script>

<style scoped lang='less'>
table {
  width: 100%;
  text-align: center;
  background-color: rgba(255, 111, 0, 0.3);
  td {
    border: 1px solid black;
  }

  button:first-child {
    float: left;
    width: 4rem;
    background-color: green;
    color: snow;
  }
  button:last-child {
    float: right;
    width: 4rem;
    background-color: green;
    color: snow;
  }
  .fixedtd {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
  }
}
</style>
