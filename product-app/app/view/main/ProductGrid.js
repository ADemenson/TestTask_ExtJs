Ext.define('ProductApp.view.main.ProductGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'productgrid',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Text',
        'ProductApp.view.main.ProductWindow'
    ],

    title: 'Товары',
    closable: true,

    initComponent: function () {
        this.store = Ext.create('ProductApp.store.Products');

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'ID товара',
                enableKeyEvents: true,
                listeners: {
                    keypress: this.onIdFilterEnter,
                    scope: this
                }
            }, {
                xtype: 'textfield',
                fieldLabel: 'Описание',
                margin: '0 0 0 10',
                enableKeyEvents: true,
                listeners: {
                    keypress: this.onDescFilterEnter,
                    scope: this
                }
            }]
        }];

        this.columns = [{
            text: 'ID',
            dataIndex: 'id',
            width: 60
        }, {
            text: 'Имя',
            dataIndex: 'name',
            flex: 1,
            listeners: {
                click: this.onNameCellClick,
                scope: this
            }
        }, {
            text: 'Описание',
            dataIndex: 'description',
            flex: 2
        }, {
            text: 'Цена',
            dataIndex: 'price',
            width: 90,
            renderer: function (value) {
                return Ext.util.Format.number(value, '0.00') + ' ₽';
            }
        }, {
            text: 'Кол-во',
            dataIndex: 'quantity',
            width: 80,
            renderer: function (value, metaData) {
                if (value === 0) {
                    metaData.tdCls = 'zero-quantity-cell';
                }
                return value;
            }
        }];

        this.callParent();
    },

    onNameCellClick: function (grid, cell, rowIndex, colIndex, e, record) {
        // Открываем карточку товара при клике на ячейку "Имя"
        var productWindow = Ext.create('ProductApp.view.main.ProductWindow');
        productWindow.loadRecord(record);
        productWindow.show();
    },

    onIdFilterEnter: function (field, e) {
        if (e.getKey() === e.ENTER) {
            var value = field.getValue();
            if (value) {
                this.getStore().clearFilter();
                this.getStore().addFilter({
                    property: 'id',
                    value: parseInt(value),
                    exactMatch: true
                });
            } else {
                this.getStore().clearFilter();
            }
        }
    },

    onDescFilterEnter: function (field, e) {
        if (e.getKey() === e.ENTER) {
            var value = field.getValue();
            if (value) {
                this.getStore().clearFilter();
                this.getStore().addFilter({
                    property: 'description',
                    value: value,
                    anyMatch: true
                });
            } else {
                this.getStore().clearFilter();
            }
        }
    }
});