/**
 * Provides requestAnimationFrame in a cross browser way.
 */
window.requestAnimationFrame =  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function( callback, element) { return window.setTimeout(callback, 1000/60); };
window.cancelCancelRequestAnimationFrame = window.cancelCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout;


/*
FUNZIONI E PROPRIETA' GLOBALI
*/


var IS_IPHONE = navigator.userAgent.indexOf("iPhone") != -1 ;
var IS_IPOD = navigator.userAgent.indexOf("iPod") != -1 ;
var IS_IPAD = navigator.userAgent.indexOf("iPad") != -1 ;
var IS_IOS = IS_IPHONE || IS_IPOD || IS_IPAD ;

var DEVICE_WITH_TOUCH_EVENTS = "ontouchstart" in window;


	Array.prototype.clone = function() { return this.slice(0); }
	
	Date.prototype.daysInMonth = function () 
	{
	   return new Date(this.getFullYear(), this.getMonth()+1, 0).getDate()
	}
	
	
	Date.prototype.toTimeStamp = function ()
	{
		var yyyy = this.getFullYear();
	    var mm = this.getMonth() + 1;
	    var dd = this.getDate();
	    var hh = this.getHours();
	    var min = this.getMinutes();
	    var ss = this.getSeconds();		
		return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + ss;
	}
	
	
	
	HTMLSelectElement.prototype.selectOptionByValue = function ( _value )
	{
		var maxOptions = this.options.length;
		for( var id=0; id<maxOptions; id++ )
		{
			if( this.options[ id ].value == _value )
			{
				this.options[ id ].selected=true;
				return;
			} 
		} 
	}
	
	
	HTMLSelectElement.prototype.getSelectOptionValue = function ()
	{
		return this.options[ this.selectedIndex ].value;
	}

	
	

