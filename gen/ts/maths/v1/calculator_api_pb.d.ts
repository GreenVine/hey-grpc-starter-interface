// package: greenvine.heygrpc.maths.v1
// file: maths/v1/calculator_api.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class DivideIntegersRequest extends jspb.Message {
  getDividend(): number;
  setDividend(value: number): void;

  getDivisor(): number;
  setDivisor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DivideIntegersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DivideIntegersRequest): DivideIntegersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DivideIntegersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DivideIntegersRequest;
  static deserializeBinaryFromReader(message: DivideIntegersRequest, reader: jspb.BinaryReader): DivideIntegersRequest;
}

export namespace DivideIntegersRequest {
  export type AsObject = {
    dividend: number,
    divisor: number,
  }
}

export class DivideIntegersResponse extends jspb.Message {
  getQuotient(): number;
  setQuotient(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DivideIntegersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DivideIntegersResponse): DivideIntegersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DivideIntegersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DivideIntegersResponse;
  static deserializeBinaryFromReader(message: DivideIntegersResponse, reader: jspb.BinaryReader): DivideIntegersResponse;
}

export namespace DivideIntegersResponse {
  export type AsObject = {
    quotient: number,
  }
}

