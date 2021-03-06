// source: maths/v1/counter_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest', null, global);
goog.exportSymbol('proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.displayName = 'proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.displayName = 'proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    step: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest;
  return proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStep(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStep();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 step = 1;
 * @return {number}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.prototype.getStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest} returns this
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterRequest.prototype.setStep = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse;
  return proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 value = 1;
 * @return {number}
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse} returns this
 */
proto.greenvine.heygrpc.maths.v1.IncrementCounterResponse.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.greenvine.heygrpc.maths.v1);
