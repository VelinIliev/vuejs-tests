function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            battleLog: []
        }
    },
    computed: {
        monsterBar() {
            if (this.monsterHealth < 0) {
                return {width: 0 + '%'}
            } else {
                return {width: this.monsterHealth + '%'}
            }
        },
        playerBar() {
            if (this.playerHealth < 0) {
                return {width: 0 + '%'}
            } else {
                return {width: this.playerHealth + '%'}
            }
        },
        mayUseSpecialAttack() {
            return (this.currentRound % 3 !== 0 || this.winner)
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
                // this.battleLog.push(`Winner: monster`)
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
                // this.battleLog.push(`It's a draw.`)
            } else if (value <= 0) {
                this.winner = 'player'
                // this.battleLog.push(`Winner: player`)
            }
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const randomValue = getRandomValue(5, 12);
            this.monsterHealth -= randomValue;
            this.addLogMessage('player', 'attack', randomValue)
            this.attackPlayer()
        },
        attackPlayer() {
            const randomValue = getRandomValue(8, 15);
            this.playerHealth -= randomValue;
            this.addLogMessage('monster', 'attack', randomValue)
        },
        specialAttackMonster() {
            this.currentRound++;
            const randomValue = getRandomValue(10, 25);
            this.monsterHealth -= randomValue;
            this.addLogMessage('player', 'special-attack', randomValue)
            this.attackPlayer()
        },
        healPlayer() {
            this.currentRound++;
            const randomValue = getRandomValue(8, 20);
            if (this.playerHealth + randomValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += randomValue
            }
            this.addLogMessage('player', 'heal', randomValue)
            this.attackPlayer()
        },
        startNewGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.battleLog = []
        },
        surrender() {
            this.playerHealth = -1;
        },
        addLogMessage(who, what, value) {
            this.battleLog.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
})

app.mount('#game')