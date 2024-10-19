use std::io;

pub fn compare_string() {
    let mut input1 = String::new();
    let mut input2 = String::new();
    io::stdin().read_line(&mut input1).expect("error");
    io::stdin().read_line(&mut input2).expect("error 2");

    let input1: Vec<u8> = input1.trim().to_lowercase().bytes().collect();
    let input2: Vec<u8> = input2.trim().to_lowercase().bytes().collect();
    println!("{:?} {:?}", input1, input2);
    let input1: i32 = input1.iter().map(|&n| n as i32).sum();
    let input2: i32 = input2.iter().map(|&n| n as i32).sum();
    println!("{input1} {input2}");
    if input1 < input2 {
        println!("-1");
    } else if input1 > input2 {
        println!("1");
    } else {
        println!("0");
    }
  
}