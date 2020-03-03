import Typography from "typography"

const typography = new Typography({
    title: 'GEEUI',
    baseFontSize: '16px',
    baseLineHeight: 1.66,
    headerFontFamily: ['source-han-sans-simplified-c', 'sans-serif'],
    bodyFontFamily: ['source-han-sans-simplified-c', 'sans-serif'],
    includeNormalize: true,
    overrideStyles: () => ({
        img: {
            margin: '0'
        },
        h1: {
            fontWeight: '400',
            fontSize: '40px',
            lineHeight: '40px',
            color: `var(--black1)`,
            fontStyle: 'normal',
        },
        h2: {
            fontSize: '24px',
            lineHeight: '24px',
            fontWeight: '400',
            margin: '48px 0 32px 0',
            color: `var(--black1)`
        },
        h3: {
            fontSize: '18px',
            lineHeight: '18px',
            fontWeight: '400',
            margin: '32px 0 24px 0',
            color: `var(--black1)`
        },
        h4: {
            fontSize: '16px',
            lineHeight: '16x',
            fontWeight: '400',
            margin: '24px 0 16px 0',
            color: `var(--black1)`
        },
        p: {
            fontSize: '16px',
            fontWeight: '200',
            color: `var(--black2)`,
            letterSpacing: '0.01em'
        },
        ul: {
            marginBottom: 0
        },
        li: {
            fontSize: '16px',
            fontWeight: '200',
            color: `var(--black2)`,
            letterSpacing: '0.01em',
            marginBottom: '12px',
        },
        hr: {
            backgroundColor: `var(--gray6)`,
            margin: '32px 0 48px 0'
        },
        a: {
            fontWeight: '200',
            color: `var(--black2)`,
            letterSpacing: '0.01em',
            textDecoration: 'none',
        },
        blockquote: {
            paddingLeft: "16px",
            marginLeft: 0,
            borderLeft: `4px solid var(--gray6)`,
        }
    })
})

export default typography
export const rhythm = typography.rhythm 