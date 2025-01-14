package main

import (
	"encoding/json"
	"fmt"
	"go_basic/gc"
	"go_basic/logger"
	"log"
	"net/http"
	"runtime"
	"time"
)

var requestCounter = 0

func main() {

	mux := http.NewServeMux()

	mux.HandleFunc("/", requestLogging(helloWorld))
	mux.HandleFunc("/memory", requestLogging(getRuntimeStats))
	mux.HandleFunc("/memory2", requestLogging(getRuntime2))

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

func getRuntimeStats(w http.ResponseWriter, r *http.Request) {
	var mem runtime.MemStats
	t := make([][]byte, 101)
	for i := 0; i <= 100; i++ {
		s := make([]byte, 5000)
		t[i] = s

	}
	fmt.Println(t)
	stat, err := json.Marshal(gc.PrintMemoryStats(mem))
	if err != nil {
		w.Write([]byte("Json error"))
		return
	}
	w.Write([]byte(stat))
	fmt.Println(gc.PrintMemoryStats(mem))
}

func getRuntime2(w http.ResponseWriter, r *http.Request) {
	var mem runtime.MemStats

	stat, err := json.Marshal(gc.PrintMemoryStats(mem))
	if err != nil {
		w.Write([]byte("Json error"))
		return
	}
	w.Write([]byte(stat))
	fmt.Println(gc.PrintMemoryStats(mem))
}
