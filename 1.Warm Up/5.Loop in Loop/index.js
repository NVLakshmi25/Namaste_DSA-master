// 🔹 Block 1: Full 3×3 Grid

// Outer loop → controls rows
// i runs from 0 to 2
for(let i=0; i<3; i++){

    // Inner loop → controls columns
    // j runs from 0 to 2 for EVERY row
    for(let j=0; j<3; j++){
        
        // i and j are independent
        console.log("i = " + i + " j = " + j)
    }
}

console.log("************************")
// ***********************************

// 🔹 Block 2: j < i (strictly increasing, skipping first row)

for(let i=0; i<3; i++){
    for(let j=0; j<i; j++){
        console.log("i = " + i + " j = " + j)
    }
}

console.log("#########################")
// ***********************************

// 🔹 Block 3: j <= i (increasing triangle)

for(let i=0; i<5; i++){
    for(let j=0; j<=i; j++){
        console.log("i= " + i + " j= " + j)
    }
}

console.log("===========================")
// ***********************************

// 🔹 Block 4: (Same as Block 3)

for(let i=0; i<5; i++){
    for(let j=0; j<=i; j++){
        console.log("i= " + i + " j= " + j)
    }
}

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%")
// ***********************************

// 🔹 Block 5: j = i → 1 (reverse inner loop)

for(let i=0; i<5; i++){
    for(let j=i; j>0; j--){
        console.log("i= " + i + " j=" + j)
    }
}

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
// ***********************************

// 🔹 Block 6: Decreasing outer loop (reverse rows)

for(let i=5; i>0; i--){
    for(let j=0; j<i; j++){
        console.log("i= " + i + " j= " + j )
    }
}

/*
================================================================
🧠 MASTER SUMMARY (🔥 VERY IMPORTANT 🔥)

LOOP RESPONSIBILITY:
- "Outer loop (i) → controls ROWS"
- "Inner loop (j) → controls COLUMNS / COUNT"

----------------------------------------------------------------
PATTERN RULES:

j < constant     → FIXED pattern (grid / square)
j < i            → INCREASING (starts empty)
j <= i           → INCREASING (+1 per row)
j < n - i        → DECREASING
j = i; j--       → SAME COUNT, REVERSE DIRECTION
i--              → INVERTED / REVERSE ROWS

----------------------------------------------------------------
INTERVIEW THINKING FORMULA 🎯

Before writing code, ALWAYS ask:

1️⃣ "Who controls rows?"       → i
2️⃣ "Who controls columns?"    → j
3️⃣ "Is it fixed, increasing, or decreasing?"

----------------------------------------------------------------
ONE-LINE GOLDEN RULE 🏆

"Pattern = relationship between i and j"

================================================================
*/