package main

import (
	"encoding/json"
	"fmt"
	"go_basic/gc"
	"go_basic/logger"
	"log"
	"net/http"
	"runtime"
	"sync"
	"time"
)

var bufferPool = sync.Pool{
	New: func() any {
		return make([]byte, 50000)
	},
}

func main() {

	mux := http.NewServeMux()

	mux.HandleFunc("GET /", requestLogging(helloWorld))
	mux.HandleFunc("GET /memory", requestLogging(getRuntimeStats))
	mux.HandleFunc("GET /memory2", requestLogging(getRuntime2))

	server := http.Server{
		Addr:    ":8080",
		Handler: mux,
	}

	log.Println("Server start on http://localhost:8080")
	log.Fatal(server.ListenAndServe())
}

func requestLogging(f http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		l := logger.NewServiceLogger("logs")
		l.Log("log", fmt.Sprint("Total Request on time: ", time.Now()))
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
		s := bufferPool.Get().([]byte)
		t[i] = s

		bufferPool.Put(s)
	}

	stat, err := json.Marshal(gc.PrintMemoryStats(mem))
	if err != nil {
		w.Write([]byte("Json error"))
		return
	}
	w.Write([]byte(stat))
}

func getRuntime2(w http.ResponseWriter, r *http.Request) {
	var mem runtime.MemStats

	stat, err := json.Marshal(gc.PrintMemoryStats(mem))
	if err != nil {
		w.Write([]byte("Json error"))
		return
	}
	w.Write([]byte(stat))
	// fmt.Println(gc.PrintMemoryStats(mem))
}
