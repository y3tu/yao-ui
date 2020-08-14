export const basicComponents = [
    {
        type: 'input',
        icon: 'input',
        name: '单行文本',
        options: {
            width: '100%',
            defaultValue: '',
            required: false,
            dataType: 'string',
            pattern: '',
            placeholder: '',
            disabled: false,
        }
    },
    {
        type: 'textarea',
        icon: 'textarea',
        name: '多行文本',
        options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            pattern: '',
            placeholder: ''
        }
    },
    {
        type: 'number',
        icon: 'number',
        name: '计算器',
        options: {
            width: '',
            required: false,
            defaultValue: 0,
            min: '',
            max: '',
            step: 1,
            disabled: false,
            controlsPosition: ''
        }
    },
    {
        type: 'radio',
        icon: 'radio',
        name: '单选框组',
        options: {
            inline: false,
            defaultValue: '',
            showLabel: false,
            options: [
                {
                    value: 'Option 1',
                    label: 'Option 1'
                },
                {
                    value: 'Option 2',
                    label: 'Option 2'
                },
                {
                    value: 'Option 3',
                    label: 'Option 3'
                }
            ],
            required: false,
            width: '',
            remote: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: '',
            disabled: false,
        }
    },
    {
        type: 'checkbox',
        icon: 'checkbox',
        name: '多选框组',
        options: {
            inline: false,
            defaultValue: [],
            showLabel: false,
            options: [
                {
                    value: 'Option 1'
                },
                {
                    value: 'Option 2'
                },
                {
                    value: 'Option 3'
                }
            ],
            required: false,
            width: '',
            remote: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: '',
            disabled: false,
        }
    },
    {
        type: 'time',
        icon: 'time',
        name: '时间选择器',
        options: {
            defaultValue: '21:19:56',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            isRange: false,
            arrowControl: true,
            format: 'HH:mm:ss',
            required: false,
            width: '',
        }
    },
    {
        type: 'date',
        icon: 'date',
        name: '日期选择器',
        options: {
            defaultValue: '',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            type: 'date',
            format: 'yyyy-MM-dd',
            timestamp: false,
            required: false,
            width: '',
        }
    },
    {
        type: 'rate',
        icon: 'rate',
        name: '评分',
        options: {
            defaultValue: null,
            max: 5,
            disabled: false,
            allowHalf: false,
            required: false
        }
    },
    {
        type: 'color',
        icon: 'color',
        name: '颜色选择器',
        options: {
            defaultValue: '',
            disabled: false,
            showAlpha: false,
            required: false
        }
    },
    {
        type: 'select',
        icon: 'select',
        name: '下拉选择框',
        options: {
            defaultValue: '',
            multiple: false,
            disabled: false,
            clearable: false,
            placeholder: '',
            required: false,
            showLabel: false,
            width: '',
            options: [
                {
                    value: 'Option 1'
                },
                {
                    value: 'Option 2'
                }, {
                    value: 'Option 3'
                }
            ],
            remote: false,
            filterable: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: ''
        }
    },
    {
        type: 'switch',
        icon: 'switch',
        name: '开关',
        options: {
            defaultValue: false,
            required: false,
            disabled: false,
        }
    },
    {
        type: 'slider',
        icon: 'slider',
        name: '滑块',
        options: {
            defaultValue: 0,
            disabled: false,
            required: false,
            min: 0,
            max: 100,
            step: 1,
            showInput: false,
            range: false,
            width: ''
        }
    },
    {
        type: 'text',
        icon: 'rich-text',
        name: '文字',
        options: {
            defaultValue: 'This is a text',
            customClass: '',
        }
    }
]

export const advanceComponents = [
    {
        type: 'blank',
        icon: 'icon-zidingyishuju',
        name: '自定义区域',
        options: {
            defaultType: 'String'
        }
    },
    {
        type: 'imgupload',
        icon: 'upload',
        name: '图片',
        options: {
            defaultValue: [],
            size: {
                width: 100,
                height: 100,
            },
            width: '',
            tokenFunc: 'funcGetToken',
            token: '',
            domain: 'http://pfp81ptt6.bkt.clouddn.com/',
            disabled: false,
            length: 8,
            multiple: false,
            isQiniu: false,
            isDelete: false,
            min: 0,
            isEdit: false,
            action: 'https://jsonplaceholder.typicode.com/photos/'
        }
    },
    {
        type: 'editor',
        icon: 'icon-fuwenbenkuang',
        name: '编辑器',
        options: {
            defaultValue: '',
            width: ''
        }
    },
    {
        type: 'cascader',
        icon: 'cascader',
        name: '级联选择器',
        options: {
            defaultValue: [],
            width: '',
            placeholder: '',
            disabled: false,
            clearable: false,
            remote: true,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label',
                children: 'children'
            },
            remoteFunc: ''
        }
    }
]

export const layoutComponents = [
    {
        type: 'grid',
        icon: 'table',
        name: '栅栏布局',
        columns: [
            {
                span: 12,
                list: []
            },
            {
                span: 12,
                list: []
            }
        ],
        options: {
            gutter: 0,
            justify: 'start',
            align: 'top'
        }
    }
]
