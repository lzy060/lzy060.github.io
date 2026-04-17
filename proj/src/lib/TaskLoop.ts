type TCallBack = () => void

const TaskLoop = {
    isStarted: false,
    tasks: [] as string[],
    curTask: '',
    addTask: (str: string) => {
        TaskLoop.tasks.push(str);
        TaskLoop.listeners.forEach((fn) => {
            fn()
        })
    },
    tryStart: () => {
        if (TaskLoop.isStarted) {
            return;
        }
        TaskLoop.isStarted = true;
        TaskLoop.loop();
    },
    listeners: [] as TCallBack[],
    addOnChangedListener: (c: TCallBack) => {
        TaskLoop.listeners.push(c);
    },
    removeOnChangedListener: (c: TCallBack) => {
        TaskLoop.listeners = TaskLoop.listeners.filter((it: TCallBack) => it !== c);
    },
    loop: async () => {
        TaskLoop.listeners.forEach((fn: TCallBack) => {
            fn()
        })
        console.log('tasks', TaskLoop.tasks)
        const sentence = TaskLoop.tasks.shift();
        if (!sentence) {
            setTimeout(() => {
                TaskLoop.loop();
            }, 1000)
            return;
        }

        if (!('speechSynthesis' in window)) {
            alert("Your browser does not support text-to-speech.");
            return;
        }

        const synth = window.speechSynthesis;
        synth.cancel(); // stop anything currently playing

        // Wait for voices if not loaded yet (important!)
        let voices = synth.getVoices();
        if (voices.length === 0) {
            await new Promise(resolve => {
                synth.onvoiceschanged = () => {
                    voices = synth.getVoices();
                    resolve(true);
                };
            });
        }

         let japaneseVoice = voices.find(v => v.name === "O-Ren")
         || voices.find(v => v.name === "Hattori")
         || voices.find(v => v.name === "Kyoko")
         || voices.find(v => v.lang === "ja-JP" || v.lang === "ja")

        // Fallback: any ja* voice
        if (!japaneseVoice) {
            japaneseVoice = voices.find(v => v.lang.startsWith("ja"));
        }

        if (!japaneseVoice) {
            alert("No Japanese voice found on this device/browser.\n\nTry Chrome/Edge or install Japanese TTS voices in system settings.");
            return;
        }


        const speakOnce = (str: string) => {
            const utterance = new SpeechSynthesisUtterance(str);

            utterance.voice = japaneseVoice;
            utterance.lang = "ja-JP";           // helps even if voice is set
            utterance.rate = 1.0;               // 0.8–1.2 usually sounds natural for Japanese
            utterance.pitch = 1.0;
            utterance.volume = 0.95;
            utterance.onend = () => {
                TaskLoop.curTask = '';
                setTimeout(() => {
                    TaskLoop.loop();
                }, 600)
            };

            utterance.onerror = (event: any) => {
                alert(`Speech error: ${event.error}`);
            };
            synth.speak(utterance);
            console.log('speech: ', str)
        }
        TaskLoop.curTask = sentence;
        TaskLoop.listeners.forEach((fn) => {
            fn()
        })
        speakOnce(sentence)
    }
}

export default TaskLoop
