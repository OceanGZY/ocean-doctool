/*
 * @Author: OCEAN.GZY
 * @Date: 2023-11-02 16:35:39
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-11-02 16:35:52
 * @FilePath: /ocean-doctool/src/views/mindppt/ppt-core/mdkatex/options.ts
 * @Description: 注释信息
 */
import { type KatexOptions } from "katex";

interface KatexCatcodes {
  [key: string]: number;
}

interface KatexLexerInterFace {
  input: string;
  tokenRegex: RegExp;
  settings: Required<KatexOptions>;
  catcodes: KatexCatcodes;
}

interface KatexSourceLocation {
  start: number;
  end: number;
  lexer: KatexLexerInterFace;
}

export interface KatexToken {
  text: string;
  loc: KatexSourceLocation;
  noexpand: boolean | undefined;
  treatAsRelax: boolean | undefined;
}

export type KatexLogger<MarkdownItEnv = unknown> = (
  errorCode:
    | "unknownSymbol"
    | "unicodeTextInMathMode"
    | "mathVsTextUnits"
    | "commentAtEnd"
    | "htmlExtension"
    | "newLineInDisplayMode",
  errorMsg: string,
  token: KatexToken,
  env: MarkdownItEnv,
) => "error" | "warn" | "ignore" | void;

export interface MarkdownItKatexOptions<MarkdownItEnv = unknown>
  extends KatexOptions {
  /**
   * Whether parsed fence block with math language to display mode math
   *
   * 是否将解析的数学语言 fence 块转换为显示模式数学
   *
   * @default false
   */
  mathFence?: boolean;

  /**
   * Whether enable mhchem extension
   *
   * 是否启用 mhchem 扩展
   *
   * @default false
   */
  mhchem?: boolean;

  /**
   * Error logger
   *
   * 错误日志记录器
   */
  logger?: KatexLogger<MarkdownItEnv>;
}