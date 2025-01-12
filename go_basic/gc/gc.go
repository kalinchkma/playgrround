package gc

import (
	"fmt"
	"runtime"
)

// Print about go memory status
func PrintMemoryStats(mem runtime.MemStats) string {
	runtime.ReadMemStats(&mem)
	statString := "----"
	statString += fmt.Sprint("mem.Alloc:", mem.Alloc)
	statString += fmt.Sprint("|| mem.TotalAlloc:", mem.TotalAlloc)
	statString += fmt.Sprint("|| mem.HeapAlloc:", mem.HeapAlloc)
	statString += fmt.Sprint("|| mem.NumGC:", mem.NumGC)
	statString += "----"
	return statString
}
