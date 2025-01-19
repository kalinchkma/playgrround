package main

import (
	"log"

	"github.com/kalinchkma/playgrround/gs_go/internal/env"
)

func main() {
	cfg := config{
		addr: env.GetString("ADDR", ":8080"),
	}
	app := &application{
		config: cfg,
	}

	mux := app.mount()

	// start the server
	log.Fatal(app.run(mux))
}
