const kanaData = {
    basic:
    {
        hiragana: [["あ", "a"],
        ["い", "i"],
        ["う", "u"],
        ["え", "e"],
        ["お", "o"],
        ["か", "ka"],
        ["き", "ki"],
        ["く", "ku"],
        ["け", "ke"],
        ["こ", "ko"],
        ["さ", "sa"],
        ["し", "shi"],
        ["す", "su"],
        ["せ", "se"],
        ["そ", "so"],
        ["た", "ta"],
        ["ち", "chi"],
        ["つ", "tsu"],
        ["て", "te"],
        ["と", "to"],
        ["な", "na"],
        ["に", "ni"],
        ["ぬ", "nu"],
        ["ね", "ne"],
        ["の", "no"],
        ["は", "ha/wa"],
        ["ひ", "hi"],
        ["ふ", "fu"],
        ["へ", "he"],
        ["ほ", "ho"],
        ["ま", "ma"],
        ["み", "mi"],
        ["む", "mu"],
        ["め", "me"],
        ["も", "mo"],
        ["や", "ya"],
        ["ゆ", "yu"],
        ["よ", "yo"],
        ["ら", "ra"],
        ["り", "ri"],
        ["る", "ru"],
        ["れ", "re"],
        ["ろ", "ro"],
        ["わ", "wa"],
        ["を", "wo"],
        ["ん", "n"]],
        katakana: [["ア", "a"],
        ["イ", "i"],
        ["ウ", "u"],
        ["エ", "e"],
        ["オ", "o"],
        ["カ", "ka"],
        ["キ", "ki"],
        ["ク", "ku"],
        ["ケ", "ke"],
        ["コ", "ko"],
        ["サ", "sa"],
        ["シ", "shi"],
        ["ス", "su"],
        ["セ", "se"],
        ["ソ", "so"],
        ["タ", "ta"],
        ["チ", "chi"],
        ["ツ", "tsu"],
        ["テ", "te"],
        ["ト", "to"],
        ["ナ", "na"],
        ["ニ", "ni"],
        ["ヌ", "nu"],
        ["ネ", "ne"],
        ["ノ", "no"],
        ["ハ", "ha"],
        ["ヒ", "hi"],
        ["フ", "fu"],
        ["ヘ", "he"],
        ["ホ", "ho"],
        ["マ", "ma"],
        ["ミ", "mi"],
        ["ム", "mu"],
        ["メ", "me"],
        ["モ", "mo"],
        ["ヤ", "ya"],
        ["ユ", "yu"],
        ["ヨ", "yo"],
        ["ラ", "ra"],
        ["リ", "ri"],
        ["ル", "ru"],
        ["レ", "re"],
        ["ロ", "ro"],
        ["ワ", "wa"],
        ["ヲ", "wo"],
        ["ン", "n"]]
    },
    dakuon:
    {
        hiragana: [["が", "ga"],
        ["ぎ", "gi"],
        ["ぐ", "gu"],
        ["げ", "ge"],
        ["ご", "go"],
        ["ざ", "za"],
        ["じ", "ji/zi"],
        ["ず", "zu"],
        ["ぜ", "ze"],
        ["ぞ", "zo"],
        ["だ", "da"],
        ["ぢ", "di/ji"],
        ["づ", "du/zu"],
        ["で", "de"],
        ["ど", "do"],
        ["ば", "ba"],
        ["び", "bi"],
        ["ぶ", "bu"],
        ["べ", "be"],
        ["ぼ", "bo"]],
        katakana: [["ガ", "ga"],
        ["ギ", "gi"],
        ["グ", "gu"],
        ["ゲ", "ge"],
        ["ゴ", "go"],
        ["ザ", "za"],
        ["ジ", "ji/zi"],
        ["ズ", "zu"],
        ["ゼ", "ze"],
        ["ゾ", "zo"],
        ["ダ", "da"],
        ["ヂ", "di/ji"],
        ["ヅ", "du/zu"],
        ["デ", "de"],
        ["ド", "do"],
        ["バ", "ba"],
        ["ビ", "bi"],
        ["ブ", "bu"],
        ["ベ", "be"],
        ["ボ", "bo"]]
    },
    handakuon:
    {
        hiragana: [["ぱ", "pa"],
        ["ぴ", "pi"],
        ["ぷ", "pu"],
        ["ぺ", "pe"],
        ["ぽ", "po"]],
        katakana: [["パ", "pa"],
        ["ピ", "pi"],
        ["プ", "pu"],
        ["ペ", "pe"],
        ["ポ", "po"]]
    },
    youon:
    {
        hiragana: [["きゃ", "kya"],
        ["きゅ", "kyu"],
        ["きょ", "kyo"],
        ["しゃ", "sha"],
        ["しゅ", "shu"],
        ["しょ", "sho"],
        ["ちゃ", "cha"],
        ["ちゅ", "chu"],
        ["ちょ", "cho"],
        ["にゃ", "nya"],
        ["にゅ", "nyu"],
        ["にょ", "nyo"],
        ["ひゃ", "hya"],
        ["ひゅ", "hyu"],
        ["ひょ", "hyo"],
        ["みゃ", "mya"],
        ["みゅ", "myu"],
        ["みょ", "myo"],
        ["りゃ", "rya"],
        ["りゅ", "ryu"],
        ["りょ", "ryo"],
        ["ぎゃ", "gya"],
        ["ぎゅ", "gyu"],
        ["ぎょ", "gyo"],
        ["じゃ", "ja"],
        ["じゅ", "ju"],
        ["じょ", "jo"],
        ["ぢゃ", "dya"],
        ["ぢゅ", "dyu"],
        ["ぢょ", "dyo"],
        ["びゃ", "bya"],
        ["びゅ", "byu"],
        ["びょ", "byo"],
        ["ぴゃ", "pya"],
        ["ぴゅ", "pyu"],
        ["ぴょ", "pyo"]],
        katakana: [["キャ", "kya"],
        ["キュ", "kyu"],
        ["キョ", "kyo"],
        ["シャ", "sha"],
        ["シュ", "shu"],
        ["ショ", "sho"],
        ["チャ", "cha"],
        ["チュ", "chu"],
        ["チョ", "cho"],
        ["ニャ", "nya"],
        ["ニュ", "nyu"],
        ["ニョ", "nyo"],
        ["ヒャ", "hya"],
        ["ヒュ", "hyu"],
        ["ヒョ", "hyo"],
        ["ミャ", "mya"],
        ["ミュ", "myu"],
        ["ミョ", "myo"],
        ["リャ", "rya"],
        ["リュ", "ryu"],
        ["リョ", "ryo"],
        ["ギャ", "gya"],
        ["ギュ", "gyu"],
        ["ギョ", "gyo"],
        ["ジャ", "ja"],
        ["ジュ", "ju"],
        ["ジョ", "jo"],
        ["ヂャ", "dya"],
        ["ヂュ", "dyu"],
        ["ヂョ", "dyo"],
        ["ビャ", "bya"],
        ["ビュ", "byu"],
        ["ビョ", "byo"],
        ["ピャ", "pya"],
        ["ピュ", "pyu"],
        ["ピョ", "pyo"]]
    }
};

