Ext.define('ProductApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginwindow',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],

    title: 'Вход в систему',
    closable: false,
    autoShow: true,
    modal: true,
    width: 400,
    bodyPadding: 20,

    initComponent: function () {
        this.items = [{
            xtype: 'form',
            reference: 'form',
            items: [{
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Логин',
                allowBlank: false,
                margin: '0 0 15 0'
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Пароль',
                allowBlank: false,
                margin: '0 0 15 0'
            }]
        }];

        this.buttons = [{
            text: 'Вход',
            formBind: true,
            handler: this.onLoginClick,
            scope: this
        }];

        this.callParent();
    },

    onLoginClick: function () {
        var form = this.down('form');
        var values = form.getValues();

        if (values.username === 'admin' && values.password === 'padmin') {
            this.close();
            Ext.create('ProductApp.view.main.Main');
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
        }
    },

    // Сброс полей при клике кнопки "Выход"
    resetForm: function () {
        var form = this.down('form');
        form.getForm().reset();
    }
});