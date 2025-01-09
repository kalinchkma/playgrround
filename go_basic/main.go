package main

import (
	"fmt"
	"go_basic/logger"
	"log"
	"net/http"
	"time"
)

var requestCounter = 0

func main() {

	mux := http.NewServeMux()

	mux.HandleFunc("/", requestLogging(helloWorld))

	server := http.Server{
		Addr:    ":8080",
		Handler: mux,
	}

	log.Fatal(server.ListenAndServe())
}

func requestLogging(f http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		l := logger.NewServiceLogger("logs")
		requestCounter++
		l.Log("log", fmt.Sprint("Total Request on time: ", time.Now(), requestCounter))
		f(w, r)
	}
}

func helloWorld(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello world"))
}
