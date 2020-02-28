const color = {
    gray1: '#F8F9FC', //sidebar bg
    gray2: '#F3F4F7', //sidebar active
    gray3: '#F2F5FA',  //icon bg
    gray4: '#7888A6',  //icon fill
    gray5: 'rgba(216, 221, 230, 0.6)',  //sidebar border
    gray6: '#D8DDE6',  //article line
    blue1: '#3973FF',
}

const fontColor = {
    black1: "#292F3A",
    black2: "#696D75",
    black3: "#A2A6AD",
}

const ease = {
    normal: 'all 0.25s ease',
    easeOutBack(timing) { return `all ${timing} cubic-bezier(0.175, 0.885, 0.32, 1.275)` },
    easeOutQuart(timing) { return `all ${timing} cubic-bezier(0.165, 0.84, 0.44, 1)` },
}

export { color, fontColor, ease };