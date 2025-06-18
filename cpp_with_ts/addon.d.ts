declare module 'addon.js' {
    export function DecorateObjects(
      input: Array<Record<string, any>>
    ): Record<string, Record<string, any>>;
    export function MyMethod(input?: string): string;
  }