//@静态文件链接配置文件
var ljdz = "http://lx8d-10005973.file.myqcloud.com/"
//@以上为设置地址，外部URL绝对地址后面必须有"/"站内链接留空即可。
document.getElementById("sy").href="index.html#";

document.getElementById("cqdy").href="index.html?pq=qt&lists=1.xml,2.xml&id=1";
document.getElementById("xdsj").href="index.html?pq=qt&lists=1.xml&id=2";
document.getElementById("yszh").href="index.html?pq=2q&lists=dy/dy&id=0&skins="+ljdz+"gq/dy.swf";
document.getElementById("dszb").href="index.html?pq=qt&lists=1.xml,2.xml,3.xml,4.xml,5.xml,6.xml,7.xml,8.xml,9.xml,10.xml&id=4";
document.getElementById("zyyl").href="index.html?pq=qt&lists=1.xml,http://api.pronvod.com/zy/sohu.php&id=9";
document.getElementById("gxsp").href="index.html?pq=qt&lists=1.xml&id=3";
document.getElementById("rwsp").href="index.html?pq=qt&lists=1.xml,http://api.pronvod.com/mv/youku.php&id=5";
document.getElementById("yxzb").href="index.html?pq=2q&lists=zy/youxi&id=0&skins="+ljdz+"gq/dy.swf";
//@以上为页面导航栏链接地址。参数排序为pg、lists、id（此三个必有，id参数为tv6080.com设，其他站为0，为了模式改变后导航栏显示）、skins（外部配置本站皮肤、省略则显示原站皮肤）
document.getElementById("ico").href= ljdz+"gq/lx8d.ico";
document.getElementById("buju").href= ljdz+"gq/buju.css";
document.getElementById("pubuliu").href= ljdz+"gq/pubuliu.css";
document.getElementById("head").innerHTML = '<div class="head_inner" style="background-image: url('+ljdz+'gq/logo.jpg);width:960px;height:150px;"></div>';
document.getElementById("daohangpanduan").src= ljdz+"gq/daohangpanduan.js";
document.write("<scr"+"ipt type=\"text/javascript\" src=\""+ljdz+"gq/tupianjiazai.js\"></sc"+"ript>");
document.getElementById("duoshuopinglun").src= ljdz+"gq/duoshuopinglun.js";
document.write("<scr"+"ipt type=\"text/javascript\" src=\""+ljdz+"gq/baidutuisong.js\"></sc"+"ript>");
document.write("<scr"+"ipt type=\"text/javascript\" src=\""+ljdz+"gq/players.js\"></sc"+"ript>");
document.write("<scr"+"ipt type=\"text/javascript\" src=\""+ljdz+"gq/pubuliu.js\"></sc"+"ript>");
 function QueryString(){
	var name,value,i;
	var str=location.href;
	var num=str.indexOf("?");
	str=str.substr(num+1);
	var arrtmp=str.split("&");
	for(i=0;i<arrtmp.length;i++){
		num=arrtmp[i].indexOf("=");
		if(num>0){
			name=arrtmp[i].substring(0,num);
			value=arrtmp[i].substr(num+1);
			this[name]=value
		}
	}
};
var Request=new QueryString();
pq=Request["pq"];
lists=Request["lists"];
id=Request["id"];
skins=Request["skins"];
bf=Request["bf"];
no=Request["no"];
if(!pq&&!lists&&!id&&!skins&&!bf&&!no){
document.getElementById("home2").innerHTML="";
document.getElementById("jiazai").innerHTML="";
    }
else if(no=="no"){
document.getElementById("bfck").innerHTML = '<div id="player" style="background:#000000;width:100%;height:100%;"></div>'
document.getElementById("tou").innerHTML="";
document.getElementById("home1").innerHTML="";
document.getElementById("home2").innerHTML="";
	}
else{
document.getElementById("bfym").innerHTML = '<div id="player" style="background-image: url('+ljdz+'gq/bjlogo.jpg);width:960px;height:500px;"></div><div id="player2"></div>'
document.getElementById("home1").innerHTML="";
document.getElementById("jiazai").innerHTML="";	
}
document.getElementById("yemian").style.display = "";