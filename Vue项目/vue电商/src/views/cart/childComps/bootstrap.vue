<template>
  <div id="bootstrap">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
              <b-navbar-brand href="#">bootstrap</b-navbar-brand>

              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#">Link</b-nav-item>
                  <b-nav-item href="#">Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                  <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
                  </b-nav-form>

                  <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                  </b-nav-item-dropdown>

                  <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                      <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                  </b-nav-item-dropdown>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" style="background:gray">
          <div>
            <b-dropdown text="分级菜单" block variant="primary" class="m-2">
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>
          </div>
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </b-col>
        <b-col>
          <div>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                caption="First slide"
                img-src="https://picsum.photos/1024/480/?image=54"
              >
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt</p>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
      <b-row>
           <b-col cols="12" style="background:blue;color:snow">
             <p style="font-size:1rem">55555555555555</p> 
           </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "bootstrap",
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    handleNodeClick(data) {
      //console.log(data);
    }
  }
};
</script>

<style scoped lang='less'>
.col {
  padding: 0;
}
.el-tree {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
