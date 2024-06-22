package models

type Ticket struct {
	ID         string  `json:"id"`
	EventID    string  `json:"event_id"`
	CustomerID string  `json:"customer_id"`
	Price      float64 `json:"price"`
}
