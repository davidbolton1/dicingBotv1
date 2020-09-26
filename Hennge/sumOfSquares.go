package main

import "fmt"

// To run: "go run sumOfSquares.go" followed by the numbers to test

/*
Use recursion to square each number
Check num & value of each test case(testC)
Exclude negative values
*/

// Test function, check N
func testC(N int) {
	if N <= 0 {
		return
	}
	//Scan Initiation
	var X int
	fmt.Scanf("%d", &X)
	fmt.Println(sumOfSquares(X))
	testC(N - 1)
}

// Logic for actually summing the squares
func sumOfSquares(X int) int {
	if X == 0 {
		return 0
	}
	var Y int
	// Scan, return square if != negative
	fmt.Scanf("%d", &Y)
	if Y > 0 {
		return Y*Y + sumOfSquares(X-1)
	}
	return sumOfSquares(X - 1)
}

func main() {
	var N int
	fmt.Scanf("%d", &N)
	testC(N)
}
