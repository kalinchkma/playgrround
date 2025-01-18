package handler

import (
	"grpc_ms/services/common/genproto/orders"
	"grpc_ms/services/common/util"
	"grpc_ms/services/orders/types"
	"net/http"
)

type OrderHttpHandler struct {
	orderService types.OrderService
}

func NewHttpOrdersHandler(orderService types.OrderService) *OrderHttpHandler {
	return &OrderHttpHandler{
		orderService: orderService,
	}
}

func (h *OrderHttpHandler) RegisterRouter(router *http.ServeMux) {
	router.HandleFunc("POST /orders", h.CreateOrder)
}

func (h *OrderHttpHandler) CreateOrder(w http.ResponseWriter, r *http.Request) {
	var req orders.CreateOrderRequest
	err := util.ParseJSON(r, &req)
	if err != nil {
		util.WriteError(w, http.StatusBadRequest, err)
		return
	}

	order := &orders.Order{
		OrderID:    23,
		CustomerID: req.GetCustomerID(),
		ProductID:  req.ProductID,
		Quantity:   req.Quantity,
	}

	err = h.orderService.CreateOrder(r.Context(), order)
	if err != nil {
		util.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	res := &orders.CreateOrderResponse{Status: "Success"}
	util.WriteJSON(w, http.StatusOK, res)
}
