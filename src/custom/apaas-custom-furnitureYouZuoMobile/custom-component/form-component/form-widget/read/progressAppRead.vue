<template>
    <div>
        订单进度
        <van-steps direction="vertical" :active="0">
            <van-step>
                <h3>创建</h3>
                <p>订单创建</p>
            </van-step>
            <van-step>
                <h3>提交</h3>
                <p>业务员提交订单</p>
            </van-step>
            <van-step>
                <h3>审核</h3>
                <p>领导审核</p>
            </van-step>
            <van-step>
                <h3>生产</h3>
                <p>订单生产</p>
            </van-step>
            <van-step>
                <h3>出货</h3>
                <p>订单出货</p>
            </van-step>
            <van-step>
                <h3>出货单</h3>
                <p>生成出货单</p>
            </van-step>
            <van-step>
                <h3>收款</h3>
                <p>订单收款</p>
            </van-step>
        </van-steps>
    </div>
</template>

<script>
export default {
    name: 'ProgressRead'
}
</script>

<style>

</style>