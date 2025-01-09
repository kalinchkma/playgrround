package logger

// Logger interface
type Logger interface {
	NewLog(logLayer string, msg string) error
	Log(logLayer string, msg string) error
}
