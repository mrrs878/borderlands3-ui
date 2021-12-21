/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-13 21:05:34
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-21 21:51:22
 * @FilePath: \borderlands3-ui\src\utils\index.ts
 */

type Classes = Record<string, Function | boolean>;

export function className(names: string): string;
export function className(names: Classes): string;
export function className(name: string, when: boolean, name2?: string): string;
export function className(...args) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null) {
    const keys = Reflect.ownKeys(args[0]);
    for (let i = 0; i < keys.length; i += 1) {
      if (args[0][keys[i]]()) return keys[i];
    }
    return '';
  }
  if (args.length === 1) {
    return args[0] ? args[0] : '';
  }
  const [name, when, name2 = ''] = args;
  return when ? name : name2;
}

// https://gist.github.com/danielpquinn/dd966af424030d47e476
/**
 * Get path data for a rounded rectangle. Allows for different radius on each corner.
 * @param  {Number} w   Width of rounded rectangle
 * @param  {Number} h   Height of rounded rectangle
 * @param  {Number} tlr Top left corner radius
 * @param  {Number} trr Top right corner radius
 * @param  {Number} brr Bottom right corner radius
 * @param  {Number} blr Bottom left corner radius
 * @return {String}     Rounded rectangle SVG path data
 */
export function roundedRectData(w: number, h: number, tlr: number, trr: number,
  brr: number, blr: number) {
  return `M 0 ${tlr
  } A ${tlr} ${tlr} 0 0 1 ${tlr} 0`
  + ` L ${w - trr} 0`
  + ` A ${trr} ${trr} 0 0 1 ${w} ${trr
  } L ${w} ${h - brr
  } A ${brr} ${brr} 0 0 1 ${w - brr} ${h
  } L ${blr} ${h
  } A ${blr} ${blr} 0 0 1 0 ${h - blr
  } Z`;
}
