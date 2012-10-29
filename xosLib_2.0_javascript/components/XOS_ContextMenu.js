
function XOS_ContextMenu(  _htmlElement  )
{	
	this.htmlElement = _htmlElement;
	if( !XOS_ContextMenu.contextMenuContainer ) XOS_ContextMenu.defineContextMenuContainer();
}

XOS_ContextMenu.prototype.showAt = function ( _x , _y )
{
	this.htmlElement.setPosition( _x ,  _y );
	XOS_ContextMenu.activeContextMenu = this;	
}

XOS_ContextMenu.prototype.hide = function ()
{
	this.htmlElement.style.display = 'none';
	XOS_ContextMenu.activeContextMenu = null;
}

XOS_ContextMenu.prototype.show = function ()
{
	this.htmlElement.style.display = 'block';
}

// static methods ad Properties

XOS_ContextMenu.contextMenuContainer = null;
XOS_ContextMenu.activeContextMenu = null;


XOS_ContextMenu.onMouseDown = function ( _e )
{
	if(XOS_ContextMenu.activeContextMenu)
	{
	
		if(XOS_ContextMenu.activeContextMenu.htmlElement.style.display == 'block' )
		{
			XOS_ContextMenu.activeContextMenu.hide();
		}
		else
		{
			XOS_ContextMenu.activeContextMenu.show();
		}
				
	} 	
}


XOS_ContextMenu.defineContextMenuContainer = function ( )
{
	if(HTML('CONTEXT_MENU_CONTAINER'))
	{
		XOS_ContextMenu.contextMenuContainer = HTML('CONTEXT_MENU_CONTAINER');
		var html = document.getElementsByTagName('html')[0];
		
		if( DEVICE_WITH_TOUCH_EVENTS )
		{		
			CreateEventListener ( html , "touchstart" , XOS_ContextMenu.onMouseDown , XOS_ContextMenu , false );
		}else{
			CreateEventListener ( html , "mousedown" , XOS_ContextMenu.onMouseDown , XOS_ContextMenu , false );
		}	
	} 
}