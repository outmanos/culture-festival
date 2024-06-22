package handlers

import (
	"encoding/json"
	"go-rest-api/models"
	"net/http"

	"github.com/gorilla/mux"
)

var customers = make(map[string]models.Customer)

func GetCustomers(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(customers)
}

func GetCustomer(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	customer, found := customers[params["id"]]
	if !found {
		w.WriteHeader(http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(customer)
}

func CreateCustomer(w http.ResponseWriter, r *http.Request) {
	var customer models.Customer
	json.NewDecoder(r.Body).Decode(&customer)
	customers[customer.ID] = customer
	json.NewEncoder(w).Encode(customer)
}

func UpdateCustomer(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var updatedCustomer models.Customer
	json.NewDecoder(r.Body).Decode(&updatedCustomer)
	customers[params["id"]] = updatedCustomer
	json.NewEncoder(w).Encode(updatedCustomer)
}

func DeleteCustomer(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	delete(customers, params["id"])
	w.WriteHeader(http.StatusNoContent)
}
