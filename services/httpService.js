import {
	isDebug,
	serverUrl,
	timeout
} from "./constants.js";
class HttpService {
	constructor() {
		this.serverUrl = serverUrl;
		this.isDebug = isDebug;
		this.timeout = timeout;
		this.header = {
			"content-type": "application/json; charset=UTF-8"
		};
		this.modalSwitch = false;
	}
	request(url, type, params) {
		const realUrl = this.serverUrl + url;
		return new Promise((resolve, reject) => {
			uni.request({
				url: realUrl,
				method: type,
				header: this.header,
				timeout:this.timeout,
				data: params,
				success: (res) => {
					if (this.isDebug) {
						console.log(realUrl, res)
					}
					if (res.statusCode === 200) {
						this.successHandler(resolve, res.data)
					} else {
						this.errorHandler(reject, res.statusCode)
					}
				},
				fail: (err) => {
					if (this.isDebug) {
						console.log(err)
					}
					this.errorHandler(reject, -1)
				}
			})
		})
	}
	upload(url, params) {
		const realUrl = this.serverUrl + url;
		const formData = new FormData();
		for (let key in params) {
			formData.append(key, params[key]);
		}
		return new Promise((resole, reject) => {
			uni.uploadFile({
				url: realUrl,
				formData: formData,
				success: (res) => {
					if (this.isDebug) {
						console.log(realUrl, res)
					}
					if (res.statusCode === 200) {
						this.successHandler(resolve, reject, res.data)
					} else {
						this.errorHandler(reject, res.statusCode)
					}
				},
				fail: (err) => {
					if (this.isDebug) {
						console.log(err)
					}
					this.errorHandler(reject, -1)
				}
			})
		})
	}
	successHandler(resolve, reject, data) {
		//data.code 中包含业务错误 和鉴权错误信息 需要处理
		resolve(data)
	}
	errorHandler(reject, code) {
		let errMsg;
		switch (code) {
			case 500:
				errMsg = "服务器发生错误";
				break;
			case 503:
				errMsg = "服务器停机维护";
				break;
			case 404:
				errMsg = "请求资源不存在";
				break;
			case 403:
				errMsg = "服务器拒绝访问";
				break;
			default:
				errMsg = "网络错误";
		}
		if (!this.modalSwitch) {
			this.modalSwitch = true;
			uni.showModal({
				title: "提示",
				content: errMsg,
				complete: () => {
					this.modalSwitch = false;
				}
			})
		}


		//...显示toast
		resject(code)
	}
}

export default new HttpService();
