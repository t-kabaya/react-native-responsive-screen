declare module 'react-native-responsive-screen' {
  import { Component } from 'react';

  export function wp(widthPercent: string | number): number;
  export function hp(heightPercent: string | number): number;
  export function listenOrientationChange(screenClassComponent: Component<any, any>): void;
  export function removeOrientationListener(): void;
}
