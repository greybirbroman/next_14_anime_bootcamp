/* eslint-disable react/display-name */
import React, { ComponentType, ReactNode } from 'react';

const PageWrapper = (WrappedComponent: ComponentType<any>) => {
  const WrapperComponent = ({ children, ...props }: { children?: ReactNode }) => {
    return (
      <div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <WrappedComponent {...props}>{children}</WrappedComponent>
      </div>
    );
  };

  const WrappedWithWrapper = (props: any) => <WrapperComponent {...props} />;

  return WrappedWithWrapper;
};

export default PageWrapper;
