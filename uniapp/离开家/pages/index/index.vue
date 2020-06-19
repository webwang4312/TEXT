<template>
	<view>
		<text class="iconfont icon-shouye"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: []
			}
		},
		created() {
			// uni.request({
			//     url: 'http://152.136.185.210:8000/api/n3/home/multidata', //仅为示例，并非真实接口地址。
			//     data: {
			//         text: 'uni.request'
			//     },
			//     header: {
			//         'custom-header': 'hello' //自定义请求头信息
			//     },
			//     success: (res) => {
			//         console.log(res);
			//     }
			// });
			this.getswiper()
		},
		// 下拉刷新
		// onPullDownRefresh() {
		// 	console.log('refresh')
		// 	setTimeout(function() {
		// 		uni.stopPullDownRefresh()
		// 	}, 5000);
		// },
		methods: {
			async getswiper() {
				const res = await this.$myRequest({
					url: '/home/multidata',

				})
				console.log(res)
			}
			// this.swiper = res.data.data.banner.list;
			// console.log(this.swiper)	
		}
	}
</script>

<style>

</style>
