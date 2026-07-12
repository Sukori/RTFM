package main

import (
	"fmt"
)

func main() {
	fmt.Println("The zero value is the default value automatically assigned at variable creation")
	var (
		i int
		f float64
		b bool
		s string
		c complex128
	)

	fmt.Println(i, f, b, s, c)
	fmt.Printf("%v %v %v %v %v\n", i, f, b, s, c)
	fmt.Printf("%v %v %v %q %v\n", i, f, b, s, c)
}
