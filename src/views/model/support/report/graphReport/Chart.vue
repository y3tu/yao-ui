<template>
    <div class="app-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{dataForm.name}}</span>
                <el-button style="float: right; padding: 3px 0" type="text">打印</el-button>
            </div>
            <div class="text item">
                <el-row>
                    <el-col :span="12" v-for="(item,index) in charGraphList" :key="index"  >
                        <div :id='item.value+"_echarts"' :style="{width: '100%', height: '300px'}">
                        </div>
                    </el-col>
                </el-row>
            </div>

        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>数据明细</span>
                <el-button style="float: right; padding: 3px 0" type="text">导出</el-button>
            </div>
            <div class="text item">
                <el-row>
                    <el-col>
                        <el-table
                                v-loading="dataListLoading"
                                border
                                style="width: 100%;"
                                :data="chartData"
                                height="300px">
                            <el-table-column header-align="center" align="center"
                                             :key="index"    v-for="(item,index)   in tableHead"
                                             :label="item.fieldTxt" :property="item.fieldName">
                                <template slot-scope="scope">
                                    {{scope.row[scope.column.property]}}
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<script>

    import {getChartsData} from "./Api";

    export default {
        dicts:['GRAPH_TYPE'],
        computed: {
        },
        data() {
            return {
                dataForm: {},
                tableData: [],
                tableHead: [],
                chartData: [],
                transformGraph: [],
                charGraphList: [],
                dataListLoading: false,
                activeName: {
                    name: '柱状图',
                }

            }
        },
        created() {
            this.getParams()
        },
        mounted() {
        },
        methods: {
            getParams() {
                // 取到路由带过来的参数
                const id = this.$route.query.id;
                this.getEChartsData(id);
                this.getDetailInfo(id);
            },
            getEChartsData(id) {
                this.dataListLoading = true;
                getChartsData(id).then(res => {
                    if (res) {
                        this.dataForm = res.data.info;
                        this.chartData = res.data.data;
                        this.transform(this.dataForm.graphType)
                    } else {
                        this.$message.error(data.msg)
                    }
                    this.dataListLoading = false
                })
            },
            transform(graphType) {
                let graphTypeDict = this.dict.GRAPH_TYPE;
                if (graphTypeDict) {
                    // return res
                    this.transformGraph = graphTypeDict;
                    for (let item in graphType) {
                        for (let i in this.transformGraph) {
                            if (graphType[item] === this.transformGraph[i].value)
                                this.charGraphList[item] = this.transformGraph[i]
                        }
                    }
                    // this.activeName.name = this.charGraphList[0].label
                    this.drawLine()
                } else {
                    return []
                }
            },
            drawLine() {
                this.$nextTick(() => {
                    var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ];
                    let xaxisField = this.dataForm.xaxisField;
                    let yaxisField = this.dataForm.yaxisField;
                    let xData = [], yData = [];
                    for (let index in this.chartData) {
                        xData.push(this.chartData[index][xaxisField]);
                        yData.push(this.chartData[index][yaxisField[0]])
                    }
                    for (let i in this.charGraphList) {
                        debugger;
                        let charGraph = this.charGraphList[i];
                        let myChart = this.$echarts.init(document.getElementById(charGraph.value+"_echarts"));
                        let option = {
                            title: {},
                            grid: {
                                left: '3%',
                                right: '10%',
                                bottom: '8%',
                                containLabel: true
                            },
                            legend: {
                                data: [this.dataForm.yaxisText]
                            },
                            categoryAxis: {
                                axisLine: {            // 坐标轴线
                                    show: true,        // 默认显示，属性show控制显示与否
                                    lineStyle: {       // 属性lineStyle控制线条样式
                                        color: '#48b',
                                        width: 2,
                                        type: 'solid'
                                    }
                                },
                            },
                            tooltip: {},
                            xAxis: {
                                data: xData,
                                axisTick: {    // 坐标轴 刻度
                                    show: true,  // 是否显示
                                    inside: true,  // 是否朝内
                                    length: 3,     // 长度
                                    lineStyle: {   // 默认取轴线的样式
                                        color: 'red',
                                        width: 1,
                                        type: 'solid'
                                    }
                                },
                            },
                            yAxis: {},
                            series: [{
                                name: this.dataForm.yaxisText,
                                type: charGraph.value,
                                data: yData,
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            return colorList[params.dataIndex]
                                        }
                                    },
                                },
                            }]
                        };
                        if(charGraph.value==='pie'){
                            option = {
                                title: {},
                                tooltip: {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                stillShowZeroSum: false,
                                series: [
                                    {
                                        name: this.dataForm.yaxisText,
                                        type: charGraph.value,
                                        radius: '80%',
                                        center: ['60%', '60%'],
                                        data: this.chartData,
                                        itemStyle: {
                                            normal: {
                                                color: function(params) {
                                                    return colorList[params.dataIndex]
                                                }
                                            },
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(128, 128, 128, 0.5)'
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                        // 绘制图表
                        myChart.setOption(option);
                    }
                })

            },
            //获取列表数据
            getDetailInfo(id) {
                getChartsData(id).then(res => {
                    if (res) {
                        this.tableHead = res.data
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        }
    }
</script>
