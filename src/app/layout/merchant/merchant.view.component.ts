import {Component} from '@angular/core';
import {MerchantView, MerchantService} from './merchant.service';

@Component({
  selector: 'app-merchant-view',
  templateUrl: './merchant.view.component.html',
  styleUrls: ['./merchant.view.component.css']
})

export class MerchantViewComponent {
  tabIndex: any;
  chartOption = {
    xAxis: {
      show: false,
      type: 'category',
      data: ['12/25', '12/26', '12/27', '12/28', '12/29', '12/30', '12/31']
    },
    yAxis: {
      show: false,
      min: 1500,
      type: 'value'
    },
    grid: {
      x: 0,
      y: 0,
      x2: 0,
      y2: 0
    },
    tooltip: {
      trigger: 'axis'
    },
    series: [{
      data: [1709, 1629, 1729, 1684, 1805, 1660, 1690],
      areaStyle: {},
      type: 'line',
      smooth: true
    }]
  };

  txnAmtOption = {
    title: {
      text: '网点商户交易情况',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['活跃商户数', '活跃率']
    },
    xAxis: {
      type: 'category',
      data: ['营业部',	'建西',	'三合',	'大河',	'周覃',	'三洞',	'廷牌',
        '丰乐',	'合江',	'普安',	'中和',	'九阡',	'都江',	'城东',	'塘州',	'人和'
      ],
      axisPointer: {
        type: 'shadow'
      }
    },
    yAxis: [{
      name: '交易金额',
      type: 'value',
      min: 0,
      max: 200,
      interval: 20
    }, {
      name: '交易笔数',
      type: 'value',
      min: 0,
      max: 3000,
      interval: 300
    }],
    series: [{
      data: [152.18,	49.42,	12.59,	34.97,	12.78,	16.99,	37.64, 15.71,
        10.73,	13.81,	8.1,	12.25,	26.79,	122.68,	17.25, 9.34
      ],
      type: 'bar'
    }, {
      data: [2902,	850,	334,	1308,	393,	490,	644,
        657,	496,	675,	683,	839,	698,	1748,	845,	412
      ],
      type: 'line',
      yAxisIndex: 1
    }]
  };

  activeMchtOption = {
    title: {
      text: '网点商户活跃情况',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['活跃商户数', '活跃率'],
      top: 40,
      right: 200
    },
    grid: {
      // x: 0,
      y: 80
      // x2: 0,
      // y2: 80
    },
    xAxis: {
      type: 'category',
      data: ['营业部',	'建西',	'三合',	'大河',	'周覃',	'三洞',	'廷牌',
        '丰乐',	'合江',	'普安',	'中和',	'九阡',	'都江',	'城东',	'塘州',	'人和'
      ],
      axisPointer: {
        type: 'shadow'
      }
    },
    yAxis: [{
      name: '活跃商户数',
      type: 'value',
      min: 0,
      max: 300,
      interval: 30
    }, {
      name: '活跃率(%)',
      type: 'value',
      min: 0,
      max: 100,
      interval: 10
    }],
    series: [{
      name: '活跃商户数',
      data: [289,	139,	78,	137,	75,	69,	105,	101,	92,	74,	89,	118,	88,	121,	74,	41],
      type: 'bar'
    }, {
      name: '活跃率',
      data: [57.04, 65.50, 56.46, 68.32, 58.92, 52.40, 71.71, 70.10,
        67.07, 63.64, 58.16, 66.07, 61.51, 62.04, 63.32, 48.07
      ],
      type: 'line',
      yAxisIndex: 1
    }]
  };
  data: any;

  constructor(private merchantService: MerchantService) {
    this.tabIndex = 0;
  }
}

