<script>
	import {mapMutations} from 'vuex'
	export default {
		onLaunch: function() {
			// console.log('App Lauch')
			uni.getStoreage({
				key: 'userInfo',
				success: (res) =>{
					//信息储存到vuex
					this.storeLogin(JSON.parse(res.data))
				}
			})
		},
		onShow: function() {
			// console.log('App Show')
			let adShowTime = 10*60*1000;
			let nowTime = (new Date()).getTime();
			let leaveTime = this.$store.state.leaveTime;
			
			if((nowTime - leaveTime) >= adShowTime){
				uni.navigateTo({
					url: '/pages/ad/index'
				})
			}
		},
		onHide: function() {
			// console.log('App Hide')
			this.$store.commit('storeLeaveTime')
		},
		methods: {
			...mapMutations(['storeLogin','storeLeaveTime'])
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./common/css/common.scss";
	@import "./common/css/iconfont.css";
</style>

