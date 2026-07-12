package main

import (
	"fmt"
	"math"
	"math/rand"
)

func main() {
	fmt.Println("My favourite number is", rand.Intn(10))
	fmt.Println("JK, it's 42!")
	fmt.Printf("Did you know that square root of 42 is %g?\n", math.Sqrt(42))
	fmt.Println("Here's PI, just for the sake of showing it:", math.Pi) // capital 'P' to use "exported" name
}
