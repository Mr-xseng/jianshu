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
  src: url('./iconfont.eot?t=1541133438774'); /* IE9*/
  src: url('./iconfont.eot?t=1541133438774#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1541133438774') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1541133438774#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}





`
