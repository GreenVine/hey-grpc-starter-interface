// Code generated by protoc-gen-grpc-gateway. DO NOT EDIT.
// source: maths/v1/calculator_api.proto

/*
Package mathsv1pb is a reverse proxy.

It translates gRPC into RESTful JSON APIs.
*/
package mathsv1pb

import (
	"context"
	"io"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/grpc-ecosystem/grpc-gateway/v2/utilities"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
)

// Suppress "imported and not used" errors
var _ codes.Code
var _ io.Reader
var _ status.Status
var _ = runtime.String
var _ = utilities.NewDoubleArray
var _ = metadata.Join

func request_CalculatorAPI_DivideIntegers_0(ctx context.Context, marshaler runtime.Marshaler, client CalculatorAPIClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq DivideIntegersRequest
	var metadata runtime.ServerMetadata

	newReader, berr := utilities.IOReaderFactory(req.Body)
	if berr != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", berr)
	}
	if err := marshaler.NewDecoder(newReader()).Decode(&protoReq); err != nil && err != io.EOF {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.DivideIntegers(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

func local_request_CalculatorAPI_DivideIntegers_0(ctx context.Context, marshaler runtime.Marshaler, server CalculatorAPIServer, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq DivideIntegersRequest
	var metadata runtime.ServerMetadata

	newReader, berr := utilities.IOReaderFactory(req.Body)
	if berr != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", berr)
	}
	if err := marshaler.NewDecoder(newReader()).Decode(&protoReq); err != nil && err != io.EOF {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := server.DivideIntegers(ctx, &protoReq)
	return msg, metadata, err

}

// RegisterCalculatorAPIHandlerServer registers the http handlers for service CalculatorAPI to "mux".
// UnaryRPC     :call CalculatorAPIServer directly.
// StreamingRPC :currently unsupported pending https://github.com/grpc/grpc-go/issues/906.
// Note that using this registration option will cause many gRPC library features to stop working. Consider using RegisterCalculatorAPIHandlerFromEndpoint instead.
func RegisterCalculatorAPIHandlerServer(ctx context.Context, mux *runtime.ServeMux, server CalculatorAPIServer) error {

	mux.Handle("POST", pattern_CalculatorAPI_DivideIntegers_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		var stream runtime.ServerTransportStream
		ctx = grpc.NewContextWithServerTransportStream(ctx, &stream)
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateIncomingContext(ctx, mux, req, "/greenvine.heygrpc.maths.v1.CalculatorAPI/DivideIntegers")
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := local_request_CalculatorAPI_DivideIntegers_0(rctx, inboundMarshaler, server, req, pathParams)
		md.HeaderMD, md.TrailerMD = metadata.Join(md.HeaderMD, stream.Header()), metadata.Join(md.TrailerMD, stream.Trailer())
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_CalculatorAPI_DivideIntegers_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

// RegisterCalculatorAPIHandlerFromEndpoint is same as RegisterCalculatorAPIHandler but
// automatically dials to "endpoint" and closes the connection when "ctx" gets done.
func RegisterCalculatorAPIHandlerFromEndpoint(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error) {
	conn, err := grpc.Dial(endpoint, opts...)
	if err != nil {
		return err
	}
	defer func() {
		if err != nil {
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
			return
		}
		go func() {
			<-ctx.Done()
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
		}()
	}()

	return RegisterCalculatorAPIHandler(ctx, mux, conn)
}

// RegisterCalculatorAPIHandler registers the http handlers for service CalculatorAPI to "mux".
// The handlers forward requests to the grpc endpoint over "conn".
func RegisterCalculatorAPIHandler(ctx context.Context, mux *runtime.ServeMux, conn *grpc.ClientConn) error {
	return RegisterCalculatorAPIHandlerClient(ctx, mux, NewCalculatorAPIClient(conn))
}

// RegisterCalculatorAPIHandlerClient registers the http handlers for service CalculatorAPI
// to "mux". The handlers forward requests to the grpc endpoint over the given implementation of "CalculatorAPIClient".
// Note: the gRPC framework executes interceptors within the gRPC handler. If the passed in "CalculatorAPIClient"
// doesn't go through the normal gRPC flow (creating a gRPC client etc.) then it will be up to the passed in
// "CalculatorAPIClient" to call the correct interceptors.
func RegisterCalculatorAPIHandlerClient(ctx context.Context, mux *runtime.ServeMux, client CalculatorAPIClient) error {

	mux.Handle("POST", pattern_CalculatorAPI_DivideIntegers_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req, "/greenvine.heygrpc.maths.v1.CalculatorAPI/DivideIntegers")
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_CalculatorAPI_DivideIntegers_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_CalculatorAPI_DivideIntegers_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

var (
	pattern_CalculatorAPI_DivideIntegers_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 2, 1, 2, 2}, []string{"v1", "maths", "calculator"}, "divide"))
)

var (
	forward_CalculatorAPI_DivideIntegers_0 = runtime.ForwardResponseMessage
)
