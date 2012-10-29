/*
Copyright (C) 2012/2013 by XOSystem - Riccardo Della Martire <info@xosystem.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Please note that some subdirectories of the distribution
can include code files released under different
licenses.
*/



// MAIN 
var xoside_app = null;
			
function init()
{
	xoside_app = new XOSIDE_app();
}

function hideAboutPanel( _e )
{	
	HTML('ABOUT_PANEL').style.display = 'none';	
	HTML('APPLICATION_LAYOUT').removeEventListener( 'mouseup' , hideAboutPanel , true );
}



window.addEventListener("load", init, false);




// APPLICATION CLASS 


function XOSIDE_app( )
{						
	this.version = '1.0.Beta';
	
	// PANELS
	this.fileBrowserPanel = new FileBrowser_panel( HTML('FILE_BROWSER_PANEL') , this );
	this.codeEditor_panel = new CodeEditor_panel( HTML('CODE_EDITOR_PANEL') , this );
	
	// WIDGETS COLUMN LEFT
	this.widgetManagerColumnLeft = new XOS_WidgetManager( HTML('COLUMN_LEFT') );
	this.widgetManagerColumnLeft.addWidget( this.fileBrowserPanel.htmlElement, this.fileBrowserPanel.htmlElement.getChildById('EXPAND_WIDGET_toolButton') );
	
	// WIDGETS COLUMN RIGHT
	this.widgetManagerColumnRight = new XOS_WidgetManager( HTML('COLUMN_RIGHT') ); 
	var widget = this.widgetManagerColumnRight.addWidget( this.codeEditor_panel.htmlElement, this.codeEditor_panel.htmlElement.getChildById('EXPAND_WIDGET_toolButton') );
	this.widgetManagerColumnRight.addEventListener( XOS_WidgetManager.CHANGE, Bind( this.codeEditor_panel, this.codeEditor_panel.onResize ) );

	this.messageWin = new XOS_Window( HTML('MESSAGE_WIN') );
	//this.messageWin.open( true );
	
	this.showAboutPanel();
	
	window.addEventListener("unload", Bind( this, this.onExit ), false);
	window.onbeforeunload = Bind( this, this.confirmExit );
	window.onresize = Bind(this,this.onBrowserResize);
	
	
	CreateEventListener ( HTML('ABOUT_APP_menuItem') , "mouseup" , this.showAboutPanel , this  );
	CreateEventListener ( HTML('UPDATE_APP_menuItem') , "mouseup" , this.checkForUpdates , this  );
	CreateEventListener ( HTML('DOCS_APP_menuItem') , "mouseup" , this.showDocs , this  );
	CreateEventListener ( HTML('LOGOUT_menuItem') , "mouseup" , this.logout , this  );
	
}


XOSIDE_app.prototype.onBrowserResize = function( _e )
{
	this.widgetManagerColumnLeft.updateWidgetLayout();
	this.widgetManagerColumnRight.updateWidgetLayout();
	//console.log('onBrowserWinResize');
}


XOSIDE_app.prototype.showAboutPanel = function( _e )
{
	HTML('ABOUT_PANEL').style.display = 'block';
	HTML('APPLICATION_LAYOUT').addEventListener( 'mouseup' , hideAboutPanel ,true );
}


XOSIDE_app.prototype.checkForUpdates = function( _e )
{
	window.open( 'http://www.xosystem.org/xoside_updates?version='+this.version );
}

XOSIDE_app.prototype.showDocs = function( _e )
{
	window.open( 'http://www.xosystem.org/xoside_docs?version='+this.version );
}

XOSIDE_app.prototype.logout = function( _e )
{
	window.location = '?action=doUserLogout' ;
}


XOSIDE_app.prototype.confirmExit = function(_element_li)
{
	return STR['Are you sure you want to exit the application?'];
}

XOSIDE_app.prototype.onExit = function(_element_li)
{

}




