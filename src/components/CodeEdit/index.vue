<template>
    <div class="json-editor">
        <textarea ref="textarea"/>
    </div>
</template>

<script>
    import CodeMirror from 'codemirror'
    import 'codemirror/lib/codemirror.css'
    // 替换主题这里需修改名称
    import 'codemirror/theme/idea.css'
    import 'codemirror/mode/clike/clike'

    import 'codemirror/addon/lint/lint.css'
    import 'codemirror/theme/rubyblue.css'
    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/addon/lint/lint'
    import 'codemirror/addon/hint/sql-hint'


    export default {
        props: {
            value: {
                type: String,
                required: true
            },
            height: {
                type: String,
                required: true
            },
            codeType:{
                type: String,
                required: true
            },
            theme: {
                type: String,
                default: 'idea'
            },
            readOnly:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                editor: false,
                codeTypes:['text/x-java','text/x-mysql']
            }
        },
        watch: {
            value(value) {
                const editorValue = this.editor.getValue();
                if (value !== editorValue) {
                    this.editor.setValue(this.value)
                }
            },
            height(value) {
                this.editor.setSize('auto', this.height)
            }
        },
        mounted() {
            this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
                mode: this.codeType,
                lineNumbers: true,
                lint: true,
                lineWrapping: true,
                tabSize: 2,
                cursorHeight: 0.9,
                // 替换主题这里需修改名称
                theme: this.theme,
                readOnly: this.readOnly
            });
            this.editor.setSize('auto', this.height);
            this.editor.setValue(this.value);
            this.editor.on('change', cm => {
                this.$emit('change', cm.getValue())
                this.$emit('input', cm.getValue())
            })
        },
        methods: {
            getValue() {
                return this.editor.getValue()
            }
        }
    }
</script>

<style scoped>
    .json-editor {
        height: 100%;
        margin-bottom: 10px;
    }

    .json-editor >>> .CodeMirror {
        font-size: 14px;
        overflow-y: auto;
        font-weight: normal
    }

    .json-editor >>> .CodeMirror-scroll {
    }

    .json-editor >>> .cm-s-rubyblue span.cm-string {
        color: #F08047;
    }
</style>
