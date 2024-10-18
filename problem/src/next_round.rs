use std::io;

pub fn next_round() {
    let mut nk = String::new();
    io::stdin().read_line(&mut nk).expect("Error reading file");

    let mut nk = nk.trim().split_whitespace();

    let n = nk.next().unwrap();
    let k = nk.next().unwrap();

    drop(nk);

    let _ = n.parse::<i8>().expect("Error parsing");
    let k = k.parse::<i8>().expect("Error parsing");

    let mut line = String::new();

    io::stdin().read_line(&mut line).expect("error");

    let line: Vec<i8> = line.trim().split_whitespace().map(|v| v.parse::<i8>().expect("error")).collect();
    let mut sum: i8 = 0;
    let limit = line.get((k-1) as usize).unwrap().clone();
    for score in line {
       if score >= limit && score != 0 {
        sum += 1;
       }
    }

    println!("{sum}");
}