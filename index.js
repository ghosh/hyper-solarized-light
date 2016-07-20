const backgroundColor = '#fdf6e3'
const foregroundColor = '#839496'
const cursorColor = '#d33682' // blue
const borderColor = 'rgba(38, 139, 210, 0.3)'
const activeTabBorderColor = '#6c71c4' // cyan

const colors = [
  backgroundColor,
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#657b83', // light gray
  '#586e75', // medium gray
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#ffffff', // white
  foregroundColor
]



exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
        -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
        text-rendering: optimizeLegibility !important;
        font-weight: 500;
      }
      .cursor-node {
        width: .325rem !important;
      }
      .tabs_list {
        border-color: transparent !important;
      }
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tabs_title {
        color: ${foregroundColor} !important;
      }
      .active_1gcgehd:before {
        border-bottom: transparent !important;
      }
      .tab_tab.tab_active {
        border: transparent !important;
        font-weight: bold;
        color: ${foregroundColor} !important;
        background-color: #e6dfcb;
        border-bottom: solid 3px ${activeTabBorderColor} !important;
      }
    `
  })
}

