import Character from './Character.js';

export default class Daemon extends Character {
	constructor(level, type = 'daemon') {
		super(level, type);
		this.attack = 10;
		this.defence = 40;
		this.stepRadius = 1;
		this.attackRadius = 4;
	}
}