Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'ProductApp': './app'
    }
});

Ext.application({
    name: 'ProductApp',
    
    requires: [
        'ProductApp.Application',
        'ProductApp.view.login.Login',
        'ProductApp.view.main.Main',
        'ProductApp.store.Products'
    ],
    
    launch: function() {
        Ext.create('ProductApp.view.login.Login', {
            renderTo: Ext.getBody()
        });
    }
}); 