package main

import "log"

func main() {
	cfg := config{
		addr: ":8080",
	}
	app := &application{
		config: cfg,
	}

	mux := app.mount()

	// start the server
	log.Fatal(app.run(mux))
}
