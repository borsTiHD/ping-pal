package configs

type Config struct {
	App  AppConfig  `json:"app"`
	User UserConfig `json:"user"`
}

type AppConfig struct {
	ShowedWelcome bool `json:"showedWelcome"`
}

type UserConfig struct {
	AutoStart         bool `json:"autoStart"`
	PushNotifications bool `json:"pushNotifications"`
}
