import React from 'react'
import {func, string} from 'prop-types'
import * as Style from './ThemeToggler.styles'

const ThemeToggler = ({theme, toggleTheme}) => {
  return (
    <Style.ToggleButton onClick={toggleTheme}>
      Switch Theme
    </Style.ToggleButton>
  )
}
ThemeToggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default ThemeToggler