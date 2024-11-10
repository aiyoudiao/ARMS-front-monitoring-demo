// 阿里前端实时监控
import BrowerLogger from 'alife-logger';
import util from 'alife-logger/lib/util';

const { ENVIRONMENT_TYPE: environmentType } = import.meta.env;

let aliLogger = window.aliLogger;
const isProduction = environmentType === 'production';

const EnvironmentMap = {
  production: {
    sample: 20,
    pvSample: 20,
    environment: 'prod'
  },
  staging: {
    sample: 20,
    pvSample: 20,
    environment: 'pre'
  },
  test: {
    sample: 20,
    pvSample: 20,
    environment: 'daily'
  },
  develop: {
    sample: 1,
    pvSample: 1,
    environment: 'local'
  }
};

const { sample, pvSample, environment } = EnvironmentMap.develop;

if (!aliLogger) {
  try {
    // https://www.alibabacloud.com/help/zh/arms/browser-monitoring/developer-reference/sdk-reference#sc-instruction
    aliLogger = BrowerLogger.singleton({
      pid: 'ckv8e2vzfj@80812491bf9a361', // 应用 ID
      appType: 'web', // 终端类型
      imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?', // 上报地址
      sendResource: true, // 资源上报
      enableLinkTrace: true, // 前后端链路追踪
      behavior: true, // 记录报错的用户行为
      disableHook: false, // API 自动上报
      enableSPA: true, // 单页应用
      useFmp: true, // 采集首屏FMP
      disabled: false, // 是否不进行日志上报操作
      sample, // uv 采样率
      release: '', // 版本号
      pvSample, // pv 采样率
      environment, // 环境
      ignore: {
        // 错误忽略配置，支持 字符串、正则、函数
        ignoreErrors: [
          function (e) {
            return true;
          }
        ],
        // 这里的效果同 ignoreErrors，支持 字符串、正则、函数，但是原版的ignoreErrors 粒度较粗，仅支持错误消息。而 __ignoreErrors 可以自定义拦截错误，函数支持两个参数，第一个是错误消息，第二个是错误对象
        __ignoreErrors: [
          function (e, ex) {
            console.log('自定义拦截：', e, ex);
            return false;
          }
        ]
      }
    });

    if (aliLogger) {
      aliLogger.pipe = ['setPage', location?.pathname];
    }
  } catch (error) {}
}

interface ReportAPIParams {
  url: string; // 接口名
  success: boolean; // 是否调用成功
  time: number; // 接口耗时
  code?: string | number; // 返回码
  message?: string; // 返回信息
  begin?: number; // API请求开始时间戳
  traceId?: string; // EagleEye-TraceID的值
  sid?: string; // EagleEye-SessionID的值
}

export const reportAPI = ({ url, success, time, code, message, begin, traceId, sid }: ReportAPIParams) => {
  if (aliLogger) {
    aliLogger.api(url, success, time, code, message, begin, traceId, sid);
  }
  if (!isProduction) {
    console.log('[REPORT_API]', [url, success, time, code, message, begin, traceId, sid]);
  }
};

export const reportError = (ex: ErrorEvent) => {
  /**
   * !NOTE: 参考源码 ./node_modules/alife - logger / lib / reporter.js@59行 ./ node_modules / alife - logger / lib /
   * base.js@133行 ./ node_modules / alife - logger / lib / util.js
   */
  const myUtil = {
    ...util,
    // 重写源码中的 ignoreByRule，添加 原始错误对象的支持
    ignoreByRule(e, t, originError) {
      if (!e || !t) return !1;
      if (((this.isString(t) || t.source || this.T(t) === 'Function') && (t = [t]), !this.isArray(t)))
        return this.warn('[arms] invalid rules of ignore config, (list of) String/RegExp/Funcitons are available'), !1;
      for (var r, n = [], o = 0, i = t.length; o < i; o++)
        if (((r = t[o]), this.isString(r))) n.push(r.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'));
        else if (r && r.source) n.push(r.source);
        else if (r && this.T(r) === 'Function' && !0 === this.safetyCall(r, [e, originError], !1)) return !0;
      const a = new RegExp(n.join('|'), 'i');
      return Boolean(n.length && a.test && a.test(e));
    }
  };

  const r = ex.error.name || 'CustomError';
  const i = ex.error.message;
  const a = ex.error.stack;
  const t = ex;

  // 自定义错误拦截，如果没过就不上报
  const customError = aliLogger._conf.ignore.__ignoreErrors;
  const ignore = myUtil.ignoreByRule(i, customError, t);

  // 非生产环境打印一下，方便调试
  if (!isProduction) {
    console.log(`[REPORT_ERROR] [${r}] ${ignore ? 'Ignore' : 'Report'}`, [myUtil.ignoreByRule, i, customError, t]);
  }

  if (ignore) {
    return;
  }

  const s =
    (typeof location === 'object' && typeof location.href === 'string' && location.href.substring(0, 500)) || '';
  const c = {
    begin: Date.now(),
    cate: r,
    msg: i && i.substring(0, 1e3),
    stack: a && a.substring(0, 1e3),
    file: myUtil.removeUrlSearch(t.filename || ''),
    line: t.lineno || '',
    col: t.colno || '',
    err: {
      msg_raw: myUtil.encode(i),
      stack_raw: myUtil.encode(a)
    },
    dl: s
  };

  for (let l = ['tag', 'c1', 'c2', 'c3'], p = 0; p < l.length; p++) {
    const f = l[p];
    if (t[f]) {
      c[f] = t[f];
    }
  }

  aliLogger.beforeSend('error', c);
  const tempIgnoreErrors = aliLogger._conf.ignore.ignoreErrors;
  // 自定义上报错误时手动关闭上报时二次拦截
  aliLogger._conf.ignore.ignoreErrors = [];
  aliLogger._lg('error', c, 1);
  // 还原
  aliLogger._conf.ignore.ignoreErrors = tempIgnoreErrors;
};

export default aliLogger;
