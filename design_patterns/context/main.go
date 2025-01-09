package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {
	exampleTimeout()
	exampleWithValue()
	http.HandleFunc("/", helloWorld)
	http.ListenAndServe(":8080", nil)
}

// With http handler
func helloWorld(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(r.Context(), 2*time.Second)
	defer cancel()

	select {
	case <-time.After(3 * time.Second):
		fmt.Println("API Response")
		w.Write([]byte("API Process done successfully"))
		return
	case <-ctx.Done():
		fmt.Println("Oh no request timeout")
		w.Write([]byte("Request timeout"))
		return
	}

}

// Context example with value
func exampleWithValue() {
	type key int
	const UserKey key = 0

	ctx := context.Background()

	ctxWithValue := context.WithValue(ctx, UserKey, "123")

	if userID, ok := ctxWithValue.Value(UserKey).(string); ok {
		fmt.Println("This is the userID", userID)
	} else {
		fmt.Println("User id not found")
	}

}

// Example with timeout
func exampleTimeout() {
	ctx := context.Background()

	ctxWithTimeout, cancel := context.WithTimeout(ctx, 2*time.Second)
	defer cancel()

	requestDone := make(chan struct{})

	go func() {
		time.Sleep(3 * time.Second)
		close(requestDone)
	}()

	select {
	case <-requestDone:
		log.Println("Api done processing")
	case <-ctxWithTimeout.Done():
		log.Println("Request has expired!", ctxWithTimeout.Err())
	}
}
