import Dict from './Dict'

const install = function (Vue) {
    Vue.mixin({
        data() {
            if (this.$options.dicts instanceof Array) {
                const dict = {
                    dict: {},
                    name: {}
                };
                return {
                    dict
                }
            }
            return {}
        },
        created() {
            if (this.$options.dicts instanceof Array) {
                new Dict(this.dict).init(this.$options.dicts, () => {
                    this.$nextTick(() => {
                        this.$emit('dictReady')
                    })
                })
            }
        },
        methods: {

        }

    })
};

export default {install}