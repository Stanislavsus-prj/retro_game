import Character from './Character.js';

export default class Magician extends Character {
	constructor(level, type = 'magician') {
		super(level, type);
		this.attack = 10;
		this.defence = 40;
		this.stepRadius = 1;
		this.attackRadius = 4;
	}
}