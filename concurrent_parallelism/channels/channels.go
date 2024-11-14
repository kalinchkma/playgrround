package main

import (
	"fmt"
	"runtime"
	"sync"
)

func modify(id int, c chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 1; i < 10; i++ {
		c <- id * i
	}

}

func main() {
	runtime.GOMAXPROCS(4)
	var c = make(chan int, 10)
	var wg sync.WaitGroup
	for i := 1; i < 3; i++ {
		wg.Add(1)
		go modify(i, c, &wg)
		fmt.Println("channel value when creating process", <-c)
	}
	fmt.Println("channel value when done creating", <-c)
	// wg.Wait()
	fmt.Println("channel value when done processing", <-c)
	// close the channel once all goroutings are done
	go func() {
		wg.Wait()
		close(c)
	}()

	for val := range c {
		fmt.Println("Recived value from channels:", val)
	}

}
