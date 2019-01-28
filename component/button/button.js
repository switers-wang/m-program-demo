Component({
    properties: {
        text: {
            type: String,
            value: '这是按钮',
        },
        clickFun: {
            type: Function,
            value: () => {},
        }
    },
    data: {
        color: '#123456',
    },
    methods: {
        testClick: function () {
            this.properties.clickFun(1);
        }
    }
});