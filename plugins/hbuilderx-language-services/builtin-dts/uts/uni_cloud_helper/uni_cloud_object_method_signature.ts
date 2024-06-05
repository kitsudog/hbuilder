/// <reference path="../../uts-types/common/UTSJSONObject.d.ts" />

declare type UnicloudObjectMethod = <T = UTSJSONObject>(...args: any[]) => Promise<T>
