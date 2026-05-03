import { Link } from 'react-router-dom'
import { preloadRoute } from '../routePreload'

const variantClasses = {
  primary: 'btn btn-primary',
  ghost: 'btn btn-ghost',
  subtle: 'btn btn-subtle',
}

function getClassName(variant, className) {
  const resolvedVariant = variantClasses[variant] ?? variantClasses.primary
  return `${resolvedVariant}${className ? ` ${className}` : ''}`
}

function maybePrefetchRoute(path) {
  if (!path || !path.startsWith('/')) {
    return
  }

  void preloadRoute(path)
}

function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  prefetchPath,
  onMouseEnter,
  onFocus,
  ...rest
}) {
  const targetRoute = prefetchPath ?? to
  const resolvedClassName = getClassName(variant, className)

  const handleMouseEnter = (event) => {
    maybePrefetchRoute(targetRoute)
    onMouseEnter?.(event)
  }

  const handleFocus = (event) => {
    maybePrefetchRoute(targetRoute)
    onFocus?.(event)
  }

  if (to) {
    return (
      <Link
        to={to}
        className={resolvedClassName}
        onMouseEnter={handleMouseEnter}
        onFocus={handleFocus}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={resolvedClassName}
        onMouseEnter={handleMouseEnter}
        onFocus={handleFocus}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={resolvedClassName}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
