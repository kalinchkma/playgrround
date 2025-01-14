package gc

import (
	"fmt"
	"runtime"
)

type MemoryStat struct {
	MemoryAllocated          string
	TotalMemoryAllocated     string
	HeapMemoryAllocated      string
	NumberOfGarbageCollector string
}

// Print about go memory status
func PrintMemoryStats(mem runtime.MemStats) MemoryStat {
	runtime.ReadMemStats(&mem)
	stat := MemoryStat{
		MemoryAllocated:          fmt.Sprint(mem.Alloc),
		TotalMemoryAllocated:     fmt.Sprint(mem.TotalAlloc),
		HeapMemoryAllocated:      fmt.Sprint(mem.HeapAlloc),
		NumberOfGarbageCollector: fmt.Sprint(mem.NumGC),
	}
	return stat
}
