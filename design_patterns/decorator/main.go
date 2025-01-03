package main

import "decorator/games"

func main() {
	// default player
	pingPong := games.PingPong{}
	games.GameStats(pingPong)

	football := Football{game: pingPong}
	games.GameStats(football)

	cricket := Cricket{game: pingPong}
	games.GameStats(cricket)

	mixedGame := Football{
		game: Cricket{
			game: football,
		},
	}
	games.GameStats(mixedGame)
}

// Decorator 1: football game for pingpong
type Football struct {
	game games.Game
}

func (s Football) Played() int {
	return s.game.Played() + 120
}

func (s Football) TotalPlayer() int {
	return s.game.TotalPlayer() + 7
}

// Decorator 2: cricket game for ping pong
type Cricket struct {
	game games.Game
}

func (c Cricket) Played() int {
	return c.game.Played() + 500
}

func (c Cricket) TotalPlayer() int {
	return c.game.TotalPlayer() + 20
}
