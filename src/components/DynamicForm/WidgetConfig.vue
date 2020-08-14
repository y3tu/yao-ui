<template>
    <div v-if="show">
        <el-form label-position="top">
            <el-form-item label="字段标识" v-if="data.type!=='grid'">
                <el-input v-model="data.model"></el-input>
            </el-form-item>
            <el-form-item label="标题" v-if="data.type!=='grid'">
                <el-input v-model="data.name"></el-input>
            </el-form-item>
            <el-form-item label="宽度" v-if="Object.keys(data.options).indexOf('width')>=0">
                <el-input v-model="data.options.width"></el-input>
            </el-form-item>
            <el-form-item label="高度" v-if="Object.keys(data.options).indexOf('height')>=0">
                <el-input v-model="data.options.height"></el-input>
            </el-form-item>
            <el-form-item label="大小" v-if="Object.keys(data.options).indexOf('size')>=0">
                宽度
                <el-input style="width: 90px;" type="number" v-model.number="data.options.size.width"></el-input>
                高度
                <el-input style="width: 90px;" type="number" v-model.number="data.options.size.height"></el-input>
            </el-form-item>
            <el-form-item label="占位内容" v-if="Object.keys(data.options).indexOf('placeholder')>=0 && (data.type!=='time' || data.type!=='date')">
                <el-input v-model="data.options.placeholder"></el-input>
            </el-form-item>
            <el-form-item label="布局方式" v-if="Object.keys(data.options).indexOf('inline')>=0">
                <el-radio-group v-model="data.options.inline">
                    <el-radio-button :label="false">块级</el-radio-button>
                    <el-radio-button :label="true">行内</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="显示输入框" v-if="Object.keys(data.options).indexOf('showInput')>=0">
                <el-switch v-model="data.options.showInput"></el-switch>
            </el-form-item>
            <el-form-item label="最小值" v-if="Object.keys(data.options).indexOf('min')>=0">
                <el-input-number v-model="data.options.min" :min="0" :max="100" :step="1"></el-input-number>
            </el-form-item>
            <el-form-item label="最大值" v-if="Object.keys(data.options).indexOf('max')>=0">
                <el-input-number v-model="data.options.max" :min="0" :max="100" :step="1"></el-input-number>
            </el-form-item>
            <el-form-item label="步长" v-if="Object.keys(data.options).indexOf('step')>=0">
                <el-input-number v-model="data.options.step" :min="0" :max="100" :step="1"></el-input-number>
            </el-form-item>
            <el-form-item label="是否多选" v-if="data.type==='select' || data.type==='imgupload'">
                <el-switch v-model="data.options.multiple" @change="handleSelectMultiple"></el-switch>
            </el-form-item>
            <el-form-item label="是否可搜索" v-if="data.type==='select'">
                <el-switch v-model="data.options.filterable"></el-switch>
            </el-form-item>
            <el-form-item label="允许半选" v-if="Object.keys(data.options).indexOf('allowHalf')>=0">
                <el-switch v-model="data.options.allowHalf"></el-switch>
            </el-form-item>
            <el-form-item label="支持透明度选择" v-if="Object.keys(data.options).indexOf('showAlpha')>=0">
                <el-switch v-model="data.options.showAlpha"></el-switch>
            </el-form-item>
            <el-form-item label="是否显示标签" v-if="Object.keys(data.options).indexOf('showLabel')>=0">
                <el-switch v-model="data.options.showLabel"></el-switch>
            </el-form-item>

            <el-form-item label="选项" v-if="Object.keys(data.options).indexOf('options')>=0">
                <el-radio-group v-model="data.options.remote" size="mini" style="margin-bottom:10px;">
                    <el-radio-button label="false">静态数据</el-radio-button>
                    <el-radio-button label="true">远端数据</el-radio-button>
                </el-radio-group>
                <template v-if="data.options.remote">
                    <div>
                        <el-input size="mini" style="" v-model="data.options.remoteFunc">
                            <template slot="prepend">远端方法</template>
                        </el-input>
                        <el-input size="mini" style="" v-model="data.options.props.value">
                            <template slot="prepend">值</template>
                        </el-input>
                        <el-input size="mini" style="" v-model="data.options.props.label">
                            <template slot="prepend">标签</template>
                        </el-input>
                    </div>
                </template>
                <template v-else>
                    <template v-if="data.type==='radio' || (data.type==='select'&&!data.options.multiple)">
                        <el-radio-group v-model="data.options.defaultValue">
                            <draggable tag="ul" :list="data.options.options"
                                       v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
                                       handle=".drag-item">
                                <li v-for="(item, index) in data.options.options" :key="index">
                                    <el-radio
                                            :label="item.value"
                                            style="margin-right: 5px;">
                                        <el-input :style="{'width': data.options.showLabel? '90px': '180px' }" size="mini" v-model="item.value"></el-input>
                                        <el-input style="width:90px;" size="mini" v-if="data.options.showLabel" v-model="item.label"></el-input>
                                        <!-- <input v-model="item.value"/> -->
                                    </el-radio>
                                    <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"><i class="iconfont icon-icon_bars"></i></i>
                                    <el-button @click="handleOptionsRemove(index)" circle plain type="danger" size="mini" icon="el-icon-minus"
                                               style="padding: 4px;margin-left: 5px;"></el-button>
                                </li>
                            </draggable>
                        </el-radio-group>
                    </template>

                    <template v-if="data.type==='checkbox' || (data.type==='select' && data.options.multiple)">
                        <el-checkbox-group v-model="data.options.defaultValue">

                            <draggable tag="ul" :list="data.options.options"
                                       v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
                                       handle=".drag-item">
                                <li v-for="(item, index) in data.options.options" :key="index">
                                    <el-checkbox
                                            :label="item.value"
                                            style="margin-right: 5px;">
                                        <el-input :style="{'width': data.options.showLabel? '90px': '180px' }" size="mini" v-model="item.value"></el-input>
                                        <el-input style="width:90px;" size="mini" v-if="data.options.showLabel" v-model="item.label"></el-input>
                                    </el-checkbox>
                                    <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"><i class="iconfont icon-icon_bars"></i></i>
                                    <el-button @click="handleOptionsRemove(index)" circle plain type="danger" size="mini" icon="el-icon-minus"
                                               style="padding: 4px;margin-left: 5px;"></el-button>

                                </li>
                            </draggable>
                        </el-checkbox-group>
                    </template>
                    <div style="margin-left: 22px;">
                        <el-button type="text" @click="handleAddOption">{{$t('fm.actions.addOption')}}</el-button>
                    </div>
                </template>
            </el-form-item>



        </el-form>
    </div>
