#![allow(dead_code)]
use std::io;

pub fn way_too_long_word() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).expect("Error reading line");
    let n = n.trim().parse::<i32>().expect("Error parsing number");

    let mut word_string = String::new();

    for _ in 0..n {
        let mut line = String::new();
        io::stdin().read_line(&mut line).expect("Error reading line");
        line = line.trim().to_string();
        let len = line.len();
        if len > 10 {
            let first_word = line.chars().nth(0).unwrap();
            let last_word = line.chars().nth(len-1).unwrap();
            word_string.push_str(&format!("{}{}{}\n", first_word, len-2, last_word));
            continue;
        }
        word_string.push_str(&format!("{}\n", line));
    }
    println!("{}", word_string);
}

