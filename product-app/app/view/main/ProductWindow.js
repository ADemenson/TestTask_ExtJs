Ext.define('ProductApp.view.main.ProductWindow', {
    extend: 'Ext.window.Window',
    xtype: 'productwindow',
    
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Number'
    ],
    
    title: 'Карточка товара',
    width: 450,
    height: 350,
    modal: true,
    layout: 'fit',
    closeAction: 'hide',
    
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            reference: 'form',
            bodyPadding: 20,
            defaults: {
                anchor: '100%',
                labelWidth: 100,
                margin: '0 0 15 0'
            },
            items: [{
                xtype: 'textfield',
                name: 'id',
                fieldLabel: 'ID',
                readOnly: true,
                hidden: true
            }, {
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Имя товара',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'description',
                fieldLabel: 'Описание',
                readOnly: true
            }, {
                xtype: 'numberfield',
                name: 'price',
                fieldLabel: 'Цена',
                minValue: 0,
                decimalPrecision: 2,
                allowBlank: false,
                enforceMaxLength: true,
                maxLength: 10,
                listeners: {
                    blur: function(field) {
                        var value = field.getValue();
                        if (value < 0) {
                            field.setValue(0);
                            Ext.Msg.alert('Ошибка', 'Цена не может быть отрицательной');
                        }
                    }
                }
            }, {
                xtype: 'numberfield',
                name: 'quantity',
                fieldLabel: 'Количество',
                minValue: 0,
                allowDecimals: false,
                allowBlank: false,
                enforceMaxLength: true,
                maxLength: 6,
                listeners: {
                    blur: function(field) {
                        var value = field.getValue();
                        if (value < 0) {
                            field.setValue(0);
                            Ext.Msg.alert('Ошибка', 'Количество не может быть отрицательным');
                        }
                    }
                }
            }]
        }];
        
        this.buttons = [{
            text: 'Отмена',
            handler: this.onCancel,
            scope: this
        }, {
            text: 'Сохранить',
            handler: this.onSave,
            scope: this
        }];
        
        this.callParent();
    },
    
    loadRecord: function(record) {
        this.record = record;
        this.down('form').loadRecord(record);
        this.setTitle('Карточка товара: ' + record.get('name'));
    },
    
    onCancel: function() {
        this.close();
    },
    
    onSave: function() {
        var form = this.down('form');
        var values = form.getValues();
        var record = this.record;
        
        // Проверяем изменения
        var changes = {};
        var hasChanges = false;
        
        Ext.Object.each(values, function(key, value) {
            if (record.get(key) != value) {
                changes[key] = value;
                hasChanges = true;
            }
        });
        
        if (hasChanges) {
            Ext.Msg.confirm('Сохранение', 'Имеются измененные данные. Сохранить изменения?', function(btn) {
                if (btn === 'yes') {
                    // Дополнительная валидация
                    if (values.price < 0) {
                        Ext.Msg.alert('Ошибка', 'Цена не может быть отрицательной');
                        return;
                    }
                    if (values.quantity < 0) {
                        Ext.Msg.alert('Ошибка', 'Количество не может быть отрицательным');
                        return;
                    }
                    
                    record.set(changes);
                    record.commit();
                    this.close();
                    Ext.Msg.alert('Успех', 'Данные успешно сохранены!');
                }
            }, this);
        } else {
            this.close();
        }
    }
});