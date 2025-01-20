package main

import (
	"log"

	"github.com/kalinchkma/playgrround/gs_go/internal/env"
	"github.com/kalinchkma/playgrround/gs_go/internal/store"
)

func main() {
	cfg := config{
		addr: env.GetString("ADDR", ":8080"),
	}
	store := store.NewStorage(nil)
	app := &application{
		config: cfg,
		store:  store,
	}

	mux := app.mount()

	// start the server
	log.Fatal(app.run(mux))
}
