function lunbotu(){
	var index=0;
	var	btr=byid("btr");
	var btl=byid("btl");
	var plen=byid("main").getElementsByTagName("div");//图片下获取div
	var size=plen.length;//图片的长度
	var dots=byid("dots").getElementsByTagName("span");
	var size2=dots.length;
	var header=document.getElementById("header");
	var main=document.getElementById("main");
	var timer=null;
	var sidel=byid("sidel");
	var sider=byid("sider");
	var sidell=sidel.getElementsByClassName("side-content-");
	var siderr=sider.getElementsByClassName("side-rightcontent-");
	var lenr=siderr.length;
	var lenl=sidell.length;
	// console.log(size);3
	// console.log(size);3
	// console.log(lenl);
	// console.log(lenr);
// 封装getElementById()
function byid(id){
return typeof(id)==="string"?document.getElementById(id):id;
}

/*封装通用事件绑定
1.dom元素
2.事件名
3.事件处理程序*/
function addHandler(element,type,handler){
if(element.addEventListener){
	element.addEventListener(type,handler,true);
}
else if(element.attachEvent){
	element.attachEvent("on"+type,handler);
}
else{
	element["on"+type]=null;
}
}

// addHandler(sidel[m],"mouseover",function(){
// 轮播图左右切换及小圆点变化
function zhuanbian(){
for(var i=0;i<size;i++){
	plen[i].style.display="none";
	dots[i].className="";
}
plen[index].style.display="block";
dots[index].className="xiaodian";
}

addHandler(btr,"click",function(){
index++;
if(index>=size){
	index=0;
}
zhuanbian();
})

addHandler(btl,"click",function(){
index--;
if(index<0){
	index=size-1;
}
zhuanbian();
})
// 小圆点点击变化
for(var d=0;d<size;d++){
dots[d].setAttribute("data-id",d);
addHandler(dots[d],"click",function(){
	index=this.getAttribute("data-id");
	zhuanbian();
// element.setAttribute(attributename,attributevalue)
})
}
// 自动轮播
function startAutoplay(){
timer=setInterval(function(){
	index++;
	if(index>=size){
		index=0;
	}
	zhuanbian();
},3000)
}
function stopAutoplay(){
if(timer){
	clearInterval(timer);
}
}
startAutoplay()
// 轮播图播放
addHandler(header,"mouseout",startAutoplay);
addHandler(header,"mouseover",stopAutoplay);


// alert(len);
// 鼠标滑过主菜单
for(var m=0,idx;m<lenl;m++){
// console.log(m)
sidell[m].setAttribute("date-index",m);
addHandler(sidell[m],"mouseover",function(){
	idx=this.getAttribute("date-index");
	sider.className="side-rightcontent";
	for(var j=0;j<lenr;j++){
		siderr[j].style.display="none";
		sidell[j].style.background="none";
	}
	siderr[idx].style.display="block";
	sidell[idx].style.background="rgba(0,0,0,0.1)";
})
}

addHandler(sidel,"mouseover",function(){
sider.className="side-rightcontent";
})
addHandler(sidell,"mouseout",function(){
sider.className="side-rightcontent ";

})
addHandler(header,"mouseout",function(){
sider.className="side-rightcontent  hidden";
})
addHandler(sider,"mouseout",function(){
sider.className="side-rightcontent  hidden";
})
addHandler(sider,"mouseover",function(){
sider.className="side-rightcontent ";
})

}
export{
	lunbotu
}