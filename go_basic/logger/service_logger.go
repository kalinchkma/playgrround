package logger

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"time"
)

// Logger Holder
var ServiceLogger *serviceLogger

// log structure
type serviceLogger struct {
	path string
}

// Constructor
func NewServiceLogger(path string) *serviceLogger {
	if ServiceLogger == nil {
		fmt.Println("Creating new service logger")
		if _, err := os.Stat(path); os.IsNotExist(err) {
			if err := os.Mkdir(filepath.Base(path), 0755); err != nil {
				log.Panic("On here ======", err)
			}
		}
		ServiceLogger = &serviceLogger{path: path}
	}
	return ServiceLogger
}

// Log to the file
func (sl serviceLogger) NewLog(logLayer string, msg string) error {

	filePath := filepath.Join(sl.path, fmt.Sprint(time.Now().UTC().Format("2006_01_02_15-04-05")+"_"+logLayer+".log"))
	f, err := os.OpenFile(filePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)

	if err != nil {
		log.Println(err)
		return err
	}

	defer f.Close()

	logline := log.New(f, logLayer, log.LstdFlags)

	logline.SetFlags(log.Lshortfile)
	logline.Println(msg)

	return nil
}

// Log
func (sl serviceLogger) Log(logLayer string, msg string) error {

	filePath := filepath.Join(sl.path, logLayer+".log")
	f, err := os.OpenFile(filePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)

	if err != nil {
		log.Println(err)
		return err
	}

	defer f.Close()

	logline := log.New(f, logLayer, log.LstdFlags)

	logline.SetFlags(log.Lshortfile)
	logline.Println(msg)

	return nil
}
