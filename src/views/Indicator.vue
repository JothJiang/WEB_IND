<template>
    <div class="manage">
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <span>这是一段信息</span>
            <!-- 根据具体页面信息，在element上查找对应组件 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button @click="dialogVisible=true" type="primary">
                + 新增
            </el-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dialogVisible:false
        }
    }
}
</script>