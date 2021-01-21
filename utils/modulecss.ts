/**
 * Type declaration
 */
type Styles = {
  [key: string]: string
}

/**
 * Function for join multiple CSS Modules classes without typing
 * crazy string literal
 * e.g. `${styles.foo} ${styles.bar}` become `css('foo', 'bar')`
 *
 * @param {Styles} styles Default export from '*.module.css' files
 *
 * @example [ How to use ]
 * import CSSModuleMapper from './path/to/this/file'
 * import styles from '*.module.css'
 *
 * const css = CSSModuleMapper(styles)
 * // use in JSX
 * <div className={css('foo', 'bar')}>Test</div>
 */
const ModuleCSS = (styles: Styles) => (...classesName: string[]) => {
  return classesName
    .reduce((classes, c) => [...classes, ...c.split(' ')], [])
    .map((name) => styles[name])
    .filter((name) => name !== '')
    .join(' ')
}

export { ModuleCSS }
