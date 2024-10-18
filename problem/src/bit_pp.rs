use std::io;

pub fn bit_pp() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).expect("Error reading line");

    let n: u8 = n.trim().parse().expect("Error parsing number");
    let mut sum: i16 = 0;
    for _ in 0..n {
        let mut line = String::new();
        io::stdin().read_line(&mut line).expect("Error reading line");
        if line.contains("++") {
            sum += 1;
        } else {
            sum -= 1;
        }
    } 
    println!("{sum}");

}