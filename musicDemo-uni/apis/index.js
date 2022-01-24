import request from "@/utils/request/index.js"

// 获取轮播图
export function apiGetBanner(data) {
	return request.request({
		url: '/banner',
		method: 'GET',
		data,
		authType: 'None'
	})
}

// 获取推荐歌单
export function apiGetRecommendSongs(data) {
	return request.request({
		url: '/personalized',
		method: 'GET',
		data,
		authType: 'none'
	})
}

// 获取新碟 新歌 模拟数据了
export function apiGetLatestAlbum(data) {
	return request.request({
		url: '/album/newest',
		method: 'GET',
		data,
		authType: 'None'
	})
}

// 获取精选视频
export function apiGetRelatedVideo(data) {
	return request.request({
		url: '/related/allVideo',
		method: 'GET',
		data,
		authType: 'None'
	})
}
