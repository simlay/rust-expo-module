import * as React from 'react';

import { RustExpoModuleViewProps } from './RustExpoModule.types';

export default function RustExpoModuleView(props: RustExpoModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
