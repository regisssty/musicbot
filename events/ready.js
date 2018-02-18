const { Event } = require('klasa');

module.exports = class extends Event {

    run() {
        return this.client.user.setActivity('MusicBot, help', { type: 2 })
            .catch(err => this.client.emit('log', err, 'error'));
    }

};
