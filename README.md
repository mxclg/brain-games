[![Actions Status](https://github.com/mxclg/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mxclg/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d4fdb4fc99f3da9aa774/maintainability)](https://codeclimate.com/github/mxclg/frontend-project-44/maintainability)
---  
# Brain games
It's a set of five console games inspired by popular mobile brain-training apps. Each game asks questions to be answered correctly. Once three correct answers are given, the game ends. Incorrect answers end the game and prompt you to play it again. The games are:
- **Calculator**: Calculate random arithmetic expressions
- **Progression**: Find missing numbers in a number sequence
- **Even Number**: Determine if a number is even
- **GCD**: Determine the greatest common divisor
- **Prime Number**: Determine if a number is prime

### Requirements
You need to have [node.js](https://nodejs.org/en) installed. If it's not installed, use the [installation guide](https://github.com/Hexlet/ru-instructions/blob/main/nodejs.md). To check your node.js version, use the command `node -v`.

### Installation and Setup
 1. Clone the repository:
```
git clone https://github.com/mxclg/brain-games.git
```
2.	Navigate to the project directory
```
cd brain-games
```
3.	Install dependencies:
```
npm install
```
4.	Link the package locally to use the commands globally:
```
npm link
```

### How to use
After linking, you can launch each game with a command:
```
brain-calc
brain-progression
brain-even
brain-gcd
brain-prime
```

### Example
```
brain-progression
Welcome to the Brain Game!
What number is missing in the progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # User enters an answer
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # User enters an answer
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # User enters an answer
Correct!
Congratulations, Roman!
```
### Demonstration
- Calculator – [`brain-calc`](https://asciinema.org/a/NOo5vTQSHSeiYQF7O93GXd7NU) 
- Progression – [`brain-progression`](https://asciinema.org/a/aHTtPGadZpdGT8FHBNZf95MOa)
- Even Number – [`brain-even`](https://asciinema.org/a/fKFuXtosvsBKrjqqNHtDiNJ8H) 
- Greatest common divisor – [`brain-gcd`](https://asciinema.org/a/IzRoNOuDTHHDb6ZUquIOdIU4W) 
- Prime Number – [`brain-prime`](https://asciinema.org/a/gO7KyA02JgoaxrFuJ0ZaFqZ70)
