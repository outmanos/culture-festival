package main

import (
	"go-rest-api/router"
	"log"
	"net/http"
)

func main() {
	r := router.Router()
	log.Println("Starting server on :8000")
	log.Fatal(http.ListenAndServe(":8000", r))
}
