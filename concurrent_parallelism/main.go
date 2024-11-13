package main

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

func task(id int, wg *sync.WaitGroup) {
	defer wg.Done()
	time.Sleep(time.Second * 10)
	fmt.Printf("Task %d is running\n", id)
}

func main() {

	runtime.GOMAXPROCS(4) // set how many threads for parallelism

	var wg sync.WaitGroup
	for i := 1; i <= 4; i++ {
		wg.Add(1)
		go task(i, &wg)
	}

	wg.Wait()
	fmt.Println("All tasks completed.")
}
