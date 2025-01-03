package games

/**
* Based on decorator pattern we assume this is third party lib
* We can change it, we can only read it
 */

import "log"

type Game interface {
	Played() int
	TotalPlayer() int
}

type PingPong struct {
}

func (s PingPong) Played() int {
	return 2
}

func (s PingPong) TotalPlayer() int {
	return 4
}

func GameStats(game Game) {
	log.Printf("Game stats: Played %d, TotalPlayer %d", game.Played(), game.TotalPlayer())
}
