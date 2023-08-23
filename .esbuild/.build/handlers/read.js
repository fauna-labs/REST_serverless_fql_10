var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// node_modules/fauna/dist/node/index.js
var require_node = __commonJS({
  "node_modules/fauna/dist/node/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var __accessCheck2 = (obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    };
    var __privateGet2 = (obj, member, getter) => {
      __accessCheck2(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    };
    var __privateAdd2 = (obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };
    var __privateSet2 = (obj, member, value, setter) => {
      __accessCheck2(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    };
    var __privateWrapper = (obj, member, setter, getter) => ({
      set _(value) {
        __privateSet2(obj, member, value, setter);
      },
      get _() {
        return __privateGet2(obj, member, getter);
      }
    });
    var __privateMethod2 = (obj, member, method) => {
      __accessCheck2(obj, member, "access private method");
      return method;
    };
    var src_exports = {};
    __export2(src_exports, {
      AbortError: () => AbortError,
      AuthenticationError: () => AuthenticationError,
      AuthorizationError: () => AuthorizationError,
      Client: () => Client2,
      ClientClosedError: () => ClientClosedError,
      ClientError: () => ClientError,
      ContendedTransactionError: () => ContendedTransactionError,
      DateStub: () => DateStub,
      Document: () => Document,
      DocumentReference: () => DocumentReference,
      EmbeddedSet: () => EmbeddedSet,
      FaunaError: () => FaunaError,
      FetchClient: () => FetchClient,
      InvalidRequestError: () => InvalidRequestError,
      LONG_MAX: () => LONG_MAX,
      LONG_MIN: () => LONG_MIN,
      Module: () => Module,
      NamedDocument: () => NamedDocument,
      NamedDocumentReference: () => NamedDocumentReference,
      NetworkError: () => NetworkError,
      NodeHTTP2Client: () => NodeHTTP2Client,
      NullDocument: () => NullDocument,
      Page: () => Page,
      ProtocolError: () => ProtocolError,
      QueryCheckError: () => QueryCheckError,
      QueryRuntimeError: () => QueryRuntimeError,
      QueryTimeoutError: () => QueryTimeoutError,
      ServiceError: () => ServiceError,
      ServiceInternalError: () => ServiceInternalError,
      ServiceTimeoutError: () => ServiceTimeoutError,
      SetIterator: () => SetIterator,
      TaggedTypeFormat: () => TaggedTypeFormat,
      ThrottlingError: () => ThrottlingError,
      TimeStub: () => TimeStub,
      endpoints: () => endpoints,
      fql: () => fql2,
      getDefaultHTTPClient: () => getDefaultHTTPClient,
      isHTTPResponse: () => isHTTPResponse
    });
    module2.exports = __toCommonJS2(src_exports);
    var endpoints = {
      default: new URL("https://db.fauna.com"),
      local: new URL("http://localhost:8443"),
      localhost: new URL("http://localhost:8443")
    };
    var FaunaError = class extends Error {
      constructor(...args) {
        super(...args);
      }
    };
    var ServiceError = class extends FaunaError {
      httpStatus;
      code;
      queryInfo;
      constraint_failures;
      constructor(failure, httpStatus) {
        super(failure.error.message);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ServiceError);
        }
        this.name = "ServiceError";
        this.code = failure.error.code;
        this.httpStatus = httpStatus;
        const info = {
          txn_ts: failure.txn_ts,
          summary: failure.summary,
          query_tags: failure.query_tags,
          stats: failure.stats
        };
        this.queryInfo = info;
        this.constraint_failures = failure.error.constraint_failures;
      }
    };
    var QueryRuntimeError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, QueryRuntimeError);
        }
        this.name = "QueryRuntimeError";
      }
    };
    var QueryCheckError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, QueryCheckError);
        }
        this.name = "QueryCheckError";
      }
    };
    var InvalidRequestError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, InvalidRequestError);
        }
        this.name = "InvalidRequestError";
      }
    };
    var AbortError = class extends ServiceError {
      abort;
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, QueryCheckError);
        }
        this.name = "AbortError";
        this.abort = failure.error.abort;
      }
    };
    var AuthenticationError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, AuthenticationError);
        }
        this.name = "AuthenticationError";
      }
    };
    var AuthorizationError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, AuthorizationError);
        }
        this.name = "AuthorizationError";
      }
    };
    var ContendedTransactionError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, InvalidRequestError);
        }
        this.name = "ContendedTransactionError";
      }
    };
    var ThrottlingError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ThrottlingError);
        }
        this.name = "ThrottlingError";
      }
    };
    var QueryTimeoutError = class extends ServiceError {
      stats;
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, QueryTimeoutError);
        }
        this.name = "QueryTimeoutError";
        this.stats = failure.stats;
      }
    };
    var ServiceInternalError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ServiceInternalError);
        }
        this.name = "ServiceInternalError";
      }
    };
    var ServiceTimeoutError = class extends ServiceError {
      constructor(failure, httpStatus) {
        super(failure, httpStatus);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ServiceTimeoutError);
        }
        this.name = "ServiceTimeoutError";
      }
    };
    var ClientError = class extends FaunaError {
      constructor(message, options) {
        super(message, options);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ClientError);
        }
        this.name = "ClientError";
      }
    };
    var ClientClosedError = class extends FaunaError {
      constructor(message, options) {
        super(message, options);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ClientClosedError);
        }
        this.name = "ClientClosedError";
      }
    };
    var NetworkError = class extends FaunaError {
      constructor(message, options) {
        super(message, options);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, NetworkError);
        }
        this.name = "NetworkError";
      }
    };
    var ProtocolError = class extends FaunaError {
      httpStatus;
      constructor(error) {
        super(error.message);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ProtocolError);
        }
        this.name = "ProtocolError";
        this.httpStatus = error.httpStatus;
      }
    };
    var _url2, _keepalive, _a;
    var FetchClient = (_a = class {
      constructor({ url, fetch_keepalive }) {
        __privateAdd(this, _url2, void 0);
        __privateAdd(this, _keepalive, void 0);
        __privateSet(this, _url2, new URL("/query/1", url).toString());
        __privateSet(this, _keepalive, fetch_keepalive);
      }
      async request({
        data,
        headers: requestHeaders,
        method,
        client_timeout_ms
      }) {
        const signal = AbortSignal.timeout === void 0 ? (() => {
          const controller = new AbortController();
          const signal2 = controller.signal;
          setTimeout(() => controller.abort(), client_timeout_ms);
          return signal2;
        })() : AbortSignal.timeout(client_timeout_ms);
        const response = await fetch(__privateGet(this, _url2), {
          method,
          headers: { ...requestHeaders, "Content-Type": "application/json" },
          body: JSON.stringify(data),
          signal,
          keepalive: __privateGet(this, _keepalive)
        }).catch((error) => {
          throw new NetworkError("The network connection encountered a problem.", {
            cause: error
          });
        });
        const status = response.status;
        const responseHeaders = {};
        response.headers.forEach((value, key) => responseHeaders[key] = value);
        const body = await response.text();
        return {
          status,
          body,
          headers: responseHeaders
        };
      }
      close() {
      }
    }, _url2 = new WeakMap(), _keepalive = new WeakMap(), _a);
    var http2;
    try {
      http2 = require("http2");
    } catch (_) {
      http2 = void 0;
    }
    var _clients;
    var _http2_session_idle_ms;
    var _http2_max_streams;
    var _url;
    var _numberOfUsers;
    var _session;
    var _getClientKey;
    var getClientKey_fn;
    var _closeForAll;
    var closeForAll_fn;
    var _connect;
    var connect_fn;
    var _doRequest;
    var doRequest_fn;
    var _NodeHTTP2Client = class {
      constructor({
        http2_session_idle_ms,
        url,
        http2_max_streams
      }) {
        __privateAdd2(this, _closeForAll);
        __privateAdd2(this, _connect);
        __privateAdd2(this, _doRequest);
        __privateAdd2(this, _http2_session_idle_ms, void 0);
        __privateAdd2(this, _http2_max_streams, void 0);
        __privateAdd2(this, _url, void 0);
        __privateAdd2(this, _numberOfUsers, 0);
        __privateAdd2(this, _session, void 0);
        if (http2 === void 0) {
          throw new Error("Your platform does not support Node's http2 library");
        }
        __privateSet2(this, _http2_session_idle_ms, http2_session_idle_ms);
        __privateSet2(this, _http2_max_streams, http2_max_streams);
        __privateSet2(this, _url, url);
        __privateSet2(this, _session, null);
      }
      static getClient(httpClientOptions) {
        var _a5;
        const clientKey = __privateMethod2(_a5 = _NodeHTTP2Client, _getClientKey, getClientKey_fn).call(_a5, httpClientOptions);
        if (!__privateGet2(_NodeHTTP2Client, _clients).has(clientKey)) {
          __privateGet2(_NodeHTTP2Client, _clients).set(
            clientKey,
            new _NodeHTTP2Client(httpClientOptions)
          );
        }
        const client2 = __privateGet2(_NodeHTTP2Client, _clients).get(clientKey);
        __privateWrapper(client2, _numberOfUsers)._++;
        return client2;
      }
      async request(req) {
        let retryCount = 0;
        let memoizedError;
        do {
          try {
            return await __privateMethod2(this, _doRequest, doRequest_fn).call(this, req);
          } catch (error) {
            if ((error == null ? void 0 : error.code) !== "ERR_HTTP2_GOAWAY_SESSION") {
              throw new NetworkError(
                "The network connection encountered a problem.",
                {
                  cause: error
                }
              );
            }
            memoizedError = error;
            retryCount++;
          }
        } while (retryCount < 3);
        throw new NetworkError("The network connection encountered a problem.", {
          cause: memoizedError
        });
      }
      close() {
        if (this.isClosed()) {
          return;
        }
        __privateWrapper(this, _numberOfUsers)._--;
        if (__privateGet2(this, _numberOfUsers) === 0 && __privateGet2(this, _session) && !__privateGet2(this, _session).closed) {
          __privateGet2(this, _session).close();
        }
      }
      isClosed() {
        return __privateGet2(this, _numberOfUsers) === 0;
      }
    };
    var NodeHTTP2Client = _NodeHTTP2Client;
    _clients = /* @__PURE__ */ new WeakMap();
    _http2_session_idle_ms = /* @__PURE__ */ new WeakMap();
    _http2_max_streams = /* @__PURE__ */ new WeakMap();
    _url = /* @__PURE__ */ new WeakMap();
    _numberOfUsers = /* @__PURE__ */ new WeakMap();
    _session = /* @__PURE__ */ new WeakMap();
    _getClientKey = /* @__PURE__ */ new WeakSet();
    getClientKey_fn = function({ http2_session_idle_ms, url }) {
      return `${url}|${http2_session_idle_ms}`;
    };
    _closeForAll = /* @__PURE__ */ new WeakSet();
    closeForAll_fn = function() {
      __privateSet2(this, _numberOfUsers, 0);
      if (__privateGet2(this, _session) && !__privateGet2(this, _session).closed) {
        __privateGet2(this, _session).close();
      }
    };
    _connect = /* @__PURE__ */ new WeakSet();
    connect_fn = function() {
      if (!__privateGet2(this, _session) || __privateGet2(this, _session).closed || __privateGet2(this, _session).destroyed) {
        const new_session = http2.connect(__privateGet2(this, _url), {
          peerMaxConcurrentStreams: __privateGet2(this, _http2_max_streams)
        }).once("error", () => __privateMethod2(this, _closeForAll, closeForAll_fn).call(this)).once("goaway", () => __privateMethod2(this, _closeForAll, closeForAll_fn).call(this));
        new_session.setTimeout(__privateGet2(this, _http2_session_idle_ms), () => {
          __privateMethod2(this, _closeForAll, closeForAll_fn).call(this);
        });
        __privateSet2(this, _session, new_session);
      }
      return __privateGet2(this, _session);
    };
    _doRequest = /* @__PURE__ */ new WeakSet();
    doRequest_fn = function({
      client_timeout_ms,
      data: requestData,
      headers: requestHeaders,
      method
    }) {
      return new Promise((resolvePromise, rejectPromise) => {
        let req;
        const onResponse = (http2ResponseHeaders) => {
          const status = Number(
            http2ResponseHeaders[http2.constants.HTTP2_HEADER_STATUS]
          );
          let responseData = "";
          req.on("data", (chunk) => {
            responseData += chunk;
          });
          req.on("end", () => {
            resolvePromise({
              status,
              body: responseData,
              headers: http2ResponseHeaders
            });
          });
        };
        try {
          const httpRequestHeaders = {
            ...requestHeaders,
            [http2.constants.HTTP2_HEADER_PATH]: "/query/1",
            [http2.constants.HTTP2_HEADER_METHOD]: method
          };
          const session = __privateMethod2(this, _connect, connect_fn).call(this);
          req = session.request(httpRequestHeaders).setEncoding("utf8").on("error", (error) => {
            rejectPromise(error);
          }).on("response", onResponse);
          req.write(JSON.stringify(requestData), "utf8");
          req.setTimeout(client_timeout_ms, () => {
            req.destroy(new Error(`Client timeout`));
          });
          req.end();
        } catch (error) {
          rejectPromise(error);
        }
      });
    };
    __privateAdd2(NodeHTTP2Client, _getClientKey);
    __privateAdd2(NodeHTTP2Client, _clients, /* @__PURE__ */ new Map());
    var getDefaultHTTPClient = (options) => nodeHttp2IsSupported() ? NodeHTTP2Client.getClient(options) : new FetchClient(options);
    var isHTTPResponse = (res) => res instanceof Object && "body" in res && "headers" in res && "status" in res;
    var nodeHttp2IsSupported = () => {
      var _a5;
      if (typeof process !== "undefined" && process && ((_a5 = process.release) == null ? void 0 : _a5.name) === "node") {
        try {
          require("http2");
          return true;
        } catch (_) {
          return false;
        }
      }
      return false;
    };
    var yearpart = /(?:\d{4}|[\u2212-]\d{4,}|\+\d{5,})/;
    var monthpart = /(?:0[1-9]|1[0-2])/;
    var daypart = /(?:0[1-9]|[12]\d|3[01])/;
    var hourpart = /(?:[01][0-9]|2[0-3])/;
    var minsecpart = /(?:[0-5][0-9])/;
    var decimalpart = /(?:\.\d+)/;
    var datesplit = new RegExp(
      `(${yearpart.source}-(${monthpart.source})-(${daypart.source}))`
    );
    var timesplit = new RegExp(
      `(${hourpart.source}:${minsecpart.source}:${minsecpart.source}${decimalpart.source}?)`
    );
    var zonesplit = new RegExp(
      `([zZ]|[+\u2212-]${hourpart.source}(?::?${minsecpart.source}|:${minsecpart.source}:${minsecpart.source}))`
    );
    var plaindate = new RegExp(`^${datesplit.source}$`);
    var startsWithPlaindate = new RegExp(`^${datesplit.source}`);
    var datetime = new RegExp(
      `^${datesplit.source}T${timesplit.source}${zonesplit.source}$`
    );
    var TimeStub = class {
      isoString;
      constructor(isoString) {
        this.isoString = isoString;
      }
      static from(isoString) {
        if (typeof isoString !== "string") {
          throw new TypeError(
            `Expected string but received ${typeof isoString}: ${isoString}`
          );
        }
        const matches = datetime.exec(isoString);
        if (matches === null) {
          throw new RangeError(
            `(regex) Expected an ISO date string but received '${isoString}'`
          );
        }
        return new TimeStub(isoString);
      }
      static fromDate(date) {
        return new TimeStub(date.toISOString());
      }
      toDate() {
        const date = new Date(this.isoString);
        if (date.toString() === "Invalid Date") {
          throw new RangeError(
            "Fauna Date could not be converted to Javascript Date"
          );
        }
        return date;
      }
      toString() {
        return `TimeStub("${this.isoString}")`;
      }
    };
    var DateStub = class {
      dateString;
      constructor(dateString) {
        this.dateString = dateString;
      }
      static from(dateString) {
        if (typeof dateString !== "string") {
          throw new TypeError(
            `Expected string but received ${typeof dateString}: ${dateString}`
          );
        }
        const matches = plaindate.exec(dateString);
        if (matches === null) {
          throw new RangeError(
            `Expected a plain date string but received '${dateString}'`
          );
        }
        return new DateStub(matches[0]);
      }
      static fromDate(date) {
        const dateString = date.toISOString();
        const matches = startsWithPlaindate.exec(dateString);
        if (matches === null) {
          throw new ClientError(`Failed to parse date '${date}'`);
        }
        return new DateStub(matches[0]);
      }
      toDate() {
        const date = /* @__PURE__ */ new Date(this.dateString + "T00:00:00Z");
        if (date.toString() === "Invalid Date") {
          throw new RangeError(
            "Fauna Date could not be converted to Javascript Date"
          );
        }
        return date;
      }
      toString() {
        return `DateStub("${this.dateString}")`;
      }
    };
    var DocumentReference = class {
      coll;
      id;
      constructor({ coll, id }) {
        this.id = id;
        if (typeof coll === "string") {
          this.coll = new Module(coll);
        } else {
          this.coll = coll;
        }
      }
    };
    var Document = class extends DocumentReference {
      ts;
      constructor(obj) {
        const { coll, id, ts, ...rest } = obj;
        super({ coll, id });
        this.ts = ts;
        Object.assign(this, rest);
      }
      toObject() {
        return { ...this };
      }
    };
    var NamedDocumentReference = class {
      coll;
      name;
      constructor({ coll, name }) {
        this.name = name;
        if (typeof coll === "string") {
          this.coll = new Module(coll);
        } else {
          this.coll = coll;
        }
      }
    };
    var NamedDocument = class extends NamedDocumentReference {
      ts;
      data;
      constructor(obj) {
        const { coll, name, ts, data, ...rest } = obj;
        super({ coll, name });
        this.ts = ts;
        this.data = data || {};
        Object.assign(this, rest);
      }
      toObject() {
        return { ...this };
      }
    };
    var Module = class {
      name;
      constructor(name) {
        this.name = name;
      }
    };
    var NullDocument = class {
      ref;
      cause;
      constructor(ref, cause) {
        this.ref = ref;
        this.cause = cause;
      }
    };
    var Page = class {
      data;
      after;
      constructor({ data, after }) {
        this.data = data;
        this.after = after;
      }
    };
    var EmbeddedSet = class {
      after;
      constructor(after) {
        this.after = after;
      }
    };
    var _generator, _a2;
    var SetIterator = (_a2 = class {
      constructor(client2, initial, options) {
        __privateAdd(this, _generator, void 0);
        options = options ?? {};
        if (initial instanceof Function) {
          __privateSet(this, _generator, generateFromThunk(client2, initial, options));
        } else if (initial instanceof Page || initial instanceof EmbeddedSet) {
          __privateSet(this, _generator, generatePages(client2, initial, options));
        } else {
          throw new TypeError(
            `Expected 'Page<T> | EmbeddedSet | (() => Promise<T | Page<T> | EmbeddedSet>)', but received ${JSON.stringify(
              initial
            )}`
          );
        }
      }
      static fromQuery(client2, query, options) {
        return new SetIterator(
          client2,
          async () => {
            const response = await client2.query(
              query,
              options
            );
            return response.data;
          },
          options
        );
      }
      static fromPageable(client2, pageable, options) {
        return new SetIterator(client2, pageable, options);
      }
      flatten() {
        return new FlattenedSetIterator(this);
      }
      async next() {
        return __privateGet(this, _generator).next();
      }
      async return() {
        return __privateGet(this, _generator).return();
      }
      async throw(e) {
        return __privateGet(this, _generator).throw(e);
      }
      [Symbol.asyncIterator]() {
        return this;
      }
    }, _generator = new WeakMap(), _a2);
    var _generator2, _a3;
    var FlattenedSetIterator = (_a3 = class {
      constructor(setIterator) {
        __privateAdd(this, _generator2, void 0);
        __privateSet(this, _generator2, generateItems(setIterator));
      }
      async next() {
        return __privateGet(this, _generator2).next();
      }
      async return() {
        return __privateGet(this, _generator2).return();
      }
      async throw(e) {
        return __privateGet(this, _generator2).throw(e);
      }
      [Symbol.asyncIterator]() {
        return this;
      }
    }, _generator2 = new WeakMap(), _a3);
    async function* generatePages(client2, initial, options) {
      let currentPage = initial;
      if (currentPage instanceof Page) {
        yield currentPage.data;
      }
      while (currentPage.after) {
        const query = fql2`Set.paginate(${currentPage.after})`;
        const response = await client2.query(query, options);
        const nextPage = response.data;
        currentPage = nextPage;
        yield currentPage.data;
      }
    }
    async function* generateFromThunk(client2, thunk, options) {
      const result = await thunk();
      if (result instanceof Page || result instanceof EmbeddedSet) {
        for await (const page of generatePages(
          client2,
          result,
          options
        )) {
          yield page;
        }
        return;
      }
      yield [result];
    }
    async function* generateItems(setIterator) {
      for await (const page of setIterator) {
        for (const item of page) {
          yield item;
        }
      }
    }
    var TaggedTypeFormat = class {
      static encode(obj) {
        return encode(obj);
      }
      static decode(input, decodeOptions) {
        return JSON.parse(input, (_, value) => {
          if (value == null)
            return null;
          if (value["@mod"]) {
            return new Module(value["@mod"]);
          } else if (value["@doc"]) {
            if (typeof value["@doc"] === "string") {
              const [modName, id] = value["@doc"].split(":");
              return new DocumentReference({ coll: modName, id });
            }
            const obj = value["@doc"];
            if (obj.id) {
              return new Document(obj);
            } else {
              return new NamedDocument(obj);
            }
          } else if (value["@ref"]) {
            const obj = value["@ref"];
            let ref;
            if (obj.id) {
              ref = new DocumentReference(obj);
            } else {
              ref = new NamedDocumentReference(obj);
            }
            if ("exists" in obj && obj.exists === false) {
              return new NullDocument(ref, obj.cause);
            }
            return ref;
          } else if (value["@set"]) {
            if (typeof value["@set"] === "string") {
              return new EmbeddedSet(value["@set"]);
            }
            return new Page(value["@set"]);
          } else if (value["@int"]) {
            return Number(value["@int"]);
          } else if (value["@long"]) {
            const bigInt = BigInt(value["@long"]);
            if (decodeOptions.long_type === "number") {
              if (bigInt > Number.MAX_SAFE_INTEGER || bigInt < Number.MIN_SAFE_INTEGER) {
                console.warn(`Value is too large to be represented as a number. Returning as Number with loss of precision. Use long_type 'bigint' instead.`);
              }
              return Number(bigInt);
            }
            return bigInt;
          } else if (value["@double"]) {
            return Number(value["@double"]);
          } else if (value["@date"]) {
            return DateStub.from(value["@date"]);
          } else if (value["@time"]) {
            return TimeStub.from(value["@time"]);
          } else if (value["@object"]) {
            return value["@object"];
          }
          return value;
        });
      }
    };
    var LONG_MIN = BigInt("-9223372036854775808");
    var LONG_MAX = BigInt("9223372036854775807");
    var INT_MIN = -(2 ** 31);
    var INT_MAX = 2 ** 31 - 1;
    var encodeMap = {
      bigint: (value) => {
        if (value < LONG_MIN || value > LONG_MAX) {
          throw new RangeError(
            "BigInt value exceeds max magnitude for a 64-bit Fauna long. Use a 'number' to represent doubles beyond that limit."
          );
        }
        if (value >= INT_MIN && value <= INT_MAX) {
          return { "@int": value.toString() };
        }
        return {
          "@long": value.toString()
        };
      },
      number: (value) => {
        if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
          throw new RangeError(`Cannot convert ${value} to a Fauna type.`);
        }
        if (!Number.isInteger(value)) {
          return { "@double": value.toString() };
        } else {
          if (value >= INT_MIN && value <= INT_MAX) {
            return { "@int": value.toString() };
          } else if (Number.isSafeInteger(value)) {
            return {
              "@long": value.toString()
            };
          }
          return { "@double": value.toString() };
        }
      },
      string: (value) => {
        return value;
      },
      object: (input) => {
        let wrapped = false;
        const _out = {};
        for (const k in input) {
          if (k.startsWith("@")) {
            wrapped = true;
          }
          if (input[k] !== void 0) {
            _out[k] = encode(input[k]);
          }
        }
        return wrapped ? { "@object": _out } : _out;
      },
      array: (input) => {
        const _out = [];
        for (const i in input)
          _out.push(encode(input[i]));
        return _out;
      },
      date: (dateValue) => ({
        "@time": dateValue.toISOString()
      }),
      faunadate: (value) => ({ "@date": value.dateString }),
      faunatime: (value) => ({ "@time": value.isoString }),
      module: (value) => ({ "@mod": value.name }),
      documentReference: (value) => ({
        "@ref": { id: value.id, coll: { "@mod": value.coll.name } }
      }),
      document: (value) => ({
        "@ref": { id: value.id, coll: { "@mod": value.coll.name } }
      }),
      namedDocumentReference: (value) => ({
        "@ref": { name: value.name, coll: { "@mod": value.coll.name } }
      }),
      namedDocument: (value) => ({
        "@ref": { name: value.name, coll: { "@mod": value.coll.name } }
      }),
      set: (value) => {
        throw new ClientError(
          "Page could not be encoded. Fauna does not accept encoded Set values, yet. Use Page.data and Page.after as arguments, instead."
        );
      }
    };
    var encode = (input) => {
      if (input === void 0) {
        throw new TypeError("Passing undefined as a QueryValue is not supported");
      }
      switch (typeof input) {
        case "bigint":
          return encodeMap["bigint"](input);
        case "string":
          return encodeMap["string"](input);
        case "number":
          return encodeMap["number"](input);
        case "boolean":
          return input;
        case "object":
          if (input == null) {
            return null;
          } else if (Array.isArray(input)) {
            return encodeMap["array"](input);
          } else if (input instanceof Date) {
            return encodeMap["date"](input);
          } else if (input instanceof DateStub) {
            return encodeMap["faunadate"](input);
          } else if (input instanceof TimeStub) {
            return encodeMap["faunatime"](input);
          } else if (input instanceof Module) {
            return encodeMap["module"](input);
          } else if (input instanceof Document) {
            return encodeMap["document"](input);
          } else if (input instanceof DocumentReference) {
            return encodeMap["documentReference"](input);
          } else if (input instanceof NamedDocument) {
            return encodeMap["namedDocument"](input);
          } else if (input instanceof NamedDocumentReference) {
            return encodeMap["namedDocumentReference"](input);
          } else if (input instanceof NullDocument) {
            return encode(input.ref);
          } else if (input instanceof Page) {
            return encodeMap["set"](input);
          } else if (input instanceof EmbeddedSet) {
            return encodeMap["set"](input);
          } else {
            return encodeMap["object"](input);
          }
      }
    };
    function fql2(queryFragments, ...queryArgs) {
      return new Query2(queryFragments, ...queryArgs);
    }
    var _queryFragments, _queryArgs, _render, render_fn, _a4;
    var Query2 = (_a4 = class {
      constructor(queryFragments, ...queryArgs) {
        __privateAdd(this, _render);
        __privateAdd(this, _queryFragments, void 0);
        __privateAdd(this, _queryArgs, void 0);
        if (queryFragments.length === 0 || queryFragments.length !== queryArgs.length + 1) {
          throw new Error("invalid query constructed");
        }
        __privateSet(this, _queryFragments, queryFragments);
        __privateSet(this, _queryArgs, queryArgs);
      }
      toQuery(requestHeaders = {}) {
        return { ...__privateMethod(this, _render, render_fn).call(this, requestHeaders), ...requestHeaders };
      }
    }, _queryFragments = new WeakMap(), _queryArgs = new WeakMap(), _render = new WeakSet(), render_fn = function(requestHeaders) {
      if (__privateGet(this, _queryFragments).length === 1) {
        return { query: { fql: [__privateGet(this, _queryFragments)[0]] }, arguments: {} };
      }
      let resultArgs = {};
      const renderedFragments = __privateGet(this, _queryFragments).flatMap((fragment, i) => {
        if (i === __privateGet(this, _queryFragments).length - 1) {
          return fragment === "" ? [] : [fragment];
        }
        const arg = __privateGet(this, _queryArgs)[i];
        let subQuery;
        if (arg instanceof Query2) {
          const request = arg.toQuery(requestHeaders);
          subQuery = request.query;
          resultArgs = { ...resultArgs, ...request.arguments };
        } else {
          subQuery = { value: TaggedTypeFormat.encode(arg) };
        }
        return [fragment, subQuery].filter((x) => x !== "");
      });
      return {
        query: { fql: renderedFragments },
        arguments: resultArgs
      };
    }, _a4);
    var packageVersion = "1.0.1";
    var os;
    try {
      os = require("os");
    } catch (_) {
      os = void 0;
    }
    var getDriverEnv = () => {
      const driverEnv = {
        driver: ["javascript", packageVersion].join("-"),
        env: "unknown",
        os: "unknown",
        runtime: "unknown"
      };
      try {
        const isNode = typeof window === "undefined" && typeof process !== "undefined" && process.versions != null && process.versions.node != null;
        const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
        const isServiceWorker = typeof self === "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope";
        const isVercelEdgeRuntime = typeof EdgeRuntime !== "string";
        if (isNode) {
          driverEnv.runtime = ["nodejs", process.version].join("-");
          driverEnv.env = getNodeRuntimeEnv();
          driverEnv.os = [os.platform(), os.release()].join("-");
        } else if (isServiceWorker) {
          driverEnv.runtime = getBrowserDetails(navigator);
          driverEnv.env = "Service Worker";
          driverEnv.os = getBrowserOsDetails(navigator);
        } else if (isBrowser) {
          driverEnv.runtime = getBrowserDetails(navigator);
          driverEnv.env = "browser";
          driverEnv.os = getBrowserOsDetails(navigator);
        } else if (isVercelEdgeRuntime) {
          driverEnv.runtime = "Vercel Edge Runtime";
          driverEnv.env = "edge";
        }
      } catch (e) {
      }
      return Object.entries(driverEnv).filter(([_, val]) => val !== "unknown").map((entry) => entry.join("=")).join("; ");
    };
    var getBrowserDetails = (navigator2) => {
      let browser = navigator2.appName;
      let browserVersion = "" + parseFloat(navigator2.appVersion);
      let nameOffset, verOffset, ix;
      if ((verOffset = navigator2.userAgent.indexOf("Opera")) != -1) {
        browser = "Opera";
        browserVersion = navigator2.userAgent.substring(verOffset + 6);
        if ((verOffset = navigator2.userAgent.indexOf("Version")) != -1) {
          browserVersion = navigator2.userAgent.substring(verOffset + 8);
        }
      } else if ((verOffset = navigator2.userAgent.indexOf("MSIE")) != -1) {
        browser = "Microsoft Internet Explorer";
        browserVersion = navigator2.userAgent.substring(verOffset + 5);
      } else if (browser == "Netscape" && navigator2.userAgent.indexOf("Trident/") != -1) {
        browser = "Microsoft Internet Explorer";
        browserVersion = navigator2.userAgent.substring(verOffset + 5);
        if ((verOffset = navigator2.userAgent.indexOf("rv:")) != -1) {
          browserVersion = navigator2.userAgent.substring(verOffset + 3);
        }
      } else if ((verOffset = navigator2.userAgent.indexOf("Chrome")) != -1) {
        browser = "Chrome";
        browserVersion = navigator2.userAgent.substring(verOffset + 7);
      } else if ((verOffset = navigator2.userAgent.indexOf("Safari")) != -1) {
        browser = "Safari";
        browserVersion = navigator2.userAgent.substring(verOffset + 7);
        if ((verOffset = navigator2.userAgent.indexOf("Version")) != -1) {
          browserVersion = navigator2.userAgent.substring(verOffset + 8);
        }
        if (navigator2.userAgent.indexOf("CriOS") != -1) {
          browser = "Chrome";
        }
      } else if ((verOffset = navigator2.userAgent.indexOf("Firefox")) != -1) {
        browser = "Firefox";
        browserVersion = navigator2.userAgent.substring(verOffset + 8);
      } else if ((nameOffset = navigator2.userAgent.lastIndexOf(" ") + 1) < (verOffset = navigator2.userAgent.lastIndexOf("/"))) {
        browser = navigator2.userAgent.substring(nameOffset, verOffset);
        browserVersion = navigator2.userAgent.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
          browser = navigator2.appName;
        }
      }
      if ((ix = browserVersion.indexOf(";")) != -1)
        browserVersion = browserVersion.substring(0, ix);
      if ((ix = browserVersion.indexOf(" ")) != -1)
        browserVersion = browserVersion.substring(0, ix);
      if ((ix = browserVersion.indexOf(")")) != -1)
        browserVersion = browserVersion.substring(0, ix);
      return [browser, browserVersion].join("-");
    };
    var getBrowserOsDetails = (navigator2) => {
      let os2 = "unknown";
      const clientStrings = [
        { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
        { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
        { s: "Windows Vista", r: /Windows NT 6.0/ },
        { s: "Windows Server 2003", r: /Windows NT 5.2/ },
        { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
        { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
        { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
        { s: "Windows 98", r: /(Windows 98|Win98)/ },
        { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
        { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
        { s: "Windows CE", r: /Windows CE/ },
        { s: "Windows 3.11", r: /Win16/ },
        { s: "Android", r: /Android/ },
        { s: "Open BSD", r: /OpenBSD/ },
        { s: "Sun OS", r: /SunOS/ },
        { s: "Chrome OS", r: /CrOS/ },
        { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
        { s: "iOS", r: /(iPhone|iPad|iPod)/ },
        { s: "Mac OS X", r: /Mac OS X/ },
        { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: "QNX", r: /QNX/ },
        { s: "UNIX", r: /UNIX/ },
        { s: "BeOS", r: /BeOS/ },
        { s: "OS/2", r: /OS\/2/ },
        {
          s: "Search Bot",
          r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
        }
      ];
      for (const id in clientStrings) {
        const cs = clientStrings[id];
        if (cs.r.test(navigator2.userAgent)) {
          os2 = cs.s;
          break;
        }
      }
      let osVersion = "unknown";
      if (/Windows/.test(os2)) {
        osVersion;
        const matches = /Windows (.*)/.exec(os2);
        if (matches) {
          osVersion = matches[1];
        }
        os2 = "Windows";
      }
      switch (os2) {
        case "Mac OS":
        case "Mac OS X":
        case "Android": {
          const matches = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/.exec(
            navigator2.userAgent
          );
          if (matches) {
            osVersion = matches[1];
          }
          break;
        }
        case "iOS": {
          const matches = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator2.appVersion);
          if (matches) {
            osVersion = matches[1] + "." + matches[2] + "." + (matches[3] ?? 0);
          }
          break;
        }
      }
      return [os2, osVersion].join("-");
    };
    var crossGlobal = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : self;
    var getNodeRuntimeEnv = () => {
      if (!(typeof process !== "undefined" && process && process.env && typeof process.env === "object")) {
        return "unknown";
      }
      const runtimeEnvs = [
        {
          name: "Netlify",
          check: function() {
            return !!process.env["NETLIFY_IMAGES_CDN_DOMAIN"];
          }
        },
        {
          name: "Vercel",
          check: function() {
            return !!process.env["VERCEL"];
          }
        },
        {
          name: "Heroku",
          check: function() {
            return !!process.env["PATH"] && process.env.PATH.indexOf(".heroku") !== -1;
          }
        },
        {
          name: "AWS Lambda",
          check: function() {
            return !!process.env["AWS_LAMBDA_FUNCTION_VERSION"];
          }
        },
        {
          name: "GCP Cloud Functions",
          check: function() {
            return !!process.env["_"] && process.env._.indexOf("google") !== -1;
          }
        },
        {
          name: "GCP Compute Instances",
          check: function() {
            return !!process.env["GOOGLE_CLOUD_PROJECT"];
          }
        },
        {
          name: "Azure Cloud Functions",
          check: function() {
            return !!process.env["WEBSITE_FUNCTIONS_AZUREMONITOR_CATEGORIES"];
          }
        },
        {
          name: "Azure Compute",
          check: function() {
            return !!process.env["ORYX_ENV_TYPE"] && !!process.env["WEBSITE_INSTANCE_ID"] && process.env.ORYX_ENV_TYPE === "AppService";
          }
        },
        {
          name: "Mongo Stitch",
          check: function() {
            return typeof (crossGlobal == null ? void 0 : crossGlobal.StitchError) === "function";
          }
        },
        {
          name: "Render",
          check: function() {
            return !!process.env["RENDER_SERVICE_ID"];
          }
        },
        {
          name: "Begin",
          check: function() {
            return !!process.env["BEGIN_DATA_SCOPE_ID"];
          }
        }
      ];
      const detectedEnv = runtimeEnvs.find((env) => env.check());
      return detectedEnv ? detectedEnv.name : "unknown";
    };
    var isQuerySuccess = (res) => res instanceof Object && "data" in res;
    var isQueryFailure = (res) => res instanceof Object && "error" in res && res.error instanceof Object && "code" in res.error && "message" in res.error;
    var DEFAULT_CLIENT_CONFIG = {
      client_timeout_buffer_ms: 5e3,
      endpoint: endpoints.default,
      format: "tagged",
      http2_session_idle_ms: 5e3,
      http2_max_streams: 100,
      long_type: "number",
      fetch_keepalive: false,
      query_timeout_ms: 5e3
    };
    var _driverEnvHeader;
    var _clientConfiguration;
    var _httpClient;
    var _lastTxnTs;
    var _isClosed;
    var _getError;
    var getError_fn;
    var _getSecret;
    var getSecret_fn;
    var _getServiceError;
    var getServiceError_fn;
    var _query;
    var query_fn;
    var _setHeaders;
    var setHeaders_fn;
    var _validateConfiguration;
    var validateConfiguration_fn;
    var _Client = class {
      constructor(clientConfiguration, httpClient) {
        __privateAdd2(this, _getError);
        __privateAdd2(this, _getSecret);
        __privateAdd2(this, _getServiceError);
        __privateAdd2(this, _query);
        __privateAdd2(this, _setHeaders);
        __privateAdd2(this, _validateConfiguration);
        __privateAdd2(this, _clientConfiguration, void 0);
        __privateAdd2(this, _httpClient, void 0);
        __privateAdd2(this, _lastTxnTs, void 0);
        __privateAdd2(this, _isClosed, false);
        __privateSet2(this, _clientConfiguration, {
          ...DEFAULT_CLIENT_CONFIG,
          ...clientConfiguration,
          secret: __privateMethod2(this, _getSecret, getSecret_fn).call(this, clientConfiguration)
        });
        __privateMethod2(this, _validateConfiguration, validateConfiguration_fn).call(this);
        if (!httpClient) {
          __privateSet2(this, _httpClient, getDefaultHTTPClient({
            url: __privateGet2(this, _clientConfiguration).endpoint.toString(),
            http2_session_idle_ms: __privateGet2(this, _clientConfiguration).http2_session_idle_ms,
            http2_max_streams: __privateGet2(this, _clientConfiguration).http2_max_streams,
            fetch_keepalive: __privateGet2(this, _clientConfiguration).fetch_keepalive
          }));
        } else {
          __privateSet2(this, _httpClient, httpClient);
        }
      }
      get lastTxnTs() {
        return __privateGet2(this, _lastTxnTs);
      }
      set lastTxnTs(ts) {
        __privateSet2(this, _lastTxnTs, __privateGet2(this, _lastTxnTs) ? Math.max(ts, __privateGet2(this, _lastTxnTs)) : ts);
      }
      get clientConfiguration() {
        const { secret, ...rest } = __privateGet2(this, _clientConfiguration);
        return rest;
      }
      close() {
        if (__privateGet2(this, _isClosed)) {
          throw new ClientClosedError(
            "Your client is closed. You cannot close it again."
          );
        }
        __privateGet2(this, _httpClient).close();
        __privateSet2(this, _isClosed, true);
      }
      paginate(iterable, options) {
        if (iterable instanceof Query2) {
          return SetIterator.fromQuery(this, iterable, options);
        }
        return SetIterator.fromPageable(this, iterable, options);
      }
      async query(query, options) {
        if (__privateGet2(this, _isClosed)) {
          throw new ClientClosedError(
            "Your client is closed. No further requests can be issued."
          );
        }
        const queryInterpolation = query.toQuery(options).query;
        return __privateMethod2(this, _query, query_fn).call(this, queryInterpolation, options);
      }
    };
    var Client2 = _Client;
    _driverEnvHeader = /* @__PURE__ */ new WeakMap();
    _clientConfiguration = /* @__PURE__ */ new WeakMap();
    _httpClient = /* @__PURE__ */ new WeakMap();
    _lastTxnTs = /* @__PURE__ */ new WeakMap();
    _isClosed = /* @__PURE__ */ new WeakMap();
    _getError = /* @__PURE__ */ new WeakSet();
    getError_fn = function(e) {
      if (e instanceof ClientError || e instanceof NetworkError || e instanceof ProtocolError || e instanceof ServiceError) {
        return e;
      }
      if (isHTTPResponse(e)) {
        if (isQueryFailure(e.body)) {
          const failure = e.body;
          const status = e.status;
          return __privateMethod2(this, _getServiceError, getServiceError_fn).call(this, failure, status);
        }
        return new ProtocolError({
          message: `Response is in an unkown format: ${e.body}`,
          httpStatus: e.status
        });
      }
      return new ClientError(
        "A client level error occurred. Fauna was not called.",
        {
          cause: e
        }
      );
    };
    _getSecret = /* @__PURE__ */ new WeakSet();
    getSecret_fn = function(partialClientConfig) {
      let fallback = void 0;
      if (typeof process !== "undefined" && process && typeof process === "object" && process.env && typeof process.env === "object") {
        fallback = process.env["FAUNA_SECRET"];
      }
      const maybeSecret = (partialClientConfig == null ? void 0 : partialClientConfig.secret) || fallback;
      if (maybeSecret === void 0) {
        throw new Error(
          "You must provide a secret to the driver. Set it in an environmental variable named FAUNA_SECRET or pass it to the Client constructor."
        );
      }
      return maybeSecret;
    };
    _getServiceError = /* @__PURE__ */ new WeakSet();
    getServiceError_fn = function(failure, httpStatus) {
      switch (httpStatus) {
        case 400:
          if (QUERY_CHECK_FAILURE_CODES.includes(failure.error.code)) {
            return new QueryCheckError(failure, httpStatus);
          }
          if (failure.error.code === "invalid_request") {
            return new InvalidRequestError(failure, httpStatus);
          }
          if (failure.error.code === "abort" && failure.error.abort !== void 0) {
            return new AbortError(
              failure,
              httpStatus
            );
          }
          return new QueryRuntimeError(failure, httpStatus);
        case 401:
          return new AuthenticationError(failure, httpStatus);
        case 403:
          return new AuthorizationError(failure, httpStatus);
        case 409:
          return new ContendedTransactionError(failure, httpStatus);
        case 429:
          return new ThrottlingError(failure, httpStatus);
        case 440:
          return new QueryTimeoutError(failure, httpStatus);
        case 500:
          return new ServiceInternalError(failure, httpStatus);
        case 503:
          return new ServiceTimeoutError(failure, httpStatus);
        default:
          return new ServiceError(failure, httpStatus);
      }
    };
    _query = /* @__PURE__ */ new WeakSet();
    query_fn = async function(queryInterpolation, options) {
      try {
        const requestConfig = {
          ...__privateGet2(this, _clientConfiguration),
          ...options
        };
        const headers = {
          Authorization: `Bearer ${__privateGet2(this, _clientConfiguration).secret}`
        };
        __privateMethod2(this, _setHeaders, setHeaders_fn).call(this, requestConfig, headers);
        const isTaggedFormat = requestConfig.format === "tagged";
        const queryArgs = requestConfig.arguments ? isTaggedFormat ? TaggedTypeFormat.encode(requestConfig.arguments) : requestConfig.arguments : void 0;
        const requestData = {
          query: queryInterpolation,
          arguments: queryArgs
        };
        const client_timeout_ms = requestConfig.query_timeout_ms + __privateGet2(this, _clientConfiguration).client_timeout_buffer_ms;
        const response = await __privateGet2(this, _httpClient).request({
          client_timeout_ms,
          data: requestData,
          headers,
          method: "POST"
        });
        let parsedResponse;
        try {
          parsedResponse = {
            ...response,
            body: isTaggedFormat ? TaggedTypeFormat.decode(response.body, {
              long_type: requestConfig.long_type
            }) : JSON.parse(response.body)
          };
          if (parsedResponse.body.query_tags) {
            const tags_array = parsedResponse.body.query_tags.split(",").map((tag) => tag.split("="));
            parsedResponse.body.query_tags = Object.fromEntries(tags_array);
          }
        } catch (error) {
          throw new ProtocolError({
            message: `Error parsing response as JSON: ${error}`,
            httpStatus: response.status
          });
        }
        if (!isQuerySuccess(parsedResponse.body)) {
          throw __privateMethod2(this, _getError, getError_fn).call(this, parsedResponse);
        }
        const txn_ts = parsedResponse.body.txn_ts;
        if (__privateGet2(this, _lastTxnTs) === void 0 && txn_ts !== void 0 || txn_ts !== void 0 && __privateGet2(this, _lastTxnTs) !== void 0 && __privateGet2(this, _lastTxnTs) < txn_ts) {
          __privateSet2(this, _lastTxnTs, txn_ts);
        }
        return parsedResponse.body;
      } catch (e) {
        throw __privateMethod2(this, _getError, getError_fn).call(this, e);
      }
    };
    _setHeaders = /* @__PURE__ */ new WeakSet();
    setHeaders_fn = function(fromObject, headerObject) {
      for (const entry of Object.entries(fromObject)) {
        if ([
          "format",
          "query_timeout_ms",
          "linearized",
          "max_contention_retries",
          "traceparent",
          "typecheck",
          "query_tags"
        ].includes(entry[0])) {
          let headerValue;
          let headerKey = `x-${entry[0].replaceAll("_", "-")}`;
          if ("query_tags" === entry[0]) {
            headerValue = Object.entries(entry[1]).map((tag) => tag.join("=")).join(",");
          } else {
            if (typeof entry[1] === "string") {
              headerValue = entry[1];
            } else {
              headerValue = String(entry[1]);
            }
          }
          if ("traceparent" === entry[0]) {
            headerKey = entry[0];
          }
          headerObject[headerKey] = headerValue;
        }
      }
      if (headerObject["x-last-txn-ts"] === void 0 && __privateGet2(this, _lastTxnTs) !== void 0) {
        headerObject["x-last-txn-ts"] = __privateGet2(this, _lastTxnTs);
      }
      headerObject["x-driver-env"] = __privateGet2(_Client, _driverEnvHeader);
    };
    _validateConfiguration = /* @__PURE__ */ new WeakSet();
    validateConfiguration_fn = function() {
      const config = __privateGet2(this, _clientConfiguration);
      const required_options = [
        "client_timeout_buffer_ms",
        "endpoint",
        "format",
        "http2_session_idle_ms",
        "long_type",
        "query_timeout_ms",
        "fetch_keepalive",
        "http2_max_streams"
      ];
      required_options.forEach((option) => {
        if (config[option] === void 0) {
          throw new TypeError(
            `ClientConfiguration option '${option}' must be defined.`
          );
        }
      });
      if (config.http2_max_streams <= 0) {
        throw new RangeError(`'http2_max_streams' must be greater than zero.`);
      }
      if (config.client_timeout_buffer_ms <= 0) {
        throw new RangeError(
          `'client_timeout_buffer_ms' must be greater than zero.`
        );
      }
      if (config.query_timeout_ms <= 0) {
        throw new RangeError(`'query_timeout_ms' must be greater than zero.`);
      }
    };
    __privateAdd2(Client2, _driverEnvHeader, getDriverEnv());
    var QUERY_CHECK_FAILURE_CODES = [
      "invalid_function_definition",
      "invalid_identifier",
      "invalid_query",
      "invalid_syntax",
      "invalid_type"
    ];
  }
});

// handlers/read.ts
var read_exports = {};
__export(read_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(read_exports);
var import_fauna = __toESM(require_node());
var client = new import_fauna.Client({ secret: process.env.FAUNA_SECRET });
var handler = async (event) => {
  try {
    if (event.pathParameters && event.pathParameters.id) {
      console.log("Path Parameters:", event.pathParameters);
      const id = String(event.pathParameters.id);
      const response = await client.query(
        import_fauna.fql`Inventory.byId(${id})`
      );
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      };
    } else {
      const response = await client.query(
        import_fauna.fql`Inventory.all()`
      );
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=read.js.map
