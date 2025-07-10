package generator

import (
	"log"
	"sync"
)

type IDService struct {
	counter int
	mu      sync.Mutex
}

func (s *IDService) New() int {
	s.mu.Lock()         // lock the mu for thread safty
	defer s.mu.Unlock() // unlock when its done
	s.counter++
	return s.counter
}

var instance *IDService
var once sync.Once

func GetIDService() *IDService {
	once.Do(func() {
		log.Println("Creating new id service")
		instance = &IDService{counter: 0}
	})
	return instance
}