/*
	Element.prototype.applyScrollingByTouch = function ( )
	{
	
		if( DEVICE_WITH_TOUCH_EVENTS )
		{
			var scrollTarget = this;
			
			scrollTarget.ontouchstart = function(_e)
			{
				this.touchStartPos = _e.touches[0].pageY;
				this.maxScroll = scrollTarget.scrollHeight - scrollTarget.offsetHeight;			
			};
			
			scrollTarget.ontouchmove = function(_e)
			{
				if(_e.touches[0].pageY>this.touchStartPos)
				{
					if(scrollTarget.scrollTop==0){ }else{ GLOBAL_MOUSE_LISTENER.preventPageScroll=false; }
					return;
				}else{
					if( scrollTarget.scrollTop==this.maxScroll){ } else{ GLOBAL_MOUSE_LISTENER.preventPageScroll=false; }
					return;
				}
			};
		}
	
	}
*/


	Element.prototype.applyScrollingByTouch = function ( )
	{
		
		if( DEVICE_WITH_TOUCH_EVENTS )
		{
			var scrollTarget = this;
			
			scrollTarget.ontouchstart = function(_e)
			{
				this.touchStartPosY = _e.touches[0].pageY;
				this.maxScrollY = scrollTarget.scrollHeight - scrollTarget.offsetHeight;
				
				this.touchStartPosX = _e.touches[0].pageX;
				this.maxScrollX = scrollTarget.scrollWidth - scrollTarget.offsetWidth;			
			};
			
			scrollTarget.ontouchmove = function(_e)
			{
				if(GLOBAL_MOUSE_LISTENER.lockedPageScroll) return;
				
				/*
var movementRangeY =
				var movementRangeX =
*/ 
				
				if(_e.touches[0].pageY>this.touchStartPosY)
				{
					if(scrollTarget.scrollTop==0){ }else{ GLOBAL_MOUSE_LISTENER.preventPageScroll=false; }
				}else{
					if( scrollTarget.scrollTop==this.maxScrollY){ } else{ GLOBAL_MOUSE_LISTENER.preventPageScroll=false; }
				}
				
				//if(_e.touches[0].pageX>this.touchStartPosX)
				if(_e.touches[0].pageX>this.touchStartPosX)
				{
					if(scrollTarget.scrollLeft==0){ }else{ GLOBAL_MOUSE_LISTENER.preventPageScroll=false; }
					return;
				}else{
					if( scrollTarget.scrollLeft==this.maxScrollX){ } else{ GLOBAL_MOUSE_LISTENER.preventPageScroll=false; }
					return;
				}
			};
		}
	
	}
	
	
		

	Element.prototype.insertProgressState = function ()
	{		
		var size = this.getSize();
		if(size.x==0)size.x=100;
		if(size.y==0)size.y=100; 
		this.innerHTML = '<div style="width:'+size.x+'px; height:'+size.y+'px;" id="PROGRESS_STATE"></div>';
	}
	
	
	
	Element.prototype.indexOf = function (el) {
		var nodeList = this.childNodes;
		var array = [].slice.call(nodeList, 0);
		return array.indexOf(el);
	}


	/*
Element.prototype.setVisibility = function  ( _value )
	{
	 	this.style.visibility = _value;
	}
	
	
	Element.prototype.getVisibility = function  ()
	{
	 	return this.style.visibility ;	
	}
*/
	
	
	Element.prototype.getPosition = function  ()
	{
	 return {x:this.offsetLeft,y:this.offsetTop};
	}
	
	Element.prototype.setPosition = function  ( _x , _y , _unit )
	{
	 	_unit = _unit || 'px';
	 	this.style.left = _x + _unit;
		this.style.top = _y + _unit;
	}
	
	Element.prototype.setPositionX = function  ( _x  , _unit )
	{
	 	_unit = _unit || 'px';
	 	this.style.left = _x + _unit;
	}
	
	Element.prototype.setPositionY = function  ( _y , _unit )
	{
	 	_unit = _unit || 'px';
		this.style.top = _y + _unit;
	}

	
	Element.prototype.getSize = function  ()
	{
	 return {x:this.offsetWidth,y:this.offsetHeight};
	}
	
	
	Element.prototype.setSize = function  ( _x , _y , _unit )
	{
	 	_unit = _unit || 'px';
	 	this.style.width = _x+ _unit;
		this.style.height = _y+ _unit;
	}
	
	Element.prototype.setSizeX = function  ( _x , _unit )
	{
	 	_unit = _unit || 'px';
	 	this.style.width = _x+ _unit;
	}
	
	
	Element.prototype.setSizeY = function  (  _y , _unit )
	{
	 	_unit = _unit || 'px';
		this.style.height = _y+ _unit;
	}

	
	Element.prototype.getGlobalPosition = function  ()
	{
	 var  x = this.offsetLeft;
	 var  y = this.offsetTop;
	 
	 var currentElement = this;
	 
	// if (currentElement.offsetParent)
	 if (currentElement.parentElement)
	 {
	  //while (currentElement = currentElement.offsetParent)
	  while (currentElement = currentElement.parentElement)
	  {
	   	x += currentElement.offsetLeft;
	   	y += currentElement.offsetTop;
	  }
	 }
	 return {x:x,y:y};
	}
	
		
	Node.prototype.getChildById = function ( _id )
	{		
		var child = null;
		
		for( var id = 0; id<this.childNodes.length ; id++)
		{
			child = this.childNodes[id];
			if( child.id == _id ){
				 return child;
			}else{
				child = child.getChildById( _id );
				if(child) return child;
			}
		}
		
		return child;
	}
	
	
	
	Node.prototype.getChildByName = function ( _name )
	{		
		var child = null;
		
		for( var id = 0; id<this.childNodes.length ; id++)
		{
			child = this.childNodes[id];
			if( child.name == _name ){
				 return child;
			}else{
				child = child.getChildByName( _name );
				if(child) return child;
			}
		}
		
		return child;
	}
	
	
	Node.prototype.getParentByAttribute = function(_attributeName ,  _attributeValue )
	{
		if( this.hasAttribute(_attributeName) && this.getAttribute(_attributeName)==_attributeValue){
			return this;
		}else{
			if( this.parentNode != null )  return this.parentNode.getParentByAttribute( _attributeName ,  _attributeValue );
		}
		return null;
		
		/*
if(this[_attributeName]==_attributeValue){
			return this;
		}else{
			if( this.parentNode != null )  return this.parentNode.getParentByAttribute( _attributeName ,  _attributeValue );
		}
		return null;
*/		
	}
	
	
	Node.prototype.getParentById = function( _id )
	{
		if(this.id==_id){
			return this;
		}else{
			if( this.parentNode != null )  return this.parentNode.getParentById( _id );
		}
		return null;		
	}
	
	
	Node.prototype.getParentByNodeName = function( _nodeName )
	{
		if(this.nodeName==_nodeName){
			return this;
		}else{
			if( this.parentNode != null )  return this.parentNode.getParentByNodeName( _nodeName );
		}
		return null;		
	}
	
	
	/*
Node.prototype.getParentByType = function( _type )
	{
		if(this instanceof _type){
			return this;
		}else{
			if( this.parentNode != null )  return this.parentNode.getParentByType( _type );
		}
		return null;		
	}
*/
	
	/*
Element.prototype.getParentByType = function( _type )
	{
		if(this instanceof _type){
			return this;
		}else{
			if( this.parentElement != null )  return this.parentElement.getParentByType( _type );
		}
		return null;		
	}
*/
	
	Element.prototype.hasClass = function (cls)
	{
		return this.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	}
	Element.prototype.addClass = function (cls)
	{
		if (!this.hasClass(cls)) this.className += " "+cls;
	}
	Element.prototype.removeClass = function (cls)
	{
		if (this.hasClass(cls)) {
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			this.className=this.className.replace(reg,' ');
		}
	}

	

	FormData.prototype.appendObject = function ( _objVars )
	{
		for (var name in _objVars) this.append(name, _objVars[ name ] );
	}

	
	
	function PathInfo ( _filePath )
	{
	 	var splittedPath = _filePath.split('/');
		var fileName = splittedPath[ splittedPath.length-1 ];
		var dir = '';
		if(splittedPath.length>1){
			splittedPath.pop();
			dir = splittedPath.join('/');
		}		
		var splittedName = fileName.split('.');
		var fileNameNoExtension = '';
		var fileExtension = '';
		if(splittedName.length>1){
			fileExtension = splittedName.pop();
			fileNameNoExtension = splittedName.join('.');
		} 
	 	return { dir:dir ,  fileName:fileName , fileNameNoExtension:fileNameNoExtension , fileExtension:fileExtension };	
	}



	function SendAndLoad( _serviceUrl , _objectData , _onLoadFunction )
	{	
		var xhr = new XMLHttpRequest();
		xhr.open('POST', _serviceUrl , true);
		xhr.onload = _onLoadFunction ;
		if(_objectData)
		{
			var formData = new FormData();
			formData.appendObject(_objectData);
			xhr.send(formData);  // multipart/form-data	 
		}   				
  		else xhr.send('');			 				
		
		return xhr;
	}


	// non fare nulla se state è SUCCESS, mostra alert se si verifica un errore
	function DefaultResponseXML( _e )
	{		
		var xhr = _e.target;
		try 
		{ 
			var xmlResponse = xhr.responseXML;
			var state = xmlResponse.getElementsByTagName('state')[0].firstChild.nodeValue;
			var message = xmlResponse.getElementsByTagName('message')[0].firstChild.nodeValue;
			if( state == "SUCCESS" )
			{
				return true;
			}
			else if( state == "ERROR" )
			{
				alert( message );
			}
			return false; 					
		}
	    catch (e){}    
	    alert( "Si è verificato un errore: " + xhr.responseText);		
	}

	
	/*
function DefaultResponseTextToInnerHTML( _e )
	{		
		var xhr = _e.target;
		if( xhr.targetElement )xhr.targetElement.innerHTML = xhr.responseText;		
	}
*/
	
	
	
	
/*

	Element.prototype.hasClassName = function(name) {
	  return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
	};
	
	Element.prototype.addClassName = function(name) {
	  if (!this.hasClassName(name)) {
	    this.className = this.className ? [this.className, name].join(' ') : name;
	  }
	};
	
	Element.prototype.removeClassName = function(name) {
	  if (this.hasClassName(name)) {
	    var c = this.className;
	    this.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
	  }
	};
*/


