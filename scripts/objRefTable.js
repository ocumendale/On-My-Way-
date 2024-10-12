const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Behaviors.Bullet,
		C3.Behaviors.Timer,
		C3.Behaviors.Pin,
		C3.Behaviors.Flash,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Behaviors.shadowcaster,
		C3.Behaviors.MoveTo,
		C3.Behaviors.LOS,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Behaviors.Tween,
		C3.Plugins.Audio,
		C3.Plugins.video,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Acts.SetLayoutScale,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Keyboard.Cnds.OnAnyKeyReleased,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.Behaviors.MoveTo.Acts.Stop,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Behaviors.MoveTo.Cnds.IsMoving,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.scrollto.Acts.Shake,
		C3.Behaviors.MoveTo.Acts.SetEnabled,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Exps.LayerNumber,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnRelease,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.System.Exps.viewportmidx,
		C3.Plugins.System.Exps.viewportmidy,
		C3.Plugins.Audio.Acts.FadeVolume,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Exps.viewportleft,
		C3.Plugins.System.Exps.viewporttop,
		C3.Plugins.System.Exps.viewportbottom,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Flash.Cnds.IsFlashing,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Browser.Acts.Close
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{health: 0},
	{MaxHealth: 0},
	{DashCooldown: 0},
	{"8Direction": 0},
	{ScrollTo: 0},
	{Bullet: 0},
	{Timer: 0},
	{movement: 0},
	{Direction: 0},
	{Cooldown: 0},
	{Pin: 0},
	{Flash: 0},
	{KaeL: 0},
	{Keyboard: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Solid: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{ShadowCaster: 0},
	{TiledBackground3: 0},
	{Dragon: 0},
	{dungeon: 0},
	{Dungeon_TP: 0},
	{TiledBackground4: 0},
	{Sprite14: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Sprite18: 0},
	{Sprite19: 0},
	{Sprite: 0},
	{Sprite8: 0},
	{Sprite20: 0},
	{Sprite21: 0},
	{blocking: 0},
	{MoveTo: 0},
	{LineOfSight: 0},
	{slime: 0},
	{Himmel: 0},
	{Text: 0},
	{TH_exit: 0},
	{himmel_overlap: 0},
	{TiledBackground5: 0},
	{Mouse: 0},
	{slash: 0},
	{Sprite11: 0},
	{TiledBackground6: 0},
	{TiledBackground7: 0},
	{hahaha: 0},
	{MWEHE: 0},
	{Tween: 0},
	{fade: 0},
	{heartHud: 0},
	{Sprite9: 0},
	{Message: 0},
	{Audio: 0},
	{Restart: 0},
	{SpawnPoint: 0},
	{NPC: 0},
	{Sprite10: 0},
	{Boss: 0},
	{Arena: 0},
	{normalmusic: 0},
	{Dash: 0},
	{shadow: 0},
	{DarkMode: 0},
	{light: 0},
	{TiledBackground2: 0},
	{Stonewall: 0},
	{TiledBackground8: 0},
	{sword: 0},
	{Sprite12: 0},
	{Ending: 0},
	{Sprite13: 0},
	{Video: 0},
	{Browser: 0},
	{Text2: 0},
	{darkness: 0},
	{GameStart: 0},
	{Text3: 0},
	{Sprite7: 0},
	{exit: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	movement: class extends self.ISpriteInstance {},
	KaeL: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Dragon: class extends self.ISpriteInstance {},
	dungeon: class extends self.ISpriteInstance {},
	Dungeon_TP: class extends self.ISpriteInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	blocking: class extends self.ISpriteInstance {},
	slime: class extends self.ISpriteInstance {},
	Himmel: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	TH_exit: class extends self.ISpriteInstance {},
	himmel_overlap: class extends self.ISpriteInstance {},
	TiledBackground5: class extends self.ITiledBackgroundInstance {},
	Mouse: class extends self.IInstance {},
	slash: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	TiledBackground6: class extends self.ITiledBackgroundInstance {},
	TiledBackground7: class extends self.ITiledBackgroundInstance {},
	hahaha: class extends self.ISpriteInstance {},
	MWEHE: class extends self.ISpriteInstance {},
	fade: class extends self.ISpriteInstance {},
	heartHud: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Message: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	Restart: class extends self.ITextInstance {},
	SpawnPoint: class extends self.ISpriteInstance {},
	NPC: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Boss: class extends self.ISpriteInstance {},
	Arena: class extends self.ISpriteInstance {},
	normalmusic: class extends self.ISpriteInstance {},
	Dash: class extends self.ISpriteInstance {},
	shadow: class extends self.ISpriteInstance {},
	DarkMode: class extends self.ISpriteInstance {},
	light: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Stonewall: class extends self.ITiledBackgroundInstance {},
	TiledBackground8: class extends self.ITiledBackgroundInstance {},
	sword: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Ending: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Video: class extends self.IWorldInstance {},
	Browser: class extends self.IInstance {},
	Text2: class extends self.ITextInstance {},
	darkness: class extends self.ISpriteInstance {},
	GameStart: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	exit: class extends self.ITextInstance {}
}