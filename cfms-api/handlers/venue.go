package handlers

import (
	"encoding/json"
	"go-rest-api/models"
	"net/http"

	"github.com/gorilla/mux"
)

var venues = make(map[string]models.Venue)

func GetVenues(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(venues)
}

func GetVenue(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	venue, found := venues[params["id"]]
	if !found {
		w.WriteHeader(http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(venue)
}

func CreateVenue(w http.ResponseWriter, r *http.Request) {
	var venue models.Venue
	json.NewDecoder(r.Body).Decode(&venue)
	venues[venue.ID] = venue
	json.NewEncoder(w).Encode(venue)
}

func UpdateVenue(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var updatedVenue models.Venue
	json.NewDecoder(r.Body).Decode(&updatedVenue)
	venues[params["id"]] = updatedVenue
	json.NewEncoder(w).Encode(updatedVenue)
}

func DeleteVenue(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	delete(venues, params["id"])
	w.WriteHeader(http.StatusNoContent)
}
