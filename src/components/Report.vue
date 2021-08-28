<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <div class="header-title" v-text="report_title"></div>
        <div class="header-time">
          <a-icon type="clock-circle"/>
          <span>&nbsp;统计时间&nbsp;</span>
          <span v-text="report_time"></span>
        </div>
      </a-layout-header>
      <a-layout-content>
        <a-tabs :activeKey="activeKey" @change="callback">
          <a-tab-pane key="0" tab="测试总数">
          </a-tab-pane>
          <a-tab-pane key="1" tab="第一轮">
            <div>
              <a-row>
                <a-col :span="2">
                  <div class="progress-title">当前实际进度</div>
                </a-col>
                <a-col :span="4">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="percentage"
                               :status="status"></el-progress>
                </a-col>
                <a-col :span="3">
                  <div class="progress-title">测试结果: {{ report_result }}</div>
                </a-col>
              </a-row>
            </div>
            <div class="space-style">
              &nbsp;
            </div>
            <div>
              <a-row>
                <a-col :span="6">
                  <div>测试策略</div>
                  <div>功能验证：
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    计划内切换：xxxxxxxxxxxxxxxxxx
                    xxxxxxxxxx
                    xxxxxxxxxxxxxxx
                    xxxxxxxxxxxxx

                  </div>
                </a-col>
                <a-col :span="6">
                  <div>容灾基线</div>
                  <div>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                </a-col>
                <a-col :span="6">
                  <div>环境信息</div>
                  <div>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="第二轮">
          </a-tab-pane>
        </a-tabs>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

  </div>

</template>


<script>

export default {
  name: "Report",
  data() {
    return {
      report_title: "V3test测试report",
      report_time: "2021-08-20 17:32:26",
      activeKey: "1",
      lastActiveKey: "1",
      percentage: 100,
      report_result: "通过",
      status: "warning"
    };
  },
  // mounted() {
  // },
  methods: {
    callback(key) {
      if (key == "0") {
        return
      }
      this.lastActiveKey = this.activeKey;
      this.activeKey = key;
    },

  },
}
</script>

<style scoped>
.header-title {
  float: left;
  font-size: 33px;
}

.header-time {
  float: right;
  font-size: 14px;
}

.progress-title {
  text-align: center;
}

.space-style {
  line-height: 20px;

}

#components-layout-demo-basic {
  text-align: left;
}

#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}

#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}

#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}

#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}

#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}

#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>