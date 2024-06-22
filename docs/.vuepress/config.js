const moment = require('moment');

module.exports = {
  title: '梁昊霖的网站',
  theme: 'antdocs',
  extend: '@vuepress/theme-default',
  description: '芜湖塔台申请起飞',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    [
      'vuepress-plugin-helper-live2d',
      {
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'tororo',//hijiki变身黑猫警长，tororo欢欢
          display: {
            position: 'left', // 显示位置：left/right
            width: 150, // 模型的长度
            hOffset: 20, //  水平偏移
            vOffset: -60, //  垂直偏移
          },
          mobile: {
            show: false // 是否在移动设备上显示
          },
          react: {
            opacity: 1 // 模型透明度
          },
        },
      },
    ],
    //   [
    //     'vuepress-plugin-comment',
    //     {
    //       choosen: 'gitalk', 
    //       options: {
    //         clientID: 'GitHub Application Client ID',
    //         clientSecret: 'GitHub Application Client Secret',
    //         repo: 'GitHub repo',
    //         owner: 'GitHub repo owner',
    //         admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
    //         distractionFreeMode: false 
    //       }
    //     }
    //   ],
    //   ['vuepress-plugin-awesome-musicplayer']
  ],
  themeConfig: {
    backToTop: true,
    logo: '/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '网盘', link: 'https://www.baidu.com' },
      { text: '音乐', link: '/music/' },
      {
        text: '文章', link: '/blog/',
        items: [
          { text: '看看代码', link: '/blog/看看代码/' },
          { text: '开发小坑', link: '/blog/开发小坑/' },
        ]
      },
      { text: '关于我', link: '/aboutMe/' }
    ],
    sidebar: {
      '/blog/': [
        '',
        '看看代码',
        '开发小坑'
      ]
    }
  }
}