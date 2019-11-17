import * as React from 'react';

export function WithChildrenComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
