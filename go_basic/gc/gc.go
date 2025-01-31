package gc

import (
	"fmt"
	"runtime"
)

type MemoryStat struct {
	MemoryAllocated          string
	TotalMemoryAllocated     string
	HeapMemoryAllocated      string
	SystemMemory             uint64
	NumberOfGarbageCollector string
}

// Print about go memory status
func PrintMemoryStats(mem runtime.MemStats) MemoryStat {
	runtime.ReadMemStats(&mem)
	stat := MemoryStat{
		MemoryAllocated:          fmt.Sprint(float64(mem.Alloc)/1024/1024, "MB"),
		TotalMemoryAllocated:     fmt.Sprint(float64(mem.TotalAlloc)/1024/1024, "MB"),
		HeapMemoryAllocated:      fmt.Sprint(float64(mem.HeapAlloc)/1024/1024, "MB"),
		SystemMemory:             mem.Sys / 1024 / 1024,
		NumberOfGarbageCollector: fmt.Sprint(mem.NumGC),
	}
	return stat
}
