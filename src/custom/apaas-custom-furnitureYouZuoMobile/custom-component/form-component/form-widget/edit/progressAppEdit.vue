<template>
  <div class="progress-app">
    <div class="progress-app-header">
      <p>订单：{{ orderCode }}</p>
      <p>客户：{{ customer }}</p>
      <p>业务员：{{ salesman }}</p>
      <p>金额：{{ money }}({{ currency }})</p>
    </div>
    <div class="progress-app-body">
      <div class="time_line_box">
        <ul class="time_line" style="100%;">
          <li v-for="(item, index) in nodes" :key="index">
            <div class="order_item"
              :style="{ paddingTop: !item.subFlowData.length ? undefined : item.subFlowData ? item.subFlowData.length > 1 ? '30%' : '15%' : undefined }">
              <div class="circle"
                :class="{ 'finished': item.status == 'completed', 'selected': item.status == 'active' }">
                <!--未开始-->
                <svg v-if="item.status == 'unactive'" t="1669777195864" class="icon" viewBox="0 0 1024 1024"
                  version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2195" width="20" height="20">
                  <path
                    d="M704.13 576.11c42.74 0 82.92 16.64 113.14 46.86s46.86 70.4 46.86 113.14-16.64 82.92-46.86 113.14-70.4 46.86-113.14 46.86-82.91-16.65-113.13-46.87-46.86-70.4-46.86-113.14 16.64-82.92 46.86-113.14c30.22-30.21 70.39-46.85 113.13-46.85m0-64c-123.71 0-224 100.29-224 224s100.29 224 224 224 224-100.29 224-224-100.29-224-224-224zM641.01 223.5h-362c-17.67 0-32 14.33-32 32s14.33 32 32 32h362c17.67 0 32-14.33 32-32s-14.33-32-32-32zM542.77 400.75H279.01c-17.67 0-32 14.33-32 32s14.33 32 32 32h263.76c17.67 0 32-14.33 32-32s-14.33-32-32-32zM369.76 578h-90.75c-17.67 0-32 14.33-32 32s14.33 32 32 32h90.75c17.67 0 32-14.33 32-32s-14.33-32-32-32z"
                    p-id="2196" fill="#999999"></path>
                  <path
                    d="M605.13 704.11c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.32-32-32-32zM704.13 704.11c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.32-32-32-32zM803.13 704.11c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.32-32-32-32z"
                    p-id="2197" fill="#999999"></path>
                  <path
                    d="M411.42 960h-198.4c-61.76 0-112-50.24-112-112V176c0-61.76 50.24-112 112-112H707c61.76 0 112 50.24 112 112v242.21c0 17.67-14.33 32-32 32s-32-14.33-32-32V176c0-26.47-21.53-48-48-48H213.02c-26.47 0-48 21.53-48 48v672c0 26.47 21.53 48 48 48h198.4c17.67 0 32 14.33 32 32s-14.33 32-32 32z"
                    p-id="2198" fill="#999999"></path>
                </svg>
                <!-- 进行中 -->
                <svg v-if="item.status == 'active'" t="1669777268367" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="2553" width="20" height="20">
                  <path
                    d="M704.13 576.11c42.74 0 82.92 16.64 113.14 46.86s46.86 70.4 46.86 113.14-16.64 82.92-46.86 113.14-70.4 46.86-113.14 46.86-82.91-16.65-113.13-46.87-46.86-70.4-46.86-113.14 16.64-82.92 46.86-113.14c30.22-30.21 70.39-46.85 113.13-46.85m0-64c-123.71 0-224 100.29-224 224s100.29 224 224 224 224-100.29 224-224-100.29-224-224-224zM641.01 223.5h-362c-17.67 0-32 14.33-32 32s14.33 32 32 32h362c17.67 0 32-14.33 32-32s-14.33-32-32-32zM542.77 400.75H279.01c-17.67 0-32 14.33-32 32s14.33 32 32 32h263.76c17.67 0 32-14.33 32-32s-14.33-32-32-32zM369.76 578h-90.75c-17.67 0-32 14.33-32 32s14.33 32 32 32h90.75c17.67 0 32-14.33 32-32s-14.33-32-32-32z"
                    p-id="2554" fill="#3370FF"></path>
                  <path
                    d="M411.42 960h-198.4c-61.76 0-112-50.24-112-112V176c0-61.76 50.24-112 112-112H707c61.76 0 112 50.24 112 112v242.21c0 17.67-14.33 32-32 32s-32-14.33-32-32V176c0-26.47-21.53-48-48-48H213.02c-26.47 0-48 21.53-48 48v672c0 26.47 21.53 48 48 48h198.4c17.67 0 32 14.33 32 32s-14.33 32-32 32z"
                    p-id="2555" fill="#3370FF"></path>
                  <path
                    d="M794 804h-93c-28.67 0-52-23.33-52-52v-96c0-17.67 14.33-32 32-32s32 14.33 32 32v84h81c17.67 0 32 14.33 32 32s-14.33 32-32 32z"
                    p-id="2556" fill="#3370FF"></path>
                </svg>
                <!-- 已完成 -->
                <svg v-if="item.status == 'completed'" t="1669777305869" class="icon" viewBox="0 0 1024 1024"
                  version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2769" width="20" height="20">
                  <path
                    d="M704.13 576.11c42.74 0 82.92 16.64 113.14 46.86s46.86 70.4 46.86 113.14-16.64 82.92-46.86 113.14-70.4 46.86-113.14 46.86-82.91-16.65-113.13-46.87-46.86-70.4-46.86-113.14 16.64-82.92 46.86-113.14c30.22-30.21 70.39-46.85 113.13-46.85m0-64c-123.71 0-224 100.29-224 224s100.29 224 224 224 224-100.29 224-224-100.29-224-224-224zM641.01 223.5h-362c-17.67 0-32 14.33-32 32s14.33 32 32 32h362c17.67 0 32-14.33 32-32s-14.33-32-32-32zM542.77 400.75H279.01c-17.67 0-32 14.33-32 32s14.33 32 32 32h263.76c17.67 0 32-14.33 32-32s-14.33-32-32-32zM369.76 578h-90.75c-17.67 0-32 14.33-32 32s14.33 32 32 32h90.75c17.67 0 32-14.33 32-32s-14.33-32-32-32z"
                    p-id="2770" fill="#ffffff"></path>
                  <path
                    d="M411.42 960h-198.4c-61.76 0-112-50.24-112-112V176c0-61.76 50.24-112 112-112H707c61.76 0 112 50.24 112 112v242.21c0 17.67-14.33 32-32 32s-32-14.33-32-32V176c0-26.47-21.53-48-48-48H213.02c-26.47 0-48 21.53-48 48v672c0 26.47 21.53 48 48 48h198.4c17.67 0 32 14.33 32 32s-14.33 32-32 32z"
                    p-id="2771" fill="#ffffff"></path>
                  <path
                    d="M688.56 827.75c-1.53 0-3.06-0.07-4.6-0.21-14.62-1.3-28.07-8.78-36.91-20.5l-47.97-63.65c-10.64-14.11-7.82-34.18 6.3-44.81 14.11-10.64 34.18-7.82 44.81 6.3l39.98 53.05 91.72-84.94c12.97-12.01 33.21-11.23 45.22 1.74 12.01 12.97 11.23 33.21-1.74 45.22L723.91 813.9a52.096 52.096 0 0 1-35.35 13.85z"
                    p-id="2772" fill="#ffffff"></path>
                </svg>
              </div>
              <p v-if="item.title" class="title" :class="{ 'len': item.length }">
                {{ item.title }} <span v-if="item.length" class="tip">{{ item.length }}</span>
              </p>
              <p>{{ item.statusName }}</p>
              <p>{{ item.desc }}</p>
              <p>{{ item.principal }}</p>
            </div>
            <div v-if="item.subFlowData.length" class="extra">
              <div class="row" v-for="row, i in item.subFlowData" :key="i">
                <div class="box" v-for="box, ii in row" :key="ii">
                  <h3 class="title">{{ box.nodeName }}</h3>
                  <p>创建时间：{{ box.nodeDate }}</p>
                  <p style="width: 4rem;line-height: 1.3rem;">{{ box.principal }}</p>
                </div>
              </div>
            </div>
          </li>
          <span class="filling_line" style="transform: scaleX(0.28);"></span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressEdit',
  props: ['orderCode', 'url', 'money', 'salesman', 'customer', 'currency'],
  data() {
    return {
      finishStatus: ['审核', '自然关闭', '短缺关闭', '已完成', '全部核销', '月结客户', '完工', '已核准', '全部认款', '已提交', '已创建', '全部发货(自然关闭)'],
      waitStatus: ['审核中', '进行中', '部分认款', '部分核销'],
      orderStyle: {},
      orders: [],
      currentList: [],
      nodes: []
    }
  },
  created() {
    this.url = 'http://cscrm.sitzone.cn:30611';
    this.orderCode = '8888';
    this.$request({
      method: 'get',
      url: this.url + '/custom/crm/getOrderCurrentProgress',
      params: {
        orderCode: this.orderCode
      }
    })
      .asyncThen(res => {
        if (res.data) {
          var list = []
          res.data.forEach((item, index) => {
            if (this.finishStatus.indexOf(item.status) > -1) {
              item.checkStatus = 1
            } else {
              item.checkStatus = 0
            }
          })
          res.data.forEach((item, index) => {
            if (this.finishStatus.indexOf(item.status) > -1) {
              item.checkStatus = 'completed'
            } else if (this.waitStatus.indexOf(item.status) > -1) {
              item.checkStatus = 'active'
            } else {
              item.checkStatus = 'unactive'
            }
            if (item.nodeName == '创建' || item.nodeName == '提交') {
              item.checkStatus = 'completed'
            }
            let len = 0
            if (item.list) {
              len = item.list.length
            }
            let dateDetail = ''
            if (item.dateDsc) {
              dateDetail = item.dateDsc.concat(item.nodeDate)
            }
            if (item.nodeName == '出货' || item.nodeName == '采购订单' || item.nodeName == '审核情况') {
              item.status = ''
            }
            var node = {
              title: item.nodeName,
              desc: dateDetail,
              principal: item.principal,
              status: item.checkStatus,
              statusName: item.status,
              children: item.list,
              length: len,
              subFlowData: item.subFlowData || []
            }
            this.nodes.push(node)
          })
        }
      })
  }
}
</script>

