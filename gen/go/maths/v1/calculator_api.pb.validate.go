// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: maths/v1/calculator_api.proto

package mathsv1pb

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/golang/protobuf/ptypes"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = ptypes.DynamicAny{}
)

// define the regex for a UUID once up-front
var _calculator_api_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on DivideIntegersRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *DivideIntegersRequest) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Dividend

	if _, ok := _DivideIntegersRequest_Divisor_NotInLookup[m.GetDivisor()]; ok {
		return DivideIntegersRequestValidationError{
			field:  "Divisor",
			reason: "value must not be in list [0]",
		}
	}

	return nil
}

// DivideIntegersRequestValidationError is the validation error returned by
// DivideIntegersRequest.Validate if the designated constraints aren't met.
type DivideIntegersRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DivideIntegersRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DivideIntegersRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DivideIntegersRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DivideIntegersRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DivideIntegersRequestValidationError) ErrorName() string {
	return "DivideIntegersRequestValidationError"
}

// Error satisfies the builtin error interface
func (e DivideIntegersRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDivideIntegersRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DivideIntegersRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DivideIntegersRequestValidationError{}

var _DivideIntegersRequest_Divisor_NotInLookup = map[int64]struct{}{
	0: {},
}

// Validate checks the field values on DivideIntegersResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *DivideIntegersResponse) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Quotient

	return nil
}

// DivideIntegersResponseValidationError is the validation error returned by
// DivideIntegersResponse.Validate if the designated constraints aren't met.
type DivideIntegersResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DivideIntegersResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DivideIntegersResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DivideIntegersResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DivideIntegersResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DivideIntegersResponseValidationError) ErrorName() string {
	return "DivideIntegersResponseValidationError"
}

// Error satisfies the builtin error interface
func (e DivideIntegersResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDivideIntegersResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DivideIntegersResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DivideIntegersResponseValidationError{}
