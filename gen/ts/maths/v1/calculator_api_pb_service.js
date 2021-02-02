// package: greenvine.heygrpc.maths.v1
// file: maths/v1/calculator_api.proto

var maths_v1_calculator_api_pb = require("../../maths/v1/calculator_api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CalculatorAPI = (function () {
  function CalculatorAPI() {}
  CalculatorAPI.serviceName = "greenvine.heygrpc.maths.v1.CalculatorAPI";
  return CalculatorAPI;
}());

CalculatorAPI.DivideIntegers = {
  methodName: "DivideIntegers",
  service: CalculatorAPI,
  requestStream: false,
  responseStream: false,
  requestType: maths_v1_calculator_api_pb.DivideIntegersRequest,
  responseType: maths_v1_calculator_api_pb.DivideIntegersResponse
};

exports.CalculatorAPI = CalculatorAPI;

function CalculatorAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CalculatorAPIClient.prototype.divideIntegers = function divideIntegers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CalculatorAPI.DivideIntegers, {
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

exports.CalculatorAPIClient = CalculatorAPIClient;

