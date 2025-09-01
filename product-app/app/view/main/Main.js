Ext.define('ProductApp.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.tab.Panel',
        'Ext.toolbar.Toolbar'
    ],


    layout: 'border',

    initComponent: function () {
        this.items = [{
            region: 'north',
            xtype: 'toolbar',
            items: [{
                text: 'Товары',
                handler: this.onProductsClick,
                scope: this
            }, {
                text: 'Выход',
                handler: this.onLogoutClick,
                scope: this
            }]
        }, {
            region: 'center',
            xtype: 'tabpanel',
            reference: 'mainTabPanel'
        }];

        this.callParent();
    },

    onProductsClick: function () {
        var tabPanel = this.down('tabpanel');
        var tab = Ext.create('ProductApp.view.main.ProductGrid');
        tabPanel.add(tab);
        tabPanel.setActiveTab(tab);
    },

    onLogoutClick: function () {
        this.destroy();
        Ext.create('ProductApp.view.login.Login');
    }
});