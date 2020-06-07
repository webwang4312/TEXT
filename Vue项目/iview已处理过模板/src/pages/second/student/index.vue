<template>
  <div class="header">
    <Row type="flex">
      <Col span="6" order="1">1</Col>
      <Col span="6" order="2">2</Col>
      <Col span="6" order="3">3</Col>
      <Col span="6" order="4">4</Col>
      <Col span="6" order="5">5</Col>
      <Col span="6" order="6">6</Col>
      <Col span="6" order="7">7</Col>
      <Col span="6" order="8">8</Col>
    </Row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@width: 80rem;
@height: @width + 10px;
.header{
 width:@width;
  background-color: gray;
}
Col{
  width: 200px;
  height: 50px;
  background-color: aqua;
}
</style>