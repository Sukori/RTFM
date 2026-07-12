package main

import (
	"fmt"
	"math/cmplx"
)

var c, python, java bool

var k, l int = 1, 2

func main() {
	var i int
	fmt.Println("Declaring a var at package level makes a global, just like C")
	fmt.Println(i, c, python, java)

	var csharp, gdscript, javascript = false, true, "no!"
	fmt.Println(k, l, csharp, gdscript, javascript)
	fmt.Println("See more funky stuff. See how 'var' allows assignation to set the var type? PTSD ahead!")

	h := 3
	unity, godot, construct := "non free", true, false
	fmt.Println("The := assignation allows to omit 'var' and type, but this is against norminette!!!")
	fmt.Println(h, unity, godot, construct)

	fmt.Print("Go's basic types are:\n",
		"	bool\n",
		"	string\n",
		"	int  int8  int16  int32  int64\n",
		"	uint uint8 uint16 uint32 uint64 uintptr\n",
		"	byte // alias for uint8\n",
		"	rune // alias for int32\n",
		"	     // represents a Unicode code point\n",
		"	float32 float64\n",
		"	complex64 complex128\n")

	var (
		ToBe   bool       = false
		MaxInt uint64     = 1<<64 - 1
		z      complex128 = cmplx.Sqrt(-5 + 12i)
	)

	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Printf("Type: %T Value: %v\n", z, z)

	const cqfd = "HA!"
	fmt.Println("Of course, 'const' exists. It can't be used with ':='", cqfd)
}
