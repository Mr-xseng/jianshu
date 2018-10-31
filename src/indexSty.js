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
  src: url('./iconfont.eot?t=1540987616621'); /* IE9*/
  src: url('./iconfont.eot?t=1540987616621#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1540987616621') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1540987616621#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`
