import { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <ButtonComponent {...props} />
  )
}