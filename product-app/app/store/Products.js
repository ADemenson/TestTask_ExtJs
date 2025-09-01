Ext.define('ProductApp.store.Products', {
    extend: 'Ext.data.Store',
    model: 'ProductApp.model.Product',

    data: [
        { id: 1, name: 'Ноутбук Dell', description: 'Мощный игровой ноутбук', price: 1500.50, quantity: 5 },
        { id: 2, name: 'Мышь Logitech', description: 'Беспроводная компьютерная мышь', price: 45.99, quantity: 0 },
        { id: 3, name: 'Клавиатура', description: 'Механическая клавиатура RGB', price: 89.99, quantity: 12 },
        { id: 4, name: 'Монитор Samsung', description: '27-дюймовый 4K монитор', price: 399.99, quantity: 3 },
        { id: 5, name: 'Наушники Sony', description: 'Беспроводные наушники с шумоподавлением', price: 199.99, quantity: 8 }
    ]
});