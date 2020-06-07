<template>
  <div class="home">
  
    <!-- home2开始 -->
    <div class="home2">
      <!-- 变电房数量 -->
      <div style="width:385px">
        <Card :bordered="true">
          <p slot="title">
          <span class="iconfont iconshuliangtongji" style="color:red"></span>
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
            <span class="iconfont iconshuliangtongji" style="color:red"></span>
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
            <span class="iconfont iconshuliangtongji" style="color:red"></span>
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
  <div>
<textComponent></textComponent>
  </div>
 
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
  top: 0px;
  right: -181px;
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
// 导入柱形图
import testComponent from "../zhuxingtu";
// 导入仪表盘
import textComponent from "../yibiaopan";

export default {
  name: "student",
  components: {
    testComponent,
  textComponent},
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
};
</script>
