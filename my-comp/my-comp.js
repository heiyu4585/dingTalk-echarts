import * as echarts from 'echarts'
Component({
  mixins: [],
  data: {
    canvasId:'canvas-' + new Date().getTime()
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    initChart: async function(canvas, width, height, dpr) {
      console.log('---------:initChart',)
      const chart = echarts.init(canvas, null, {
        width,
        height,
        devicePixelRatio: dpr
      });
      canvas.setChart(chart);
      // 绘制图表

      const  option = {
        xAxis: {
          data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [
          {
            type: 'scatter',
            data: [220, 182, 191, 234, 290, 330, 310],
            symbolSize: function(value) {
              return value / 10;
            }
          }
        ]
      };
      chart.setOption(option, true);
      chart.on('click', function (params) {
        console.log('params',params)
      });
      return chart;
    },
  },
});
