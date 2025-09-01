Ext.define('ProductApp.model.Product', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'price', type: 'float' },
        { name: 'quantity', type: 'int' }
    ],
    
    validators: {
        price: { type: 'range', min: 0, message: 'Цена не может быть отрицательной' },
        quantity: { type: 'range', min: 0, message: 'Количество не может быть отрицательным' }
    }
});