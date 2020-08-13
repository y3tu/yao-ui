import Vue from 'vue'
import Clipboard from 'clipboard'

const clipboard = {};

clipboard.clipboardSuccess = function () {
    Vue.prototype.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
    })
};

clipboard.clipboardError=function() {
    Vue.prototype.$message({
        message: '复制失败',
        type: 'error'
    })
};

clipboard.handleClipboard=function(text, event) {
    const board = new Clipboard(event.target, {
        text: () => text
    });
    board.on('success', () => {
        clipboard.clipboardSuccess();
        board.off('error');
        board.off('success');
        board.destroy()
    });
    board.on('error', () => {
        clipboard.clipboardError();
        board.off('error');
        board.off('success');
        board.destroy()
    });
    board.onClick(event)
};

export default clipboard