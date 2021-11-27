import Character from './Character.js';

export default class Bowerman extends Character {
	constructor(level, type = 'swordsman') {
		super(level, type);
		this.attack = 40;
		this.defence = 10;
		this.stepRadius = 4;
		this.attackRadius = 1;
	}
}