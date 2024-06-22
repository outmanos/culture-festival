package router

import (
	"go-rest-api/handlers"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	router := mux.NewRouter()

	// Venue routes
	router.HandleFunc("/venues", handlers.GetVenues).Methods("GET")
	router.HandleFunc("/venues/{id}", handlers.GetVenue).Methods("GET")
	router.HandleFunc("/venues", handlers.CreateVenue).Methods("POST")
	router.HandleFunc("/venues/{id}", handlers.UpdateVenue).Methods("PUT")
	router.HandleFunc("/venues/{id}", handlers.DeleteVenue).Methods("DELETE")

	// Artist routes
	router.HandleFunc("/artists", handlers.GetArtists).Methods("GET")
	router.HandleFunc("/artists/{id}", handlers.GetArtist).Methods("GET")
	router.HandleFunc("/artists", handlers.CreateArtist).Methods("POST")
	router.HandleFunc("/artists/{id}", handlers.UpdateArtist).Methods("PUT")
	router.HandleFunc("/artists/{id}", handlers.DeleteArtist).Methods("DELETE")

	// Ticket routes
	router.HandleFunc("/tickets", handlers.GetTickets).Methods("GET")
	router.HandleFunc("/tickets/{id}", handlers.GetTicket).Methods("GET")
	router.HandleFunc("/tickets", handlers.CreateTicket).Methods("POST")
	router.HandleFunc("/tickets/{id}", handlers.UpdateTicket).Methods("PUT")
	router.HandleFunc("/tickets/{id}", handlers.DeleteTicket).Methods("DELETE")

	// Customer routes
	router.HandleFunc("/customers", handlers.GetCustomers).Methods("GET")
	router.HandleFunc("/customers/{id}", handlers.GetCustomer).Methods("GET")
	router.HandleFunc("/customers", handlers.CreateCustomer).Methods("POST")
	router.HandleFunc("/customers/{id}", handlers.UpdateCustomer).Methods("PUT")
	router.HandleFunc("/customers/{id}", handlers.DeleteCustomer).Methods("DELETE")

	return router
}
