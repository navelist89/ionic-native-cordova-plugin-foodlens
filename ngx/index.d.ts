import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name foodlens
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { foodlens } from '@ionic-native/foodlens';
 *
 *
 * constructor(private foodlens: foodlens) { }
 *
 * ...
 *
 *
 * this.foodlens.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Foodlens extends IonicNativePlugin {
    coolMethod(arg0: string): Promise<any>;
    launchFoodlensUI(): Promise<any>;
}
