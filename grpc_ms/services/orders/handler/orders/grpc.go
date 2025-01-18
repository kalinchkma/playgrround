package handler

import (
	"context"
	"grpc_ms/services/common/genproto/orders"
	"grpc_ms/services/orders/types"

	"google.golang.org/grpc"
)

type OrdersGrpcHandler struct {
	orderService types.OrderService
	orders.UnimplementedOrderServiceServer
}

func NewGrpcOrdersService(grpc *grpc.Server, orderService types.OrderService) {
	gRPCHandler := &OrdersGrpcHandler{
		orderService: orderService,
	}

	// Register the OrderServiceServer
	orders.RegisterOrderServiceServer(grpc, gRPCHandler)
}

func (h *OrdersGrpcHandler) GetOrders(ctx context.Context, req *orders.GetOrdersRequest) (*orders.GetOrderResponse, error) {
	o := h.orderService.GetOrders(ctx)
	res := &orders.GetOrderResponse{
		Orders: o,
	}

	return res, nil
}

func (h *OrdersGrpcHandler) CreateOrder(ctx context.Context, req *orders.CreateOrderRequest) (*orders.CreateOrderResponse, error) {
	order := &orders.Order{
		OrderID:    23,
		CustomerID: 1,
		ProductID:  2,
		Quantity:   1,
	}

	err := h.orderService.CreateOrder(ctx, order)
	if err != nil {
		return nil, err
	}

	res := &orders.CreateOrderResponse{
		Status: "success",
	}
	return res, nil
}
