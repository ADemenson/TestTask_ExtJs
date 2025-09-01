Ext.define('ProductApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ProductApp',
    
    stores: [
        'Products'
    ],
    
    launch: function() {
        // Запуск приложения
    }
});