const chartData = {
    basic: [["", "a", "i", "u", "e", "o"],
    ["", "あ/ア", "い/イ", "う/ウ", "え/エ", "お/オ"],
    ["k", "か/カ", "き/キ", "く/ク", "け/ケ", "こ/コ"],
    ["s", "さ/サ", "し/シ", "す/ス", "せ/セ", "そ/ソ"],
    ["t", "た/タ", "ち/チ", "つ/ツ", "て/テ", "と/ト"],
    ["n", "な/ナ", "に/ニ", "ぬ/ヌ", "ね/ネ", "の/ノ"],
    ["h", "は/ハ", "ひ/ヒ", "ふ/フ", "へ/ヘ", "ほ/ホ"],
    ["m", "ま/マ", "み/ミ", "む/ム", "め/メ", "も/モ"],
    ["y", "や/ヤ", "", "ゆ/ユ", "", "よ/ヨ"],
    ["r", "ら/ラ", "り/リ", "る/ル", "れ/レ", "ろ/ロ"],
    ["w", "わ/ワ", "", "", "", "を/ヲ (wo/o)"],
    ["", "", "", "", "", "ん/ン"]],
    dakuon: [["", "a", "i", "u", "e", "o"],
    ["g", "が/ガ", "ぎ/ギ", "ぐ/グ", "げ/ゲ", "ご/ゴ"],
    ["z", "ざ/ザ", "じ/ジ (ji/zi)", "ず/ズ", "ぜ/ゼ", "ぞ/ゾ"],
    ["d", "だ/ダ", "ぢ/ヂ (di/ji)", "づ/ヅ (du/zu)", "で/デ", "ど/ド"],
    ["b", "ば/バ", "び/ビ", "ぶ/ブ", "べ/ベ", "ぼ/ボ"]],
    handakuon: [["", "a", "i", "u", "e", "o"],
    ["p", "ぱ/パ", "ぴ/ピ", "ぷ/プ", "ぺ/ペ", "ぽ/ポ"]],
    // Youon (拗音)
    youon: [["", "ya", "yu", "yo"],
    ["k", "きゃ/キャ", "きゅ/キュ", "きょ/キョ"],
    ["sh", "しゃ/シャ", "しゅ/シュ", "しょ/ショ"],
    ["ch", "ちゃ/チャ", "ちゅ/チュ", "ちょ/チョ"],
    ["n", "にゃ/ニャ", "にゅ/ニュ", "にょ/ニョ"],
    ["h", "ひゃ/ヒャ", "ひゅ/ヒュ", "ひょ/ヒョ"],
    ["m", "みゃ/ミャ", "みゅ/ミュ", "みょ/ミョ"],
    ["r", "りゃ/リャ", "りゅ/リュ", "りょ/リョ"],
    ["g", "ぎゃ/ギャ", "ぎゅ/ギュ", "ぎょ/ギョ"],
    ["j", "じゃ/ジャ", "じゅ/ジュ", "じょ/ジョ"],
    ["dy", "ぢゃ/ヂャ", "ぢゅ/ヂュ", "ぢょ/ヂョ"],
    ["b", "びゃ/ビャ", "びゅ/ビュ", "びょ/ビョ"],
    ["p", "ぴゃ/ピャ", "ぴゅ/ピュ", "ぴょ/ピョ"]]
};


