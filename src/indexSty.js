import {createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`

export const IconfontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1540887378871'); /* IE9*/
  src: url('iconfont.eot?t=1540887378871#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1540887378871') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1540887378871#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`
