<?
	error_reporting(E_ALL);
	ini_set('display_errors','On');

	// check if this file is imported by index__.php or not
	if( ! defined( 'SESSION_OBJECT_NAME' ) ) exit;	
?>

<!DOCTYPE html>
<html >
	<head>
		<title>XOSIDE v1.0.beta</title>
	    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="Content-Language" content="<? echo strtolower(LANGUAGE); ?>" />
		
		<!-- MOBILE SETUP -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		
		<!-- APP ICONS -->
		<link rel="icon" href="themes/default/images/favicon.png" type="image/png" />
		<link rel="apple-touch-icon" href="themes/default/images/touch-icon-iphone.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="themes/default/images/touch-icon-ipad.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="themes/default/images/touch-icon-iphone4.png" />	
				
		<!-- CODEMIRROR -->
		<link rel="stylesheet" href="../xosLib_external/codemirror-3.0beta2/lib/codemirror.css">
    	<script src="../xosLib_external/codemirror-3.0beta2/lib/codemirror.js"></script>
    	<script src="../xosLib_external/codemirror-3.0beta2/mode/css/css.js"></script>
    	<script src="../xosLib_external/codemirror-3.0beta2/mode/javascript/javascript.js"></script>
    	<script src="../xosLib_external/codemirror-3.0beta2/mode/xml/xml.js"></script>
    	<script src="../xosLib_external/codemirror-3.0beta2/mode/clike/clike.js"></script>    	    	
		<script src="../xosLib_external/codemirror-3.0beta2/mode/php/php.js"></script>
		<script src="../xosLib_external/codemirror-3.0beta2/mode/htmlmixed/htmlmixed.js"></script>
    
		<!-- THEME -->
		<link rel="stylesheet" href="themes/default/css.css" />		
		
		<!-- XOS CORE -->	    		
		<script language="javascript" src="../xosLib_2.0_javascript/core/XOS.js"></script>
	    <script language="javascript" src="../xosLib_2.0_javascript/core/XOS_EventDispatcher.js"></script>
	    <script language="javascript" src="../xosLib_2.0_javascript/components/XOS_Window.js"></script>
	    <script language="javascript" src="../xosLib_2.0_javascript/components/XOS_PanelManager.js"></script>
	   	<script language="javascript" src="../xosLib_2.0_javascript/components/XOS_TreeView.js"></script>
	   	<script language="javascript" src="../xosLib_2.0_javascript/components/XOS_WidgetManager.js"></script>
	   	<script language="javascript" src="../xosLib_2.0_javascript/components/XOS_ContextMenu.js"></script>
		<script language="javascript" src="../xosLib_2.0_javascript/core/XOS_GlobalMouseListener.js"></script>
		 
	    <!-- APP FILES -->	   
	    <script language="javascript" src="languages/<? echo LANGUAGE; ?>.js"></script>
	    <script language="javascript" src="javascript/FileBrowser_panel.js"></script>
	    <script language="javascript" src="javascript/CodeEditor_panel.js"></script>
		<script language="javascript" src="javascript/XOSIDE_app.js"></script>
		
	</head>

<body>	
		
	<!-- START APP -->
	<div id="APPLICATION_LAYOUT">
	
		<div class="columnsContainer" >
			
			<div id="COLUMN_LEFT" class="column" style="width:260px;" >

				<div id="FILE_BROWSER_PANEL" class="widget" >
					<div class="header">
						<div class="title"></div>
						<ul class="toolBar">
		    				<li id="LOADING_toolButton" class=""  title="" ><a></a></li>
		    				<li id="INFO_MENU_toolButton" class="unselectedToolButton"  title="" ><a></a>
			    				<ul  class="panel popupMenu"   >
					        		<li class="popupMenuItem" id="ABOUT_APP_menuItem"   title=""><? PrintSTR( 'About XOSIDE...' ) ?></li>
					        		<li class="popupMenuItem" id="UPDATE_APP_menuItem"   title=""><? PrintSTR( 'Check for updates...' ) ?></li>
					        		<li class="popupMenuItem" id="DOCS_APP_menuItem"   title=""><? PrintSTR( 'Documentation...' ) ?></li>
							        <div style="clear:both"></div>
					        	</ul>
		    				</li>
		    				<li id="EXECUTE_FILE_toolButton" class="unselectedToolButton"  title="<? PrintSTR( 'Play main file' ) ?>" ><a></a></li>
		    				<li id="CREATE_FILE_toolButton" class="unselectedToolButton"  title="" ><a></a>
			    				<ul  class="panel popupMenu"   >
					        		<li class="popupMenuItem" id="CREATE_FILE_XML_menuItem"  fileType="xml"  title=""><? PrintSTR( 'New file - XML' ) ?></li>
					        		<li class="popupMenuItem" id="CREATE_FILE_JS_menuItem"   fileType="js" title=""><? PrintSTR( 'New file - JS' ) ?></li>
					        		<li class="popupMenuItem" id="CREATE_FILE_PHP_menuItem"  fileType="php" title=""><? PrintSTR( 'New file - PHP' ) ?></li>
					        		<li class="popupMenuItem" id="CREATE_FILE_CSS_menuItem"  fileType="css" title=""><? PrintSTR( 'New file - CSS' ) ?></li>
					        		<li class="popupMenuItem" id="CREATE_FILE_HTML_menuItem" fileType="html"  title=""><? PrintSTR( 'New file - HTML' ) ?></li>
							        <div style="clear:both"></div>
					        	</ul>
		    				</li>
		    				<li id="EDIT_MENU_toolButton" class="unselectedToolButton"  title="" ><a></a>
			    				<ul  class="panel popupMenu"   >
					        		<li class="popupMenuItem" id="DEFINE_EXECUTABLE_FILE_menuItem"   title=""><? PrintSTR( 'Set selection as main file' ) ?></li>
					        		<li class="popupMenuItem" id="CREATE_FOLDER_menuItem"   title=""><? PrintSTR( 'New Folder' ) ?></li>
					        		<li class="popupMenuItem" id="COPY_FILE_menuItem"   title=""><? PrintSTR( 'Copy file' ) ?></li>
					        		<li class="popupMenuItem" id="PASTE_FILE_menuItem"   title=""><? PrintSTR( 'Paste file' ) ?></li>
					        		<li class="popupMenuItem" id="REMOVE_FILE_menuItem"   title=""><? PrintSTR( 'Remove file' ) ?></li>
					        		<li class="popupMenuItem" id="DOWNLOAD_FILE_menuItem"   title=""><? PrintSTR( 'Download file' ) ?></li>
 					        		<li class="popupMenuItem" id="LOGOUT_menuItem"   title=""><? PrintSTR( 'Logout...' ) ?></li>
							        <div style="clear:both"></div>
					        	</ul>
		    				</li>
		    				<li id="EXPAND_WIDGET_toolButton" class="expandedWidgetButton"  title="Expand/Collapse widget" ><a></a></li>
		    				
						</ul>
					</div>
					<ul id="PANEL_VIEW" class="view treeView"  >
						<li class="collapsedNode  unselectedNode" itemType="dir" ondrop="xoside_app.fileBrowserPanel.onDropFilesOnFolder( event );" title="" >
							<a>&nbsp;</a>
							<div class="treeViewItemIcon_hd"><? PrintSTR( 'Hard disk' ) ?></div>
							<ul></ul>
						</li>
						<!--
