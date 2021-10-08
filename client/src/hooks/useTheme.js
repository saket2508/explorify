import { useState, useEffect } from 'react';

export default function useTheme() {

    const getInitialTheme = ()  => {
        // if theme variable found in local storage
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedPrefs = window.localStorage.getItem('color-theme')
          if (typeof storedPrefs === 'string') {
            return storedPrefs
          }
        }

        // otherwise get system theme preference
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return 'dark'
        }
        else{
          return 'light'
        }
      }

    const [ theme, setTheme ] = useState(getInitialTheme)
    const colorTheme = theme ==='dark' ? 'light' : 'dark'
    
    useEffect(() => {
       const root = window.document.documentElement
       root.classList.remove(colorTheme)
       root.classList.add(theme)
       localStorage.setItem('color-theme', theme)

    }, [theme, colorTheme])

    return {colorTheme, setTheme}
}
