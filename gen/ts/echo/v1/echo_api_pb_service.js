// package: greenvine.heygrpc.echo.v1
// file: echo/v1/echo_api.proto

var echo_v1_echo_api_pb = require("../../echo/v1/echo_api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EchoAPI = (function () {
  function EchoAPI() {}
  EchoAPI.serviceName = "greenvine.heygrpc.echo.v1.EchoAPI";
  return EchoAPI;
}());

EchoAPI.Send = {
  methodName: "Send",
  service: EchoAPI,
  requestStream: false,
  responseStream: false,
  requestType: echo_v1_echo_api_pb.PingRequest,
  responseType: echo_v1_echo_api_pb.PingResponse
};

EchoAPI.Subscribe = {
  methodName: "Subscribe",
  service: EchoAPI,
  requestStream: false,
  responseStream: true,
  requestType: echo_v1_echo_api_pb.PingRequest,
  responseType: echo_v1_echo_api_pb.PingResponse
};

exports.EchoAPI = EchoAPI;

function EchoAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EchoAPIClient.prototype.send = function send(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EchoAPI.Send, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EchoAPIClient.prototype.subscribe = function subscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(EchoAPI.Subscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.EchoAPIClient = EchoAPIClient;

