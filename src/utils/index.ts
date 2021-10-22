/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-13 21:05:34
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-22 16:40:55
 * @FilePath: \borderlands3-ui\src\utils\index.ts
 */
type Classes = Record<string, Function | boolean>;

export function className(names: Classes): string;
export function className(name: string, when: boolean, name2?: string): string;
export function className(...args) {
  if (args.length === 1 && typeof args[0] === 'object') {
    const keys = Reflect.ownKeys(args[0]);
    for (let i = 0; i < keys.length; i += 1) {
      console.log(args[0][keys[i]]());
      if (args[0][keys[i]]()) return keys[i];
    }
    return '';
  }
  const [name, when, name2 = ''] = args;
  return when ? name : name2;
}
