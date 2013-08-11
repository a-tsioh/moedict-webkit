!function(){var a,b,c,d,e,f,g,h,i,j,k;i=this,j=i.sax||require("sax"),g=i.glMatrix||require("./gl-matrix-min"),e=function(a,b,c){var d;return i.window?jQuery.get(a,b,"text").fail(c):(d=require("fs"),d.readFile(a,{encoding:"utf8"},function(a,d){return a?c(a):b(d)}))},c=function(a,b,c){var d;return i.window?jQuery.get(a,b,"json").fail(c):(d=require("fs"),d.readFile(a,{encoding:"utf8"},function(a,d){return a?c(a):b(JSON.parse(d))}))},h=function(a,b,c){var d,e,f,g,h,i,k;return g=[],e=[],k=[],d=void 0,i=void 0,h=!0,f=j.parser(h),f.onopentag=function(a){if(void 0!==d)switch(a.name){case"MoveTo":return d.push({type:"M",x:parseFloat(a.attributes.x),y:parseFloat(a.attributes.y)});case"LineTo":return d.push({type:"L",x:parseFloat(a.attributes.x),y:parseFloat(a.attributes.y)});case"CubicTo":return d.push({type:"C",begin:{x:parseFloat(a.attributes.x1),y:parseFloat(a.attributes.y1)},mid:{x:parseFloat(a.attributes.x2),y:parseFloat(a.attributes.y2)},end:{x:parseFloat(a.attributes.x3),y:parseFloat(a.attributes.y3)}});case"QuadTo":return d.push({type:"Q",begin:{x:parseFloat(a.attributes.x1),y:parseFloat(a.attributes.y1)},end:{x:parseFloat(a.attributes.x2),y:parseFloat(a.attributes.y2)}})}else if(void 0!==i)switch(a.name){case"MoveTo":return i.push({x:parseFloat(a.attributes.x),y:parseFloat(a.attributes.y),size:a.attributes.size?parseFloat(a.attributes.size):void 0})}else if("Outline"===a.name&&(d=[]),"Track"===a.name)return i=[]},f.onclosetag=function(a){return"Outline"===a&&(e.push(d),d=void 0),"Track"===a?(k.push(i),i=void 0):void 0},f.onend=function(){var a,c,f;for(a=c=0,f=e.length;f>c;a=++c)d=e[a],i=k[a],g.push({outline:d,track:i});return b(g)},f.onerror=function(a){return c(a)},f.write(a).close()},d=function(a,b,c){return e(a,function(a){return h(a,b,c)},c)},a=void 0,f=Array.prototype.forEach,k=function(a){var b,c,d;for(c=[];a.length;)/[\uD800-\uDBFF]/.test(a.substr(0,1))?(d=a.substr(0,2),b=1024*(d.charCodeAt(0)-55296)+d.charCodeAt(1)-56320+65536,c.push(b.toString(16)),a=a.substr(2)):(c.push(a.charCodeAt(0).toString(16)),a=a.substr(1));return c},function(){var b,e,f,h,i;return b={},h="json",e={xml:"./utf8/",json:"./json/"},f={xml:d,json:c},i=function(a,b,c){var d,e,f;return f=g.vec2.clone([b,c]),d=g.mat2d.clone(a),e=g.vec2.create(),g.vec2.transformMat2d(e,f,d),{x:e[0],y:e[1]}},a={source:function(a){return"json"===a||"xml"===a?h=a:void 0},transform:function(a,b){var c,d,e,f,g,h,j,k,l,m,n,o,p,q,r;for(g=[],k=0,n=a.length;n>k;k++){for(h=a[k],e={outline:[],track:[]},q=h.outline,l=0,o=q.length;o>l;l++)switch(c=q[l],c.type){case"M":f=i(b,c.x,c.y),e.outline.push({type:c.type,x:f.x,y:f.y});break;case"L":f=i(b,c.x,c.y),e.outline.push({type:c.type,x:f.x,y:f.y});break;case"C":d={type:c.type},f=i(b,c.begin.x,c.begin.y),d.begin={x:f.x,y:f.y},f=i(b,c.mid.x,c.mid.y),d.mid={x:f.x,y:f.y},f=i(b,c.end.x,c.end.y),d.end={x:f.x,y:f.y},e.outline.push(d);break;case"Q":d={type:c.type},f=i(b,c.begin.x,c.begin.y),d.begin={x:f.x,y:f.y},f=i(b,c.end.x,c.end.y),d.end={x:f.x,y:f.y},e.outline.push(d)}for(r=h.track,m=0,p=r.length;p>m;m++)j=r[m],f=i(b,j.x,j.y),e.track.push({x:f.x,y:f.y});g.push(e)}return g},get:function(a,c,d){return b[a]?"function"==typeof c?c(b[a]):void 0:f[h](e[h]+a+"."+h,function(d){return b[a]=d,"function"==typeof c?c(d):void 0},function(a){return"function"==typeof d?d(a):void 0})}}}(),i.window?(window.WordStroker||(window.WordStroker={}),window.WordStroker.utils={sortSurrogates:k,StrokeData:a,fetchStrokeXml:e,fetchStrokeJSON:c,fetchStrokeJSONFromXml:d}):(b={utils:{sortSurrogates:k,StrokeData:a,fetchStrokeXml:e,fetchStrokeJSON:c,fetchStrokeJSONFromXml:d}},module.exports=b)}.call(this),function(){$(function(){var a,b,c,d,e;return c=function(a){var b,c,d,e;for(c=[],d=0,e=a.length;e>d;d++)b=a[d],1===b.nodeType&&c.push(b);return c},a=function(a,b,c){var d,e,f,g,h,i;for(f=[],i=b.childNodes,g=0,h=i.length;h>g;g++)if(e=i[g],1===e.nodeType&&(d=e.attributes))switch(e.nodeName){case"MoveTo":f.push(["M",parseFloat(d.x.value),parseFloat(d.y.value)]);break;case"LineTo":f.push(["L",parseFloat(d.x.value),parseFloat(d.y.value)]);break;case"CubicTo":f.push(["C",parseFloat(d.x1.value),parseFloat(d.y1.value),parseFloat(d.x2.value),parseFloat(d.y2.value),parseFloat(d.x3.value),parseFloat(d.y3.value)]);break;case"QuadTo":f.push(["Q",parseFloat(d.x1.value),parseFloat(d.y1.value),parseFloat(d.x2.value),parseFloat(d.y2.value)])}return a.path(f).attr(c).transform("s0.2,0.2,0,0")},b=function(a,b){return $.get("utf8/"+a.toLowerCase()+".xml",b,"xml")},d=function(c,d){var e;return e=escape(d).replace(/%u/,""),b(e,function(b){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;for(f=430,j=Raphael(c,f,f),g=["M0,0 L0,"+f,"M"+f+",0 L"+f+","+f,"M0,0 L"+f+",0","M0,"+f+",0 L"+f+","+f,"M"+Math.round(f/3)+",0 L"+Math.round(f/3)+","+f,"M"+Math.round(2*(f/3))+",0 L"+Math.round(2*(f/3))+","+f,"M0,"+Math.round(f/3)+" L"+f+","+Math.round(f/3),"M0,"+Math.round(2*(f/3))+" L"+f+","+Math.round(2*(f/3))],m=0,o=g.length;o>m;m++)h=g[m],j.path(h).attr({"stroke-width":1,stroke:"#a33"});for(Raphael.getColor(),Raphael.getColor(),d=Raphael.getColor(),k={stroke:d,"stroke-width":5,"stroke-linecap":"round",fill:d},l=0,e=500,q=b.getElementsByTagName("Outline"),r=[],n=0,p=q.length;p>n;n++)i=q[n],r.push(function(b){return setTimeout(function(){return a(j,b,k)},l+=e)}(i));return r})},e=function(a,b){var c,e,f,g,h;for(g=b.split(/(?:)/),h=[],e=0,f=g.length;f>e;e++)c=g[e],h.push(d(a,c));return h},window.WordStroker||(window.WordStroker={}),window.WordStroker.raphael={strokeWords:e}})}.call(this),function(){$(function(){var a,b,c,d,e,f,g;return f={dim:2150,trackWidth:150},b=[1,0,0,1,100,100],a=function(a){var b;return this.options=$.extend({scales:{fill:.4,style:.25},updatesPerStep:10,delays:{stroke:.25,word:.5}},a,f),this.matrix=[this.options.scales.fill,0,0,this.options.scales.fill,0,0],this.myCanvas=document.createElement("canvas"),b=$(this.myCanvas),b.css("width",this.styleWidth()+"px"),b.css("height",this.styleHeight()+"px"),this.myCanvas.width=this.fillWidth(),this.myCanvas.height=this.fillHeight(),this.canvas=this.myCanvas,this},a.prototype.init=function(){return this.currentStroke=0,this.currentTrack=0,this.time=0},a.prototype.width=function(){return this.options.dim},a.prototype.height=function(){return this.options.dim},a.prototype.fillWidth=function(){return this.width()*this.options.scales.fill},a.prototype.fillHeight=function(){return this.height()*this.options.scales.fill},a.prototype.styleWidth=function(){return this.fillWidth()*this.options.scales.style},a.prototype.styleHeight=function(){return this.fillHeight()*this.options.scales.style},a.prototype.drawBackground=function(a){var b;return this.canvas=a?a:this.myCanvas,b=this.canvas.getContext("2d"),b.fillStyle="#FFF",b.fillRect(0,0,this.fillWidth(),this.fillHeight()),c(b,this.fillWidth())},a.prototype.draw=function(a,b){var c,d=this;return this.init(),this.strokes=a,this.canvas=b?b:this.myCanvas,c=this.canvas.getContext("2d"),c.strokeStyle="#000",c.fillStyle="#000",c.lineWidth=5,requestAnimationFrame(function(){return d.update()}),this.promise=$.Deferred()},a.prototype.update=function(){var a,b,c,d,e,f,h=this;if(!(this.currentStroke>=this.strokes.length)){for(a=this.canvas.getContext("2d"),a.setTransform.apply(a,this.matrix),d=this.strokes[this.currentStroke],0===this.time&&(this.vector={x:d.track[this.currentTrack+1].x-d.track[this.currentTrack].x,y:d.track[this.currentTrack+1].y-d.track[this.currentTrack].y,size:d.track[this.currentTrack].size||this.options.trackWidth},a.save(),a.beginPath(),g(a,d.outline),a.clip()),c=e=1,f=this.options.updatesPerStep;(f>=1?f>=e:e>=f)&&(this.time+=.02,this.time>=1&&(this.time=1),a.beginPath(),a.arc(d.track[this.currentTrack].x+this.vector.x*this.time,d.track[this.currentTrack].y+this.vector.y*this.time,2*this.vector.size,0,2*Math.PI),a.fill(),!(this.time>=1));c=f>=1?++e:--e);return b=0,this.time>=1&&(a.restore(),this.time=0,this.currentTrack+=1),this.currentTrack>=d.track.length-1&&(this.currentTrack=0,this.currentStroke+=1,b=this.options.delays.stroke),this.currentStroke>=this.strokes.length?setTimeout(function(){return h.promise.resolve()},1e3*this.options.delays.word):b?setTimeout(function(){return requestAnimationFrame(function(){return h.update()})},1e3*b):requestAnimationFrame(function(){return h.update()})}},c=function(a,b){return a.strokeStyle="#A33",a.beginPath(),a.lineWidth=10,a.moveTo(0,0),a.lineTo(0,b),a.lineTo(b,b),a.lineTo(b,0),a.lineTo(0,0),a.stroke(),a.beginPath(),a.lineWidth=2,a.moveTo(0,b/3),a.lineTo(b,b/3),a.moveTo(0,2*(b/3)),a.lineTo(b,2*(b/3)),a.moveTo(b/3,0),a.lineTo(b/3,b),a.moveTo(2*(b/3),0),a.lineTo(2*(b/3),b),a.stroke()},g=function(a,b){var c,d,e,f;for(f=[],d=0,e=b.length;e>d;d++)switch(c=b[d],c.type){case"M":f.push(a.moveTo(c.x,c.y));break;case"L":f.push(a.lineTo(c.x,c.y));break;case"C":f.push(a.bezierCurveTo(c.begin.x,c.begin.y,c.mid.x,c.mid.y,c.end.x,c.end.y));break;case"Q":f.push(a.quadraticCurveTo(c.begin.x,c.begin.y,c.end.x,c.end.y));break;default:f.push(void 0)}return f},d=function(b,c,d){var e,f;return e=jQuery.Deferred(),f=new a(d),$(b).append(f.canvas),WordStroker.utils.StrokeData.get(c,function(a){return e.resolve({drawBackground:function(){return f.drawBackground()},draw:function(){return f.draw(a)},remove:function(){return $(f.canvas).remove()}})},function(){return e.resolve({drawBackground:function(){return f.drawBackground()},draw:function(){var a;return a=jQuery.Deferred(),$(f.canvas).fadeTo("fast",.5,function(){return a.resolve()}),a},remove:function(){return $(f.canvas).remove()}})}),e},e=function(a,b,c){return WordStroker.utils.sortSurrogates(b).map(function(b){return d(a,b,c)})},window.WordStroker||(window.WordStroker={}),window.WordStroker.canvas={Word:a,drawElementWithWords:e}})}.call(this),function(){var a,b;b=function(){var a;return null!=(a=document.createElement("canvas"))?a.getContext("2d"):void 0},a=jQuery,a.fn.extend({strokeWords:function(c,d){return void 0===c||""===c?null:(d=a.extend({single:!1,svg:!b()},d),this.each(function(){var a;return d.svg?window.WordStroker.raphael.strokeWords(this,c):(a=window.WordStroker.canvas.drawElementWithWords(this,c,d),d.single?a.reduceRight(function(a,b){return function(){return b.then(function(b){return b.drawBackground(),b.draw().then(function(){return a?(b.remove(),a()):void 0})})}},null)():(a.forEach(function(a){return a.then(function(a){return a.drawBackground()})}),a.reduceRight(function(a,b){return function(){return b.then(function(b){return b.draw().then(a)})}},null)()))}).data("strokeWords",{play:null}))}})}.call(this);