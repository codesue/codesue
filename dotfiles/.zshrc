# ALIASES

alias blog="open https://codesue.com"
eval $(thefuck --alias oops)
alias gb="git branch"
alias gs="git status"
alias gd="git diff"

# TITLE

autoload -U add-zsh-hook

set-window-title() {
  # this looks like `directory`
  window_title="\e]0;${PWD##*/}\a"
  echo -ne "$window_title"
}

PR_TITLEBAR=''
set-window-title
add-zsh-hook precmd set-window-title

# USER PROMPT

setopt PROMPT_SUBST

# this looks like `directory > `
PS1="%1~%  %B%F{green}>%f%b "

# AUTOCOMPLETION

# 1) init autocompletion
autoload -U compinit && compinit

# 2) setup history
setopt SHARE_HISTORY
HISTFILE=$HOME/.zhistory
SAVEHIST=1000
HISTSIZE=999
setopt HIST_EXPIRE_DUPS_FIRST

# 3) bind up and down arrow keys to history search
bindkey '\e[A' history-search-backward
bindkey '\e[B' history-search-forward

# PYTHON

# pyenv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

# pyenv-virtualenv
eval "$(pyenv virtualenv-init -)"
export VIRTUAL_ENV_DISABLE_PROMPT=1

# poetry
export PATH="$HOME/.poetry/bin:$PATH"

# JAVASCRIPT

# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

