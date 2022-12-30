/**
 * Hyper Terminal Congiguration
 * See https://hyper.is#cfg for all currently supported options.
 * Color palettes and CSS adapted from:
 * - https://github.com/catppuccin/hyper/blob/main/index.js
 * - https://github.com/lucleray/hyper-active-tab/blob/master/index.js
 */

'use strict';

const palettes = {
    catppuccinMocha: {
        backgroundColor: '#1e1e2e',
        foregroundColor: '#cdd6f4',
        selectionColor: '#585b70',
        cursorColor: '#f5e0dc',
        cursorAccentColor: '#11111b',
        colors: {
            black: '#45475a',
            blue: '#89b4fa',
            red: '#f38ba8',
            green: '#a6e3a1',
            yellow: '#f9e2af',
            magenta: '#f5c2e7',
            cyan: '#94e2d5',
            white: '#bac2de',
            lightBlack: '#585b70',
            lightWhite: '#a6adc8',
            lightBlue: '#89b4fa',
            lightRed: '#f38ba8',
            lightGreen: '#a6e3a1',
            lightYellow: '#f9e2af',
            lightMagenta: '#f5c2e7',
            lightCyan: '#94e2d5',
        },
      },
}

const theme = palettes.catppuccinMocha;
const activeTabSymbol = '✨'

const css = `
    .hyper_main {
        border: none !important;
    }
    .header_header {
        color: ${theme.foregroundColor};
    }
        .header_windowHeaderWithBorder {
        border-color: ${theme.backgroundColor} !important;
    }
    .tabs_borderShim {
        border-color: transparent !important;
    }
    .tab_tab {
        border: 0;
    }
    .tab_tab.tab_active {
        background: ${theme.backgroundColor};
        color: ${theme.foregroundColor};
        transition: all 140ms ease;

        span span:before {
            content: '${activeTabSymbol} ';
        }
    }
    .tab_tab:not(.tab_active) {
        background: ${theme.colors.black};
        color: ${theme.colors.lightWhite};
    }
    .tab_tab:not(.tab_active):hover {
        background: ${theme.colors.lightBlack};
        color: ${theme.foregroundColor};
        transition: background 140ms ease;
    }
    .tab_icon {
        width: 15px;
        height: 15px;
    }
    .tab_shape {
        width: 7px;
        height: 7px;
    }
    .splitpane_divider {
        background-color: ${theme.colors.lightBlack} !important;
    }
    `;

module.exports = {
    config: {

        // 'stable' or 'canary'
        updateChannel: 'stable',

        // whether to disable auto updates
        disableAutoUpdates: false,

        // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
        // if left empty, your system's login shell will be used by default
        shell: '/bin/zsh',

        // shell arguments (e.g. set `shellArgs: ['-i']` to use interactively)
        shellArgs: ['--login'],

        // set custom startup directory (must be an absolute path)
        workingDirectory: '',

        // environment variables
        env: {},

        // turn off the bell
        bell: false,

        // whether to preserve the working directory when creating splits or tabs
        preserveCWD: true,

        // whether to use WebGL renderer (true) or canvas-based rendering (false)
        webGLRenderer: true,

        // which keypress is required to activate weblinks: [ctrl|alt|meta|shift]
        webLinksActivationKey: '',

        // custom padding in CSS format, i.e.: `top right bottom left`
        padding: '12px 14px',

        // default font size in pixels for all tabs
        fontSize: 12,

        // font family with optional fallbacks
        fontFamily: 'Menlo, monospace',

        // whether to use a blinking cursor
        cursorBlink: false,

        // 'BEAM' for |, 'UNDERLINE' for _, 'BLOCK' for █
        cursorShape: 'BLOCK',

        // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: theme.cursorColor,

        // terminal text color under BLOCK cursor
        cursorAccentColor: theme.cursorAccentColor,

        // terminal background color
        backgroundColor: theme.backgroundColor,

        // terminal text color
        foregroundColor: theme.foregroundColor,

        // terminal selection color
        selectionColor: theme.selectionColor,

        // border color for windows and tabs
        borderColor: theme.backgroundColor,

        // color palette
        colors: theme.colors,

        // custom css
        css: css,

    },

    plugins: [],
};

//# sourceMappingURL=config-default.js.map
