<template>
	<view class="mine">
		<scroll-view class="nav-list scroll-view" scroll-x="true">
			<view class="item" v-for="(item,index) in navList" :key="index">
				<image class="img" :src="'/static/image/mine/'+item.imd+'.png'" mode=""></image>
				<view class="desc">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<uni-list>
			<uni-list-item title="本地音乐" thumb="/static/image/mine/m_15.png"></uni-list-item>
			<uni-list-item title="最近播放" thumb="/static/image/mine/m_17.png"></uni-list-item>
			<uni-list-item title="我的电台" thumb="/static/image/mine/m_19.png"></uni-list-item>
			<uni-list-item title="我的收藏" thumb="/static/image/mine/m_21.png"></uni-list-item>
		</uni-list>
		<song-list title="推荐歌单" link="" :list="recommendSongs">
			
		</song-list>
	</view>
</template>

<script>
	import {apiGetRecommendSongs} from '@/apis/index.js';
	import uniList from "@/uni_modules/uni-list/components/uni-list/uni-list.vue"
	import uniListItem from "@/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"
	import songList from "@/components/songList.vue"
	
	export default {
		components: {
			uniList,
			uniListItem,
			songList
		},
		data() {
			return {
				navList: [{
						name: '私人FM',
						imd: 1
					},
					{
						name: '最嗨电音',
						imd: 2
					},
					{
						name: 'ACG专区',
						imd: 3
					},
					{
						name: 'Sati空间',
						imd: 4
					},
					{
						name: '私藏推荐',
						imd: 5
					},
					{
						name: '因乐交友',
						imd: 6
					},
					{
						name: '亲子频道',
						imd: 7
					},
					{
						name: '古典专区',
						imd: 8
					}
				],
				recommendSongs: [], //推荐歌单
			}
		},
			
		onLoad() {
			this.getRecommendSongs();
		},
		
		methods: {
			getRecommendSongs(){
				const params = {
					limit: 6
				}
				apiGetRecommendSongs(params).then(res => {
					
					//格式化播放量数据
					const formatCount = data=>{
						let tmp = data;
						if (data > 10000) {
							tmp = (parseInt(data/10000) + '万');
						}
						return tmp
					}
					
					this.recommendSongs = res.result;
					//格式化
					this.recommendSongs.forEach(item => {
						item.playCount = formatCount(item.playCount);
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.top-img {
		width: 50rpx;
		height: 40rpx;

		&.left {
			margin-left: 10rpx;
		}
	}

	.page-content {
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 0px;
	}

	.nav-list {
		height: 220rpx;
		padding-top: 70rpx;
		padding-bottom: 14rpx;
		white-space: nowrap;
		text-align: center;
		line-height: 76rpx;
		color: #666;
		border-bottom: 1rpx solid #e6e6e6;
		font-size: 24rpx;
		background: #fff;

		.item {
			position: relative;
			display: inline-block;
			height: 210rpx;
			width: 166rpx;

		}

		.img {
			display: block;
			width: 70rpx;
			height: 70rpx;
			margin: 0 auto;
			border-radius: 50%;
		}
	}

	.line-item {
		.icon {
			float: left;
			width: 70rpx;
			height: 70rpx;
			margin-top: 24rpx;
			margin-right: 36rpx;
		}

		.lab {
			font-size: 32rpx;
			color: #444;
		}

		.con {
			position: relative;
			height: 100rpx;
			overflow: hidden;

			&:before {
				position: absolute;
				content: "";
				right: 0;
				bottom: 0;
				width: 100%;
				border-bottom: 1rpx solid #e6e6e6;
			}
		}
	}

	.recommend-list {
		border-top: 16rpx solid #f8f8f8;
	}
</style>