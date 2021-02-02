// package: greenvine.heygrpc.maths.v1
// file: maths/v1/counter_api.proto

import * as maths_v1_counter_api_pb from "../../maths/v1/counter_api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CounterAPIIncrement = {
  readonly methodName: string;
  readonly service: typeof CounterAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof maths_v1_counter_api_pb.IncrementCounterRequest;
  readonly responseType: typeof maths_v1_counter_api_pb.IncrementCounterResponse;
};

export class CounterAPI {
  static readonly serviceName: string;
  static readonly Increment: CounterAPIIncrement;
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

export class CounterAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  increment(
    requestMessage: maths_v1_counter_api_pb.IncrementCounterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: maths_v1_counter_api_pb.IncrementCounterResponse|null) => void
  ): UnaryResponse;
  increment(
    requestMessage: maths_v1_counter_api_pb.IncrementCounterRequest,
    callback: (error: ServiceError|null, responseMessage: maths_v1_counter_api_pb.IncrementCounterResponse|null) => void
  ): UnaryResponse;
}

