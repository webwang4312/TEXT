<template>
  <div class="home">
    <!-- home2开始 -->
    <div class="home2">
      <!-- 变电房数量 -->
      <div style="width:385px">
        <Card :bordered="true">
          <p slot="title">
            <svg
              t="1589251032082"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2609"
              width="32"
              height="32"
            >
              <path
                d="M256.25 880.89a26.588 26.588 0 0 1-26.557-26.562v-269.89H174.52a26.69 26.69 0 0 1-8.187-1.296c-5.77-1.868-20.51-8.821-32.455-32.814-11.464-23.004-5.852-44.221 2.437-55.398a26.15 26.15 0 0 1 2.555-2.965L493.71 137.12a26.409 26.409 0 0 1 18.78-7.778c7.081 0 13.737 2.755 18.75 7.747L632.32 237.793a26.593 26.593 0 0 1 0.067 37.56 26.404 26.404 0 0 1-18.816 7.814 26.399 26.399 0 0 1-18.75-7.747l-82.299-81.992-337.879 337.88h81.608a26.593 26.593 0 0 1 26.562 26.562v269.89h460.068V557.87a26.593 26.593 0 0 1 26.563-26.562h68.47L712.888 406.764a26.726 26.726 0 0 1-7.813-18.816V279.45c0-14.644 11.914-26.563 26.563-26.563S758.2 264.801 758.2 279.45v97.474l126.47 125.978a26.58 26.58 0 0 1 4.029 5.15c2.422 4.04 13.962 25.257 3.799 47.647-10.22 22.544-33.925 27.587-38.574 28.365a26.557 26.557 0 0 1-4.414 0.369h-53.504v269.89a26.588 26.588 0 0 1-26.547 26.568H256.251z"
                fill="#d81e06"
                p-id="2610"
              />
              <path
                d="M582.39 871.552a26.593 26.593 0 0 1-26.568-26.563V669.015h-87.654v175.974c-0.185 14.388-12.099 26.148-26.558 26.148-14.858-0.184-26.378-11.704-26.562-26.224V667.31c0-28.354 23.065-51.425 51.42-51.425h91.044c28.36 0 51.43 23.07 51.43 51.425v177.674a26.593 26.593 0 0 1-26.552 26.568z"
                fill="#d81e06"
                p-id="2611"
              />
            </svg>
            <span style="font-size:18px">变电房数量</span>
            <Button type="success" ghost>
              {{
              data.length
              }}
            </Button>
          </p>
          <br />
          <Table :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="name">
              <Input type="text" v-model="editName" v-if="editIndex === index" />
              <span v-else>{{ row.name }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="status">
              <Input type="text" v-model="editStatus" v-if="editIndex === index" />
              <span v-if="row.status==0">
                <span class="blue"></span>
                <sapn>运行中</sapn>
              </span>
              <span v-if="row.status==1">
                <span class="green"></span>
                <sapn>已上线</sapn>
              </span>
              <span v-if="row.status==2">
                <span class="red"></span>
                <span>异常</span>
              </span>
            </template>

            <template slot-scope="{ row, index }" slot="dom">
              <div v-if="editIndex === index">
                <Button @click="handleSave(index)">保存</Button>
                <Button @click="editIndex = -1">取消</Button>
              </div>
              <div v-else>
                <Button @click="handleEdit(row, index)" style="color:blue">维护</Button>
              </div>
            </template>
          </Table>
        </Card>
      </div>
      <!-- MCC段数 -->
      <div style="width:385px">
        <Card :bordered="true">
          <p slot="title">
            <svg
              t="1589251121820"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3643"
              width="32"
              height="32"
            >
              <path
                d="M462.35151467 114.8121216a446.83636373 446.83636373 0 1 0 446.83636373 446.83636373h-446.83636373V114.8121216z m99.29697066-99.2969696a446.83636373 446.83636373 0 0 1 446.83636267 446.83636267h-446.83636267V15.515152z"
                p-id="3644"
                fill="#d81e06"
              />
            </svg>
            <span style="font-size:18px">MCC段数</span>
            <Button type="success" ghost>
              {{
              MCC.length
              }}
            </Button>
          </p>
          <br />
          <Table :columns="columns" :data="MCC">
            <template slot-scope="{ row, index }" slot="name">
              <Input type="text" v-model="editName" v-if="editIndex === index" />
              <span v-else>{{ row.name }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="status">
              <Input type="text" v-model="editStatus" v-if="editIndex === index" />
              <span v-if="row.status==0">
                <span class="blue"></span>
                <sapn>运行中</sapn>
              </span>
              <span v-if="row.status==1">
                <span class="green"></span>
                <sapn>已上线</sapn>
              </span>
              <span v-if="row.status==2">
                <span class="red"></span>
                <span>异常</span>
              </span>
            </template>

            <template slot-scope="{ row, index }" slot="dom">
              <div v-if="editIndex === index">
                <Button @click="handleSave(index)">保存</Button>
                <Button @click="editIndex = -1">取消</Button>
              </div>
              <div v-else>
                <Button @click="handleEdit(row, index)" style="color:blue">维护</Button>
              </div>
            </template>
          </Table>
        </Card>
      </div>
      <!-- 回路资产数量 -->
      <div style="width:385px">
        <Card :bordered="true">
          <p slot="title">
            <svg
              t="1589251170493"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5239"
              width="32"
              height="32"
            >
              <path
                d="M896 170.666667c0-70.4-172.8-128-384-128S128 100.266667 128 170.666667l0 170.666667c0 14.933333 8.533333 29.866667 21.333333 42.666667-14.933333 12.8-21.333333 27.733333-21.333333 42.666667l0 170.666667c0 14.933333 8.533333 29.866667 21.333333 42.666667-14.933333 12.8-21.333333 27.733333-21.333333 42.666667l0 170.666667c0 70.4 172.8 128 384 128s384-57.6 384-128l0-170.666667c0-14.933333-8.533333-29.866667-21.333333-42.666667 14.933333-12.8 21.333333-27.733333 21.333333-42.666667l0-170.666667c0-14.933333-8.533333-29.866667-21.333333-42.666667 14.933333-12.8 21.333333-27.733333 21.333333-42.666667L896 170.666667zM853.333333 795.733333 853.333333 853.333333c0 46.933333-153.6 85.333333-341.333333 85.333333S170.666667 900.266667 170.666667 853.333333l0-57.6 0-53.333333c64 40.533333 192 70.4 341.333333 70.4 149.333333 0 277.333333-27.733333 341.333333-70.4L853.333333 795.733333zM512 768c-187.733333 0-341.333333-38.4-341.333333-85.333333 0-6.4 4.266667-14.933333 10.666667-21.333333 66.133333 38.4 189.866667 64 330.666667 64s264.533333-25.6 330.666667-64c6.4 6.4 10.666667 12.8 10.666667 21.333333C853.333333 729.6 699.733333 768 512 768zM853.333333 539.733333 853.333333 597.333333c0 46.933333-153.6 85.333333-341.333333 85.333333S170.666667 644.266667 170.666667 597.333333l0-57.6 0-53.333333c64 40.533333 192 70.4 341.333333 70.4 149.333333 0 277.333333-27.733333 341.333333-70.4L853.333333 539.733333zM512 512c-187.733333 0-341.333333-38.4-341.333333-85.333333 0-6.4 4.266667-14.933333 10.666667-21.333333 66.133333 38.4 189.866667 64 330.666667 64s264.533333-25.6 330.666667-64c6.4 6.4 10.666667 12.8 10.666667 21.333333C853.333333 473.6 699.733333 512 512 512zM853.333333 283.733333 853.333333 341.333333c0 46.933333-153.6 85.333333-341.333333 85.333333S170.666667 388.266667 170.666667 341.333333l0-57.6 0-53.333333c64 40.533333 192 70.4 341.333333 70.4 149.333333 0 277.333333-27.733333 341.333333-70.4L853.333333 283.733333zM512 256c-187.733333 0-341.333333-38.4-341.333333-85.333333s153.6-85.333333 341.333333-85.333333 341.333333 38.4 341.333333 85.333333S699.733333 256 512 256z"
                p-id="5240"
                fill="#d81e06"
              />
            </svg>
            <span style="font-size:18px">回路资产数量</span>
            <Button type="success" ghost>
              {{
              tableData.length
              }}
            </Button>
          </p>
          <br />
          <Table :columns="columns" :data="tableData">
            <template slot-scope="{ row, index }" slot="name">
              <Input type="text" v-model="editName" v-if="editIndex === index" />
              <span v-else>{{ row.name }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="status">
              <Input type="text" v-model="editStatus" v-if="editIndex === index" />
              <span v-if="row.status==0">
                <span class="blue"></span>
                <sapn>运行中</sapn>
              </span>
              <span v-if="row.status==1">
                <span class="green"></span>
                <sapn>已上线</sapn>
              </span>
              <span v-if="row.status==2">
                <span class="red"></span>
                <span>异常</span>
              </span>
            </template>

            <template slot-scope="{ row, index }" slot="dom">
              <div v-if="editIndex === index">
                <Button @click="handleSave(index)">保存</Button>
                <Button @click="editIndex = -1">取消</Button>
              </div>
              <div v-else>
                <Button @click="handleEdit(row, index)" style="color:blue">维护</Button>
              </div>
            </template>
          </Table>
        </Card>
      </div>
    </div>
    <!-- home2结束 -->

    <!-- 柱形图 -->
    <testComponent></testComponent>
 
  </div>
</template>

<style scoped lang="less">
.home2 {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.ivu-card-head p,
.ivu-card-head-inner {
  height: 39px;
}
.ivu-btn-ghost.ivu-btn-success {
  height: 20px;
  text-align: center;
  position: relative;
  top: -3px;
  right: -165px;
}
.icon {
  position: relative;
  bottom: -5px;
}
.green {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: green;
}
.blue {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: blue;
}
.red {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: red;
}

</style>

<script>
import echarts from "echarts";
 import testComponent from './Zhuxingtu'
export default {
  components: {testComponent},
  data() {
    return {
      editIndex: -1,
      editName: "",
      editStatus: "",
      columns: [
        {
          title: "名称",
          slot: "name"
        },
        {
          title: "状态",
          slot: "status"
        },

        {
          title: "操作",
          slot: "dom"
        }
      ],
      // 变电房数量
      data: [
        {
          name: "变电房名称1",
          status: 0
        },
        {
          name: "变电房名称2",
          status: 2
        },
        {
          name: "变电房名称3",
          status: 1
        }
      ],
      // MCC段数
      MCC: [
        {
          name: "MCC名称1",
          status: 0
        },
        {
          name: "MCC名称2",
          status: 1
        },
        {
          name: "MCC名称3",
          status: 1
        }
      ],
      // 回路资产数量
      tableData: [
        {
          name: "回路资产名称1",
          status: 0
        },
        {
          name: "回路资产名称2",
          status: 1
        },
        {
          name: "回路资产名称3",
          status: 2
        }
      ]
    };
  },
  
  methods: {
    handleEdit(row, index) {
      this.editName = row.name;
      this.editStatus = row.status;
      this.editIndex = index;
    },
    handleSave(index) {
      this.data[index].name = this.editName;
      this.data[index].status = this.editStatus;
      this.editIndex = -1;
    },
    getBirthday(birthday) {
      const date = new Date(parseInt(birthday));
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month}-${day}`;
    }
   
  }
}
</script>
