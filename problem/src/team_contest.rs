
use std::io;

pub fn team_contest() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).expect("Faild to read line");

    let n = n.trim().parse::<i32>().expect("Please enter a valid number");

    let mut sum = 0;

    for _ in 0..n {
        let mut line = String::new();
        io::stdin().read_line(&mut line).expect("Falid to read line");
        let mut count = 0;
        if line.chars().nth(0).unwrap() == '1' {
            count += 1;
        }
        if line.chars().nth(2).unwrap() == '1' {
            count += 1;
        }
        if line.chars().nth(4).unwrap() == '1' {
            count += 1;
        }

        if count >= 2 {
            sum += 1;
        }
    }
    println!("{sum}")
}


