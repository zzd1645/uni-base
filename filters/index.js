
//时间格式化
const date = (time) => {
	if (!time) {
		return "";
	}
	let date = new Date(parseInt(time));
	let Y = date.getFullYear();
	let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
	let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	let h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	let m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

	return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
}
//分转元
const price = (value) => {
	let num = Number(value);
	if (!num) { //等于0
		return num + '.00';
	} else { //不等于0
		num = Math.round((num) * 100) / 10000;
		num = num.toFixed(2);
		return num;
	}
}

export default {
	date,
	price
}
