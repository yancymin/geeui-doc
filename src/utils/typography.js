import Typography from "typography"
import { color, fontColor } from "../styles/globalStyle"

const typography = new Typography({
    title: 'GEEUI',
    baseFontSize: '16px',
    baseLineHeight: 1.66,
    headerFontFamily: ['-apple-system', 'sans-serif'],
    bodyFontFamily: ['-apple-system', 'sans-serif'],
    includeNormalize: true,
    overrideStyles: () => ({
        img: {
            margin: '0'
        },
        h1: {
            fontWeight: '600',
            fontSize: '40px',
            lineHeight: '40px',
            color: fontColor.black1
        },
        h2: {
            fontSize: '24px',
            lineHeight: '24px',
            fontWeight: '500',
            margin: '48px 0 32px 0',
            color: fontColor.black1
        },
        h3: {
            fontSize: '18px',
            lineHeight: '18px',
            fontWeight: '500',
            margin: '32px 0 24px 0',
            color: fontColor.black1
        },
        h4: {
            fontSize: '16px',
            lineHeight: '16x',
            fontWeight: '500',
            margin: '24px 0 16px 0',
            color: fontColor.black1
        },
        p: {
            fontWeight: '300',
            color: fontColor.black2,
            letterSpacing: '0.01em'
        },
        ul: {
            marginBottom: 0
        },
        li: {
            fontWeight: '300',
            color: fontColor.black2,
            letterSpacing: '0.01em',
            marginBottom: '8px',
        },
        hr: {
            backgroundColor: color.gray6,
            margin: '32px 0 48px 0'
        },
        a: {
            fontWeight: '300',
            color: fontColor.black2,
            letterSpacing: '0.01em',
            textDecoration: 'none',
        },
        blockquote: {
            paddingLeft: "16px",
            marginLeft: 0,
            borderLeft: `4px solid ${color.gray6}`,
        },
    })
})

export default typography
export const rhythm = typography.rhythm