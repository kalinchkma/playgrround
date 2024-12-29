#  Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

def merge_sorthed_arrays(arr1, arr2):
    merge_arr = []
    i = j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merge_arr.append(arr1[i])
            i += 1
        else:
            merge_arr.append(arr2[j])
            j += 1

    while i < len(arr1):
        merge_arr.append(arr1[i])
        i += 1
    
    while j < len(arr2):
        merge_arr.append(arr2[j])
        j += 1

    return merge_arr

if __name__ == "__main__":
    print(merge_sorthed_arrays([7, 90, 100], [1, 5, 90]))
