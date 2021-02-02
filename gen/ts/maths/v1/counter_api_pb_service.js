// package: greenvine.heygrpc.maths.v1
// file: maths/v1/counter_api.proto

var maths_v1_counter_api_pb = require("../../maths/v1/counter_api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CounterAPI = (function () {
  function CounterAPI() {}
  CounterAPI.serviceName = "greenvine.heygrpc.maths.v1.CounterAPI";
  return CounterAPI;
}());

CounterAPI.Increment = {
  methodName: "Increment",
  service: CounterAPI,
  requestStream: false,
  responseStream: false,
  requestType: maths_v1_counter_api_pb.IncrementCounterRequest,
  responseType: maths_v1_counter_api_pb.IncrementCounterResponse
};

exports.CounterAPI = CounterAPI;

function CounterAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CounterAPIClient.prototype.increment = function increment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CounterAPI.Increment, {
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

exports.CounterAPIClient = CounterAPIClient;

