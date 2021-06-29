      HTMLElement.prototype.onshortcut = function(shortcut, handler) {
    var currentKeys = []
    
    function reset() {
        currentKeys = []
    }

    function shortcutMatches() {
        currentKeys.sort()
        shortcut.sort()

        return (
            JSON.stringify(currentKeys) ==
            JSON.stringify(shortcut)
        )
    }

    this.onkeydown = function(ev) {
        currentKeys.push(ev.key)

        if (shortcutMatches()) {
            ev.preventDefault()
            reset()
            handler(this)
        }

    }

    this.onkeyup = reset
}


document.body.onshortcut(["Alt", "r"], el => {
    
    window.open(
  'https://replit.com/@Retrospicer/Official',
  '_blank');
})
