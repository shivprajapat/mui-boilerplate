import GlobalStyles from "@mui/material/GlobalStyles";
import React from 'react'

export const GlobalTheme = ({ theme }) => {
    return (
        <GlobalStyles
            styles={{
                html: { '-webkit-font-smoothing': 'antialiased', '-moz-osx-font-smoothing': 'grayscale', },
                "::selection": { backgroundColor: `${theme.palette.grey[500]}`, color: 'red' },
                "::-webkitScrollbar": { width: 0 },
                'html,body': { overflowX: 'hidden' },
                '*, *::before, *::after': { margin: 0, padding: 0, boxSizing: 'border-box' },
                'h1,h2,h3,h4,h5,h6,div,span,p': { padding: 0, margin: 0 },
                a: {
                    textDecoration: 'none', outline: 'none',
                    "&:focus,&:hover, &:active, &:visited, &:hover": { textDecoration: 'none', outline: 'none' }
                },
                button: { border: 'none', outline: 'none' },
                ul: { padding: 0, listStyle: 'none' },
            }}
        />
    )
}