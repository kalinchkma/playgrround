use std::io;

pub fn beatifu_matrix() {

    let mut row: i8 = 0;
    let mut col: i8 = 0;
    
    for i in 0..5 {
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Error reading line");
        let mut j = 0;
        input.trim().split_whitespace().for_each(|n| {
            if n == "1" {
                row = i+1;
                col = j+1;
            }
            j += 1;
        });
    }
    let mut mv = 0;
    if row > 3 {
        mv += row - 3;
    } else if row < 3 {
        mv += 3 - row;
    }
    if col > 3 {
        mv += col - 3;
    } else if col < 3 {
        mv += 3 - col;
    }
    println!("{mv}");
    
}