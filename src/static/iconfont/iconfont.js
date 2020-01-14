import {createGlobalStyle} from 'styled-components';

export  const GlobalIconFont = createGlobalStyle`

@font-face {font-family: "iconfont";
  src: url('http://iconfont.eot?t=1578899291882'); /* IE9 */
  src: url('http://iconfont.eot?t=1578899291882#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('http://iconfont.woff?t=1578899291882') format('woff'),
  url('http://iconfont.ttf?t=1578899291882') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('http://iconfont.svg?t=1578899291882#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-list:before {
  content: "\e678";
}

.icon-mima:before {
  content: "\e61b";
}

.icon-jianhao:before {
  content: "\e604";
}

.icon-jiahao:before {
  content: "\e605";
}

.icon-gouwuche:before {
  content: "\e619";
}

.icon-caidan:before {
  content: "\e601";
}

.icon-caidan1:before {
  content: "\e606";
}

.icon-_waimai:before {
  content: "\e61e";
}

.icon-huobao:before {
  content: "\e61f";
}

.icon-gouwuche1:before {
  content: "\e607";
}

.icon-kuaican:before {
  content: "\e646";
}

.icon-yonghu:before {
  content: "\e610";
}

.icon-huobao1:before {
  content: "\e625";
}

`;