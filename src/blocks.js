import * as Blockly from 'blockly/core';

export default Blockly.common.createBlockDefinitionsFromJsonArray([
    // custom
        {'type': 'string',
            'message0': '%1',
            'args0': [
                {
                    'type': 'field_input',
                    'name': 'INPUT',
                }
            ],
            'previousStatement': ['Replacement', 'Regular'],
            'nextStatement': ['Replacement', 'Regular'],
            'colour': 60,
            'tooltip': 'A literal piece of text to look for',
        },
        {'type': 'setVar',
            "message0": "Assign to %1",
            "args0": [{
                "type": "field_variable",
                "name": "VAR",
                // "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
                'defaultType': 'Vars',
                'variableTypes': ['Vars'],
            }],
            "extensions": ["one_var_at_a_time", 'remove_plus'],
            'nextStatement': ['Replacement', 'Regular'],
            'tooltip': 'Set a pattern to a variable so you can reference it later',
        },
        {'type': 'getVar',
            "message0": "%1",
            "args0": [{
                "type": "field_variable",
                "name": "VAR",
                // "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
                'defaultType': 'Vars',
                'variableTypes': ['Vars'],
            }],
            'previousStatement': ['Replacement', 'Regular'],
            'nextStatement': ['Replacement', 'Regular'],
            'tooltip': 'Reference a pattern you\'ve previously set',
        },
        {'type': 'compiler',
            'extensions': ['remove_plus'],
            'message0': 'Set Pattern',
            'nextStatement': ['Regular', 'Beginning'],
            'tooltip': 'Sets the main pattern that\'s used in the rest of the program',
        },
        {'type': 'replacementCompiler',
            'extensions': ['remove_plus'],
            'message0': 'Set Replacement Pattern',
            'nextStatement': ['Replacement'],
            'tooltip': 'Sets the main replacement pattern that\'s used in the rest of the program',
        },
    // positionals
        {'type': "stringStart",
            'message0': "Start of string",
            'previousStatement': 'Beginning',
            'nextStatement': 'Regular',
            'colour': 160,
            'tooltip': 'Represets the start of a string. This only makes sense to be at the very beginning of a pattern',
        },
        {'type': "stringEnd",
            'message0': "End of string",
            'previousStatement': 'Regular',
            'colour': 160,
            'tooltip': 'Represents the end of a string. This only makes sense to be at the very end of a pattern',
        },
        {'type': "lineStart",
            'message0': "Start of a line",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 160,
            'tooltip': '',
        },
        {'type': "lineEnd",
            'message0': "End of a line",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 160,
            'tooltip': '',
        },
        {'type': "wordBoundary",
            'message0': "Word boundary",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 160,
            'tooltip': 'Matches the boundary of a word, i.e. the empty space between a word character and not a word character, or the end of a string',
        },
        {'type': "notWordBoundary",
            'message0': "Not word boundary",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 160,
            'tooltip': 'The opposite of wordBoundary',
        },
    // literals
        {
            'type': "tab",
            'message0': "Tab",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': "space",
            'message0': "Space",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': "spaceOrTab",
            'message0': "Space or Tab",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': "newline",
            'message0': "Newline",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': "carriageReturn",
            'message0': "Carriage Return",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': "quote",
            'message0': "Quote",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'Matches \', ", and `',
        },
        {
            'type': "verticalTab",
            'message0': "Vertical Tab",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': "formFeed",
            'message0': "Form Feed",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': "comma",
            'message0': "Comma",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': "period",
            'message0': "Period",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {
            'type': 'underscore',
            'message0': "Underscore",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
    // not literals - done
        {
            'type': "notWhitespace",
            'message0': "Not Whitespace",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 309,
            'tooltip': '',
        },
        {
            'type': "notDigit",
            'message0': "Not Digit",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 309,
            'tooltip': '',
        },
        {
            'type': "notWord",
            'message0': "Not Word",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 309,
            'tooltip': '',
        },
    // catagories - done
        {
            'type': "whitespace",
            'message0': "Whitespace",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "whitechunk",
            'message0': "Whitechunk",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'A "chunk" of whitespace. Just any amount of whitespace together',
        },
        {
            'type': "digit",
            'message0': "Digit",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "letter",
            'message0': "Letter",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Matches just a letter -- not numbers or _ like wordChar',
        },
        {
            'type': "number",
            'message0': "Number",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Matches multiple digits next to each other. Does not match negatives or decimals',
        },
        {
            'type': "word",
            'message0': "Word",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "wordChar",
            'message0': "Word Character",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Matches just a single "word character", defined as any letter, number, or _',
        },
        {
            'type': "anything",
            'message0': "Any Character",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Matches any single character, except a newline. To also match a newline, use literallyAnything',
        },
        {
            'type': "chunk",
            'message0': "Chunk",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'A "chunk": Any sequence of characters up until the next newline',
        },
        {
            'type': "uppercase",
            'message0': "Uppercase character",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "lowercase",
            'message0': "Lowercase character",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "hexDigit",
            'message0': "Hexadecimal Digit",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "octDigit",
            'message0': "Octal Digit",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "punctuation",
            'message0': "Punctuation",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "controller",
            'message0': "Controller",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Matches a metadata ASCII characters',
        },
        {
            'type': "printable",
            'message0': "Printable",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Matches printable ASCII characters',
        },
        {
            'type': "printableAndSpace",
            'message0': "Printable and Space",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': '',
        },
        {
            'type': "alphaNum",
            'message0': "Alpha Numeric",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Matches any letter or number',
        },
        {
            'type': "unicode",
            'message0': "Unicode Character %1",
            'args0': [
                {
                    'type': 'field_input',
                    'name': 'NAME',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Matches a unicode character by name',
        },
        {
            'type': "anyBetween",
            'message0': "Character between %1 - %2",
            'args0': [
                {
                    'type': 'field_input',
                    'name': 'A',
                },
                {
                    'type': 'field_input',
                    'name': 'B',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 260,
            'tooltip': 'Match any char between 2 chars, using the ASCII table for reference',
        },
    // amounts - done
        {
            'type': "matchMax",
            'message0': "Match as many as possible of\n%1",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 120,
            'tooltip': 'Match as many of input in the string as you can',
        },
        {
            'type': "amt",
            'message0': "Match %1 of \n%2",
            'args0': [
                {
                    'type': 'field_number',
                    'name': 'NUM',
                    'value': 2,
                    'min': 1,
                    'precision': 1,
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                }
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 120,
            'tooltip': 'Match a given amount of `input` in the string',
        },
        {
            'type': "moreThan",
            'message0': "More than %1 of \n%2",
            'args0': [
                {
                    'type': 'field_number',
                    'name': 'NUM',
                    'value': 2,
                    'min': 1,
                    'precision': 1,
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                }
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 120,
            'tooltip': 'Match more than a given number of sequences of a pattern in the string',
        },
        {
            'type': "matchRange",
            'message0': "Match between %1 and %2 of \n%3 geedy: %4\npossessive: %5",
            'args0': [
                {
                    'type': 'field_number',
                    'name': 'MIN',
                    'value': 1,
                    'min': 0,
                    'precision': 1,
                },
                {
                    'type': 'field_number',
                    'name': 'MAX',
                    'value': 2,
                    'min': 1,
                    'precision': 1,
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
                {
                    'type': 'field_checkbox',
                    'name': 'GREEDY',
                    "checked": true,
                },
                {
                    'type': 'field_checkbox',
                    'name': 'POSSESSIVE',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 120,
            'tooltip': 'Match between min and max sequences of input in the string. This also accepts greedy and possessive parameters. Max can be an empty string to indicate no maximum. Greedy means it will try to match as many repititions as possible, while non-greedy will try to match as few repititions as possible. Possessive means it won\'t backtrack to try to find any repitions. See https://docs.python.org/3/library/re.html for more help.',
            'helpUrl': 'https://docs.python.org/3/library/re.html',
        },
        {
            'type': "atLeast",
            'message0': "Match at least %1 of \n%2",
            'args0': [
                {
                    'type': 'field_number',
                    'name': 'NUM',
                    'value': 1,
                    'min': 0,
                    'precision': 1,
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                }
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 120,
            'tooltip': 'Match at least min sequences of input in the string',
        },
        {
            'type': "atMost",
            'message0': "Match at most %1 of \n%2",
            'args0': [
                {
                    'type': 'field_number',
                    'name': 'NUM',
                    'value': 2,
                    'min': 1,
                    'precision': 1,
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                }
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 120,
            'tooltip': 'Match at most max instances of input in the string',
        },
        {
            'type': "atLeastOne",
            'message0': "Match at least one of \n%1 geedy: %2\npossessive: %3",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
                {
                    'type': 'field_checkbox',
                    'name': 'GREEDY',
                    "checked": true,
                },
                {
                    'type': 'field_checkbox',
                    'name': 'POSSESSIVE',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 120,
            'tooltip': 'Match at least one of input in the string. This also accepts greedy and possessive parameters. Max can be an empty string to indicate no maximum. Greedy means it will try to match as many repititions as possible, while non-greedy will try to match as few repititions as possible. Possessive means it won\'t backtrack to try to find any repitions. See https://docs.python.org/3/library/re.html for more help.',
            'helpUrl': 'https://docs.python.org/3/library/re.html',
        },
        {
            'type': "atLeastNone",
            'message0': "Match 0 or more of \n%1 geedy: %2\npossessive: %3",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
                {
                    'type': 'field_checkbox',
                    'name': 'GREEDY',
                    "checked": true,
                },
                {
                    'type': 'field_checkbox',
                    'name': 'POSSESSIVE',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 120,
            'tooltip': 'Match 0 or more sequences of input. This also accepts greedy and possessive parameters. Max can be an empty string to indicate no maximum. Greedy means it will try to match as many repititions as possible, while non-greedy will try to match as few repititions as possible. Possessive means it won\'t backtrack to try to find any repitions. See https://docs.python.org/3/library/re.html for more help.',
            'helpUrl': 'https://docs.python.org/3/library/re.html',
        },
    // choices - TODO
        {'type': "optional",
            'message0': "Optional \n%1 geedy: %2\npossessive: %3",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
                {
                    'type': 'field_checkbox',
                    'name': 'GREEDY',
                    "checked": true,
                },
                {
                    'type': 'field_checkbox',
                    'name': 'POSSESSIVE',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 230,
            'tooltip': 'Match the pattern, if possible. This also accepts greedy and possessive parameters. Max can be an empty string to indicate no maximum. Greedy means it will try to match as many repititions as possible, while non-greedy will try to match as few repititions as possible. Possessive means it won\'t backtrack to try to find any repitions. See https://docs.python.org/3/library/re.html for more help.',
            'helpUrl': 'https://docs.python.org/3/library/re.html',
        },
        {'type': "either",
            'message0': "Match either \n%1 or \n%2",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'OR_INPUT',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 230,
            'tooltip': '',
        },
        {'type': "oneOf",
            'message0': "One of TODO",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'saveExtraState': function() {
                return {
                  '': this.itemCount_,
                }
            },
            'loadExtraState': function(state) {
                this.itemCount_ = state['itemCount'];
                // This is a helper function which adds or removes inputs from the block.
                this.updateShape_();
            },
            'colour': 230,
            'tooltip': 'Match any of the given inputs. Note that inputs can be multiple parameters, or a single string. Can also accept parameters chars and split. If char is set to True, then inputs must only be a single string, it interprets inputs as characters, and splits it up to find any of the chars in the string. If split is set to true, it forces the ?(...) regex syntax instead of the [...] syntax. It should act the same way, but your output regex will look different. By default, it just optimizes it for you.',
        },
        {'type': "anyCharExcept",
            'message0': "Any Character Except %1",
            'args0': [
                {
                    'type': 'field_input',
                    'name': 'CHARS',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 230,
            'tooltip': 'This matches any char that is NOT in inputs. inputs can be multiple parameters, or a single string of chars to split.',
        },
        // {
            // 'type': "anyExcept",
            // 'message0': "anyExcept",
            // 'args0': [
            //     {
            //         'type': '',
            //         'name': '',
            //         'check': '',
            //     },
            // ],
            // 'previousStatement': 'Regular',
            // 'nextStatement': 'Regular',
            // 'colour': 230,
            // 'tooltip': '',
            // 'helpUrl': '',
        // },
    // conditionals - done
        {'type': "ifFollowedBy",
            'message0': "If Followed by \n%1",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
            ],
            'previousStatement': 'Regular',
            // 'nextStatement': 'Regular',
            'colour': 210,
            'tooltip': 'Matches the pattern if it has a given pattern coming after it',
        },
        {'type': "ifNotFollowedBy",
            'message0': "If Not Followed by \n%1",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
            ],
            'previousStatement': 'Regular',
            // 'nextStatement': 'Regular',
            'colour': 210,
            'tooltip': 'Matches the pattern if it does NOT have a given pattern coming after it. This only makes sense to be at the very beginning of a pattern',
        },
        {'type': "ifPrecededBy",
            'message0': "If Preceded by \n%1",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
            ],
            'previousStatement': 'Beginning',
            'nextStatement': 'Regular',
            'colour': 210,
            'tooltip': 'Matches the pattern if it has input coming before it.',
        },
        {'type': "ifNotPrecededBy",
            'message0': "If Not Preceded by \n%1",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
            ],
            'previousStatement': 'Beginning',
            'nextStatement': 'Regular',
            'colour': 210,
            'tooltip': 'Matches the pattern if it does NOT have input coming before it. This only makes sense to be at the very beginning of a pattern',
        },
        // {
            // 'type': "ifEnclosedWith",
            // 'message0': "ifEnclosedWith",
            // 'args0': [
            //     {
            //         'type': '',
            //         'name': '',
            //         'check': '',
            //     },
            // ],
            // 'previousStatement': 'Regular',
            // 'nextStatement': 'Regular',
            // 'colour': 210,
            // 'tooltip': '',
            // 'helpUrl': '',
        // },
    // grouping - done
        {'type': "group",
            'message0': "Group %1 \n%2",
            'args0': [
                {
                    'type': 'field_variable',
                    'name': 'GROUP',
                    'variableTypes': ['Group'],
                    'defaultType': 'Group',
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                }
            ],
            "extensions": ["one_var_at_a_time"],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 20,
            'tooltip': 'Causes input to be captured as a named group. Only useful when replacing regexs',
        },
        {'type': "unnamedGroup",
            'message0': "Unnamed Group\n%1",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                }
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 20,
            'tooltip': 'Causes input to be captured as an unnamed group. Only useful when replacing regexs',
        },
        {'type': "earlierGroup",
            'message0': "Match what group %1 matched previously",
            'args0': [
                {
                    'type': 'field_variable',
                    'name': 'GROUP',
                    'variableTypes': ['Group'],
                    'defaultType': 'Group',
                }
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 20,
            'tooltip': 'Matches whatever the group referenced by num_or_name matched earlier. Must be after a group which would match num_or_name',
        },
        {'type': "ifExists",
            'message0': "If group %1 was matched, match \n%2 Otherwise match \n%3",
            'args0': [
                {
                    'type': 'field_variable',
                    'name': 'GROUP',
                    'variableTypes': ['Group'],
                    'defaultType': 'Group',
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'DOES',
                },
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'DOESNT',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 20,
            'tooltip': 'Matches does if the group num_or_name exists, otherwise it matches doesnt',
        },
        {'type': "passiveGroup",
            'message0': "Passive Group \n%1",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 20,
            'tooltip': 'As all regexs in EZRegex capture passively, this is entirely useless. But if you really want to, here it is',
        },
    // replacement - TODO
        {'type': "rgroup",
            'message0': "Whatever was matched by group %1",
            'args0': [
                {
                    'type': 'field_input',
                    'name': 'RGROUP',
                },
            ],
            'previousStatement': 'Replacement',
            'nextStatement': 'Replacement',
            'colour': 0,
            'tooltip': 'This block gets replaced by whatever was matched by the given group',
        },
        {'type': "replaceEntire",
            'message0': "Entire Match",
            'previousStatement': 'Replacement',
            'nextStatement': 'Replacement',
            'colour': 0,
            'tooltip': 'This block gets replaced by the entire match',
        },
    // premade - done
        {'type': "literallyAnything",
            'message0': "Literally Any Character",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'Any character, include newline',
        },
        {'type': "signed",
            'message0': "Signed number",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'A signed number, including 123, -123, and +123',
        },
        {'type': "unsigned",
            'message0': "Unsigned number",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'Same as number. Will not match +123',
        },
        {'type': "plain_float",
            'message0': "Plain float",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'Will match 123.45 and 123.',
        },
        {'type': "full_float",
            'message0': "Full float",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'Will match plain_float as well as things like 1.23e-10 and 1.23e+10',
        },
        {'type': "int_or_float",
            'message0': "Int or float",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {'type': "ow",
            'message0':"Optional Whitechunk",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': '',
        },
        {'type': "email",
            'message0': "Email",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'Matches an email',
        },
        {'type': "version",
            'message0': "Version",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'The official regex for matching version numbers from https://semver.org/. It includes 5 named groups that can be matched/replaced: major, minor, patch, prerelease, and buildmetadata',
            'helpUrl': 'https://semver.org/',
        },
        {'type': "version_numbered",
            'message0': "Version (with numbered groups)",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 330,
            'tooltip': 'Same as version, but it uses numbered groups for each version number instead of named groups',
            'helpUrl': 'https://semver.org/',
        },
    // misc - done
        {'type': "isExactly",
            'message0': "If Exactly \n%1",
            'args0': [
                {
                    'type': 'input_statement',
                    'check': 'Regular',
                    'name': 'INPUT',
                },
            ],
            'colour': 210,
            'previousStatement': 'Beginning',
            'tooltip': 'This matches the string if and only if the entire string is exactly equal to input. This only makes sense to be at the very beginning & ending of a pattern',
        },
        {'type': "raw",
            'message0': "Raw Regex %1",
            'args0': [
                {
                    'type': 'field_input',
                    'name': 'REGEX',
                },
            ],
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 60,
            'tooltip': 'If you already have some regular regex written, and you want to incorperate it, this will allow you to include it without sanatizing all the backslashes and such, which all the other EZRegexs do automatically. Note that this only works with Python dialect regexs.',
        },
    // flags - done
        {'type': "ASCII",
            'message0': "ASCII",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 290,
            'tooltip': '',
            'helpUrl': 'https://docs.python.org/3/library/re.html#flags',
        },
        {'type': "DOTALL",
            'message0': "DOTALL",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 290,
            'tooltip': '',
            'helpUrl': 'https://docs.python.org/3/library/re.html#flags',
        },
        {'type': "IGNORECASE",
            'message0': "IGNORECASE",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 290,
            'tooltip': '',
            'helpUrl': 'https://docs.python.org/3/library/re.html#flags',
        },
        {'type': "LOCALE",
            'message0': "LOCALE",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 290,
            'tooltip': '',
            'helpUrl': 'https://docs.python.org/3/library/re.html#flags',
        },
        {'type': "MULTILINE",
            'message0': "MULTILINE",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 290,
            'tooltip': '',
            'helpUrl': 'https://docs.python.org/3/library/re.html#flags',
        },
        {'type': "UNICODE",
            'message0': "UNICODE",
            'previousStatement': 'Regular',
            'nextStatement': 'Regular',
            'colour': 290,
            'tooltip': '',
            'helpUrl': 'https://docs.python.org/3/library/re.html#flags',
        },
])
