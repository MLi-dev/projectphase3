const bossData = [
	{
		id: 1,
		name: "Giant Deflector Heavy",
		health: "5000",
		occurrences: "Empire Escalation Wave 6 and Bavarian Botbash Wave 7",
		image:
			"https://wiki.teamfortress.com/w/images/7/75/BLU_Giant_Deflector_Heavy.png",
		description:
			"Fires a minigun with the ability to destroy incoming projectiles (rockets, grenades) in its line of sight. The minigun also deals exceptionally devastating damage at close range.",
		strategy:
			"Use lots of Heavies to take this boss down. Upgrade miniguns to maximum capacity. In addition, projectiles are not entirely useless against this boss as they can be hit when not looking. As such, a class like Scout can draw their attention.",
	},
	{
		id: 2,
		name: "Tank",
		health: "30000",
		occurrences: "Hamlet Hostility Waves 3, 5, Bavarian Botbash Waves 2,4",
		image:
			"https://wiki.teamfortress.com/w/images/thumb/5/5a/Mvm_boss_tank.png/300px-Mvm_boss_tank.png",
		description:
			"The tank does no damage, but contains a high amount of health and cannot be slowed down. It carries a bomb that it will move all the way to the final point to deploy and cause a wave loss. What especially makes the tank a challenging boss is that it spawns accompanied by other bots, so it divides attention.",
		strategy:
			"Tanks are passive and as such leave a great opportunity to build off charges on banners, phlogistinator, etc. Select a Pyro to counter the tank and have the player aim upward diagonally at the front as more damage is done then.",
	},
	{
		id: 3,
		name: "Giant Blast Soldier",
		health: "58000",
		occurrences: "Metro Malice Wave 5",
		image: "https://wiki.teamfortress.com/w/images/9/93/Soldierbot_Blast.png",
		description:
			"Fires a rapid barrage of rockets that launch players into the air. The rockets do minimal damage but force lots of down time moving forward",
		strategy:
			"This boss always has to load its weapon full of rockets before firing, which is quite explicitly telegraphed and thus made easier to evade its attacks. Attack while it is reloading. Medic projectile shields are also recommended to block their attacks.",
	},
	{
		id: 4,
		name: "Sergeant Crits",
		health: "60000",
		occurrences: "Broken Parts Wave 8",
		image: "https://wiki.teamfortress.com/w/images/b/bf/BLU_Sergeant_Crits.png",
		description:
			"Fires a rapid barrage of critically boosted rockets that deal devastating damage.",
		strategy:
			"This boss always has to load its weapon full of rockets before firing, which is quite explicitly telegraphed and as such there is enough time to evade its shots. Attack while it is reloading. Would recommend also upgrading critical resistance and blast resistance.",
	},
	{
		id: 5,
		name: "Sir Nukesalot",
		health: "50000",
		occurrences: "Hamlet Hostility Wave 6",
		image:
			"https://wiki.teamfortress.com/w/images/0/0c/Demobot_Sir_Nukesalot.png",
		description:
			"This boss fires cannonballs that deals high knockback and has a massive explosion radius. The damage is enough to kill any class in one hit",
		strategy:
			"Sir Nukesalot has a slow reload speed and can only fire one grenade at a time and there is a brief period where it appears on the ground before it explodes, giving ample time to avoid the explosion. The grenades also have a very slow firing speed so maintaining distance with a sniper is advised.",
	},
	{
		id: 6,
		name: "Giant Bonk Scout",
		health: "1600",
		occurrences: "Empire Escalation Wave 5",
		image: "https://wiki.teamfortress.com/w/images/0/0f/Scoutbot_Bonk.png",
		description:
			"What this boss lacks in health, it makes up for it in its exceptional speed and ability to gain temporary invulnerability through the use of Bonk Atomic Punch",
		strategy:
			"This boss is unable to attack while under the effects of Bonk. As such, blocking its path whether it be via players or sentry gun is heavily advised. This strategy can especially be useful when the boss stops to drink.",
	},
	{
		id: 7,
		name: "Giant Pyro",
		health: "3000",
		occurrences: "Metro Malice Wave 2",
		image: "https://wiki.teamfortress.com/w/images/5/58/Giant_Pyro.png",
		description:
			"Giant Pyros are capable of piercing Medic shields and deal exceptionally high close range damage. In addition, they will leave afterburn on hit players. Finally, they can reflect rockets or grenades.",
		strategy:
			"Use classes like Heavy or Sniper who deal bullet damage, as Giant Pyros cannot reflect bullets. In addition, especially in favor of Sniper, Giant Pyros are slow and large targets as well as having stubby range.",
	},
	{
		id: 8,
		name: "Major Crits",
		health: "32000",
		occurrences: "Metro Malice Wave 4",
		image: "https://wiki.teamfortress.com/w/images/9/96/Soldierbot_Giant.png",
		description:
			"Major Crits is accompanied by a group of 4 Force-a-nature super Scouts with the bomb. In addition, he fires a slow moving wall of rockets that are critically boosted.",
		strategy:
			"Use a Medic's projectile shield to block the rockets. In addition, Major Crits moves very slowly and requires a lengthy reload before being able to fire again.",
	},
	{
		id: 9,
		name: "Giant Banner Soldiers-Concheror",
		health: "3800 HP",
		occurrences: "Bavarian Botbash Wave 2",
		image:
			"https://wiki.teamfortress.com/w/images/4/4e/Soldierbot_Extended_Conch.png",
		description:
			"This boss will spawn along with the Giant Buff Banner and Giant Battalion's Backup counterparts. This boss bestows its allies the special ability to regain health on damage dealt to players while also benefitting from the other two's banner effects. Also spawns along with hoards of smaller Soldier robots.",
		strategy:
			"Medic's shield or Heavy's destroy projectiles on hit upgrades are very effective to prevent health on hit. Also would recommend two players go Soldier and Engineer to maximize area denial.",
	},
	{
		id: 10,
		name: "Giant Banner Soldiers-Buff Banner",
		health: "3800 HP",
		occurrences: "Bavarian Botbash Wave 2",
		image:
			"https://wiki.teamfortress.com/w/images/8/84/Soldierbot_Extended_Buff.png",
		description:
			"This boss will spawn along with the Giant Buff Banner and Giant Battalion's Backup counterparts. This boss bestows its allies the special ability to do extra damage while also benefitting from the other two's banner effects. Also spawns along with hoards of smaller Soldier robots.",
		strategy:
			"Medic's shield or Heavy's destroy projectiles on hit upgrades are very effective to prevent health on hit. Also would recommend two players go Soldier and Engineer to maximize area denial.",
	},
	{
		id: 11,
		name: "Giant Banner Soldiers-Battalion's Backup",
		health: "3800 HP",
		occurrences: "Bavarian Botbash Wave 2",
		image:
			"https://wiki.teamfortress.com/w/images/c/ca/Soldierbot_Extended_Backup.png",
		description:
			"This boss will spawn along with the Giant Buff Banner and Giant Concheror counterparts. This boss bestows its allies the special ability to resist critical hits as well as reduce all incoming damage by 35% while also benefitting from the other two's banner effects. Also spawns along with hoards of smaller Soldier robots",
		strategy:
			"Medic's shield or Heavy's destroy projectiles on hit upgrades are very effective to prevent health on hit. Also would recommend that players make this boss in the trio the main priority to take out due to it providing damage resistance for the enemies.",
	},
];

export default bossData;
