import { FC, ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface ScrollbarProps {
  className?: string;
  children?: ReactNode;
}

const Scrollbar: FC<ScrollbarProps> = ({ children }) => {
  return <Scrollbars autoHide>{children}</Scrollbars>;
};

export default Scrollbar;
