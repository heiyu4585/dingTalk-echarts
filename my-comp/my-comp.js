import * as echarts from 'echarts'
import 'echarts-liquidfill'

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
      // canvas.setChart(chart);
      // // 散点图
      // const  option = {
      //   xAxis: {
      //     data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       type: 'scatter',
      //       data: [220, 182, 191, 234, 290, 330, 310],
      //       symbolSize: function(value) {
      //         return value / 10;
      //       }
      //     }
      //   ]
      // };
      // 水位图
      const option = {
        backgroundColor: "#0e2147",
        title: {
          show: true,
          text: '违规项',
          x: '50%',
          y: '60%',
          z: 10,
          textAlign: 'center',
          textStyle: {
            color: '#ffffff',
            fontSize: 68,
            fontWeight: 500
          },
        },
        series: [{
          name: '违规项',
          type: 'liquidFill',
          radius: '60%',
          center: ['50%', '45%'],
          data: [70/100],
          label:{
            normal:{
              textStyle:{
                color: '#ffffff',
                fontSize: 68,
              }
            }
          },
          color: ['#4366f3'],
          backgroundStyle: {
            color: 'rgba(39,115,229,0.12)'
          },
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 5,
              borderColor: 'rgba(49,102,255,0.5)',
            }
          },
          // amplitude: 0,
        }]
      };

      chart.setOption(option, true);
      chart.on('click', function (params) {
        console.log('params',params)
      });
      return chart;
    },
  },
});
