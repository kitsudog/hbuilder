/*! *****************************************************************************
Copyright (c) 2022 Bytedance, Inc. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*******************************************************************************/

import { AsyncAPI } from "./types";

/**
 * ### 调用该 API 可以获取用户临时的登录凭证
 */
export const login: AsyncAPI<
  {
    /**
     * 未登录时, 是否强制调起 **宿主** 登录框
     *
     * 默认值 `true`
     */
    force?: boolean;
  },
  {
    /**
     * 临时登录凭证, 有效期 3 分钟
     *
     * 开发者可以通过在服务器端调用 **登录凭证校验接口** 换取 `openid` 和 `session_key` 等信息
     */
    code?: string;
    /**
     * 用于标识当前设备, 无论登录与否都会返回, 有效期 3 分钟
     */
    anonymousCode: string;
    /**
     * 判断在当前 APP（头条、抖音等）是否处于登录状态。
     */
    isLogin: boolean;
  }
>;