function BREAK_EVENT(){
	return false;
}

function HTML ( _htmlElement ){
	return document.all ? document.all[ _htmlElement ] : document.getElementById( _htmlElement );
}


function degToRad(degrees) {
    return degrees * Math.PI / 180;
}



function ColorHexToRgb ( _hexColor , _opacity  )
{
	var r;
    var g;
    var b;
    
    if (_hexColor.substr(0, 1) == '#')
    {
        _hexColor = _hexColor.substr(1);
    }



    if (_hexColor.length == 3)
    {
        r = _hexColor.substr(0, 1);
        r += r;
        g = _hexColor.substr(1, 1);
        g += g;
        b = _hexColor.substr(2, 1);
        b += b;
    }
    else if (_hexColor.length == 6)
    {
        r = _hexColor.substr(0, 2);
        g = _hexColor.substr(2, 2);
        b = _hexColor.substr(4, 2);
    }
    
    
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    
    if( _opacity != undefined )
    {
    	return 'rgba('+r+','+g+','+b+','+_opacity+')';
    }else{    	
    	return 'rgba('+r+','+g+','+b+')';    
    }
    	
}		 



/*
function PointToLineDist ( x1, y1, x2, y2, x3, y3 )
{
	var dx=x2-x1;
	var dy=y2-y1;
	if (dx==0&&dy==0)
	{
		x2+=1;
		y2+=1;
		dx=dy=1;
	}
	var u = ((x3 - x1) * dx + (y3 - y1) * dy) / (dx * dx + dy * dy);
	var closestX;
	var closestY;
	if (u<0)
	{
		closestX=x1;
		closestY=y1;
	} else if (u> 1) {
		closestX=x2;
		closestY=y2;
	} else {
		closestX=x1+u*dx;
		closestY=y1+u*dy;
	}
	dx=closestX-x3;
	dy=closestY-y3;
	return Math.sqrt(dx * dx +dy * dy);
}
*/