<li class="collapsedNode  unselectedNode" itemType="dir" ondrop="xoside_app.fileBrowserPanel.onDropFilesOnFolder( event );" title="_trash" >
							<a>&nbsp;</a>
							<div class="treeViewItemIcon_basket"><? PrintSTR( 'Trash' ) ?></div>
							<ul></ul>
						</li>
-->
					</ul>
					<progress id="UPLOADING_BAR" ></progress>
				</div>
				
			</div>
			
			<div id="COLUMN_RIGHT" class="column" style="left:260px; right:0px;">
				
				<div id="CODE_EDITOR_PANEL" class="widget" >
					<div class="header">
						<ul id="TAB_BAR" class="tabBar" oncontextmenu="return false;" ></ul>
						<ul class="toolBar">
							<li id="LOADING_toolButton" class=""  title="" ><a></a></li>
							<li id="SAVE_DOCUMENT_toolButton" class="unselectedToolButton"  title="" ><a></a></li>
		    				<li id="EXPAND_WIDGET_toolButton" class="expandedWidgetButton"  title="" ><a></a></li>
						</ul>
					</div>
					<div id="PANEL_VIEW" class="codeMirroView" ></div>
				</div>
				
			</div>
			
		</div>
		<!-- END COLUMNS_CONTAINER -->
		
			
		<div id="WINDOWS_CONTAINER" style="position:absolute;" >
					
			<div id="MESSAGE_WIN" class="win message_win" >
				<div id="WIN_HEAD" class="win_head">
					<div id="WIN_TITLE" class="win_title"><? PrintSTR( 'Message' ) ?></div>
				</div>
				<div id="WIN_CLOSE_BUTTON" class="win_close_button"></div>
				<div id="WIN_COLLAPSE_BUTTON" class="win_collapse_button"></div>
				<div id="WIN_CONTENT" class="win_content" style="" >
					<textarea id="WIN_MESSAGE_CONTENT" ></textarea>					
				</div>
				<div id="WIN_RESIZE_BUTTON" class="win_resize_button"></div>
			</div>
			
		</div>
		
		<div id="CONTEXT_MENU_CONTAINER" style="position:absolute;" oncontextmenu="return false;" >
				<ul id="ARCHIVE_CONTEXT_MENU" class="panel popupMenu"  >
	        		<li class="popupMenuItem" id="CREATE_OBJECT_AND_NODE_menuItem"   title="create new object and node child">Create Object/Node</li>
	        		<li class="popupMenuItem" id="COPY_NODE_menuItem"   title="Copy Node( reference )">Copy Node</li>
	        		<li class="popupMenuItem" id="PASTE_NODE_menuItem"   title="Paste Node( reference )">Paste Node</li>
	        		<li class="popupMenuItem" id="REMOVE_NODE_menuItem"   title="Remove Node( reference )">Remove Node</li>
			        <div style="clear:both"></div>
	        	</ul>
		</div>
		
		
		
				
	</div>
	<!-- END APP -->
	  
 	<div id="ABOUT_PANEL" class="aboutPanel" >
			<div class="versionInfo" >version 1.0 beta</div>
			<div class="applicationLogo" ></div>
			<div class="creditsInfo" >
XOSIDE Framework - Riccardo Della Martire - <a href="http://www.xosystem.org/xoside?version=1.0.beta" target="_blank" >xosystem.org/xoside</a><br/>
Codemirror - Marijn Haverbeke - <a href="http://codemirror.net" target="_blank" >codemirror.net</a>
</div>
		</div>
	  
</body>

</html>

