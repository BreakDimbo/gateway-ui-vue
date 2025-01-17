go 枚举值 

```go

syntax = "proto2";
package metapb;

import "gogoproto/gogo.proto";

option (gogoproto.marshaler_all) = true;
option (gogoproto.sizer_all) = true;
option (gogoproto.unmarshaler_all) = true;
option (gogoproto.goproto_enum_prefix_all) = false;

// Status is the components status
enum Status {
    Down    = 0;
    Up      = 1;
    Unknown = 2;
}

// CircuitStatus is the circuit breaker status
enum CircuitStatus {
    Open  = 0;
    Half  = 1;
    Close = 2;
}

// LoadBalance the load balance enum
enum LoadBalance {
    RoundRobin = 0;
    IPHash     = 1;
    WightRobin = 2;
}

// Protocol is the protocol of the backend api
enum Protocol {
    HTTP        = 0;
    Grpc        = 1;
    Dubbo       = 2;
    SpringCloud = 3;
}

enum Source {
    QueryString = 0;
    FormData    = 1;
    JSONBody    = 2;
    Header      = 3;
    Cookie      = 4;
    PathValue   = 5;
}

enum RuleType {
    RuleRegexp = 0;
}

enum CMP {
    CMPEQ    = 0;
	CMPLT    = 1;
	CMPLE    = 2;
	CMPGT    = 3;
	CMPGE    = 4;
	CMPIn    = 5;
	CMPMatch = 6;
}

enum RoutingStrategy {
    Copy  = 0;
    Split = 1;
}

enum MatchRule {
    MatchDefault = 0;
    MatchAll     = 1;
    MatchAny     = 2;
}

// Proxy is a meta data of the gateway proxy
message Proxy {
    optional string addr     = 1 [(gogoproto.nullable) = false];
	optional string addrRPC  = 2 [(gogoproto.nullable) = false];
}

// Cluster is a set of server has same interface
message Cluster {
    optional uint64       id          = 1 [(gogoproto.nullable) = false, (gogoproto.customname) = "ID"];
    optional string       name        = 2 [(gogoproto.nullable) = false];
    optional LoadBalance  loadBalance = 3 [(gogoproto.nullable) = false];
}

// HeathCheck is the heath check
message HeathCheck {
    optional string path          = 1 [(gogoproto.nullable) = false];
    optional string body          = 2 [(gogoproto.nullable) = false];
    optional int64  checkInterval = 3 [(gogoproto.nullable) = false];
    optional int64  timeout       = 4 [(gogoproto.nullable) = false];
}

// CircuitBreaker circuit breaker
message CircuitBreaker {
    optional int64 closeTimeout       = 1 [(gogoproto.nullable) = false];
    optional int32 halfTrafficRate    = 2 [(gogoproto.nullable) = false];
	optional int64 rateCheckPeriod    = 3 [(gogoproto.nullable) = false];
	optional int32 failureRateToClose = 4 [(gogoproto.nullable) = false];
	optional int32 succeedRateToOpen  = 5 [(gogoproto.nullable) = false];
}

// Server is a backend server that provide api
message Server {
    optional uint64         id             = 1 [(gogoproto.nullable) = false, (gogoproto.customname) = "ID"];
    optional string         addr           = 2 [(gogoproto.nullable) = false];
    optional Protocol       protocol       = 3 [(gogoproto.nullable) = false];
    optional int64          maxQPS         = 4 [(gogoproto.nullable) = false];
    optional HeathCheck     heathCheck     = 5;
    optional CircuitBreaker circuitBreaker = 6;
    optional int64          weight         = 7 [(gogoproto.nullable) = false];
}

// Bind is a bind pair with cluster and server
message Bind {
    optional uint64 clusterID = 1 [(gogoproto.nullable) = false];
    optional uint64 serverID  = 2 [(gogoproto.nullable) = false];
}

// Pair is pair value
message PairValue {
    optional string name  = 1 [(gogoproto.nullable) = false];
    optional string value = 2 [(gogoproto.nullable) = false];
}

// IPAccessControl is for ip access control
message IPAccessControl {
    repeated string whitelist = 1;
    repeated string blacklist = 2;
}

// HTTPResult is a http result
message HTTPResult {
    optional bytes     body    = 1;
    repeated PairValue headers = 2;
    repeated PairValue cookies = 3;
    optional int32     code    = 4  [(gogoproto.nullable) = false];
}

// Parameter is a parameter from a http request
message Parameter {
    optional string name   = 1 [(gogoproto.nullable) = false];
    optional Source source = 2 [(gogoproto.nullable) = false];
    optional int32  index  = 3 [(gogoproto.nullable) = false];
}

// ValidationRule is a validation rule
message ValidationRule {
    optional RuleType ruleType   = 1 [(gogoproto.nullable) = false];
    optional string   expression = 2 [(gogoproto.nullable) = false];
}

// Validation is a validation
message Validation {
    optional Parameter      parameter = 1 [(gogoproto.nullable) = false];
    optional bool           required  = 2 [(gogoproto.nullable) = false];
    repeated ValidationRule rules     = 3 [(gogoproto.nullable) = false];
}

// RetryStrategy retry strategy
message RetryStrategy {
    optional int32 interval = 1 [(gogoproto.nullable) = false];
    optional int32 maxTimes = 2 [(gogoproto.nullable) = false];
    repeated int32 codes    = 3;
}

// DispatchNode is the request forward to
message DispatchNode {
    optional uint64        clusterID     = 1 [(gogoproto.nullable) = false];
    optional string        urlRewrite    = 2 [(gogoproto.nullable) = false, (gogoproto.customname) = "URLRewrite"];
    optional string        attrName      = 3 [(gogoproto.nullable) = false];
    repeated Validation    validations   = 4;
    optional Cache         cache         = 5;
    optional HTTPResult    defaultValue  = 6 [(gogoproto.nullable) = true];
    optional bool          useDefault    = 7 [(gogoproto.nullable) = false];
    optional int32         batchIndex    = 8 [(gogoproto.nullable) = false];
    optional RetryStrategy retryStrategy = 9;
    optional int64         writeTimeout  = 10[(gogoproto.nullable) = false];
    optional int64         readTimeout   = 11[(gogoproto.nullable) = false];
}

// Cache is used for cache api result
message Cache {
    repeated Parameter keys       = 1 [(gogoproto.nullable) = false];
    optional uint64    deadline   = 2 [(gogoproto.nullable) = false];
    repeated Condition conditions = 3 [(gogoproto.nullable) = false];
}

// RenderTemplate the template that render to client
message RenderTemplate {
    repeated RenderObject objects = 1;
}

// RenderObject the object in the render template
message RenderObject {
    optional string     name       = 1 [(gogoproto.nullable) = false];
    repeated RenderAttr attrs      = 2;
    optional bool       flatAttrs  = 3 [(gogoproto.nullable) = false];
}

// RenderAttr the attr in the render object
message RenderAttr {
    optional string name       = 1 [(gogoproto.nullable) = false];
    optional string extractExp = 2 [(gogoproto.nullable) = false];
}

// API is the api for dispatcher
message API {
    optional uint64           id               = 1 [(gogoproto.nullable) = false, (gogoproto.customname) = "ID"];
    optional string           name             = 2 [(gogoproto.nullable) = false];
    optional string           urlPattern       = 3 [(gogoproto.nullable) = false, (gogoproto.customname) = "URLPattern"];
    optional string           method           = 4 [(gogoproto.nullable) = false];
    optional string           domain           = 5 [(gogoproto.nullable) = false];
    optional Status           status           = 6 [(gogoproto.nullable) = false];
    optional IPAccessControl  ipAccessControl  = 7 [(gogoproto.nullable) = true, (gogoproto.customname) = "IPAccessControl"];
    optional HTTPResult       defaultValue     = 8 [(gogoproto.nullable) = true];
    repeated DispatchNode     nodes            = 9;
    repeated string           perms            = 10;
    optional string           authFilter       = 11 [(gogoproto.nullable) = false];
    optional RenderTemplate   renderTemplate   = 12;
    optional bool             useDefault       = 13 [(gogoproto.nullable) = false];
    optional MatchRule        matchRule        = 14 [(gogoproto.nullable) = false];
    optional uint32           position         = 15 [(gogoproto.nullable) = false];
    repeated PairValue        tags             = 16;
    optional WebSocketOptions webSocketOptions = 17;
    optional int64            maxQPS           = 18 [(gogoproto.nullable) = false];
    optional CircuitBreaker   circuitBreaker   = 19;
}

// Condition is a condition for routing
message Condition {
    optional Parameter parameter = 1 [(gogoproto.nullable) = false];
    optional CMP       cmp       = 2 [(gogoproto.nullable) = false];
    optional string    expect    = 3 [(gogoproto.nullable) = false];
}

// Routing is a routing
message Routing {
    optional uint64          id          = 1 [(gogoproto.nullable) = false, (gogoproto.customname) = "ID"];
    optional uint64          clusterID   = 2 [(gogoproto.nullable) = false];
    repeated Condition       conditions  = 3 [(gogoproto.nullable) = false];
    optional RoutingStrategy strategy    = 4 [(gogoproto.nullable) = false];
    optional int32           trafficRate = 5 [(gogoproto.nullable) = false];
    optional Status          status      = 6 [(gogoproto.nullable) = false];
    optional uint64          api         = 7 [(gogoproto.nullable) = false, (gogoproto.customname) = "API"];
    optional string          name        = 8 [(gogoproto.nullable) = false];
}

// WebSocketOptions websocket options
message WebSocketOptions {
    optional string origin = 1 [(gogoproto.nullable) = false];
}

// System system
message System {
    optional CountMetric count = 1 [(gogoproto.nullable) = false];
}

// CountMetric count metric
message CountMetric {
    optional int64 cluster       = 1 [(gogoproto.nullable) = false];
    optional int64 server        = 2 [(gogoproto.nullable) = false];
    optional int64 api           = 3 [(gogoproto.nullable) = false, (gogoproto.customname) = "API"];
    optional int64 routing       = 4 [(gogoproto.nullable) = false];
    optional int64 plugin        = 5 [(gogoproto.nullable) = false];
    optional int64 appliedPlugin = 6 [(gogoproto.nullable) = false];
}

// PluginType plugin type enum
enum PluginType {
    JavaScript = 0;
}

// Plugin plugin
message Plugin {
    optional uint64     id       = 1 [(gogoproto.nullable) = false, (gogoproto.customname) = "ID"];
    optional string     name     = 2 [(gogoproto.nullable) = false];
    optional string     author   = 3 [(gogoproto.nullable) = false];
    optional string     email    = 4 [(gogoproto.nullable) = false];
    optional Status     status   = 5 [(gogoproto.nullable) = false];
    optional int64      updateAt = 6 [(gogoproto.nullable) = false];
    optional int64      version  = 7 [(gogoproto.nullable) = false];
    optional PluginType type     = 8 [(gogoproto.nullable) = false];
    optional bytes      content  = 9;
    optional bytes      cfg      = 10;
}

// AppliedPlugins applied plugins
message AppliedPlugins {
    optional uint64 id         = 1 [(gogoproto.nullable) = false, (gogoproto.customname) = "ID"];
    repeated uint64 appliedIDs = 2;
}

```
