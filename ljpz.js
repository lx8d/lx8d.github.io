//@静态文件链接配置文件
var ljdz = "http://lx8d-10005973.file.myqcloud.com/"
//@以上为设置地址，外部URL绝对地址后面必须有"/"站内链接留空即可。
document.getElementById("sy").href="index.html#";
document.getElementById("xpyk").href="index.html?pq=1q&lists=2016";
document.getElementById("cqdy").href="index.html?pq=qt&id=1&lists=1.xml,2.xml";
document.getElementById("xdsj").href="index.html?pq=qt&id=2&lists=1.xml";
document.getElementById("dszb").href="index.html?pq=qt&id=4&lists=1.xml,2.xml,3.xml,4.xml,5.xml,6.xml,7.xml,8.xml,9.xml,10.xml";
document.getElementById("zyyl").href="index.html?pq=qt&id=9&lists=1.xml,http://api.pronvod.com/zy/sohu.php";
document.getElementById("gxsp").href="index.html?pq=qt&id=3&lists=1.xml";
document.getElementById("rwsp").href="index.html?pq=qt&id=5&lists=1.xml,http://api.pronvod.com/mv/youku.php";
//@以上为页面导航栏链接地址。
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
id=Request["id"];
lists=Request["lists"];
bf=Request["bf"];
no=Request["no"];
if(!pq&&!id&&!lists&&!bf&&!no){
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