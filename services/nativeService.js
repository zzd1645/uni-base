import {
	timeout
} from './constants.js'
class NativeService {

	constructor() {
		this.hasToast = false;
		this.hasLoading = false;
	}
	//全局toast
	showToast(title) {
		if (this.hasToast) {
			return setTimeout(() => {
				this.showToast(title)
			}, 2000)
		}
		this.hasToast = true;
		uni.showToast({
			title: title,
			mask: true,
			duration: 2000,
			complete: () => {
				this.hasToast = false;
			}
		})
	}
	hideToast() {
		this.hasToast = false;
		uni.hideToast();
	}


	showLoading(title) {
		if (this.hasLoading) {
			return
		}
		this.hasLoading = true;
		uni.showLoading({
			title: title,
			mask: true,
		})
		setTimeout(() => {
			this.hideLoading()
		}, timeout)

	}
	hideLoading() {
		uni.hideLoading();
		this.hasLoading = false;
	}

	getStorage(key) {
		const value = uni.getStorageSync(key);
		return value ? JSON.parse(value) : null;
	}
	setStorage(key, value) {
		uni.setStorageSync(key, JSON.stringify(value));
	}
	removeStorage(key) {
		uni.removeStorageSync(key)
	}
	clearStorage() {
		uni.clearStorageSync();
	}

}

export default new NativeService();
