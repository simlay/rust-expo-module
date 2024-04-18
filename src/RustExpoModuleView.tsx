import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RustExpoModuleViewProps } from './RustExpoModule.types';

const NativeView: React.ComponentType<RustExpoModuleViewProps> =
  requireNativeViewManager('RustExpoModule');

export default function RustExpoModuleView(props: RustExpoModuleViewProps) {
  return <NativeView {...props} />;
}
