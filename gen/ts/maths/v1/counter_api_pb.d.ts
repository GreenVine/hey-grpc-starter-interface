// package: greenvine.heygrpc.maths.v1
// file: maths/v1/counter_api.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";

export class IncrementCounterRequest extends jspb.Message {
  getStep(): number;
  setStep(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncrementCounterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IncrementCounterRequest): IncrementCounterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncrementCounterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncrementCounterRequest;
  static deserializeBinaryFromReader(message: IncrementCounterRequest, reader: jspb.BinaryReader): IncrementCounterRequest;
}

export namespace IncrementCounterRequest {
  export type AsObject = {
    step: number,
  }
}

export class IncrementCounterResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncrementCounterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IncrementCounterResponse): IncrementCounterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncrementCounterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncrementCounterResponse;
  static deserializeBinaryFromReader(message: IncrementCounterResponse, reader: jspb.BinaryReader): IncrementCounterResponse;
}

export namespace IncrementCounterResponse {
  export type AsObject = {
    value: number,
  }
}

