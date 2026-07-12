package main

import "fmt"

func add(x int, y int) int {
	return (x + y)
}

func sub(x, y int) int {
	return (x - y)
}

func swap(x, y string) (string, string) {
	return (y), (x)
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println("We will add 42 to 13, which is", add(42, 13))
	fmt.Println("Notice how the variables and function type is reversed compared to C?")
	fmt.Println("You can also put only one type declaration if all parameters share a type. See sub example:", sub(42, 13))
	a, b := swap("hello", "world")
	fmt.Println("Heck, you can even return two values, just like that! Say", a, b)
	fmt.Println("You can also do some shady stuff, but discouraged for longer functions.")
	fmt.Println(split(17))
}
