import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to RustExpoModule.web.ts
// and on native platforms to RustExpoModule.ts
import RustExpoModule from './RustExpoModule';
import RustExpoModuleView from './RustExpoModuleView';
import { ChangeEventPayload, RustExpoModuleViewProps } from './RustExpoModule.types';

export function rustHelloWorld(): string {
  return RustExpoModule.rustHelloWorld();
}
export function rustAdd(a: number, b: number): number{
  return RustExpoModule.rustAdd(a, b);
}

const emitter = new EventEmitter(RustExpoModule ?? NativeModulesProxy.RustExpoModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { RustExpoModuleView, RustExpoModuleViewProps, ChangeEventPayload };
