jQuery.sap.require('ui5strap.Action');

sap.ui.controller("net__rozzo__ui5.mtest__app.controllers.Home", {
	
	switchTheme : function(oEvent){
        var btn = oEvent.getSource();

        if(!this.activeButton){
            this.activeButton = this.getView().byId('defaultThemeButton');
        }

        if(btn !== this.activeButton){
            this.activeButton.setSelected(false);
            
            btn.setSelected(true);
            
            this.activeButton = btn;

            this.setTheme(btn.getCustomData()[0].getValue('theme'));
        }
        
    },

    setTheme : function(newTheme){
        var app = this.app;

        ui5strap.Action.run({
            "parameters" : {
                "a_modules" : "ui5strap.AMChangeTheme",
                "changeTheme" : {
                    theme : newTheme
                }
            },
            "app" : this.getView().getViewData().app,
            "controller" : this
        });
    }

});
