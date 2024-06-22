package handlers

import (
	"encoding/json"
	"go-rest-api/models"
	"net/http"

	"github.com/gorilla/mux"
)

var artists = make(map[string]models.Artist)

func GetArtists(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(artists)
}

func GetArtist(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	artist, found := artists[params["id"]]
	if !found {
		w.WriteHeader(http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(artist)
}

func CreateArtist(w http.ResponseWriter, r *http.Request) {
	var artist models.Artist
	json.NewDecoder(r.Body).Decode(&artist)
	artists[artist.ID] = artist
	json.NewEncoder(w).Encode(artist)
}

func UpdateArtist(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var updatedArtist models.Artist
	json.NewDecoder(r.Body).Decode(&updatedArtist)
	artists[params["id"]] = updatedArtist
	json.NewEncoder(w).Encode(updatedArtist)
}

func DeleteArtist(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	delete(artists, params["id"])
	w.WriteHeader(http.StatusNoContent)
}
