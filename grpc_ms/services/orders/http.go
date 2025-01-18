package main

import (
	handler "grpc_ms/services/orders/handler/orders"
	"grpc_ms/services/orders/service"
	"log"
	"net/http"
)

type httpServer struct {
	addr string
}

func NewHttpServer(addr string) *httpServer {
	return &httpServer{addr: addr}
}

func (s *httpServer) Run() error {
	router := http.NewServeMux()

	orderService := service.NewOrderService()

	orderHandler := handler.NewHttpOrdersHandler(orderService)

	orderHandler.RegisterRouter(router)

	log.Println("String server on", s.addr)

	return http.ListenAndServe(s.addr, router)
}