</template>

<script>
    import Draggable from 'vuedraggable'

    export default {
        components: {
            Draggable
        },
        props: ['data'],
        data() {
            return {
                validator: {
                    type: null,
                    required: null,
                    pattern: null,
                    range: null,
                    length: null
                }
            }
        },
        computed: {
            show() {
                if (this.data && Object.keys(this.data).length > 0) {
                    return true
                }
                return false
            }
        },
        methods: {
            handleOptionsRemove(index) {
                if (this.data.type === 'grid') {
                    this.data.columns.splice(index, 1)
                } else {
                    this.data.options.options.splice(index, 1)
                }

            },
            handleAddOption() {
                if (this.data.options.showLabel) {
                    this.data.options.options.push({
                        value: '新选项',
                        label: '新选项'
                    })
                } else {
                    this.data.options.options.push({
                        value: '新选项'
                    })
                }

            },
            handleSelectMultiple(value) {
                if (value) {
                    if (this.data.options.defaultValue) {
                        this.data.options.defaultValue = [this.data.options.defaultValue]
                    } else {
                        this.data.options.defaultValue = []
                    }

                } else {
                    if (this.data.options.defaultValue.length > 0) {
                        this.data.options.defaultValue = this.data.options.defaultValue[0]
                    } else {
                        this.data.options.defaultValue = ''
                    }

                }
            },
        }
    }
</script>

<style>

</style>