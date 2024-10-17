use std::io;

fn take_one_number_input() -> i32 {
    let mut s = String::new();

    io::stdin()
        .read_line(&mut s)
        .expect("Faild to read line");

    let num = s.trim().parse().expect("Faild to parse number");
    return num;
}

fn take_two_number_input() -> (i32, i32) {
    let mut s = String::new();

    io::stdin()
        .read_line(&mut s)
        .expect("Faild to read line");
    
    // split the input string by whitespace and parse each part
    let mut inputs = s.split_whitespace();

    // parse the inputs
    let a = inputs.next().unwrap().parse::<i32>().expect("Not a valid number");
    let b = inputs.next().unwrap().parse::<i32>().expect("Not a valid number");

    return (a, b);

}

fn main() {
    let q = take_one_number_input();

    let (x, y) = take_two_number_input();
    

}