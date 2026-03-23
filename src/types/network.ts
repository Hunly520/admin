/**
 * 接口请求参数
 * @interface RequestConfig
 * @property {string} url - 请求的URL地址
 * @property {string} method - 请求方法（GET, POST, PUT, DELETE等）
 * @property {any} [data] - 请求体数据（适用于POST, PUT等方法）
 * @property {any} [params] - URL参数（适用于GET方法）
 */
export interface RequestConfig {
  url: string;
  method: string;
  data?: any;
  params?: any;
}