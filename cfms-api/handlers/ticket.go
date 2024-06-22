package handlers

import (
	"encoding/json"
	"go-rest-api/models"
	"net/http"

	"github.com/gorilla/mux"
)

var tickets = make(map[string]models.Ticket)

func GetTickets(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(tickets)
}

func GetTicket(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	ticket, found := tickets[params["id"]]
	if !found {
		w.WriteHeader(http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(ticket)
}

func CreateTicket(w http.ResponseWriter, r *http.Request) {
	var ticket models.Ticket
	json.NewDecoder(r.Body).Decode(&ticket)
	tickets[ticket.ID] = ticket
	json.NewEncoder(w).Encode(ticket)
}

func UpdateTicket(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var updatedTicket models.Ticket
	json.NewDecoder(r.Body).Decode(&updatedTicket)
	tickets[params["id"]] = updatedTicket
	json.NewEncoder(w).Encode(updatedTicket)
}

func DeleteTicket(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	delete(tickets, params["id"])
	w.WriteHeader(http.StatusNoContent)
}