<style lang="scss">
.progress-app {
  background: linear-gradient(180deg, #C7D7FF 0%, #FAFAFA 31%);
  overflow: hidden;
  max-height: 80vh;

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
    max-height: 45vh;
    overflow: auto;

    position: relative;

    li {
      list-style: none;
    }

    .time_line_box {
      position: relative;
      height: 100vh;
      // overflow: hidden;
    }

    .time_line {
      list-style: none;
      margin-left: 12px;
      padding-left: 30px;
      border-left: 2px solid #E0E0E0;

      li {
        margin-bottom: 40px;
        position: relative;
        display: flex;
      }
    }

    .extra {
      position: relative;
      border: 1px solid #E0E0E0;
      padding: 5px 3px;
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      &:after {
        position: absolute;
        content: ' ';
        width: 10px;
        height: 1px;
        background: #E0E0E0;
        top: 50%;
        left: -10px;
      }

      .row+.row {
        margin-top: 10px;
      }

      .row {
        display: flex;


        .box+.box {
          margin-left: 10px;

          &:after {
            position: absolute;
            content: ' ';
            width: 10px;
            height: 1px;
            background: #E0E0E0;
            top: 50%;
            left: -10px;
          }
        }

        .box {
          position: relative;
          border: 1px solid #dddddd;
          border-radius: 6px;
          padding: 5px 7px;

          .title {
            text-align: center;
            font-weight: bolder;
            font-size: 1rem;
          }

          p,
          h3 {
            margin-bottom: 10px;
            color: #666666;
            font-size: 12px;
          }
        }


      }
    }

    .order_item {
      top: 0;
      z-index: 2;
      text-align: center;
      font-size: 13px;
      padding-top: 15px;
      text-align: left;



      p {
        margin-bottom: 10px;
        color: #666666;
      }

      .circle {
        height: 40px;
        width: 40px;
        background: #F5F5F5;

        box-sizing: border-box;
        /* 中性色/G5-按钮框 输入框 边框线 */
        border: 1px solid #E0E0E0;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: -52px;

      }

      .finished {
        background: #3370FF;
        color: white;
      }

      .selected {
        box-sizing: border-box;
        /* 主题色/B6-品牌默认色 */
        border: 1px solid #3370FF;
      }

      .title {
        font-weight: bolder;
        font-size: 14px;
        position: relative;

        .tip {
          position: absolute;
          padding: 3px;
          margin-left: 5px;
          margin-bottom: -5px;
          color: white;
          font-size: 6px;
          font-weight: bolder;
          border: 1rpx solid #999999;
          background: #027AFF;
          width: 10px;
          height: 10px;
          line-height: 10px;
          border-radius: 50%;
          text-align: center;
        }
      }
    }

    .filling_line {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      height: 100%;
      background-color: #027AFF;
      transform-origin: left center;
      transition-property: transform;
      transition-duration: 0.3s;
      transition-timing-function: initial;
      transition-delay: initial;
    }

    .time_tip {
      height: 100px;
      line-height: 70px;
      text-align: center;
      color: #151BFD;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
