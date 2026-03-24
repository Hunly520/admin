/**
 * 接口请求参数
 * @interface RequestConfig
 */
export interface RequestConfig {
  // 请求的URL地址
  url: string;

  // 请求方法(GET, POST, PUT, DELETE等)
  method: string;

  // 请求体数据(适用于POST, PUT等方法)
  data?: Record<string, unknown>;

  // URL参数(适用于GET方法)
  params?: Record<string, unknown>;
}