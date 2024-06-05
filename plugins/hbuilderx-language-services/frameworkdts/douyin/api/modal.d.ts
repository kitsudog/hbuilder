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
 * ### 显示模态弹窗
 *
 * 用于同步用户重要信息，并要求用户进行确认，或执行特定操作以决策下一步骤
 */
export const showModal: AsyncAPI<{
  /** 标题 */
  title?: string;
  /** 内容 */
  content?: string;
  /** 确定按钮的文案, 默认值 "确认", 最多 4 个字符 */
  confirmText?: string;
  /** 是否显示取消按钮 */
  showCancel?: boolean;
  /** 取消按钮的文案, 最多 4 个字符 */
  cancelText?: string;
}>;