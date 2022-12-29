/**
 * Hyper Terminal Congiguration
 * See https://hyper.is#cfg for all currently supported options.
 */

"use strict";

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
        fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

        // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: 'rgba(248,28,229,0.8)',

        // whether to use a blinking cursor
        cursorBlink: false,

        // 'BEAM' for |, 'UNDERLINE' for _, 'BLOCK' for █
        cursorShape: 'BLOCK',

        // terminal text color under BLOCK cursor
        cursorAccentColor: '#000',

        // terminal background color
        backgroundColor: '#000',

        // terminal text color
        foregroundColor: '#fff',

        // terminal selection color
        selectionColor: 'rgba(248,28,229,0.3)',

        // border color for windows and tabs
        borderColor: '#1e1e2e',

        // color palette
        colors: {
            black: '#000000',
            red: '#C51E14',
            green: '#1DC121',
            yellow: '#C7C329',
            blue: '#0A2FC4',
            magenta: '#C839C5',
            cyan: '#20C5C6',
            white: '#C7C7C7',
            lightBlack: '#686868',
            lightRed: '#FD6F6B',
            lightGreen: '#67F86F',
            lightYellow: '#FFFA72',
            lightBlue: '#6A76FB',
            lightMagenta: '#FD7CFC',
            lightCyan: '#68FDFE',
            lightWhite: '#FFFFFF',
            limeGreen: '#32CD32',
            lightCoral: '#F08080',
        },

        // catppuccin theme (hypurr) variations:
        // 'Latte', 'Frappé', 'Macchiato', or 'Mocha'
        catppuccinTheme: 'Mocha'

    },

    plugins: ['hypurr'],
};

//# sourceMappingURL=config-default.js.map
