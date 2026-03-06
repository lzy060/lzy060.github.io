const Timer = {
    isStarted: false,

    getHours: () => {

        return Number(localStorage.getItem('LEARNING-HOURS') || '0')

    },

    tryStart: () => {
        if (Timer.isStarted) {
            return;
        }

        Timer.isStarted = true
        const hourRate = 0.1;
        const key = 'LEARNING-HOURS';
        setInterval(() => {
            const h = Number(localStorage.getItem(key) || '0');
            localStorage.setItem(key, `${h + hourRate}`);
        }, 3600 * 1000 * hourRate)
    }
}

export default Timer
