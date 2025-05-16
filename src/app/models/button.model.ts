export type ButtonType = 'solid' | 'outlined' | 'link';

export interface Button {
  label?: string;
  link?: string;
  type?: ButtonType;
}

export const defaultButton: Required<Button> = {
  label: '',
  link: '#',
  type: 'link'
};
