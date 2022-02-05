<template>
  <div v-outClickClose="close">
    <!-- 头部 -->
    <div>
      <input :value="showTime" type="text" @focus="shouContext" class="dateinput" />
    </div>
    <!-- 底部 -->
    <div v-show="contextShow" class="pannel-context">
      <div class="pannel-nav">
        <span @click="preventYear">&lt;</span>
        <span @click="preventMenth">&lt;&lt;</span>
        <span>{{ mytime.y + "年" }}</span>
        <span>{{ mytime.m + "月" }}</span>
        <span @click="nextMenth">&gt;&gt;</span>
        <span @click="nextYear">&gt;</span>
      </div>
      <div>
        <div>
          <span class="panel-week" v-for="i in 7" :key="i">{{ weeks[i - 1] }}</span>
        </div>
        <div v-for="i in 6" :key="i">
          <span v-for="j in 7" :key="j + '_'">
            <span
              :class="[
                { active: currentMonth(firstDate[(i - 1) * 7 + (j - 1)]) },
                { unactive: !currentMonth(firstDate[(i - 1) * 7 + (j - 1)]) },
                { nowday: currentday(firstDate[(i - 1) * 7 + (j - 1)]) },
                'panel-week',
              ]"
              @click="changeShowTime(firstDate[(i - 1) * 7 + (j - 1)])"
            >
              {{ formartTime(firstDate[(i - 1) * 7 + (j - 1)]).d }}
            </span>
          </span>
        </div>
      </div>
      <div @click="defaulttime" class="footer">今天</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Date,
      require: true,
    },
  },
  data() {
    let { y, m } = this.formartTime(this.value);
    return {
      mytime: {
        y,
        m,
      },
      contextShow: true,
      weeks: ["周天", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  mounted() {
    console.dir(this.firstDate);
  },
  methods: {
    // 控制底部日历是否显示
    shouContext() {
      this.contextShow = true;
    },
    close() {
      this.contextShow = false;
    },
    // 将传入的时间进行格式化
    formartTime(date) {
      date = new Date(date);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      return { y, m, d };
    },
    // 根据年月日来转成时间格式
    getDate(y, m, d = 1) {
      return new Date(y, m - 1, d);
    },
    // 根据传过来的时间戳判断是否为当前月
    currentMonth(date) {
      let d = this.getDate(this.mytime.y, this.mytime.m);
      let { m, y } = this.formartTime(date);
      let { m: mc, y: yc } = this.formartTime(d);
      return m === mc && y == yc;
    },
    currentday(date) {
      let { m, y, d } = this.formartTime(date);
      let { m: mc, y: yc, d: dc } = this.formartTime(this.value);
      return m === mc && y === yc && d === dc;
    },
    changeShowTime(value) {
      let target = new Date(value);
      this.mytime = this.formartTime(value); // 更新选中时间
      this.$emit("input", target);
      this.close();
    },
    // 上一个月
    preventMenth() {
      let d = this.getDate(this.mytime.y, this.mytime.m);
      d.setMonth(d.getMonth() - 1);
      this.mytime = this.formartTime(d);
    },
    nextMenth() {
      let d = this.getDate(this.mytime.y, this.mytime.m);
      d.setMonth(d.getMonth() + 1);
      this.mytime = this.formartTime(d);
    },
    // 上一年
    preventYear() {
      let d = this.getDate(this.mytime.y, this.mytime.m);
      d.setFullYear(d.getFullYear() - 1);
      this.mytime = this.formartTime(d);
    },
    nextYear() {
      let d = this.getDate(this.mytime.y, this.mytime.m);
      d.setFullYear(d.getFullYear() + 1);
      this.mytime = this.formartTime(d);
    },
    defaulttime() {
      let value = new Date();
      this.$emit("input", value);
      this.mytime = this.formartTime(value);
    },
  },
  directives: {
    //如果点击到document则关闭列表额
    outClickClose: {
      inserted(el, option) {
        const targetFun = function (e) {
          if (e.target === el || el.contains(e.target)) {
            return;
          } else {
            option.value();
          }
        };
        document.addEventListener("click", targetFun);
        // 保存关闭函数
        el.targetClickFn = targetFun;
      },
      unbind(el) {
        //移除事件
        document.removeEventListener("click", el.targetClickFn);
      },
    },
  },
  computed: {
    showTime: function () {
      let { y, m, d } = this.formartTime(this.value);
      this.yesar = y;
      this.moth = m;
      return `${y}年/${m}月/${d}日`;
    },
    // 获取当前页面显示的42个时间戳
    firstDate: function () {
      let d = this.getDate(this.mytime.y, this.mytime.m);
      let { y, m } = this.formartTime(d);
      let firstData = this.getDate(y, m, 1); // 每月开始时间
      let week = firstData.getDay(); // 开始时间为周几
      let startData = firstData - week * 24 * 3600 * 1000; // 日历开始绘制时间
      let arr = [];
      for (var i = 0; i < 42; i++) {
        arr[i] = startData + i * 1000 * 24 * 3600;
      }
      return arr;
    },
  },
};
</script>

<style scoped>
.dateinput {
  height: 25px;
  line-height: 25px;
  padding-left: 15px;
}
.pannel-context {
  position: absolute;
  background-color: #fff;
  border: 1px solid #000;
}
.panel-week {
  width: 40px;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
}
.panel-week:hover {
  border: 1px solid pink;
}
.footer {
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: center;
  user-select: none;
}
.pannel-nav {
  display: flex;
  cursor: pointer;
  justify-content: space-around;
}
.active {
  color: #000;
  font-weight: 700;
}
.unactive {
  color: #888;
}
.nowday {
  background-color: red;
  border-radius: 5px;
}
</style>
