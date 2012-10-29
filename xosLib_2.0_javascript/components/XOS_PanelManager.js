function XOS_PanelManager(  _htmlElement  )
{
	this.htmlElement = _htmlElement;
	this.activePanel=null;
	this.hideActivePanel = true; 
	this.unselectedActivatorButtonClassName = 'toolButtonUnselected';
	this.selectedActivatorButtonClassName = 'toolButtonSelected';	
}


XOS_PanelManager.prototype.addPanel = function ( _panelName , _panel , _activatorButton )
{
	this[ _panelName ] = _panel;
	if(_activatorButton)
	{
		this[ _panelName ].activatorButton = _activatorButton;
		_activatorButton.panelRef = this[ _panelName ];
	} 
}


XOS_PanelManager.prototype.setActivePanel = function ( _panelToActivate )
{
	
	// se il pannello da attivare è già attivo allora verrà disattivato
	if( this.hideActivePanel )
	{
		if(this.activePanel) this.hidePanel(this.activePanel);

		if( this.activePanel == _panelToActivate )
		{
			this.activePanel = null;
			return;
		}
	}
	else
	{
		// altrimenti se il pannello da attivare è già attivo allora non fare nulla
		if( this.activePanel == _panelToActivate )
		{
			return;
		}
		
		if(this.activePanel) this.hidePanel(this.activePanel);
	}
		
	this.activePanel = _panelToActivate;
	this.showPanel( this.activePanel );
}

// by panel name
XOS_PanelManager.prototype.activatePanel = function ( _panelName )
{
	if(  this[ _panelName ] ) this.setActivePanel( this[ _panelName ] );

}

/*
XOS_PanelManager.prototype.activatePanel = function ( _panelName )
{
	
	// se il pannello da attivare è già attivo allora verrà disattivato
	if( this.hideActivePanel )
	{
		if(this.activePanel) this.hidePanel(this.activePanel);

		if( this.activePanel == this[ _panelName ] )
		{
			this.activePanel = null;
			return;
		}
	}
	else
	{
		// altrimenti se il pannello da attivare è già attivo allora non fare nulla
		if( this.activePanel == this[ _panelName ] )
		{
			return;
		}
		
		if(this.activePanel) this.hidePanel(this.activePanel);
	}
		
	this.activePanel = this[ _panelName ];
	this.showPanel( this.activePanel );
}
*/




XOS_PanelManager.prototype.hidePanel = function ( _panel )
{
	//if(_panel.activatorButton) _panel.activatorButton.className = this.unselectedActivatorButtonClassName;
	
	if(_panel.activatorButton){
/*
		_panel.activatorButton.removeClass(this.selectedActivatorButtonClassName);
		_panel.activatorButton.addClass(this.unselectedActivatorButtonClassName);
*/
		
		_panel.activatorButton.classList.remove(this.selectedActivatorButtonClassName);
		_panel.activatorButton.classList.add(this.unselectedActivatorButtonClassName);
	} 
	
	if(_panel.htmlElement) _panel = _panel.htmlElement;
	_panel.style.display = 'none';
	
}

XOS_PanelManager.prototype.showPanel = function ( _panel )
{
	//if(_panel.activatorButton) _panel.activatorButton.className = this.selectedActivatorButtonClassName;
	
	if(_panel.activatorButton){
		_panel.activatorButton.classList.remove(this.unselectedActivatorButtonClassName);
		_panel.activatorButton.classList.add(this.selectedActivatorButtonClassName);
		/*
_panel.activatorButton.removeClass(this.unselectedActivatorButtonClassName);
		_panel.activatorButton.addClass(this.selectedActivatorButtonClassName);
*/
	} 
	
	if(_panel.htmlElement) _panel = _panel.htmlElement;
	//_panel.style.display = 'inline';
	_panel.style.display = 'block';
	
}