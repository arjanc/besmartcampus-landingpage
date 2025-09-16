import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  icon?: IconDefinition;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseButtonProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

type CustomButtonProps = LinkButtonProps | ButtonProps;

const buttonVariants = {
  primary: 'bg-[#FBBF10] hover:bg-[#e6ab0f] text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
};

export default function CustomButton({
  children,
  className,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  disabled = false,
  ...props
}: CustomButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[14px] font-bold text-[18px] font-cocogoos transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
    buttonVariants[variant],
    className
  );

  const iconElement = icon && (
    <FontAwesomeIcon icon={icon} className="w-5 h-5" />
  );

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </>
  );

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={props.onClick}
      type={props.type || 'button'}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
