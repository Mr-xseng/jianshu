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
  src: url('./iconfont.eot?t=1540562304518'); /* IE9*/
  src: url('./iconfont.eot?t=1540562304518#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1540562304518') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1540562304518#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`