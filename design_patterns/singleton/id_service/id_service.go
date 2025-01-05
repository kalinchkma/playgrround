package idservice

import "log"

// Singleton service
type SingletonIDService struct {
	idService *IDService
}

func (sid *SingletonIDService) GetService() *IDService {
	if sid.idService == nil {
		// instanciate new id service
		log.Println("Creating new id service")
		sid.idService = newIdService()
	}
	return sid.idService
}

// service
type IDService struct {
	counter int
}

func newIdService() *IDService {
	return &IDService{counter: 0}
}

func (s *IDService) Next() int {
	s.counter++
	return s.counter
}
