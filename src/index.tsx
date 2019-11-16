import * as React from 'react';

export interface WithChildrenProps {
  children: React.ReactNode;
}

export type PackComponentType<T extends WithChildrenProps = WithChildrenProps> = React.ElementType<T>;

export function pack(children: React.ReactNode = null, ...components: PackComponentType[]) {
  if (!components.length) {
    return children as JSX.Element;
  }

  const [Component, ...rest] = components;

  return <Component>{pack(children, ...rest)}</Component>;
}

export function createPack(...components: PackComponentType[]) {
  return function PackComponent({ children }: WithChildrenProps) {
    return pack(children, ...components);
  };
}

