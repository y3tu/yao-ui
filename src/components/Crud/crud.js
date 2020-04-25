import Vue from 'vue'

/**
 * CRUD配置
 */
function CRUD() {
    const defaultOptions = {
        // 标题
        title: '',
        // 请求数据的url
        url: '',
        // 表格数据
        data: [],
        // 选择项
        selections: [],
        // 待查询的对象
        query: {},
        // 查询数据的参数
        params: {},
        // Form 表单
        form: {},
        // 重置表单
        defaultForm: () => {},
        // 排序规则，默认 id 降序， 支持多字段排序 ['id,desc', 'createTime,asc']
        sort: ['id,desc'],
        // 等待时间
        time: 50,
        // CRUD Method
        crudMethod: {
            add: (form) => {},
            delete: (id) => {},
            edit: (form) => {},
            get: (id) => {}
        },
        // 主页操作栏显示哪些按钮
        optShow: {
            add: true,
            edit: true,
            del: true,
            download: true
        },
        // 自定义一些扩展属性
        props: {},
        // 在主页准备
        queryOnPresenterCreated: true,
        // 调试开关
        debug: false
    };

    options = mergeOptions(defaultOptions, options)
    const data ={
        ...options,
        // 记录数据状态
        dataStatus: {},
        status: {
            add: CRUD.STATUS.NORMAL,
            edit: CRUD.STATUS.NORMAL,
        },
        msg: {
            submit: '提交成功',
            add: '新增成功',
            edit: '编辑成功',
            del: '删除成功'
        },
        page: {
            // 页码
            page: 0,
            // 每页数据条数
            size: 10,
            // 总数据条数
            total: 0
        },
        // 整体loading
        loading: true,
        // 导出的 Loading
        downloadLoading: false,
        // 删除的 Loading
        delAllLoading: false
    }

}

/**
 * 合并选项
 */
function mergeOptions(src, opts) {
    const optsRet = {
        ...src
    };
    for (const key in src) {
        if (opts.hasOwnProperty(key)) {
            optsRet[key] = opts[key]
        }
    }
    return optsRet
}

/**
 * CRUD钩子
 */
CRUD.HOOK = {
    /** 刷新 - 之前 */
    beforeRefresh: 'beforeCrudRefresh',
    /** 刷新 - 之后 */
    afterRefresh: 'afterCrudRefresh',
    /** 删除 - 之前 */
    beforeDelete: 'beforeCrudDelete',
    /** 删除 - 之后 */
    afterDelete: 'afterCrudDelete',
    /** 删除取消 - 之前 */
    beforeDeleteCancel: 'beforeCrudDeleteCancel',
    /** 删除取消 - 之后 */
    afterDeleteCancel: 'afterCrudDeleteCancel',
    /** 新建 - 之前 */
    beforeToAdd: 'beforeCrudToAdd',
    /** 新建 - 之后 */
    afterToAdd: 'afterCrudToAdd',
    /** 编辑 - 之前 */
    beforeToEdit: 'beforeCrudToEdit',
    /** 编辑 - 之后 */
    afterToEdit: 'afterCrudToEdit',
    /** 开始 "新建/编辑" - 之前 */
    beforeToCU: 'beforeCrudToCU',
    /** 开始 "新建/编辑" - 之后 */
    afterToCU: 'afterCrudToCU',
    /** "新建/编辑" 验证 - 之前 */
    beforeValidateCU: 'beforeCrudValidateCU',
    /** "新建/编辑" 验证 - 之后 */
    afterValidateCU: 'afterCrudValidateCU',
    /** 添加取消 - 之前 */
    beforeAddCancel: 'beforeCrudAddCancel',
    /** 添加取消 - 之后 */
    afterAddCancel: 'afterCrudAddCancel',
    /** 编辑取消 - 之前 */
    beforeEditCancel: 'beforeCrudEditCancel',
    /** 编辑取消 - 之后 */
    afterEditCancel: 'afterCrudEditCancel',
    /** 提交 - 之前 */
    beforeSubmit: 'beforeCrudSubmitCU',
    /** 提交 - 之后 */
    afterSubmit: 'afterCrudSubmitCU',
    afterAddError: 'afterCrudAddError',
    afterEditError: 'afterCrudEditError'
};

/**
 * CRUD状态
 */
CRUD.STATUS = {
    NORMAL: 0,
    PREPARED: 1,
    PROCESSING: 2
};

/**
 * CRUD通知类型
 */
CRUD.NOTIFICATION_TYPE = {
    SUCCESS: 'success',
    WARNING: 'warning',
    INFO: 'info',
    ERROR: 'error'
};

export default CRUD


