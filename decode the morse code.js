// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.
//
// NOTE: Extra spaces before or after the code have no meaning and should be ignored.
//
// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
//
// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.
//
// For example:
//
// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: MORSE_CODE['.--'], in Java it is MorseCode.get('.--'), in C# it is MorseCode.Get('.--'), in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! ".--", in Elixir it is morse_codes variable.
//
// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.
//
// Good luck!
//

var textandmorse = [
    {"letter":'A', 'morse':".-"},
    {"letter":'B', 'morse':"-..."},
    {"letter":'C', 'morse':"-.-."},
    {"letter":'D', 'morse':"-.."},
    {"letter":'E', 'morse':"."},
    {"letter":'F', 'morse':"..-."},
    {"letter":'G', 'morse':"--."},
    {"letter":'H', 'morse':"...."},
    {"letter":'I', 'morse':".."},
    {"letter":'J', 'morse':".---"},
    {"letter":'K', 'morse':"-.-"},
    {"letter":'L', 'morse':".-.."},
    {"letter":'M', 'morse':"--"},
    {"letter":'N', 'morse':"-."},
    {"letter":'O', 'morse':"---"},
    {"letter":'P', 'morse':".--."},
    {"letter":'Q', 'morse':"--.-"},
    {"letter":'R', 'morse':".-."},
    {"letter":'S', 'morse':"..."},
    {"letter":'T', 'morse':"-"},
    {"letter":'U', 'morse':"..-"},
    {"letter":'V', 'morse':"...-"},
    {"letter":'W', 'morse':".--"},
    {"letter":'X', 'morse':"-..-"},
    {"letter":'Y', 'morse':"-.--"},
    {"letter":'Z', 'morse':"--.."},
    {"letter":'1', 'morse':".----"},
    {"letter":'2', 'morse':"..---"},
    {"letter":'3', 'morse':"...--"},
    {"letter":'4', 'morse':"....-"},
    {"letter":'5', 'morse':"....."},
    {"letter":'6', 'morse':"-...."},
    {"letter":'7', 'morse':"--..."},
    {"letter":'8', 'morse':"---.."},
    {"letter":'9', 'morse':"----."},
    {"letter":'0', 'morse':"-----"},
    {"letter":'.', 'morse':".-.-.-"},
    {"letter":',', 'morse':"--..--"},
    {"letter":':', 'morse':"---..."},
    {"letter":'?', 'morse':"..--.."},
    {"letter":'\'', 'morse':".----."},
    {"letter":'-', 'morse':"-....-"},
    {"letter":'/', 'morse':"-..-."},
    {"letter":'(', 'morse':"-.--.-"},
    {"letter":')', 'morse':"-.--.-"},
    {"letter":'"', 'morse':".-..-."},
    {"letter":'@', 'morse':".--.-."},
    {"letter":'=', 'morse':"-...-"},
    {"letter":' ', 'morse':"/"}
    ];

const decodeMorse = (str) => {
    const words = str.split('   ')
    return words.reduce( (r, e, i) => {
        r.push(e.split(' ').reduce( (r1, e1, i1) => {
            r1.push(textandmorse.reduce( (run, el, ind) => {
                if (el.morse === e1){
                    run.push(el.letter)
                } 
                return run
            }, []))
            return r1
        }, []).join(''))
        return r
    }, []).join(' ')
}