const dakuonMapping = {
    "description": "Japanese kana: clear (seion) → dakuon (voiced with dakuten) and handakuon (p-sounds with handakuten)",
    "dakuten_mappings": [
        {
            "group": "か行 → が行",
            "items": [
                { "clear": "か", "voiced": "が", "romaji": "ka → ga" },
                { "clear": "き", "voiced": "ぎ", "romaji": "ki → gi" },
                { "clear": "く", "voiced": "ぐ", "romaji": "ku → gu" },
                { "clear": "け", "voiced": "げ", "romaji": "ke → ge" },
                { "clear": "こ", "voiced": "ご", "romaji": "ko → go" }
            ]
        },
        {
            "group": "さ行 → ざ行",
            "items": [
                { "clear": "さ", "voiced": "ざ", "romaji": "sa → za" },
                { "clear": "し", "voiced": "じ", "romaji": "shi → ji" },
                { "clear": "す", "voiced": "ず", "romaji": "su → zu" },
                { "clear": "せ", "voiced": "ぜ", "romaji": "se → ze" },
                { "clear": "そ", "voiced": "ぞ", "romaji": "so → zo" }
            ]
        },
        {
            "group": "た行 → だ行",
            "items": [
                { "clear": "た", "voiced": "だ", "romaji": "ta → da" },
                { "clear": "ち", "voiced": "ぢ", "romaji": "chi → ji (rare in modern use)" },
                { "clear": "つ", "voiced": "づ", "romaji": "tsu → zu (rare in modern use)" },
                { "clear": "て", "voiced": "で", "romaji": "te → de" },
                { "clear": "と", "voiced": "ど", "romaji": "to → do" }
            ]
        },
        {
            "group": "は行 → ば行 (dakuten)",
            "items": [
                { "clear": "は", "voiced": "ば", "romaji": "ha → ba" },
                { "clear": "ひ", "voiced": "び", "romaji": "hi → bi" },
                { "clear": "ふ", "voiced": "ぶ", "romaji": "fu → bu" },
                { "clear": "へ", "voiced": "べ", "romaji": "he → be" },
                { "clear": "ほ", "voiced": "ぼ", "romaji": "ho → bo" }
            ]
        }
    ],
    dakuten_mappings_katakana:[
        {
            "group": "カ行 → ガ行",
            "items": [
                { "clear": "カ", "voiced": "ガ", "romaji": "ka → ga" },
                { "clear": "キ", "voiced": "ギ", "romaji": "ki → gi" },
                { "clear": "ク", "voiced": "グ", "romaji": "ku → gu" },
                { "clear": "ケ", "voiced": "ゲ", "romaji": "ke → ge" },
                { "clear": "コ", "voiced": "ゴ", "romaji": "ko → go" }
            ]
        },
        {
            "group": "サ行 → ザ行",
            "items": [
                { "clear": "サ", "voiced": "ザ", "romaji": "sa → za" },
                { "clear": "シ", "voiced": "ジ", "romaji": "shi → ji" },
                { "clear": "ス", "voiced": "ズ", "romaji": "su → zu" },
                { "clear": "セ", "voiced": "ゼ", "romaji": "se → ze" },
                { "clear": "ソ", "voiced": "ゾ", "romaji": "so → zo" }
            ]
        },
        {
            "group": "タ行 → ダ行",
            "items": [
                { "clear": "タ", "voiced": "ダ", "romaji": "ta → da" },
                { "clear": "チ", "voiced": "ヂ", "romaji": "chi → ji (rare in modern use)" },
                { "clear": "ツ", "voiced": "ヅ", "romaji": "tsu → zu (rare in modern use)" },
                { "clear": "テ", "voiced": "デ", "romaji": "te → de" },
                { "clear": "ト", "voiced": "ド", "romaji": "to → do" }
            ]
        },
        {
            "group": "ハ行 → バ行 (dakuten)",
            "items": [
                { "clear": "ハ", "voiced": "バ", "romaji": "ha → ba" },
                { "clear": "ヒ", "voiced": "ビ", "romaji": "hi → bi" },
                { "clear": "フ", "voiced": "ブ", "romaji": "fu → bu" },
                { "clear": "ヘ", "voiced": "ベ", "romaji": "he → be" },
                { "clear": "ホ", "voiced": "ボ", "romaji": "ho → bo" }
            ]
        }
    ],

    "handakuten_mappings": {
        "group": "は行 → ぱ行 (handakuten)",
        "items": [
            { "clear": "は", "voiced": "ぱ", "romaji": "ha → pa" },
            { "clear": "ひ", "voiced": "ぴ", "romaji": "hi → pi" },
            { "clear": "ふ", "voiced": "ぷ", "romaji": "fu → pu" },
            { "clear": "へ", "voiced": "ぺ", "romaji": "he → pe" },
            { "clear": "ほ", "voiced": "ぽ", "romaji": "ho → po" }
        ]
    },
    handakuten_mappings_katakana : {
        "group": "ハ行 → パ行 (handakuten)",
        "items": [
            { "clear": "ハ", "voiced": "パ", "romaji": "ha → pa" },
            { "clear": "ヒ", "voiced": "ピ", "romaji": "hi → pi" },
            { "clear": "フ", "voiced": "プ", "romaji": "fu → pu" },
            { "clear": "ヘ", "voiced": "ペ", "romaji": "he → pe" },
            { "clear": "ホ", "voiced": "ポ", "romaji": "ho → po" }
        ]
    },
    "katakana_equivalents": true,
    "notes": [
        "The exact same dakuten/handakuten rules apply to katakana (e.g. カ → ガ, サ → ザ, ハ → バ / パ).",
        "In modern standard Japanese, ぢ and づ are very rare and almost always written as じ and ず respectively.",
        "Yōon (small ゃ/ゅ/ょ) combinations follow the same voicing: e.g. きゃ → ぎゃ, しゃ → じゃ, ひゃ → びゃ / ぴゃ."
    ]
}

export { kanaData, chartData, dakuonMapping }

// ref: https://www.japanese50sounds.com/en/chart/