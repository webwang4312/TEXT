<template>
  <div class="about">
    <Button @click="add()">Default</Button>
    <br>
    <Button type="primary">Primary</Button>
    <br>
    <input type="text" v-model="msg"/>
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    add() {
      alert("d");
    }
  }
};
</script>

