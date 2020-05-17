function shangcheng() {
	// 封装getElementById()
	function byid(id) {
		return typeof (id) === "string" ? document.getElementById(id) : id;
	}
	/*封装通用事件绑定
	1.dom元素
	2.事件名
	3.事件处理程序*/
	function addHandler(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, true);
		}
		else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		}
		else {
			element["on" + type] = null;
		}
	}

	var daohang = byid("daohang");
	var hcotent = byid("hcotent");
	var ula = byid("ula");
	var flag = true;
	addHandler(daohang, 'click', function () {
		if (flag) {
			ula.style.display = "block";
			hcotent.style.backgroundColor = "rgba(25,25,25,0.2)";
			flag = false;
		}
		else {
			ula.style.display = "none";
			hcotent.style.backgroundColor = "";
			flag = true;
		}
	})

	hcotent.onmouseleave = function () {
		hcotent.style.backgroundColor = "";
		ula.style.display = "none";
		flag = true;
	}

}
export {
	shangcheng
}