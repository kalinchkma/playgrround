package main

import (
	handler "grpc_ms/services/orders/handler/orders"
	"grpc_ms/services/orders/service"
	"log"
	"net"

	"google.golang.org/grpc"
)

type gRPCServer struct {
	addr string
}

func NewGRPCServer(addr string) *gRPCServer {
	return &gRPCServer{addr: addr}
}

func (s *gRPCServer) Run() error {
	listener, err := net.Listen("tcp", s.addr)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()

	// register gRPC services
	orderService := service.NewOrderService()

	handler.NewGrpcOrdersService(grpcServer, orderService)

	log.Println("Starting gRPC server on ", s.addr)
	return grpcServer.Serve(listener)
}
