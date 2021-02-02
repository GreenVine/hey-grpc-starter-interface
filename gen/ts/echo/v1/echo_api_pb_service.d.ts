// package: greenvine.heygrpc.echo.v1
// file: echo/v1/echo_api.proto

import * as echo_v1_echo_api_pb from "../../echo/v1/echo_api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EchoAPISend = {
  readonly methodName: string;
  readonly service: typeof EchoAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof echo_v1_echo_api_pb.PingRequest;
  readonly responseType: typeof echo_v1_echo_api_pb.PingResponse;
};

type EchoAPISubscribe = {
  readonly methodName: string;
  readonly service: typeof EchoAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof echo_v1_echo_api_pb.PingRequest;
  readonly responseType: typeof echo_v1_echo_api_pb.PingResponse;
};

export class EchoAPI {
  static readonly serviceName: string;
  static readonly Send: EchoAPISend;
  static readonly Subscribe: EchoAPISubscribe;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class EchoAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  send(
    requestMessage: echo_v1_echo_api_pb.PingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: echo_v1_echo_api_pb.PingResponse|null) => void
  ): UnaryResponse;
  send(
    requestMessage: echo_v1_echo_api_pb.PingRequest,
    callback: (error: ServiceError|null, responseMessage: echo_v1_echo_api_pb.PingResponse|null) => void
  ): UnaryResponse;
  subscribe(requestMessage: echo_v1_echo_api_pb.PingRequest, metadata?: grpc.Metadata): ResponseStream<echo_v1_echo_api_pb.PingResponse>;
}