/*

function TextToClipboard(s) {
    if (window.clipboardData && clipboardData.setData) {
        clipboardData.setData('Text', s);
    }
}

function TextFromClipboard() {
    if (window.clipboardData && clipboardData.setData) {
        return clipboardData.getData('Text');
    }
}


TextToClipboard( 'ciccio');
alert(TextFromClipboard());
*/


function WindowSize()
{	
	var winW = 980;
	var winH = 560;
	
	if (document.body && document.body.offsetWidth)
	{
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	else if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth )
	{
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	else if (window.innerWidth && window.innerHeight)
	{
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}

	return{x:winW, y:winH}    		
}



//* @author Kevin Lindsey
function ExtendClass(subClass, baseClass) {
   function inheritance() {}
   inheritance.prototype = baseClass.prototype;
   subClass.prototype = new inheritance();
   subClass.prototype.constructor = subClass;
   subClass.baseConstructor = baseClass;
   subClass.superClass = baseClass.prototype;
}


function IncludeJavascript( _url , _onLoadFunction )
{		
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.src = _url;
	script.type = "text/javascript";
	
	if( _onLoadFunction != undefined && _onLoadFunction != null )
	{
		if (script.readyState){  //IE
	        script.onreadystatechange = function()
	        {
	            if (script.readyState == "loaded" || script.readyState == "complete")
	            {
	                script.onreadystatechange = null;
	                _onLoadFunction();
	            }
	        };
	    } else {  //Others
	        script.onload = function(){
	            _onLoadFunction();
	        };
	    }
    }
		
	//head.insertBefore( script, head.firstChild );		
	head.appendChild( script);
}


function IncludeCSS( _url )
{		
	var head = document.getElementsByTagName('head')[0];
	var css=document.createElement("link");
  	css.setAttribute("rel", "stylesheet");
  	css.setAttribute("type", "text/css");
  	css.setAttribute("href", _url);
  	head.appendChild( css);
}


function Bind(scope, fn ) {
    return function () { return fn.apply(scope, arguments); }
}


function EventPreventDefault( e  ) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
}


/*

If  _capturingPhase is true the event handler is set for the capturing phase, if is false the event handler is set for the bubbling phase.

               | |
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  \ /          |     |
|   -------------------------     |
|        Event CAPTURING          |
-----------------------------------

               / \
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  | |          |     |
|   -------------------------     |
|        Event BUBBLING           |
-----------------------------------


*/


	
function CreateEventListener ( _element , _eventType , _functionListener, _bindTarget ,_capturingPhase )
{          
     if (_element.addEventListener)
     {
        if( DEVICE_WITH_TOUCH_EVENTS )
		{
			// nel caso in cui arrivi uno di questi eventi converto in touch
			switch ( _eventType )
			{
				case "mousedown": 
					_eventType = "touchstart";
				break;
				case "mousemove": 
					_eventType = "touchmove";
				break;
				case "mouseup": 
					_eventType = "touchend";
				break;		
			}
		}
        
        _element.addEventListener(_eventType, _bindTarget ? Bind( _bindTarget, _functionListener ) : _functionListener, _capturingPhase);
     }
     else if (_element.attachEvent)
     {
         _element.attachEvent('on' + _eventType, _functionListener);
     } 
     else 
     {
         _element['on' + _eventType] = _functionListener;
     }
}

	
       


