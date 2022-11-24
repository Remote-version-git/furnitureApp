<template>
    <div class="progress-app">
        <div class="progress-app-header">
            <p>订单：{{ saleOrderCode }}</p>
            <!-- <p>金额：¥900000.00</p> -->
        </div>
        <div class="progress-app-body">
            <van-steps direction="vertical" :active="0">
                <van-step class="blue-line" v-for="item, index in productProgressList" :key="index">
                    <template slot="active-icon">
                        <x-svg-icon width="40" height="40" :name="'progress' + (index + 1)"></x-svg-icon>
                    </template>
                    <template slot="inactive-icon">
                        <x-svg-icon width="40" height="40" :name="'progress' + (index + 1)"></x-svg-icon>
                    </template>
                    <h3>{{ item.nodeName }}</h3>
                    <p>行号：{{ item.lineCode }}</p>
                    <p>日期：{{ item.nodeDate }}</p>
                    <p>状态：{{ item.status }}</p>
                </van-step>
                <!-- <van-step>
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
                </van-step> -->
            </van-steps>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressEdit',
    props: {
        orderCode: {
            type: String,
            default: 'PPDocType-0476'
        }
    },
    data() {
        return {
            saleOrderCode: '',
            productProgressList: []
        }
    },
    created() {
        this.$request({
            method: 'get',
            url: 'http://cscrm.sitzone.cn:30611/custom/crm/getOrderProgess',
            params: {
                orderCode: this.orderCode
            }
        })
            .asyncThen(res => {
                console.log(res, 'r')
                if (res.data.saleOrderCode) {
                    this.saleOrderCode = res.data.saleOrderCode;
                }
                if (res.data.productProgressList) {
                    this.productProgressList = res.data.productProgressList;
                }
            })

    }
}
</script>

<style lang="scss">
.progress-app {
    min-height: 100vh;
    background: linear-gradient(180deg, #C7D7FF 0%, #FAFAFA 31%);
    overflow: hidden;

    .progress-app-header {
        overflow: hidden;
        background: #FFFFFF;
        padding-left: 11.5px;
        padding-top: 12px;
        border-radius: 4px;
        margin: 10px;

        p {
            margin-bottom: 12px;
            opacity: 0.9;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            font-weight: normal;
            color: #333333;
        }
    }

    .progress-app-body {
        background: #FFFFFF;
        padding-left: 12px;
        padding-top: 30px;
        padding-bottom: 27px;
        border-radius: 4px;
        margin: 10px;

        .van-step--vertical .van-step__circle-container {
            left: -12px;
            top: 30px;
        }

        .van-step--vertical {
            padding-left: 20px;
        }

        .van-step--vertical {
            line-height: 22px;
            height: 72px;
        }

        .blue-line {
            .van-step__line {
                background: #3370FF;
            }
        }

        .van-step__line {
            left: -13px;
        }

        .van-step--vertical::after {
            display: none;
        }

        h3 {
            font-family: PingFangSC-Medium;
            font-size: 14px;
            font-weight: normal;
            color: #333333;
        }

        p {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            font-weight: normal;
            color: #666666;
        }
    }
}
</style>