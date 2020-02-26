import Typography from "typography"
// import kirkhamTheme from "typography-theme-kirkham"

const fontColor = {
    black1: "#292F3A",
    black2: "#696D75",
}

const typography = new Typography({
    title: 'GEEUI',
    baseFontSize: '16px',
    baseLineHeight: 1.6,
    headerFontFamily: ['-apple-system', 'sans-serif'],
    bodyFontFamily: ['-apple-system', 'sans-serif'],
    includeNormalize: true,
    overrideStyles: () => ({
        img: {
            margin: '0'
        },
        h1: {
            fontWeight: '500',
            fontSize: '40px',
            lineHeight: '40px',
            color: fontColor.black1
        },
        h2: {
            fontSize: '24px',
            lineHeight: '24px',
            fontWeight: '500',
            margin: '48px 0 32px 0'
        },
        h3: {
            fontSize: '18px',
            lineHeight: '18px',
            fontWeight: '500',
            margin: '32px 0 24px 0'
        },
        p: {
            fontWeight: '300',
            color: fontColor.black2
        },
        hr: {
            margin: '32px 0 48px 0'
        }
    })
})

export default typography
export const rhythm = typography.rhythm