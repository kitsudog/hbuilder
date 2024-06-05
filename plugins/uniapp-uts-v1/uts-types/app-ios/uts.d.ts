declare function objc(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): any;

interface NumberConstructor {
  new (value?: any): Number;
  (value?: any): number;
}
