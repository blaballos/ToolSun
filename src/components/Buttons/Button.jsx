const Button = ({
  text,
  variant = 'default',
  disabled = false,
  size = 'md',
  rounded = 'md',
  color = 'default',
}) => {
  const variants = {
    default: 'border-0 shadow-md backdrop-blur-sm',
    bordered: 'border border-current shadow-md',
    light: '',
    complete: 'backdrop-blur-xl'
  }

  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-lg'
  }

  const roundeds = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }

  const colors = {
    default: 'bg-neutral-100/20 dark:bg-zinc-700/30 ',
    primary: 'bg-blue-500/20 ',
    secondary: 'bg-indigo-500/20 ',
    success: 'bg-green-500/30 ',
    warning: 'bg-yellow-500/40 dark:bg-yellow-500/20 ',
    danger: 'bg-red-500/20 '
  }

  const shadowColors = {
    default:
      'shadow-lg shadow-zinc-700/30 shadow-current dark:shadow-neutral-100/20',
    primary: 'shadow-lg shadow-blue-500/30 shadow-current',
    secondary: 'shadow-lg shadow-indigo-500/20 shadow-current',
    success: 'shadow-lg shadow-green-500/30 shadow-current ',
    warning: 'shadow-lg shadow-yellow-500/20 shadow-current',
    danger: 'shadow-lg shadow-red-500/20 shadow-current'
  }

  const textColors = {
    default: 'text-gray-800 dark:text-gray-300',
    primary: 'text-blue-800 dark:text-blue-500',
    secondary: 'text-indigo-800 dark:text-indigo-500',
    success: 'text-green-800 dark:text-green-500',
    warning: 'text-yellow-800 dark:text-yellow-500',
    danger: 'text-red-800 dark:text-red-500'
  }

  const hoverColors = {
    default: 'hover:bg-neutral-100/50 dark:hover:bg-zinc-700/10 ',
    primary: 'hover:bg-blue-500/30 dark:hover:bg-blue-500/10',
    secondary: 'hover:bg-indigo-500/30 dark:hover:bg-indigo-500/20',
    success: 'hover:bg-green-500/60 dark:hover:bg-green-500/30',
    warning: 'hover:bg-yellow-500/60 dark:hover:bg-yellow-500/30',
    danger: 'hover:bg-red-500/30 dark:hover:bg-red-500/10'
  }

  const buttonClasses = `
      inline-flex items-center justify-center font-medium text-center 
      transition duration-300 
      ${variants[variant]} 
      ${sizes[size]} 
      ${roundeds[rounded]} 
      ${
        variant === 'bordered' || variant === 'light'
          ? `bg-transparent`
          : colors[color]
      }
      ${
        variant === 'complete'
          ? `text-black dark:text-white ${shadowColors[color]}`
          : textColors[color]
      }
      ${hoverColors[color]}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `

  return (
    <button
      disabled={disabled}
      className={buttonClasses.trim()}
    >
      {text}
    </button>
  )
}

export default Button