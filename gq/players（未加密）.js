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
}
else{
	var dz="";
	var lb="";
	if(pq=="1q"){
		dz="http://play.u9yy.com/cmp/cmp_local.swf?url=config_u9yy.php";
		lb="/list/dy/"+lists+".xml"
	}
	else if(pq=="qt"){
		dz="http://tv6080.com/dy"+id+"/1.swf?url=config.xml";
		lb="http://tv6080.com/dy"+id+"/"+lists
	}
	else{
		dz=pq;
		lb=lists
	};
	var url=dz+"&name="+encodeURIComponent("高清新片发布站")+"&description="+encodeURIComponent("WWW.XINPIAN.GQ")+"&announce_content="+encodeURIComponent("重要声明：所有影片均来源于其他影视站点，本站不制作和发布电影片源，不对内容的合法性承担任何责任！")+"&video_image=0&logo=0&ads=0&link=http://www.xinpian.gq&lists="+lb+"&.swf";
	if(bf=="ck"){
		document.getElementById("player").innerHTML='<iframe src='+url+' width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>';
		document.getElementById("player2").innerHTML='<font color=\"red\" size=\"2\">当前模式：[窗口播放]/支持所有浏览器，支持窗口内最大化，不支持全屏！大窗口播放请选择<a href=\"javascript:window.open(\'index.html?pq='+pq+'&id='+id+'&lists='+lists+'&bf=ck&no=no\',\'\',\'fullscreen=yes\')\">[弹出本窗口播放]</a>或<a href=?pq='+pq+'&id='+id+'&lists='+lists+'>[更改为页面播放]</a></font>';
	}
	else{
		(function(a){
			typeof a.CMP=="undefined"&&(a.CMP=function(){
				var b=/msie/.test(navigator.userAgent.toLowerCase()),c=function(a,b){
					if(b&&typeof b=="object")for(var c in b)a[c]=b[c];
					return a
				}
				,d=function(a,d,e,f,g,h,i){
					i=c({
						width:d,height:e,id:a
					}
					,i),h=c({
						allowfullscreen:"true",allowscriptaccess:"always"
					}
					,h);
					var j,k,l=[];
					if(g){
						j=g;
						if(typeof g=="object"){
							for(var m in g)l.push(m+"="+encodeURIComponent(g[m]));
							j=l.join("&")
						};
						h.flashvars=j
					};
					k="<object ",k+=b?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ':'type="application/x-shockwave-flash" data="'+f+'" ';
					for(var m in i)k+=m+'="'+i[m]+'" ';
					k+=b?'><param name="movie" value="'+f+'" />':">";
					for(m in h)k+='<param name="'+m+'" value="'+h[m]+'" />';
					return k+="</object>",k
				}
				,e=function(c){
					var d=document.getElementById(c);
					if(!d||d.nodeName.toLowerCase()!="object")d=b?a[c]:document[c];
					return d
				}
				,f=function(a){
					if(a){
						for(var b in a)typeof a[b]=="function"&&(a[b]=null);
						a.parentNode.removeChild(a)
					}
				}
				,g=function(a){
					if(a){
						var c=typeof a=="string"?e(a):a;
						if(c&&c.nodeName.toLowerCase()=="object")return b?(c.style.display="none",function(){
							c.readyState==4?f(c):setTimeout(arguments.callee,15)
						}()):c.parentNode.removeChild(c),!0
					};
					return!1
				};
				return{
					create:function(){
						return d.apply(this,arguments)
					}
					,write:function(){
						var a=d.apply(this,arguments);
						return document.write(a),a
					}
					,get:function(a){
						return e(a)
					}
					,remove:function(a){
						return g(a)
					}
				}
			}());
			var b=function(b){
				b=b||a.event;
				var c=b.target||b.srcElement;
				if(c&&typeof c.cmp_version=="function"){
					var d=c.skin("list.tree","maxVerticalScrollPosition");
					if(d>0)return c.focus(),b.preventDefault&&b.preventDefault(),!1
				}
			};
			a.addEventListener&&a.addEventListener("DOMMouseScroll",b,!1),a.onmousewheel=document.onmousewheel=b
		})(window);
		var cmpo;
		function cmp_loaded(key){
			cmpo=CMP.get("cmp");
			if(cmpo){
				document.title=cmpo.config("name");
				cmpo.addEventListener("model_load","cmp_model_load")
			}
		};
		function cmp_model_load(data){
			document.title="【"+ cmpo.item("label")+ "】"+"-高清新片发布站_WWW.XINPIAN.GQ"
		};
		var flashvars={
			api:"cmp_loaded"
		};
		var htm=CMP.create("cmp","100%","100%",url,flashvars, {
			wmode : "transparent"
		});
		document.getElementById("player").innerHTML=htm;
		document.getElementById("player2").innerHTML='<font color=\"red\" size=\"2\">当前模式：[页面播放]/支持IE或360浏览器，支持全屏，支持窗口内最大化！不能加载影片请<a href=\"javascript:window.open(\'index.html?pq='+pq+'&id='+id+'&lists='+lists+'&bf=ck&no=no\',\'\',\'fullscreen=yes\')\">[弹出本窗口播放]</a>或<a href=?pq='+pq+'&id='+id+'&lists='+lists+'&bf=ck>[更改为窗口播放]</a></font>';
	}
}