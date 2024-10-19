use std::io;


pub fn domino_pilling() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Faild to read line");

    let input: Vec<i16> = input.trim().split_whitespace().map(|i| i.parse::<i16>().expect("Error paring number")).collect();

    let row = input.get(0).unwrap().clone();
    let col = input.get(1).unwrap().clone();

    drop(input);

    let mut sum: i16 = 0;
    let row_mod: f32 = row as f32 % 2.0;

    if row_mod == 0.0 {
        sum += (row / 2) * col;
    } else {
        let div = row / 2;
        let res = div * col;
        sum += res;
        if col >= 2 {
            sum += col / 2;
        }
    }
    println!("{sum}");

}