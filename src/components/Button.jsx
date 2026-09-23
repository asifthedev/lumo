import { Link } from 'react-router';

const VARIANT_CLASSES = {
  primary:
    'flex items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 font-bold text-white transition hover:opacity-90 active:scale-[0.98]',
  secondary:
    'border-[1.5px] border-border rounded-xl py-3.5 font-bold transition-colors hover:border-accent',
};

function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  type = 'button',
  ...props
}) {
  const classes = `${VARIANT_CLASSES[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
