function XOS_WidgetManager(_htmlElement)
{
	this.htmlElement = _htmlElement;
	this.widgets = [];
	this.collapsedWidgetButtonClassName = 'collapsedWidgetButton';
	this.expandedWidgetButtonClassName = 'expandedWidgetButton';
	this.eventDispatcher = new XOS_EventDispatcher();
}

XOS_WidgetManager.CHANGE = "CHANGE";


XOS_WidgetManager.prototype.addEventListener = function(type, listener)
{
  	this.eventDispatcher.addEventListener(type, listener);   
}

XOS_WidgetManager.prototype.removeEventListener = function(type, listener)
{
   this.eventDispatcher.removeEventListener(type, listener); 
}

XOS_WidgetManager.prototype.addWidget = function ( _element_widget , _expandCollapseButton )
{
	this.widgets.push(_element_widget);
	
	var widgetManager = this;
	
	if(_expandCollapseButton)
	{
		CreateEventListener ( _expandCollapseButton , "mousedown" , function(){widgetManager.expandOrCollapseWidget(_element_widget , this ) }  );
	}
	
	this.updateWidgetLayout();
}

XOS_WidgetManager.prototype.expandOrCollapseWidget = function( _element_widget , _expandCollapseButton )
{
	
	var widgetView = _element_widget.getChildById('PANEL_VIEW');
	
	if( widgetView.style.display != 'none' )
	{
		widgetView.style.display = 'none';
		if(_expandCollapseButton)
		{
			/*
_expandCollapseButton.removeClass(this.expandedWidgetButtonClassName);
			_expandCollapseButton.addClass(this.collapsedWidgetButtonClassName);
*/
			_expandCollapseButton.classList.remove(this.expandedWidgetButtonClassName);
			_expandCollapseButton.classList.add(this.collapsedWidgetButtonClassName);
		}
		
	}else{
		widgetView.style.display = 'block';
		if(_expandCollapseButton)
		{
			_expandCollapseButton.classList.remove(this.collapsedWidgetButtonClassName);
			_expandCollapseButton.classList.add(this.expandedWidgetButtonClassName);
			/*
_expandCollapseButton.removeClass(this.collapsedWidgetButtonClassName);
			_expandCollapseButton.addClass(this.expandedWidgetButtonClassName);
*/
		}
	}


	/*
if( widgetView.style.display != 'block' )
	{
		widgetView.style.display = 'block';
		if(_expandCollapseButton)
		{
			_expandCollapseButton.removeClass(this.collapsedWidgetButtonClassName);
			_expandCollapseButton.addClass(this.expandedWidgetButtonClassName);
		}
	}else{
		widgetView.style.display = 'none';
		if(_expandCollapseButton)
		{
			_expandCollapseButton.removeClass(this.expandedWidgetButtonClassName);
			_expandCollapseButton.addClass(this.collapsedWidgetButtonClassName);
		}
	}
*/
	
	this.updateWidgetLayout();
}


XOS_WidgetManager.prototype.updateWidgetLayout = function( )
{
	var openedWidgets=0;
	var totaleWidgetHeadersHeight=0;
	var	currentWidget;
	var widgetView;
	 
	var maxWidget =  this.widgets.length;
	
	for(var id=0; id<maxWidget; id++ )
	{
		totaleWidgetHeadersHeight+=30;
		currentWidget =  this.widgets[id];
		widgetView = currentWidget.getChildById('PANEL_VIEW');
		if(widgetView.style.display!='none') openedWidgets++;
	}
	
	var widgetContainerHeight =  this.htmlElement.offsetHeight;
	var distribuitedHeight = (widgetContainerHeight - totaleWidgetHeadersHeight) / openedWidgets;
		
	
	var currentY=0;
	
	for(var id=0; id<maxWidget; id++ )
	{
		currentWidget = this.widgets[id];
		currentWidget.style.top = currentY+'px';
		widgetView = currentWidget.getChildById('PANEL_VIEW');
		
		if(widgetView.style.display!='none')
		{
			currentWidget.style.height = (distribuitedHeight+30)+'px';
			currentY += (distribuitedHeight+30);
		}
		else
		{
			currentWidget.style.height = 30+'px';
			currentY += 30;
		}
	}
	
	this.eventDispatcher.dispatch( { type: XOS_WidgetManager.CHANGE  }  );	
}