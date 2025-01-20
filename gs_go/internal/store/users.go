package store

import (
	"context"
	"database/sql"
)

// User model
type User struct {
}

type UsersStore struct {
	db *sql.DB
}

func (s *UsersStore) Create(ctx context.Context) error {
	return nil
}
