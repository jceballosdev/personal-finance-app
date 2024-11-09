import React from 'react';

export interface SlotProps {
  children: React.ReactNode;
}

const Slot: React.FC<SlotProps> = ({ children }) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...children.props });
  }

  return <>{children}</>;
};

export default Slot;
